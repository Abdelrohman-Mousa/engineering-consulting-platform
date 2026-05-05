import "./consultation-requests.scss";
import search from "/assets/icons/search.svg";
import eye from "/assets/icons/eye.svg";
import deleteBox from "/assets/icons/delete.svg";
import done from "/assets/icons/done.svg";
import RequestDetailsModal from "~/routes/dashboard/consultation-requests/request-details-modal/RequestDetailsModal";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "src/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import {formatDate} from "~/lib/utils";

const ConsultationRequests = () => {

    const [selectedRequest, setSelectedRequest] = useState(null);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // const requests = [
    //     {
    //         id: 1,
    //         name: "Abdelrohman Mousa",
    //         email: "abdelrohmanmarey@gmail.com",
    //         typeConsultation: "Structural Design",
    //         priority: "high",
    //         status: "pending",
    //         date: "2024-01-01",
    //         message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         emirate: "Abu Dhabi",
    //     },
    //     {
    //         id: 2,
    //         name: "Ahmed Mousa",
    //         email: "ahmed@gmail.com",
    //         typeConsultation: "Structural Design",
    //         priority: "low",
    //         status: "completed",
    //         date: "2024-01-01",
    //         message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         emirate: "Sharjah",
    //     },
    //     {
    //         id: 3,
    //         name: "Mohamed Mousa",
    //         email: "mohamed@gmail.com",
    //         typeConsultation: "Structural Design",
    //         priority: "medium",
    //         status: "rejected",
    //         date: "2024-01-01",
    //         message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         emirate: "Ajman",
    //     },
    //     {
    //         id: 4,
    //         name: "yassin Mousa",
    //         email: "yassin@gmail.com",
    //         typeConsultation: "Structural Design",
    //         priority: "low",
    //         status: "completed",
    //         date: "2024-01-01",
    //         message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         emirate: "Dubai",
    //     },
    // ]

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "consultations"),
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setRequests(data);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <h2>Loading requests...</h2>;
    }
    return (
        <div className="consultation-requests">

            <div className="header">
                <h1>Engineering Consulting Requests Dashboard</h1>
                <p>A centralized dashboard to monitor and manage consulting requests efficiently and support better decision-making.</p>
            </div>

            <div className="counter-search">
                <div className="counter">
                    <div className="request">
                        <h2>Total Requests:</h2>
                        <p>5</p>
                    </div>
                    <div className="request">
                        <h2>Pending:</h2>
                        <p>2</p>
                    </div>
                    <div className="request">
                        <h2>Completed:</h2>
                        <p>2</p>
                    </div>
                    <div className="request">
                        <h2>Rejected:</h2>
                        <p>1</p>
                    </div>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search by name, email ..." />
                    <img src={search} alt="search" />
                </div>
            </div>

            {/*Boxes*/}
            <div className="consultation-requests-boxes">
                {requests.map((request) => (
                    <div className="consultation-request-box" key={request.id}>
                        <div className="consultation-request-box-name-priority">
                            <h2>{request.name}</h2>
                            <h4 className={`consultation-request-priority ${request.priority}`}>{request.priority}</h4>
                        </div>

                        <div className="consultation-request-box-info">
                            <h2>{request.type}</h2>
                            <h2>{request.email}</h2>
                            <h2>
                                {formatDate(request.createdAt)}
                            </h2>
                        </div>

                        <div className="consultation-request-box-country-status">
                            <h2 className="country">{request.country}</h2>
                            <h2 className={`consulting-status ${request.status}`}>
                                {request.status}
                            </h2>
                        </div>

                        <div className="consultation-request-buttons">
                            <button
                                className="btn-edit"
                                onClick={() => setSelectedRequest(request)}
                            >
                                <img src={eye} alt="eye" />
                                <p>Details</p>
                            </button>

                            <button className="btn-edit">
                                <img src={deleteBox} alt="deleteBox" />
                                <p>Delete</p>
                            </button>

                            <button className="btn-edit">
                                <img src={done} alt="done" />
                                <p>Done</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedRequest && (
                <RequestDetailsModal
                    request={selectedRequest}
                    onClose={() => setSelectedRequest(null)}
                />
            )}
        </div>
    )
}
export default ConsultationRequests
