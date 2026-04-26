import "./users.scss";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {cn, formatDate} from "~/lib/utils";
import {useState, useEffect} from "react";
import {getUsers} from "../../../../src/get-data/getUsers";
import { useRef } from "react";
import PulseLoader from "~/components/loader/PulseLoader";

type UserData = {
    id: string; // 🔥 مهم
    name: string;
    email: string;
    createdAt: Date;
    role: string;
    imageUrl: string;
};

const Users = () => {

    const [allUsers, setAllUsers] = useState<UserData[]>([]);
    const [lastDoc, setLastDoc] = useState<any>(null);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);


    const pageSize = 10;

    const loadUsers = async () => {
        if (!hasMore || loading) return;

        setLoading(true);

        const res = await getUsers({
            pageSize,
            lastDoc,
        });

        setAllUsers(prev => {
            const newUsers = res.users.filter(
                user => !prev.find(p => p.id === user.id)
            );
            return [...prev, ...newUsers];
        });

        setLastDoc(res.lastDoc);
        setHasMore(res.hasMore);

        setLoading(false);
    };

    // ✅ بعد الفنكشن
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;

        loadUsers();
        hasFetched.current = true;
    }, []);

    return (
        <div className="all-users wrapper">
            <div className="header">
                <h1>Manage Users</h1>
                <p>Filter, sort, and access detailed user profiles</p>
            </div>

            <GridComponent dataSource={allUsers} gridLines="None">
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
                        field="createdAt"
                        headerText="Date Joined"
                        width={150}
                        template={(props: UserData) => (
                            <span>{formatDate(props.createdAt)}</span>
                        )}
                    />

                    <ColumnDirective
                        field="role"
                        headerText="Type"
                        width="100"
                        textAlign="Left"
                        template={({ role }: UserData) => (
                            <article className={cn('status-column', role === 'user' ? 'bg-green-200' : 'bg-gray-200')}>
                                <div className={cn('size-1.5 rounded-full', role === 'user' ? 'bg-green-500': 'bg-gray-500')} />
                                    <h3 className={cn('font-inter text-xs font-medium', role === 'user' ? 'text-green-700' : 'text-gray-700')}>
                                        {role}
                                    </h3>
                            </article>
                        )}
                    />
                </ColumnsDirective>
            </GridComponent>

            {hasMore && (
                <button onClick={loadUsers} disabled={loading} className="btn-load-more">
                    {loading ? <PulseLoader color="#ccc"/> : "Load More"}
                </button>
            )}
        </div>
    )
}
export default Users
