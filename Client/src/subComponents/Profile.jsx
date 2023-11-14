import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../css/profile.css";

export const Profile = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <div class="btn-group">
                <button
                    id="drop-btn"
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                ></button>
                <ul id="prof-menu" class="dropdown-menu">
                    <li>
                        <a class="drop-item">
                            Welcome <span className="prof-txt">{user.email}</span>
                        </a>
                    </li>
                    <li>
                        <button class="drop-btn" onClick={logout}>
                            Disconnet User
                        </button>
                    </li>
                    <li>
                        <button class="drop-btn-1" onClick={logout}>
                            Sign Off
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Profile;
