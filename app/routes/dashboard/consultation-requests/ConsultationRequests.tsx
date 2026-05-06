import "./consultation-requests.scss";
import search from "/assets/icons/search.svg";
import eye from "/assets/icons/eye.svg";
import deleteBox from "/assets/icons/delete.svg";
import done from "/assets/icons/done.svg";
import RequestDetailsModal from "~/routes/dashboard/consultation-requests/request-details-modal/RequestDetailsModal";
import {collection, doc, onSnapshot, deleteDoc, updateDoc, Timestamp} from "firebase/firestore";
import { db } from "src/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import {formatDate} from "~/lib/utils";
import Loader from "~/components/loader/Loader";
import toast from "react-hot-toast";
import DeleteConfirm from "~/routes/dashboard/consultation-requests/DeleteConfirm";
import PulseLoader from "~/components/loader/PulseLoader";
import noDataSearch from "/src/animations/No-Data.json";
import emptyRequest from "/src/animations/empty.json";
import Lottie from "lottie-react";

type RequestType = {
    id: string;
    name: string;
    email: string;
    type: string;
    country: string;
    status: "pending" | "completed" | "rejected";
    priority: string;
    createdAt: Timestamp;
};

const ConsultationRequests = () => {

    const [selectedRequest, setSelectedRequest] = useState<RequestType | null>(null);
    const [requests, setRequests] = useState<RequestType[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [removingId, setRemovingId] = useState<string | null>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [updatingId, setUpdatingId] = useState<string | null>(null);


    const total = requests.length;
    const pending = requests.filter(r => r.status === "pending").length;
    const completed = requests.filter(r => r.status === "completed").length;
    const rejected = requests.filter(r => r.status === "rejected").length;

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

    const confirmDelete = (id: string) => {
        setSelectedId(id);
        setDialogVisible(true);
    };

    // Delete
    const handleDelete = async () => {
        if (!selectedId) return;

        setRemovingId(selectedId); // animation

        setTimeout(async () => {
            try {
                await deleteDoc(doc(db, "consultations", selectedId));
                toast.success("Request deleted successfully!");
            } catch (error) {
                console.error(error);
                toast.error("Failed to delete request.");
            } finally {
                setDialogVisible(false);
                setRemovingId(null);
                setSelectedId(null);
            }
        }, 300);
    };

    const handleMarkDone = async (id: string) => {
        setUpdatingId(id);
        try {
            await updateDoc(doc(db, "consultations", id), {
                status: "completed",
            });
            toast.success("Marked as completed!");
        } catch (error) {
            toast.error("Failed to update status.");
        } finally {
            setUpdatingId(null);
        }
    };

    const filteredRequests = requests.filter((request) =>
        request.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedRequests = [...filteredRequests].sort(
        (a, b) => b.createdAt?.seconds - a.createdAt?.seconds
    );

    const capitalize = (text: string) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const handleChangeStatus = async (
        id: string,
        status: "pending" | "completed" | "rejected"
    ): Promise<boolean> => {
        setUpdatingId(id);

        try {
            await updateDoc(doc(db, "consultations", id), {
                status,
            });

            toast.success(`Request ${status}`);
            return true;
        } catch (error) {
            toast.error("Failed to update status.");
            return false;
        } finally {
            setUpdatingId(null);
        }
    };

    if (loading) {
        return <h2><Loader /></h2>;
    }
    return (
        <div className="consultation-requests">
            <DeleteConfirm
                open={dialogVisible}
                onConfirm={handleDelete}
                onCancel={() => setDialogVisible(false)}
            />
            <div className="header">
                <h1>Engineering Consulting Requests Dashboard</h1>
                <p>A centralized dashboard to monitor and manage consulting requests efficiently and support better decision-making.</p>
            </div>

            <div className="counter-search">
                <div className="counter">
                    <div className="request">
                        <h2>Total Requests:</h2>
                        <p>{total}</p>
                    </div>
                    <div className="request">
                        <h2>Pending:</h2>
                        <p>{pending}</p>
                    </div>
                    <div className="request">
                        <h2>Completed:</h2>
                        <p>{completed}</p>
                    </div>
                    <div className="request">
                        <h2>Rejected:</h2>
                        <p>{rejected}</p>
                    </div>
                </div>

                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by name, email ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img src={search} alt="search" />
                </div>
            </div>

            {/*Boxes*/}
            <div className="consultation-requests-boxes">
                {requests.length === 0 ? (
                    <Lottie
                        animationData={emptyRequest}
                        loop={true}
                        className="no-data-search"
                    />
                ) : sortedRequests.length === 0 ? (
                    <Lottie
                        animationData={noDataSearch}
                        loop={true}
                        className="no-data-search"
                    />
                ) : (
                sortedRequests.map((request) => (
                        <div className={`consultation-request-box ${removingId === request.id ? "removing" : ""}`} key={request.id}>
                            <div className="consultation-request-box-name-priority">
                                <h2>{capitalize(request.name)}</h2>
                                <h4 className={`consultation-request-priority ${request.priority}`}>
                                    {capitalize(request.priority)}
                                </h4>
                            </div>

                            <div className="consultation-request-box-info">
                                <h2>{request.type}</h2>
                                <h2>{request.email}</h2>
                                <h2>{formatDate(request.createdAt)}</h2>
                            </div>

                            <div className="consultation-request-box-country-status">
                                <h2 className="country">{capitalize(request.country)}</h2>
                                <h2 className={`consulting-status ${request.status}`}>
                                    {capitalize(request.status)}
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

                                <button
                                    className="btn-edit"
                                    onClick={() => confirmDelete(request.id)}
                                >
                                    <img src={deleteBox} alt="deleteBox" />
                                    <p>Delete</p>
                                </button>

                                <button
                                    className="btn-edit"
                                    disabled={request.status === "completed"}
                                    onClick={() => handleMarkDone(request.id)}
                                >
                                    <img src={done} alt="done" />
                                    <p>
                                        {updatingId === request.id ? <PulseLoader /> : "Done"}
                                    </p>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {selectedRequest && (
                <RequestDetailsModal
                    request={selectedRequest}
                    onClose={() => setSelectedRequest(null)}
                    onChangeStatus={handleChangeStatus}
                />
            )}
        </div>
    )
}
export default ConsultationRequests
