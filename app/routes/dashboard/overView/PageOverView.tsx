import "./page-overview.scss";
import StatsCard from "~/routes/dashboard/components/StatsCard";

const PageOverView = () => {

    const dashboardStats = {
        totalUsers: 12450,
        usersJoined: { currentMonth: 218, lastMonth: 176 },
        totalMessages: 3210,
        messagesSent: { currentMonth: 150, lastMonth: 250 },
        totalConsultations: 1500,
        consultationsReceived: { currentMonth: 100, lastMonth: 150 },
    }

    const { totalUsers, usersJoined, totalMessages, messagesSent, totalConsultations, consultationsReceived } = dashboardStats;


    return (
        <div className="page-overview">
            <div className="header">
                <h1>Welcome to the Dashboard</h1>
                <p>Here you can monitor key data, review incoming requests, and manage messages and consultations efficiently from one place.</p>
            </div>

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currenMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Messages"
                        total={totalMessages}
                        currenMonthCount={messagesSent.currentMonth}
                        lastMonthCount={messagesSent.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Consultation"
                        total={totalConsultations}
                        currenMonthCount={consultationsReceived.currentMonth}
                        lastMonthCount={consultationsReceived.lastMonth}
                    />
                </div>
            </section>
        </div>
    )
}
export default PageOverView
