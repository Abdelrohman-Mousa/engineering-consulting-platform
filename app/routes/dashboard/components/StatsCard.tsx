import {calculateTrendPercentage, cn} from "~/lib/utils";

interface StatsCard {
    headerTitle: string;
    total: number;
    currenMonthCount: number;
    lastMonthCount: number;
}

const StatsCard = ({
    headerTitle,
    total,
    currenMonthCount,
    lastMonthCount, }: StatsCard) => {

    const { trend, percentage } = calculateTrendPercentage( currenMonthCount, lastMonthCount);

    const isDecrement = trend === "decrement";

    return (
        <article className="stats-card">
            <h3 className="text-base font-medium">
                {headerTitle}
            </h3>

            <div className="content">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-semibold">
                        {total}
                    </h2>

                    <div className="flex items-center gap-2">
                        <figure className="flex items-center gap-1">
                            <img src={`/assets/icons/${isDecrement ? 'arrow-down-red.png' : 'arrow-up-green.png'}`} className="size-5" alt="arrow" />

                            <figcaption className={cn('text-sm font-medium', isDecrement ? 'text-red-500' : 'text-green-700')}>
                                {Math.round(percentage)}%
                            </figcaption>
                        </figure>
                        <p className="text-sm font-medium text-gray-600 truncate">vs last month</p>
                    </div>
                </div>

                <img src={`/assets/icons/${isDecrement ? 'decrement.png' : 'increment.png'}`} className="xl:w-32 w-full h-full md:h-32 xl:h-full" alt="trend graphic" />
            </div>
        </article>
    )
}
export default StatsCard
