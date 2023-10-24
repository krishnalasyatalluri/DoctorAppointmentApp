// import { useEffect, useState } from "react"
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
// import { useDispatch, useSelector } from "react-redux"
// import { asyncGetAllDoctors } from "../redux/actions/doctorsActions"
// import { activeCategory } from '../components/categoryList'
// const DoctorsPage = (props) => {
//     const location = useLocation()
//     const { activeCategory, issue } = location.state
//     const dispatch = useDispatch()
//     const doctors = useSelector((state) => state.doctors)
//     const [filteredDoctors, setFilteredDoctors] = useState(null)

//     useEffect(() => {
//         (async () => {
//             dispatch(asyncGetAllDoctors())

//         })()

//     }, [dispatch])
//     useEffect(() => {
//         const filteredDocs = doctors.filter((doc) => {
//             return doc.specialization === activeCategory.title

//         })
//         setFilteredDoctors(filteredDocs)
//     }, [activeCategory, issue, doctors])
//     return (
//         <div class="card" style={{ width: '18rem' }}>

//             {filteredDoctors.map((doc) => {
//                 <div class="card-body">
//                     <div>
//                         <h5 class="card-title">{doc.fullName}</h5>
//                         <p class="card-text">{doc.qualification}</p>
//                         <p class="card-text">{doc.specialization}</p>
//                         <p class="card-text">{doc.experience} Years</p>
//                         <a href="#" class="btn btn-primary">Make an appointment</a>
//                     </div>
//                 </div>

//             })}


//                 </div>


//     )
// }
// export default DoctorsPage
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
import React, { useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAllDoctors } from "../redux/actions/doctorsActions";

const DoctorsPage = () => {
    const location = useLocation();
    const history=useHistory()
    const { activeCategory, issue } = location.state;
    console.log(location.state)
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        (async () => {
            dispatch(asyncGetAllDoctors());
        })();
    }, [dispatch]);

    useEffect(() => {
        // Filter doctors based on activeCategory and issue
        const filteredDocs = doctors.filter((doctor) => {
            return doctor.specialization === activeCategory.title;
        });
        setFilteredDoctors(filteredDocs);
    }, [doctors, activeCategory, issue]);
    const handleAppointment=(i)=>{
        history.push({
            pathname:'/booking',
            state:{

            }
        })

    }

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredDoctors.map((doctor,i) => (
                    <div className="col-sm-6" key={doctor.id}>
                        <div className="card">
                            <div className="card-body" key={doctor.id}>
                                <h5 className="card-title">{doctor.fullName}</h5>
                                <p className="card-text">Specialization: {doctor.specialization}</p>
                                <p className="card-text">Experience: {doctor.experience}</p>
                                <a href="#" className="btn btn-primary" onClick={()=>{
                                    handleAppointment(i)}}>
                                    Make an Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )



}



export default DoctorsPage
