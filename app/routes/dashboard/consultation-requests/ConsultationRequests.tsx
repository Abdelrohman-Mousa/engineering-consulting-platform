import "./consultation-requests.scss";
import search from "/assets/icons/search.svg";

const ConsultationRequests = () => {
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
                    <input type="text" placeholder="Search by name, email, or country" />
                    <img src={search} alt="search" />
                </div>
            </div>
        </div>
    )
}
export default ConsultationRequests
