import "./request-details-modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import closed from "/assets/icons/closed.png";
import clock from "/assets/icons/clock.svg";
import level from "/assets/icons/priority.svg";
import location2 from "/assets/icons/location-2.svg";
import pdf from "/assets/icons/pdf.svg";
import sent from "/assets/icons/sent.svg"
import {formatDate} from "~/lib/utils";

const RequestDetailsModal = ({ request, onClose, onChangeStatus }: any) => {

    const capitalize = (text: string) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
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
                                        <img src={pdf} alt="pdf" />
                                    </div>

                                    <div className="consulting-modal-info-replay-message">
                                        <h2>Reply to Client</h2>
                                        <textarea
                                            placeholder="Write your message..."
                                            rows={10}
                                            value={request.reply}
                                            onChange={(e) => onChangeStatus(e.target.value)}
                                        />

                                        <button
                                            className="btn-message-contact-replay">
                                            <h2>Send Message</h2>
                                            <img src={sent} alt="sent" />
                                        </button>
                                    </div>
                                </div>

                                <div className="consulting-modal-info-status-btn">
                                    <h2>Update the request status to reflect its current progress.</h2>
                                    <div className="status-btn">
                                        <button
                                            className="completed">
                                            Completed
                                        </button>

                                        <button
                                            className="Rejected">
                                            Rejected
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
export default RequestDetailsModal
