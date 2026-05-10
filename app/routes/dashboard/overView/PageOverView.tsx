import type {Route} from "../../+types/home"

export function meta({}: Route.MetaArgs) {
    return [
        {
            title: "Dashboard"
        },
        {
            name: "description",
            content:
                "Manage engineering consultations, users, and requests through a powerful and modern dashboard system designed for efficient workflow and real-time updates."
        }
    ];
}

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
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import { subscribeToDashboardStats } from "../../../../src/firebase/services/dashboardService";
import {useState, useEffect} from "react";
import Loader from "~/components/loader/Loader";
import {
    subscribeUsersAnalytics,
    subscribeConsultationsAnalytics
} from "src/firebase/services/graph";

const PageOverView = () => {

    const { t } = useTranslation();

    const [dashboardStats, setDashboardStats] = useState<any>(null);
    const [userGrowth, setUserGrowth] = useState([]);
    const [consultationsGrowth, setConsultationsGrowth] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe =
            subscribeToDashboardStats((stats) => {

                setDashboardStats(stats);
                setLoading(false);
            });

        return () => unsubscribe();

    }, []);
    useEffect(() => {

        const unsubUsers =
            subscribeUsersAnalytics(setUserGrowth);

        const unsubConsult =
            subscribeConsultationsAnalytics(setConsultationsGrowth);

        return () => {
            unsubUsers();
            unsubConsult();
        };

    }, []);


    if (loading) {
        return <Loader />;
    }

    const { totalUsers, usersJoined, totalMessages, messagesSent, totalConsultations, consultationsReceived } = dashboardStats;


    return (
        <div className="page-overview">
            <div className="header">
                <h1>{t("dashboard.title-1")}</h1>
                <p>{t("dashboard.pra-1")}</p>
            </div>

            <section className="flex flex-col gap-6 px-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle={t("dashboard.total-users")}
                        total={totalUsers}
                        currenMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle={t("dashboard.total-messages")}
                        total={totalMessages}
                        currenMonthCount={messagesSent.currentMonth}
                        lastMonthCount={messagesSent.lastMonth}
                    />
                    <StatsCard
                        headerTitle={t("dashboard.total-consultation")}
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
                    enableRtl={i18n.language === "ar"}
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
                            name="Wave"
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
                    enableRtl={i18n.language === "ar"}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={consultationsGrowth}
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
                            dataSource={consultationsGrowth}
                            xName="day"
                            yName="count"
                            type="SplineArea"
                            name="Wave"
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
