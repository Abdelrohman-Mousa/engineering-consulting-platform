import "./users.scss";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {users} from "~/constants";
import {cn, formatDate} from "~/lib/utils";

type UserData = {
    name: string;
    email: string;
    dateJoined: Date;
    status: string;
    imageUrl: string;
};

const Users = () => {
    return (
        <div className="all-users wrapper">
            <div className="header">
                <h1>Manage Users</h1>
                <p>Filter, sort, and access detailed user profiles</p>
            </div>

            <GridComponent dataSource={users} gridLines="None">
                <ColumnsDirective>
                    <ColumnDirective
                       field="name"
                       headerText="Name"
                       width="200"
                       textAlign="Left"
                       template={(props: UserData) => (
                           <div className="flex items-center gap-1.5 px-4">
                               <img src={props.imageUrl} alt="user" className="size-8 rounded-full aspect-square" />
                               <span>{props.name}</span>
                           </div>
                       )}
                    />

                    <ColumnDirective
                        field="email"
                        headerText="Email Address"
                        width="150"
                        textAlign="Left"
                    />

                    <ColumnDirective
                        field="dateJoined"
                        headerText="Date Joined"
                        width={150}
                        template={(props: UserData) => (
                            <span>{formatDate(props.dateJoined)}</span>
                        )}
                    />

                    <ColumnDirective
                        field="status"
                        headerText="Type"
                        width="100"
                        textAlign="Left"
                        template={({ status }: UserData) => (
                            <article className={cn('status-column', status === 'user' ? 'bg-green-200' : 'bg-gray-200')}>
                                <div className={cn('size-1.5 rounded-full', status === 'user' ? 'bg-green-500': 'bg-gray-500')} />
                                    <h3 className={cn('font-inter text-xs font-medium', status === 'user' ? 'text-green-700' : 'text-gray-700')}>
                                        {status}
                                    </h3>
                            </article>
                        )}
                    />
                </ColumnsDirective>
            </GridComponent>
        </div>
    )
}
export default Users
