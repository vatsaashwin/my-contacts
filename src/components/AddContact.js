import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/AddContact.css";

const AddContact = ({ onSendContact }) => {
  const clearData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const contactInfo = {
      id: Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
    };

    onSendContact(contactInfo);
    setFormData(clearData);
    console.log(formData, setFormData);
  }

  return (
    <div>
      <div className="card textcenter mt-3 ">
        <div className="apt-addheading card-header bg-secondary text-white">
          Add Contact
        </div>

        <div className="card-body">
          <form
            id="aptForm"
            noValidate
            // onSubmit={this.handleAdd}
          >
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="firstName"
                readOnly
              >
                First Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required="required"
                  onChange={(event) => {
                    setFormData({ ...formData, firstName: event.target.value });
                  }}
                  value={formData.firstName}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="lastName"
                readOnly
              >
                Last Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(event) => {
                    setFormData({ ...formData, lastName: event.target.value });
                  }}
                  value={formData.lastName}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="phone"
                readOnly
              >
                Phone
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  patter
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  onChange={(event) => {
                    setFormData({ ...formData, phone: event.target.value });
                  }}
                  value={formData.phone}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="email"
                readOnly
              >
                Email
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                  value={formData.email}
                />
              </div>
            </div>

            <div className="form-group form-row text-muted right-align">
              <label
                className="mutedlabel col-form-label text-md-right"
                htmlFor="note"
                readOnly
              >
                *All fields are mandatory
              </label>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <Link to="/">
                  {formData.firstName &&
                    formData.lastName &&
                    formData.email &&
                    formData.phone && (
                      <button
                        type="submit"
                        onClick={formDataPublish}
                        className="btn btn-secondary d-block ml-auto"
                      >
                        Add Contact
                      </button>
                    )}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
