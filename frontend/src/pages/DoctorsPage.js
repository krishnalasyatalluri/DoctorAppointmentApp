// // // // // import { useEffect, useState } from "react"
// // // // // import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
// // // // // import { useDispatch, useSelector } from "react-redux"
// // // // // import { asyncGetAllDoctors } from "../redux/actions/doctorsActions"
// // // // // import { activeCategory } from '../components/categoryList'
// // // // // const DoctorsPage = (props) => {
// // // // //     const location = useLocation()
// // // // //     const { activeCategory, issue } = location.state
// // // // //     const dispatch = useDispatch()
// // // // //     const doctors = useSelector((state) => state.doctors)
// // // // //     const [filteredDoctors, setFilteredDoctors] = useState(null)

// // // // //     useEffect(() => {
// // // // //         (async () => {
// // // // //             dispatch(asyncGetAllDoctors())

// // // // //         })()

// // // // //     }, [dispatch])
// // // // //     useEffect(() => {
// // // // //         const filteredDocs = doctors.filter((doc) => {
// // // // //             return doc.specialization === activeCategory.title

// // // // //         })
// // // // //         setFilteredDoctors(filteredDocs)
// // // // //     }, [activeCategory, issue, doctors])
// // // // //     return (
// // // // //         <div class="card" style={{ width: '18rem' }}>

// // // // //             {filteredDoctors.map((doc) => {
// // // // //                 <div class="card-body">
// // // // //                     <div>
// // // // //                         <h5 class="card-title">{doc.fullName}</h5>
// // // // //                         <p class="card-text">{doc.qualification}</p>
// // // // //                         <p class="card-text">{doc.specialization}</p>
// // // // //                         <p class="card-text">{doc.experience} Years</p>
// // // // //                         <a href="#" class="btn btn-primary">Make an appointment</a>
// // // // //                     </div>
// // // // //                 </div>

// // // // //             })}


// // // // //                 </div>


// // // // //     )
// // // // // }
// // // // // export default DoctorsPage
// <div className="container mt-4">
//     {filteredDoctors.map((doctor) => (
//         <div className="card mb-3" key={doctor.id}>
//             <div className="card-body">
//                 <h5 className="card-title">Name: {doctor.fullName}</h5>
//                 <p className="card-text">Specialization: {doctor.specialization}</p>
//                 <p className="card-text">Experience: {doctor.experience} years</p>
//                 <a href="#" className="btn btn-primary">
//                     Make an Appointment
//                 </a>
//             </div>
//         </div>
//     ))}
// </div>
// import React, { useEffect, useState } from "react";
// import { useLocation,useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { asyncGetAllDoctors } from "../redux/actions/doctorsActions";

// const DoctorsPage = () => {
//     const location = useLocation();
//     const history=useHistory()
//     const { activeCategory, issue } = location.state;
//     console.log(location.state)
//     const dispatch = useDispatch();
//     const doctors = useSelector((state) => state.doctors);
//     const [filteredDoctors, setFilteredDoctors] = useState([]);

//     useEffect(() => {
//         (async () => {
//             dispatch(asyncGetAllDoctors());
//         })();
//     }, [dispatch]);

//     useEffect(() => {
//         // Filter doctors based on activeCategory and issue
//         const filteredDocs = doctors.filter((doctor) => {
//             return doctor.specialization === activeCategory.title;
//         });
//         setFilteredDoctors(filteredDocs);
//         console.log(filteredDocs)
//     }, [doctors, activeCategory, issue]);
//     const handleAppointment=()=>{

//     }


//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 {filteredDoctors.map((doctor,i) => (
//                     <div className="col-sm-6" key={doctor.id}>
//                         <div className="card">
//                             <div className="card-body" key={doctor.id}>
//                                 <h5 className="card-title">{doctor.fullName}</h5>
//                                 <p className="card-text">Specialization: {doctor.specialization}</p>
//                                 <p className="card-text">Experience: {doctor.experience}</p>
//                                 <a href="#" className="btn btn-primary" onClick={()=>{
//                                     handleAppointment(doctor)
//                                 }}>
//                                     Make an Appointment
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     )



// }


// export default DoctorsPage
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAllDoctors } from "../redux/actions/doctorsActions";
import Modal from "../components/modal";
import PaymentForm from "../forms/paymentForm"; // Assuming PaymentForm component is in the same directory

const DoctorsPage = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const { activeCategory, issue } = props;
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        dispatch(asyncGetAllDoctors());
    }, [dispatch]);

    const handleAppointment = (doctor) => {
        // Handle appointment logic, set selected doctor for payment
        setSelectedDoctor(doctor);
        setIsModalOpen(true);

    };

    const handlePaymentSuccess = () => {
        // Payment successful logic (e.g., redirect to confirmation page)
        history.push("/bookings"); // Redirect to confirmation page after successful payment
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {doctors
                    .filter((doctor) => doctor.specialization === activeCategory)
                    .map((doctor, index) => (
                        <div className="col-sm-6" key={doctor.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.fullName}</h5>
                                    <p className="card-text">Specialization: {doctor.specialization}</p>
                                    <p className="card-text">Experience: {doctor.experience} years</p>
                                    <button className="btn btn-primary" onClick={() => handleAppointment(doctor)}>
                                        Make an Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* {selectedDoctor && (
                <div className="mt-4">
                    <h4>Payment Details</h4>
                    <PaymentForm issue={issue} doctor={selectedDoctor} onPaymentSuccess={handlePaymentSuccess} />
                </div>
            )} */}
            {selectedDoctor && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h4>Payment Details</h4>
                    <PaymentForm
                        issue={issue}
                        doctor={selectedDoctor}
                        onPaymentSuccess={() => {
                            setIsModalOpen(false);
                            handlePaymentSuccess(); // Handle payment success logic after closing the modal
                        }}
                    />
                </Modal>
            )}
        </div>
    );
};

