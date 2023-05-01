import Dot from "@/components/common/Dot"
import { listChampionLeague } from "@/helper"
import getLeagueById from "@/helper/getLeagueById"
import Link from "next/link"


const ChartItem = ({tableData}:{tableData:any}) => {
    return (
        <div className="chart-item w-full h-full rounded-lg p-3" id="chart-item">
            <div className="chart-item-header flex justify-between">
                <div className="chart-item-league-name">
                    <span>{getLeagueById(tableData?.[0]?.league_id)?.label}</span>
                </div>
                <div className="chart-item-show-all">
                    <Link href={'#'}>
                        Xem tất cả
                    </Link>
                </div>
            </div>
            <div className="chart-item-table mt-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Club</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((item:any, index:number) => <tr key={item?._id}>
                            <td><div className="flex items-center gap-2"><Dot color={index == 4 ? "yellow" : "#00D1FF"}/><img src={item?.logo} className="w-6"/><p className="chart-club-name">{item?.team_name}</p></div></td>
                            <td>{item?.all?.win || 0}</td>
                            <td>{(item?.all?.matchs_played || 0) - (item?.all?.win || 0) - (item?.all?.lose || 0)}</td>
                            <td>{item?.all?.lose || 0}</td>
                            <td>{item.points || 0}</td>
                        </tr>)}
                    </tbody>
                </table>
                {listChampionLeague.includes(tableData?.[0]?.league_id) &&  <div className="chart-item-note flex justify-center gap-2 mt-8">
                    <div className="note-c1 flex items-center gap-1">
                        <Dot color="#00D1FF"/> UEFA Champions League
                    </div>
                    <div className="note-c2 flex items-center gap-1">
                        <Dot color="yellow"/> UEFA Europa League
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ChartItem