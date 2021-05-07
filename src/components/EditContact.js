import { useState } from "react";
import { Link } from "react-router-dom";

const EditContact = ({ match, contactList, onSendContact }) => {
  const contactId = Number(match.params.contactId);
  const filteredContacts = contactList.filter(
    (contact) => contact.id === contactId
  );
  const clearData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };
  let [formData, setFormData] = useState(filteredContacts[0]);

  function formDataPublish() {
    const contactInfo = {
      id: formData.id,
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
      <div className={"card textcenter mt-3 "}>
        <div className="apt-addheading card-header bg-secondary text-white">
          Edit Contact
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate>
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

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <Link to="/">
                  <button
                    type="submit"
                    onClick={formDataPublish}
                    className="btn btn-secondary d-block ml-auto"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
