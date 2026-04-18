import "./page-overview.scss";
import StatsCard from "~/routes/dashboard/components/StatsCard";
import {
    ChartComponent,
    ColumnSeries,
    DataLabel,
    Category,
    Inject,
    SplineAreaSeries,
    Tooltip,
    SeriesCollectionDirective, SeriesDirective
} from "@syncfusion/ej2-react-charts";
import {consultXAxis, consultYAxis, userXAxis, userYAxis} from "~/constants";

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


    const userGrowth = [
        { day: "Sat", count: 20 },
        { day: "Sun", count: 35 },
        { day: "Mon", count: 20 },
        { day: "Tue", count: 40 },
        { day: "Wed", count: 32 },
        { day: "Thu", count: 50 },
        { day: "Fri", count: 45 },
    ];

    // ============Consultation==============

    const consultations = [
        { day: "Sat", count: 10 },
        { day: "Sun", count: 15 },
        { day: "Mon", count: 12 },
        { day: "Tue", count: 18 },
        { day: "Wed", count: 14 },
        { day: "Thu", count: 20 },
        { day: "Fri", count: 16 },
    ];

    return (
        <div className="page-overview">
            <div className="header">
                <h1>Welcome to the Dashboard</h1>
                <p>Here you can monitor key data, review incoming requests, and manage messages and consultations efficiently from one place.</p>
            </div>

            <section className="flex flex-col gap-6 px-1">
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

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-12">
                <ChartComponent
                    id="chart-1"
                    primaryXAxis={userXAxis}
                    primaryYAxis={userYAxis}
                    title="Users Joined"
                    tooltip={{ enable: true }}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={userGrowth}
                            xName="day"
                            yName="count"
                            name="Column"
                            type="Column"
                            columnWidth={0.3}
                            cornerRadius={{ topLeft: 10, topRight: 10 }}
                            marker={{
                                dataLabel: {
                                    visible: true,
                                    position: "Top",
                                    font: { fontWeight: "500", color: "#16406a" }
                                }
                            }}
                        />

                        <SeriesDirective
                            dataSource={userGrowth}
                            xName="day"
                            yName="count"
                            type="SplineArea"
                            name="ًًWave"
                            fill="rgba(71, 132, 238, 0.3)"
                            border={{ width: 2, color: '#4784EE'}}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>

                {/*==================Consultation=================*/}

                <ChartComponent
                    id="chart-2"
                    primaryXAxis={consultXAxis}
                    primaryYAxis={consultYAxis}
                    title="Consultation Received"
                    tooltip={{ enable: true }}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={consultations}
                            xName="day"
                            yName="count"
                            name="day"
                            type="Column"
                            columnWidth={0.3}
                            cornerRadius={{ topLeft: 10, topRight: 10 }}
                            marker={{
                                dataLabel: {
                                    visible: true,
                                    position: "Top",
                                    font: { fontWeight: "500", color: "#16406a" }
                                }
                            }}

                        />

                        <SeriesDirective
                            dataSource={consultations}
                            xName="day"
                            yName="count"
                            type="SplineArea"
                            name="ًًWave"
                            fill="rgba(71, 132, 238, 0.3)"
                            border={{ width: 2, color: '#4784EE'}}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </section>
        </div>
    )
}
export default PageOverView
