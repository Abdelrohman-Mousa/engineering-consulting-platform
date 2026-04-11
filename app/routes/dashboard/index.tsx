import { Outlet } from "react-router";

const Index = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    )
}
export default Index
