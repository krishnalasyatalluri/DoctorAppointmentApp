
import React, { useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAllDoctors } from "../redux/actions/doctorsActions";

const DoctorsPage = () => {
    const location = useLocation();
    const history=useHistory()
    const { activeCategory, issue } = location.state || {};
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
            return doctor.specialization === activeCategory || {};
        });
        setFilteredDoctors(filteredDocs);
    }, [doctors, activeCategory, issue]);
    const handleAppointment=(docId)=>{
        history.push({
            pathname:'/booking',
            state:{
                doctor:docId


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
                                <h5 className="card-title">Name: Dr.{doctor.fullName}</h5>
                                <p className="card-text">Qualification: {doctor.qualification}</p>
                                <p className="card-text">Specialization: {doctor.specialization}</p>
                                <p className="card-text">Experience: {doctor.experience} years</p>
                                <a href="#" className="btn btn-primary" onClick={()=>{
                                    handleAppointment(doctor._id)}}>
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
