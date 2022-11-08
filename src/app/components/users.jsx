import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
    return (
        <>
            <h2>Users Layout</h2>
            <Link to="/">Main Page</Link>
            <Outlet />
        </>
    );
};

export default Users;
