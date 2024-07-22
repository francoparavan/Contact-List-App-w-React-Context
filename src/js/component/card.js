// src/js/component/card.js
import React from "react";
import photo from "../../img/photo.png";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, email, phone, address, onClick }) => {
    const navigate = useNavigate();

    return (
        <div className="card mb-3" style={{ maxWidth: "700px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={photo} className="rounded mx-auto d-block rounded-circle" alt="..." width={150} height={150} />
                </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column justify-content-center h-100">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text mb-1"><i className="bi bi-telephone-fill"></i> {phone}</p>
                        <p className="card-text mb-1"><i className="bi bi-envelope"></i> {email}</p>
                        <p className="card-text mb-1"><i className="bi bi-geo-alt-fill"></i> {address}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-pen" onClick={() => navigate(`/edit/${id}`)}><i className="bi bi-pen-fill"></i></button>
                    <button className="btn btn-trash" onClick={onClick}><i className="bi bi-trash3-fill"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Card;
