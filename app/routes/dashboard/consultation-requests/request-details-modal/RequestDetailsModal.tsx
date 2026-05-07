import "./request-details-modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import closed from "/assets/icons/closed.png";
import clock from "/assets/icons/clock.svg";
import level from "/assets/icons/priority.svg";
import location2 from "/assets/icons/location-2.svg";
import pdf from "/assets/icons/pdf.svg";
import sent from "/assets/icons/sent.svg"
import {formatDate} from "~/lib/utils";
import {useState} from "react";
import PulseLoader from "~/components/loader/PulseLoader";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import noFile from "/src/animations/NO-FILES.json";



type Props = {
    request: any;
    onClose: () => void;
    onChangeStatus: (id: string, status: "pending" | "completed" | "rejected") => Promise<void>;
};

const RequestDetailsModal = ({ request, onClose, onChangeStatus }: Props) => {

    const [loadingStatus, setLoadingStatus] = useState<"completed" | "rejected" | null>(null);

    const [reply, setReply] = useState(request?.reply || "");
    const [sending, setSending] = useState(false);
    const [previewFile, setPreviewFile] = useState<string | null>(null);

    const handleStatus = async (status: "completed" | "rejected") => {
        setLoadingStatus(status);

        const success = await onChangeStatus(request.id, status);

        if (success) {
            onClose();
        }
        setLoadingStatus(null);
    };

    const capitalize = (text: string) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const handleSendMessage = async () => {
        if (!reply.trim()) {
            toast.error("Message cannot be empty");
            return;
        }

        setSending(true);

        try {
            await emailjs.send(
                "service_lk6jx1e",
                "template_g9bv99k",
                {
                    to_email: request.email,
                    client_name: request.name,
                    message: reply,
                },
                "1wtAkqRzMP0zqrDeN"
            );

            toast.success("Email sent successfully!");

        } catch (error) {
            console.error(error);
            toast.error("Failed to send email");
        } finally {
            setSending(false);
        }
    };

    return (
        <AnimatePresence>
            {request && (
                <>
                    {/* المودال الأساسي */}
                    <motion.div
                        className="modal-overlay"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 40, scale: 0.9, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 40, scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >

                           <div className="consulting-modal-header">
                               <h2>Consultation Request</h2>
                               <button className="close-btn" onClick={onClose}>
                                 <img src={closed} alt="Close" />
                               </button>
                           </div>

                            <div className="consulting-modal-body">
                                <div className="consulting-modal-info-user">
                                    <div className="consulting-modal-info-user-img">
                                        <img src={request?.user?.avatar || "/assets/icons/avatar-default.svg"} />
                                        <h2>{capitalize(request.name)}</h2>
                                    </div>

                                    <div className="consulting-modal-info-time">
                                         <img src={clock} alt="clock" />
                                        <h2>
                                            {formatDate(request.createdAt)}
                                        </h2>
                                    </div>

                                    <div className="consulting-modal-info-priority">
                                        <img src={level} alt="level" />
                                        <h2>{capitalize(request.priority)}</h2>
                                    </div>

                                    <div className="consulting-modal-info-location">
                                        <img src={location2} alt="location" />
                                        <h2>{capitalize(request.country)}</h2>
                                    </div>
                                </div>

                                <div className="consulting-modal-info-desc-type">
                                    <div className="desc">
                                        <h2>Description</h2>
                                        <p>{capitalize(request.description)}</p>
                                    </div>
                                    <div className="type">
                                        <h2>Consulting Type</h2>
                                        <p>{capitalize(request.type)}</p>
                                    </div>
                                </div>

                                <div className="consulting-modal-info-pdf-replay">
                                    <div className="consulting-modal-info-pdf-image">

                                        {request.files && request.files.length > 0 ? (

                                            request.files.map((file: string, index: number) => {

                                                const isImage =
                                                    file.includes(".jpg") ||
                                                    file.includes(".jpeg") ||
                                                    file.includes(".png") ||
                                                    file.includes(".webp");

                                                const isPdf = file.includes(".pdf");

                                                return (
                                                    <div key={index} className="file-preview-item">

                                                        {isImage ? (

                                                            <img
                                                                src={file}
                                                                alt="uploaded"
                                                                style={{maxWidth: "270px",  maxHeight: "200px", borderRadius: "1rem"}}
                                                                className="preview-image"
                                                                onClick={() => setPreviewFile(file)}
                                                            />

                                                        ) : isPdf ? (

                                                            <div
                                                                className="pdf-preview-wrapper"
                                                                style={{cursor: "pointer"}}
                                                                onClick={() => setPreviewFile(file)}
                                                            >
                                                                <img
                                                                    src={pdf}
                                                                    alt="pdf"
                                                                    className="pdf-icon"
                                                                    style={{ width: "150px", height: "150px", margin: "auto" }}
                                                                />
                                                                <h3>Open PDF File</h3>
                                                            </div>

                                                        ) : (

                                                            <a
                                                                href={file}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="download-file"
                                                            >
                                                                Open File
                                                            </a>

                                                        )}
                                                    </div>
                                                );
                                            })

                                        ) : (

                                            <div className="no-file">
                                                <Lottie
                                                    animationData={noFile}
                                                    loop={true}
                                                    className="no-data-search"
                                                    style={{width: "200px", height: "200px"}}
                                                />
                                                <p>No Request File</p>
                                            </div>

                                        )}
                                    </div>

                                    <div className="consulting-modal-info-replay-message">
                                        <h2>Reply to Client</h2>
                                        <textarea
                                            placeholder="Write your message..."
                                            rows={10}
                                            value={reply}
                                            onChange={(e) => setReply(e.target.value)}
                                        />

                                        <button
                                            className="btn-message-contact-replay"
                                            onClick={handleSendMessage}
                                            disabled={sending || !reply.trim()}
                                        >
                                            <h2>{sending ? <PulseLoader /> : "Send Message"}</h2>
                                            <img src={sent} alt="sent" />
                                        </button>
                                    </div>
                                </div>

                                <div className="consulting-modal-info-status-btn">
                                    <h2>Update the request status to reflect its current progress.</h2>
                                    <div className="status-btn">
                                        <button
                                            className="completed"
                                            disabled={request.status === "completed" || loadingStatus !== null}
                                            onClick={() => handleStatus("completed")}
                                        >
                                            {loadingStatus === "completed" ? <PulseLoader /> : "Completed"}
                                        </button>

                                        <button
                                            className="Rejected"
                                            disabled={request.status === "rejected" || loadingStatus !== null}
                                            onClick={() => handleStatus("rejected")}
                                        >
                                            {loadingStatus === "rejected" ? <PulseLoader /> : "Rejected"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                        <AnimatePresence>
                            {previewFile && (
                                <motion.div
                                    className="file-preview-modal"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setPreviewFile(null)}
                                >
                                    <motion.div
                                        className="file-preview-content"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.8 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >

                                        <button
                                            className="close-preview"
                                            onClick={() => setPreviewFile(null)}
                                        >
                                            ✕
                                        </button>

                                        {previewFile.includes(".pdf") ? (

                                            <iframe
                                                src={`https://docs.google.com/gview?url=${encodeURIComponent(previewFile)}&embedded=true`}
                                                className="full-preview-pdf"
                                                title="Full PDF Preview"
                                            />

                                        ) : (

                                            <img
                                                src={previewFile}
                                                alt="preview"
                                                className="full-preview-image"
                                            />

                                        )}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    )
}
export default RequestDetailsModal
