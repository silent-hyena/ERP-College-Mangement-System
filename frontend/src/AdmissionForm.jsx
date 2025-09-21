import { useForm } from "react-hook-form";
import { useState } from "react";
import AutoDismissAlert from "./AutoDismissedAlert";


function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   formData(data)

  // };

  // list of common branches
  const branches = [
    "Computer Science And Engineering",
    "Data Science",
    "Artificial Intelligence",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Mathematics & Computing",

  ];

  // list of Indian states (simplified, you can extend)
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Chandigarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)

  async function handleFormSubmit(data) {
    // console.log(data);
    const formUrl = "/admission/formsubmit"
    const response = await fetch(formUrl, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" }, // send JSON
      body: JSON.stringify(data), // form fields -> JSON string
    });

    const Data = await response.json();

    setAlertMessage(Data.message)
    setAlert(true)


  }

  return (
    <>
    {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />}
    <div className="light-dark container-fluid mt-5 ps-5 w-100">
      <h2 className="mb-4 text-center">Admission Form</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 border bg-light rounded shadow w-100">

        {/* Application Number */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Application Number:</label>
          <div className="col-sm-9">
            <input
              type="number"
              className={`form-control ${errors.applicationNumber ? "is-invalid" : ""}`}
              placeholder="Enter JEE Mains Application Number"
              {...register("applicationNumber", { required: "Application Number is required" })}
            />
            {errors.applicationNumber && (
              <div className="invalid-feedback">{errors.applicationNumber.message}</div>
            )}
          </div>
        </div>

        {/* Candidate Name */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Candidate Name:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
        </div>

        {/* Father Name */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Father's Name:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className={`form-control ${errors.fatherName ? "is-invalid" : ""}`}
              placeholder="Enter Father's Name"
              {...register("fatherName", { required: "Father Name is required" })}
            />
            {errors.fatherName && <div className="invalid-feedback">{errors.fatherName.message}</div>}
          </div>
        </div>

        {/* Mother Name */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Mother's Name:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className={`form-control ${errors.motherName ? "is-invalid" : ""}`}
              placeholder="Enter Mother's Name"
              {...register("motherName", { required: "Mother Name is required" })}
            />
            {errors.motherName && <div className="invalid-feedback">{errors.motherName.message}</div>}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Date of Birth:</label>
          <div className="col-sm-9">
            <input
              type="date"
              className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && <div className="invalid-feedback">{errors.dob.message}</div>}
          </div>
        </div>

        {/* Gender */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Gender:</label>
          <div className="col-sm-9 d-flex align-items-center gap-3">
            <div className="form-check">
              <input type="radio" value="Male" className="form-check-input" {...register("gender", { required: "Gender is required" })} />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input type="radio" value="Female" className="form-check-input" {...register("gender")} />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check">
              <input type="radio" value="Transgender" className="form-check-input" {...register("gender")} />
              <label className="form-check-label">Transgender</label>
            </div>
            {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
          </div>
        </div>

        {/* Category */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Category:</label>
          <div className="col-sm-9">
            <select
              className={`form-select ${errors.category ? "is-invalid" : ""}`}
              {...register("category", { required: "Category is required" })}
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="EWS">EWS</option>
              <option value="SC/ST">SC/ST</option>
              <option value="OBC">OBC</option>
              <option value="Defence">Defence</option>
            </select>
            {errors.category && <div className="invalid-feedback">{errors.category.message}</div>}
          </div>
        </div>

        {/* PwD */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">PwD (Disability):</label>
          <div className="col-sm-9">
            <select
              className={`form-select ${errors.pwd ? "is-invalid" : ""}`}
              {...register("pwd", { required: "This field is required" })}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.pwd && <div className="invalid-feedback">{errors.pwd.message}</div>}
          </div>
        </div>

        {/* All India Rank */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">All India Rank:</label>
          <div className="col-sm-9">
            <input
              type="number"
              min="1"
              className={`form-control ${errors.allIndiaRank ? "is-invalid" : ""}`}
              placeholder="Enter All India Rank"
              {...register("allIndiaRank", {
                required: "All India Rank is required",
                min: { value: 1, message: "Rank cannot be negative or zero" },
              })}
            />
            {errors.allIndiaRank && <div className="invalid-feedback">{errors.allIndiaRank.message}</div>}
          </div>
        </div>

        {/* Category Rank */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Category Rank:</label>
          <div className="col-sm-9">
            <input
              type="number"
              min="1"
              className={`form-control ${errors.categoryRank ? "is-invalid" : ""}`}
              placeholder="Enter Category Rank"
              {...register("categoryRank", {
                required: "Category Rank is required",
                min: { value: 1, message: "Rank cannot be negative or zero" },
              })}
            />
            {errors.categoryRank && <div className="invalid-feedback">{errors.categoryRank.message}</div>}
          </div>
        </div>

        {/* Branch Preferences (five separate) */}
        <p>Select five branch according to your prefernce.</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <div className="row mb-3" key={num}>
            <label className="col-sm-3 col-form-label">Preference {num}:</label>
            <div className="col-sm-9">
              <select
                className={`form-select ${errors[`preference${num}`] ? "is-invalid" : ""}`}
                {...register(`preference${num}`, { required: `Preference ${num} is required` })}
              >
                <option value="">Select Branch</option>
                {branches.map((branch, idx) => (
                  <option key={idx} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
              {errors[`preference${num}`] && (
                <div className="invalid-feedback">{errors[`preference${num}`].message}</div>
              )}
            </div>
          </div>
        ))}

        {/* State of Eligibility */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">State of Eligibility:</label>
          <div className="col-sm-9">
            <select
              className={`form-select ${errors.state ? "is-invalid" : ""}`}
              {...register("state", { required: "State of Eligibility is required" })}
            >
              <option value="">Select State</option>
              {indianStates.map((state, idx) => (
                <option key={idx} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
          </div>
        </div>

        {/* Email */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
        </div>


        {/* Mobile number */}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Mobile Number:</label>
          <div className="col-sm-9">
            <input
              type="number"
              className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
              placeholder="Mobile Number"
              {...register("mobileNumber", {
                required: "Mobile Number is required"

              })}
            />
            {errors.mobileNumber && (
              <div className="invalid-feedback">{errors.mobileNumber.message}</div>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="row">
          <div className="col-sm-12 ">
            <button type="submit" className="btn btn-primary w-25">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default FormLogin;
