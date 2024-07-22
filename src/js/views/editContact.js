import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const history = useHistory();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const contact = store.contacts.find(contact => contact.id === parseInt(id));
        if (contact) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
            setAddress(contact.address);
        }
    }, [id, store.contacts]);

    const handleSubmit = () => {
        if (!name || !phone || !email || !address) {
            alert("All fields must be completed");
            return;
        }

        const updatedContact = {
            name: name,
            phone: phone,
            email: email,
            address: address,
        };

        actions.updateContact(updatedContact, id)
            .then(() => {
                alert("Contact has been updated");
                history.push("/");
            })
            .catch((error) => {
                console.error("Error updating contact:", error);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-m-12">
                    <h3>Edit Contact</h3>
                </div>
                <div className="col-m-12">
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" placeholder="Insert your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input type="text" className="form-control" placeholder="Insert your phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" placeholder="Insert your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <input type="text" className="form-control" placeholder="Insert your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button className="btn btn-danger w-100" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default EditContact;