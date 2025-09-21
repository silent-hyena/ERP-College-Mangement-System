import { useState } from "react";
import { useForm } from "react-hook-form";
import AutoDismissAlert from "./AutoDismissedAlert";

export default function ApplicationFormCheck() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);
  const [alert,setAlert] = useState(false)
  const [alertMessage,setAlertMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/admission/checkstatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationNumber: data.applicationNumber }),
      });

      const result = await res.json();

      if (result.message === "success") {
        setFormData(result.formdata); // assuming backend sends {message: "success", formdata: {...}}
      } else {
        // setFormData(null); // do nothing
        setAlertMessage(result.alert)
        setAlert(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setFormData(null);
    }
  };

  return (<>
    {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />}
    <div className="container mt-5">
      {/* Form Section */}
      <div className="card shadow p-4 mb-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h4 className="text-center mb-3 text-primary">Check Your Application Status</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Application Number */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Application Number</label>
            <input
              type="text"
              {...register("applicationNumber", { required: true })}
              className={`form-control ${errors.applicationNumber ? "is-invalid" : ""}`}
              placeholder="Enter your application number"
            />
            {errors.applicationNumber && (
              <div className="invalid-feedback">Application number is required</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      {/* Table Section */}
      {formData && (
        <div className="card shadow p-4">
          <h5 className="mb-3 text-success">Form Data</h5>
          <table className="table table-bordered table-striped">
            <tbody>
              {Object.entries(formData).map(([key, value]) => (
                <tr key={key}>
                  <th className="text-capitalize">{key.replace(/_/g, " ")}</th>
                  <td>{value?.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
}
