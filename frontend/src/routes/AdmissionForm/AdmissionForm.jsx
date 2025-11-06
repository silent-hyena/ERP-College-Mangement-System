import { useForm } from "react-hook-form";
import { useState } from "react";
import AutoDismissAlert from "../../AutoDismissedAlert";
import "./admissionForm.css";
import TopProgressBar from "../../components/ProgessBar/ProgressBar";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  async function handleFormSubmit(data) {
    setLoadingState(true);
    const response = await fetch("/admission/formsubmit", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const Data = await response.json();
    setLoadingState(false);
    setAlertMessage(Data.message);
    setAlert(true);
  }

  return (
    <>
      <TopProgressBar loading={loadingState} />
      {alert && (
        <AutoDismissAlert
          message={alertMessage}
          onClose={() => setAlert(false)}
        />
      )}

     

      <div className="admission-form-container mt-0">
        <h2 className="mb-4 text-center">Admission Form</h2>


        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="p-5 m-5  border  rounded shadow w-100"
        >
          {/* Application Number */}
          <p style={{ "margin-left": "0px", "color": "gray", "fontWeight": "600" }}> <span style={{ color: "red" }}>* </span>Indicates required fields.</p>
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Application Number:</label>
            <input
              type="number"
              className={`form-control ${errors.applicationNumber ? "is-invalid" : ""
                } w-75`}
              // placeholder="Enter JEE Mains Application Number"
              {...register("applicationNumber", {
                required: "Application Number is required",
              })}
            />
            {errors.applicationNumber && (
              <div className="invalid-feedback">
                {errors.applicationNumber.message}
              </div>
            )}
          </div>

          {/* Candidate Name */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Candidate Name:</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""} w-75`}
              // placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* Father Name */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Father's Name:</label>
            <input
              type="text"
              className={`form-control ${errors.fatherName ? "is-invalid" : ""
                } w-75`}
              // placeholder="Enter Father's Name"
              {...register("fatherName", { required: "Father Name is required" })}
            />
            {errors.fatherName && (
              <div className="invalid-feedback">
                {errors.fatherName.message}
              </div>
            )}
          </div>

          {/* Mother Name */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Mother's Name:</label>
            <input
              type="text"
              className={`form-control ${errors.motherName ? "is-invalid" : ""
                } w-75`}
              // placeholder="Enter Mother's Name"
              {...register("motherName", { required: "Mother Name is required" })}
            />
            {errors.motherName && (
              <div className="invalid-feedback">
                {errors.motherName.message}
              </div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Date of Birth:</label>
            <input
              type="date"
              className={`form-control ${errors.dob ? "is-invalid" : ""} w-75`}
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && (
              <div className="invalid-feedback">{errors.dob.message}</div>
            )}
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Gender:</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  type="radio"
                  value="Male"
                  className="form-check-input"
                  {...register("gender", { required: "Gender is required" })}
                />
                <label className="form-check-label" style={{ "color": "gray", "fontWeight": "600" }}>Male</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  value="Female"
                  className="form-check-input"
                  {...register("gender")}
                />
                <label className="form-check-label" style={{ "color": "gray", "fontWeight": "600" }}>Female</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  value="Others"
                  className="form-check-input"
                  {...register("gender")}
                />
                <label className="form-check-label" style={{ "color": "gray", "fontWeight": "600" }}>Others</label>
              </div>
            </div>
            {errors.gender && (
              <div className="text-danger">{errors.gender.message}</div>
            )}
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Category:</label>
            <select
              className={`form-select ${errors.category ? "is-invalid" : ""} w-75`}
              {...register("category", { required: "Category is required" })}
            >
              <option value="" >Select Category</option>
              <option value="General">General</option>
              <option value="EWS">EWS</option>
              <option value="SC/ST">SC/ST</option>
              <option value="OBC">OBC</option>
              <option value="Defence">Defence</option>
            </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category.message}</div>
            )}
          </div>

          {/* PwD */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">PwD (Disability):</label>
            <select
              className={`form-select ${errors.pwd ? "is-invalid" : ""} w-75`}
              {...register("pwd", { required: "This field is required" })}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.pwd && (
              <div className="invalid-feedback">{errors.pwd.message}</div>
            )}
          </div>

          {/* All India Rank */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">All India Rank:</label>
            <input
              type="number"
              min="1"
              className={`form-control ${errors.allIndiaRank ? "is-invalid" : ""
                } w-75`}
              // placeholder="Enter All India Rank"
              {...register("allIndiaRank", {
                required: "All India Rank is required",
                min: { value: 1, message: "Rank cannot be negative or zero" },
              })}
            />
            {errors.allIndiaRank && (
              <div className="invalid-feedback">
                {errors.allIndiaRank.message}
              </div>
            )}
          </div>

          {/* Category Rank */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Category Rank:</label>
            <input
              type="number"
              min="1"
              className={`form-control ${errors.categoryRank ? "is-invalid" : ""
                } w-75`}
              // placeholder="Enter Category Rank"
              {...register("categoryRank", {
                required: "Category Rank is required",
                min: { value: 1, message: "Rank cannot be negative or zero" },
              })}
            />
            {errors.categoryRank && (
              <div className="invalid-feedback">
                {errors.categoryRank.message}
              </div>
            )}
          </div>

          {/* Branch Preferences */}
          <p style={{ "color": "gray", "fontWeight": "600" }}>Select five branches according to your preference:</p>
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="mb-3" key={num}>
              <label className="form-label mb-1 pb-0">Preference {num}:</label>
              <select
                className={`form-select ${errors[`preference${num}`] ? "is-invalid" : ""
                  } w-75`}
                {...register(`preference${num}`, {
                  required: `Preference ${num} is required`,
                })}
              >
                <option value="">Select Branch</option>
                {branches.map((branch, idx) => (
                  <option key={idx} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
              {errors[`preference${num}`] && (
                <div className="invalid-feedback">
                  {errors[`preference${num}`].message}
                </div>
              )}
            </div>
          ))}

          {/* State of Eligibility */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">State of Eligibility:</label>
            <select
              className={`form-select ${errors.state ? "is-invalid" : ""} w-75`}
              {...register("state", {
                required: "State of Eligibility is required",
              })}
            >
              <option value="">Select State</option>
              {indianStates.map((state, idx) => (
                <option key={idx} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <div className="invalid-feedback">{errors.state.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Email:</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""} w-75`}
              // placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Mobile number */}
          <div className="mb-3">
            <label className="form-label mb-1 pb-0">Mobile Number:</label>
            <input
              type="number"
              className={`form-control ${errors.mobileNumber ? "is-invalid" : ""
                } w-75`}
              // placeholder="Enter Mobile Number"
              {...register("mobileNumber", {
                required: "Mobile Number is required",
              })}
            />
            {errors.mobileNumber && (
              <div className="invalid-feedback">
                {errors.mobileNumber.message}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="text-start">
            <button type="submit" className="btn btn-primary w-25">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormLogin;
