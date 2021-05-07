import React from "react";
import "../css/App.css";
import { Link, Switch, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import { Button } from "react-bootstrap";
import { MdAdd } from "react-icons/md";

function App() {
  let [contactList, setContactList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setContactList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <header className="App-header">
        <Link className="container text-white" to="/">
          My Contacts
        </Link>
      </header>
      <div className="container">
        <Switch>
          <Route path="/addContact">
            <AddContact
              onSendContact={(mycontact) =>
                setContactList([...contactList, mycontact])
              }
            />
          </Route>

          <Route
            path="/editContact/:contactId"
            render={(props) => (
              <EditContact
                {...props}
                contactList={contactList}
                onSendContact={(mycontact) => {
                  console.log("before", contactList);
                  for (var i = 0; i < contactList.length; ++i) {
                    if (contactList[i].id === mycontact.id) {
                      contactList[i] = mycontact;
                      break;
                    }
                  }
                  setContactList([...contactList]);
                }}
              />
            )}
          ></Route>

          <Route path="/">
            <div>
              <div className="center">
                <Link to="/addContact">
                  <Button variant="secondary ml-0 mt-2 ">
                    <MdAdd />
                    Add Contact
                  </Button>
                </Link>
              </div>
              <div>
                {contactList.map((contact) => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={(contactId) =>
                      setContactList(
                        contactList.filter(
                          (contact) => contact.id !== contactId
                        )
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </Route>
        </Switch>
      </div>
      {/* <footer>
        <div className="center text-white">
          <span>All rights reserved.</span>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
