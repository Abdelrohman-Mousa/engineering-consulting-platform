import "./request-details-modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import closed from "/assets/icons/closed.png";

const RequestDetailsModal = ({ request, onClose, onChangeStatus }: any) => {
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
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
export default RequestDetailsModal
