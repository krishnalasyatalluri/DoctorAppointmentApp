// import NavBar from "../components/NavBar"
// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// const ProfilePage = (props) => {
//     const [role, setRole] = useState('')
//     const loginInfo = useSelector((state) => {

//         return state.loginInfo

//     })
//     useEffect(() => {
//         // Retrieve user data from localStorage
//         const role = localStorage.getItem('role');
//         setRole(role)
//     }, []);

//     return (
//         <div>
//             {role === 'doctor' && (
//                 <div>
//                     <div className="container mt-4">
//                         <h2>Profile Page</h2>
//                         <div>
//                             <strong>Name:</strong> {loginInfo.userData.fullName}
//                         </div>
//                         <div>
//                             <strong>Email:</strong> {loginInfo.email}
//                         </div>
//                         {/* Add more user information as needed */}
//                     </div>
//                 </div>
//                 ) 
//             }

//         </div>
//     )

// }
// export default ProfilePage
// // import React, { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";

// // const ProfilePage = () => {
// //     const [user, setUser] = useState(null);

// //     // Assuming you have a user state in your Redux store
// //     const loggedInUser = useSelector((state) => state.loginInfo);
// //     console.log(loggedInUser)

// //     useEffect(() => {
// //         // Set the user data when the component mounts
// //         setUser(loggedInUser);
// //     }, [loggedInUser]);

// //     if (!user) {
// //         // Show loading or redirect to login if user data is not available
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div className="container mt-4">
// //             <h2>Profile Page</h2>
// //             <div>
// //                 <strong>Name:</strong> {user.fullName}
// //             </div>
// //             <div>
// //                 <strong>Email:</strong> {user.email}
// //             </div>
// //             {/* Add more user information as needed */}
// //         </div>
// //     );
// // };

// // export default ProfilePage;
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const role = localStorage.getItem('role'); // Get role from localStorage
    const loginInfo = useSelector((state) => state.loginInfo);

    useEffect(() => {
        // Set the appropriate user data based on the role
        if (role === 'doctor') {
            setUserData(loginInfo.userData);
        } else if (role === 'patient') {
            setUserData(loginInfo.userData);
        } else if (role === 'admin') {
            setUserData(loginInfo.userData);
        }
    }, [role, loginInfo]);

    if (!userData) {
        // Show loading or redirect to login if user data is not available
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar /> {/* Include NavBar component */}
            <div className="container mt-4">
                <h2>Profile Page</h2>
                <div>
                    <strong>Name:</strong> {userData.fullName}
                </div>
                <div>
                    <strong>Email:</strong> {loginInfo.email}
                </div>
                {/* Display role-specific details */}
                {role === 'doctor' && (
                    <div>
                        <strong>Specialization:</strong> {userData.specialization}
                        {/* Add more doctor-specific details */}
                    </div>
                )}
                {role === 'patient' && (
                    <div>
                        <strong>Health Condition:</strong> {userData.healthCondition}
                        {/* Add more patient-specific details */}
                    </div>
                )}
                {role === 'admin' && (
                    <div>
                        <strong>Admin Role:</strong> {userData.adminRole}
                        {/* Add more admin-specific details */}
                    </div>
                )}
            </div>
            <style jsx>{`
                /* Add your CSS styles here */
                .container {
                    /* Add your styles for the container */
                }
                /* Add more styles as needed */
            `}</style>
        </div>
    );
};

export default ProfilePage;
