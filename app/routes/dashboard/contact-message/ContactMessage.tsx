import "./contact-message.scss";
import search from "/assets/icons/search.svg";
import FilterMessage from "~/routes/components/material-ui/FilterMessage";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {message} from "~/constants";
import {cn, formatDate} from "~/lib/utils";

const ContactMessage = () => {
    return (
        <div className="contact-message">
            <div className="header-container">
               <div className="header">
                  <h1>Incoming Contact Messages</h1>
                  <p>Displays all user messages, allowing admins to review inquiries and respond efficiently.</p>
               </div>

                <button className="btn-message">
                    New Messages: <span>5</span>
                </button>
            </div>

            <div className="search-filter">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                    />
                    <button className="btn-search">
                        <img src={search} alt="search" />
                    </button>
                </div>

                <div className="filter-container">
                    <FilterMessage />
                </div>
            </div>

            <GridComponent dataSource={message} gridLines="None">
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
                        field="dateJoined"
                        headerText="Date/Time"
                        textAlign="Left"
                        width="150"
                        template={({ dateJoined }: { dateJoined: string }) => formatDate(dateJoined)}
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
                        headerText="Details Messages"
                        textAlign="Left"
                        width="100"
                    />



                </ColumnsDirective>
            </GridComponent>
        </div>
    )
}
export default ContactMessage
