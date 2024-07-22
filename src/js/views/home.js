// src/js/views/home.js
import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [message, setMessage] = useState("");

    const handleDelete = (id) => {
        actions.deleteContact(id)
            .then(() => {
                setMessage("The user has been removed from the contact list");
                setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Contact List</h2>
                    {message && <div className="alert alert-custom">{message}</div>}
                </div>
                <div className="col-md-8">
                    {store.contacts.length > 0 &&
                        store.contacts.map((contact) => {
                            return (
                                <Card {...contact} key={contact.id} onClick={() => handleDelete(contact.id)} />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
