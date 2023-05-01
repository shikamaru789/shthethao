import MainLayout from "@/Layout/MainLayout"
import { MatchItemProps } from "@/interface"
import { getSchedule } from "@/stores/footballs.stores"
import moment from "moment"
import { GetServerSidePropsContext } from "next"

const Schedule = ({ listPending }: { listPending: MatchItemProps[] }) => {
    function groupBy<T>(arr: T[], fn: (item: T) => any) {
        if (Array.isArray(arr)) {
            return arr.reduce<Record<string, T[]>>((prev, curr) => {
                const groupKey = fn(curr);
                const group = prev[groupKey] || [];
                group.push(curr);
                return { ...prev, [groupKey]: group };
            }, {});
        } else {
            return {};
        }
    }
    const data = groupBy(listPending, (p) => moment(p.event_date).endOf("day").toISOString());

    return <MainLayout>
        <div className="home-page-wrapper">
            <div className="home-page mx-auto">
                <div className="mt-4 px-3 md:px-0">
                    <h1 className="title-seagame-schedule-page">
                        Lịch thi đấu bóng đá
                    </h1>
                    <hr className="my-4" />
                    <div className="grid grid-cols-12 mt-4">
                        <div className="col-span-12 md:col-span-8">
                            <div className="schedule-seagame-wrapper">
                                
                                {Object.keys(data)?.map((item: any, index) => (
                    <div className="schedule-seagame-item" key={index}>
                      <div className="title-schedule-seagame">
                        {moment(item).format("dddd DD/MM/YYYY")}
                      </div>

                      <div>
                        {Object.values(data)[index]?.map((match: any, index: number) => (
                          <div
                            className="match-schedule-seagame-item"
                            key={index}
                          >
                            <div className="grid grid-cols-5 py-2 px-4">
                              <div className="col-span-1 md:col-span-1">
                                {/* {match?.league_id} */}
                              </div>
                              <div className="col-span-4 md:col-span-4">
                                <div className="d-flex align-items-center">
                                  <div className="d-flex align-items-center justify-content-end team-a">
                                    <div className="font-semibold team-name">{match?.home_team.name}</div>
                                    <div>
                                      <img
                                        className="ms-2"
                                        src={match?.home_team.logo}
                                        alt={match?.home_team.name}
                                      />
                                    </div>
                                  </div>
                                  <div className="seagame-tiso text-center fw-bolder font-semibold">
                                    {moment(match?.event_date).format("hh:mm")}
                                  </div>
                                  <div className="d-flex align-items-center justify-content-start team-b">
                                    <div>
                                      <img
                                        className="me-2"
                                        src={match?.away_team.logo}
                                        alt={match?.away_team.name}
                                      />
                                    </div>
                                    <div className="font-semibold team-name">{match?.away_team.name}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}


export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let listPending = await getSchedule();

    return {
        props: {
            listPending: listPending || []
        }
    }
}
export default Schedule