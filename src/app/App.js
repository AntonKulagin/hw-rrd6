import { Link, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage";
// import User from "./components/user";
import UserEdit from "./components/userEdit";
import UserPage from "./components/userPage";
import Users from "./components/users";
import UsersList from "./components/usersList";

const users = [
    { id: 0, title: "User 0" },
    { id: 1, title: "User 1" },
    { id: 2, title: "User 2" },
    { id: 3, title: "User 3" },
    { id: 4, title: "User 4" },
];

function App() {
    return (
        <>
            <h1>App Layout</h1>
            <Link to="/users">Users List Page</Link>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="users" element={<Users />}>
                    <Route index element={<UsersList users={users} />} />
                    <Route path=":userId">
                        <Route index element={<UserPage users={users} />} />
                        <Route path="profile" element={<UserEdit />} />
                        <Route path="*" element={<Navigate to="" />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
