import "./contact-message.scss";
import search from "/assets/icons/search.svg";
import closed from "/assets/icons/closed.png";
import copy from "/assets/icons/copy.svg";
import check from "/assets/icons/checked.svg";
import send from "/assets/icons/send.svg";
import markRead from "/assets/icons/read.svg";
import markClosed from "/assets/icons/closed.svg";
import replay from "/assets/icons/replay.svg";
import user from "/assets/images/people-3.jpg";
import FilterMessage from "~/routes/components/material-ui/FilterMessage";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {cn, formatDate} from "~/lib/utils";
import ActionTemplate from "~/routes/dashboard/contact-message/ActionTemplate";
import { motion, AnimatePresence } from "framer-motion";
import {useState, useEffect} from "react";
import {subscribeToMessages, markAsRead, updateStatus} from "src/firebase/services/contactService";
import { initNotificationSound, playNotificationSound } from "src/firebase/services/notificationService";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import PulseLoader from "~/components/loader/PulseLoader";


interface Message {
    id?: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt?: any;
    status?: string;
}

const ContactMessage = () => {

    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [prevCount, setPrevCount] = useState(0);
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [replyText, setReplyText] = useState("");
    const [sending, setSending] = useState(false);

    const filteredMessages = messages.filter((msg) => {
        // filter by status
        const matchStatus =
            statusFilter === "all" || msg.status === statusFilter;

        // filter by search
        const matchSearch =
            msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            msg.email.toLowerCase().includes(searchTerm.toLowerCase());

        return matchStatus && matchSearch;
    });

    // ReaTime Data With Firebase
    useEffect(() => {
        const unsubscribe = subscribeToMessages(setMessages);

        return () => unsubscribe();
    }, []);


    const handleView = async (rowData: Message) => {
        setSelectedMessage(rowData);
        setOpen(true);

        // Mark as Read
        if (rowData.status === "new" && rowData.id) {
            updateStatus(rowData.id, "read");
        }
    };

    //handle Close Message
    const handleCloseMessage = async () => {
        if (!selectedMessage?.id) return;

        updateStatus(selectedMessage.id, "closed");

        setSelectedMessage({
            ...selectedMessage,
            status: "closed"
        });
    };

    const handleMarkAsRead = async () => {
        if (!selectedMessage?.id) return;

        updateStatus(selectedMessage.id, "read");
        setSelectedMessage({
            ...selectedMessage,
            status: "read"
        });
    };

    const handleCopy = () => {
        if (!selectedMessage?.email) return;
        navigator.clipboard.writeText(selectedMessage.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    //Counter
    const newMessagesCount = messages.filter(
        (msg) => msg.status === "new"
    ).length;

    useEffect(() => {
        if (prevCount === 0) {
            setPrevCount(newMessagesCount);
            return;
        }

        if (newMessagesCount > prevCount) {
            playNotificationSound();

            toast.success("New message received 📩")
        }

        setPrevCount(newMessagesCount);
    }, [newMessagesCount, prevCount]);

    useEffect(() => {
        initNotificationSound();
    }, []);


    const handleSendReply = async () => {
        if (!selectedMessage?.email || !replyText.trim()) {
            toast.error("Write a message first");
            return;
        }

        try {
            setSending(true);

            await emailjs.send(
                "service_lk6jx1e", // 👈 حط بتاعك
                "template_g9bv99k", // 👈 حط بتاعك
                {
                    to_email: selectedMessage.email,
                    message: replyText,
                    from_name: "Support Team"
                },
                "1wtAkqRzMP0zqrDeN" // 👈 حط بتاعك
            );

            toast.success("Reply sent successfully ✅");

            setReplyText("");

        } catch (error) {
            console.error(error);
            toast.error("Failed to send ❌");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="contact-message">
            <div className="header-container">
               <div className="header">
                  <h1>Incoming Contact Messages</h1>
                  <p>Displays all user messages, allowing admins to review inquiries and respond efficiently.</p>
               </div>

                <button className="btn-message">
                    New Messages: <span>{newMessagesCount}</span>
                </button>
            </div>

            <div className="search-filter">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn-search">
                        <img src={search} alt="search" />
                    </button>
                </div>

                <div className="filter-container">
                    <FilterMessage setStatusFilter={setStatusFilter}
                    />
                </div>
            </div>

            <GridComponent dataSource={filteredMessages} gridLines="None">
                <ColumnsDirective>
                    <ColumnDirective
                        field="name"
                        headerText="Client Name"
                        textAlign="Left"
                        width="100"
                    />

                    <ColumnDirective
                        field="subject"
                        headerText="Subject"
                        textAlign="Left"
                        width="150"
                    />

                    <ColumnDirective
                        field="createdAt"
                        headerText="Date/Time"
                        textAlign="Left"
                        width="150"
                        template={({ createdAt }: { createdAt: string }) => formatDate(createdAt)}
                    />

                    <ColumnDirective
                        field="status"
                        headerText="Status Messages"
                        textAlign="Left"
                        width="100"
                        template={({ status }: any) => (
                            <article className={cn('status-column', status === "new" ? "bg-green-100" : status === "read" ? "bg-blue-100" : "bg-gray-200")}>
                                <div className={cn('size-1.5 rounded-full', status === "new" ? "bg-green-700" : status === "read" ? "bg-blue-700" : "bg-gray-900")} />
                                <h3 className={cn('font-inter text-xs font-medium', status === "new" ? "text-green-900" : status === "read" ? "text-blue-900" : "text-gray-600")}>{status}</h3>
                            </article>
                        )}
                    />

                    <ColumnDirective
                        headerText="Action"
                        textAlign="Left"
                        width="100"
                        template={(props: Message) => <ActionTemplate rowData={props} onView={handleView} />}
                    />
                </ColumnsDirective>
            </GridComponent>


            {/*Modal*/}
            <AnimatePresence>
                {open && selectedMessage && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            className="modal"
                            initial={{ y: 40, scale: 0.9, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 40, scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-container">
                                <div className="modal-header">
                                    <h3>Messages Details</h3>
                                    <button type="button" onClick={() => setOpen(false)} className="btn-closed">
                                        <img src={closed} alt={closed}/>
                                    </button>
                                </div>

                                <div className="content-container">


                                <div className="modal-name">
                                    <img src={user} alt="imag-Users" />
                                    <div className="name-time">
                                        <h2>{selectedMessage.name}</h2>
                                        <p><strong>Sent:</strong> {formatDate(selectedMessage.createdAt)}</p>
                                    </div>
                                </div>

                                <div className="subject-company">
                                    <div className="subject">
                                        <h2>Subject:</h2>
                                        <p className="content-message">{selectedMessage.subject}</p>
                                    </div>

                                    <div className="subject">
                                        <h2>Phone Number:</h2>
                                        <p className="content-message">{selectedMessage.phone}</p>
                                    </div>
                                </div>

                                    <div className="modal-messages">
                                        <h2>Messages:</h2>
                                        <p className="content-message">{selectedMessage.message}</p>
                                    </div>

                                    <div className="modal-email-replayMessage">
                                        <div className="modal-email">
                                          <h2>Email Address:</h2>
                                          <p className="content-message">
                                              {selectedMessage.email}
                                              <button type="button" className="btn-copy" onClick={handleCopy}>
                                                  <img src={copied ? check : copy} alt="Copy" />
                                              </button>
                                          </p>

                                            <div className="mark-as">
                                                <div className="read as" onClick={handleMarkAsRead}>
                                                    <h4>Mark as Read</h4>
                                                    <img src={markRead} alt="Mark as Read"/>
                                                </div>

                                                <div className="closed as" onClick={handleCloseMessage}>
                                                    <h4>Mark as Closed</h4>
                                                    <img src={markClosed} alt="Mark as Closed"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="replay-messages">
                                            <div className="replay-title">
                                                <h2>Respond to Client</h2>
                                                <img src={replay} alt="Replay"/>
                                            </div>

                                            <textarea
                                                placeholder="Write your message..."
                                                rows={10}
                                                value={replyText}
                                                onChange={(e) => setReplyText(e.target.value)}
                                            />
                                            <button
                                                className="btn-message-contact-replay"
                                                onClick={handleSendReply}
                                                disabled={sending}
                                            >
                                                {sending ? <PulseLoader /> : "Send Message"}
                                                <img src={send} alt="send Message"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
export default ContactMessage
