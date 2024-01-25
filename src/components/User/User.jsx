import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();

    return (
        <div className="container">

            <div className="col-8 mx-auto text-center bg-success text-white fs-4 p-2">Id : {id.toUpperCase()}</div>
            
        </div>
    );
}

export default User