export default DoctorsPage;
// // import React, { useState } from "react";
// // import { useHistory } from "react-router-dom";
// // import PaymentForm from "./PaymentForm";

// // const DoctorsPage = () => {
// //     // ... previous code ...

// //     const [selectedDate, setSelectedDate] = useState(null);
// //     const [selectedTime, setSelectedTime] = useState(null);
// //     const [showPaymentForm, setShowPaymentForm] = useState(false);

// //     const handleAppointment = (doctor) => {
// //         // Set doctor, date, and time details for payment processing
// //         // Show payment form
// //         setSelectedDoctor(doctor);
// //         setShowPaymentForm(true);
// //     };

// //     const handlePaymentSuccess = (token, doctorId, issue, selectedDate, selectedTime) => {
// //         // Send token, doctorId, issue, selectedDate, and selectedTime to your backend API
// //         // Process payment and appointment booking on the server
// //         // Redirect user to confirmation page after successful payment

// //         // For demo purposes, navigate to a success page
// //         history.push("/appointment-success");
// //     };

// //     return (
// //         <div className="container mt-4">
// //             <div className="row">
// //                 {filteredDoctors.map((doctor, i) => (
// //                     <div className="col-sm-6" key={doctor.id}>
// //                         {/* ... doctor card details ... */}
// //                         <a href="#" className="btn btn-primary" onClick={() => handleAppointment(doctor)}>
// //                             Make an Appointment
// //                         </a>
// //                     </div>
// //                 ))}
// //             </div>
// //             {showPaymentForm && (
// //                 <PaymentForm
// //                     doctor={selectedDoctor}
// //                     issue={issue}
// //                     selectedDate={selectedDate}
// //                     selectedTime={selectedTime}
// //                     onPaymentSuccess={handlePaymentSuccess}
// //                 />
// //             )}
// //         </div>
// //     );
// // };

// // export default DoctorsPage;
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import PaymentForm from "../forms/paymentForm";

// const DoctorsPage = ({ filteredDoctors, setSelectedDoctor, issue }) => {
//     const history = useHistory();
//     const [selectedDoctor]=useState(null)
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedTime, setSelectedTime] = useState(null);
//     const [showPaymentForm, setShowPaymentForm] = useState(false);

//     const handleAppointment = (doctor) => {
//         // Set doctor, date, and time details for payment processing
//         // Show payment form
//         setSelectedDoctor(doctor);
//         setShowPaymentForm(true);
//     };

//     const handlePaymentSuccess = (token, doctorId, issue, selectedDate, selectedTime) => {
//         // Send token, doctorId, issue, selectedDate, and selectedTime to your backend API
//         // Process payment and appointment booking on the server
//         // Redirect user to confirmation page after successful payment

//         // For demo purposes, navigate to a success page
//         history.push("/bookings");
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 {filteredDoctors.map((doctor, i) => (
//                     <div className="col-sm-6" key={doctor.id}>
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">{doctor.fullName}</h5>
//                                 <p className="card-text">Specialization: {doctor.specialization}</p>
//                                 <p className="card-text">Experience: {doctor.experience}</p>
//                                 <a href="#" className="btn btn-primary" onClick={() => handleAppointment(doctor)}>
//                                     Make an Appointment
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {showPaymentForm && (
//                 <PaymentForm
//                     doctor={selectedDoctor}
//                     issue={issue}
//                     selectedDate={selectedDate}
//                     selectedTime={selectedTime}
//                     onPaymentSuccess={handlePaymentSuccess}
//                 />
//             )}
//         </div>
//     );
// };

// export default DoctorsPage;
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import PaymentForm from "../forms/paymentForm";

// const DoctorsPage = ({ filteredDoctors, setSelectedDoctor, issue }) => {
//     const history = useHistory();
//     const [selectedDoctor]=useState(null)
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedTime, setSelectedTime] = useState(null);
//     const [showPaymentForm, setShowPaymentForm] = useState(false);

//     const handleAppointment = (doctor) => {
//         // Set doctor, date, and time details for payment processing
//         // Show payment form
//         setSelectedDoctor(doctor);
//         setShowPaymentForm(true);
//     };

//     const handlePaymentSuccess = (token, doctorId, issue, selectedDate, selectedTime) => {
//         // Send token, doctorId, issue, selectedDate, and selectedTime to your backend API
//         // Process payment and appointment booking on the server
//         // Redirect user to confirmation page after successful payment

//         // For demo purposes, navigate to a success page
//         history.push("/appointment-success");
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 {filteredDoctors.map((doctor, i) => (
//                     <div className="col-sm-6" key={doctor.id}>
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">{doctor.fullName}</h5>
//                                 <p className="card-text">Specialization: {doctor.specialization}</p>
//                                 <p className="card-text">Experience: {doctor.experience}</p>
//                                 <a href="#" className="btn btn-primary" onClick={() => handleAppointment(doctor)}>
//                                     Make an Appointment
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {showPaymentForm && (
//                 <PaymentForm
//                     doctor={selectedDoctor}
//                     issue={issue}
//                     selectedDate={selectedDate}
//                     selectedTime={selectedTime}
//                     onPaymentSuccess={handlePaymentSuccess}
//                 />
//             )}
//         </div>
//     );
// };

// export default DoctorsPage;
