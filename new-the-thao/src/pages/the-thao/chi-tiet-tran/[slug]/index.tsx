import MainLayout from "@/Layout/MainLayout";
import SportLayout from "@/Layout/SportLayout";
import EventTab from "@/containers/MatchDetail/EventTab";
import LineUpTab from "@/containers/MatchDetail/LineUpTab";
import StatsTab from "@/containers/MatchDetail/StatsTab";
import { genDateToVietnamese, genRound } from "@/helper";
import { LeagueConstants } from "@/interface/constanst";
import {
  getDetailsLeague,
  getEventMatch,
  getMatchDetails,
  getStandingByLeague,
  getStatsMatch,
} from "@/stores/footballs.stores";
import moment from "moment";
import { GetServerSideProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useState, useMemo } from "react";
import { BiFootball } from "react-icons/bi";

type Props = {
  event: any;
  stats: any;
  matchDetail: any;
  leagueDetail: any;
  standing: any;
};

const MatchDetails = ({
  event,
  stats,
  matchDetail,
  leagueDetail,
  standing,
}: Props) => {
  const [tab, setTab] = useState("stat");

  const handleChangeTab = (value: string) => {
    setTab(value);
  };

  const goals = () => {
    if (!event?.length)
      return {
        home: [],
        away: [],
      };

    const homeId = matchDetail?.home_team?.team_id;
    const awayId = matchDetail?.away_team?.team_id;

    const home: any = [];
    event?.forEach((item: any) => {
      if (
        item?.team_id === homeId &&
        item?.type === "Goal" &&
        !home.find((e: any) => e?.elapsed === item?.elapsed) &&
        !item?.detail?.includes("Missed")
      ) {
        home.push(item);
      }
    });

    const away: any = [];
    event?.forEach((item: any) => {
      if (
        item?.team_id === awayId &&
        item?.type === "Goal" &&
        !away.find((e: any) => e?.elapsed === item?.elapsed) &&
        !item?.detail?.includes("Missed")
      ) {
        away.push(item);
      }
    });

    return {
      home,
      away,
    };
  };

  const render = {
    stat: (
      <StatsTab
        stats={stats}
        matchDetail={matchDetail}
        standing={standing}
        leagueDetail={leagueDetail}
      />
    ),
    lineup: (
      <LineUpTab
        lineups={stats?.lineups}
        players={stats?.players}
        matchDetail={matchDetail}
      />
    ),

    event: (
      <EventTab
        event={event}
        matchDetail={matchDetail}
        lineups={stats?.lineups}
      />
    ),
  };

  return (
    <MainLayout>
      <SportLayout>
        <div className="league-header">
          <div className="wrap-block-league">
            <Link href={`/the-thao/chi-tiet-giai/${leagueDetail.league_id}`}>
              <span className="sport-icon">
                <img
                  src={leagueDetail.logo}
                  alt={LeagueConstants[leagueDetail.league_id]}
                  width={48}
                  height={48}
                />
              </span>
            </Link>
            <Link href={`/the-thao/chi-tiet-giai/${leagueDetail.league_id}`}>
              <h1 className="league-name">
                {LeagueConstants[leagueDetail.league_id]}
              </h1>
            </Link>
          </div>
        </div>

        <div
          className={"wrapper-block-match-detail"}
          style={{ padding: "0px" }}
        >
          <div className={"match-detail-info-header"}>
            {genDateToVietnamese(matchDetail?.event_date)},{" "}
            {moment(matchDetail?.event_date).format("DD/MM/YYYY, HH:mm")} -{" "}
            {genRound(matchDetail?.round_int, matchDetail?.round)}
          </div>

          <div className={"match-detail-info"}>
            <img
              className={"logo-left"}
              src={matchDetail?.home_team?.logo}
              alt=""
            />
            <img
              className={"logo-right"}
              src={matchDetail?.away_team?.logo}
              alt=""
            />

            <div style={{ display: "flex", marginTop: "-30px" }}>
              <div className={"team-trandau-home"}>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={matchDetail?.home_team?.logo}
                      alt={matchDetail?.home_team?.name}
                    />
                    <div style={{ whiteSpace: "nowrap" }}>
                      {matchDetail?.home_team?.name}
                    </div>
                  </div>

                  <div className="wrapper-event-goal">
                    {goals()?.home?.map((e: any, index: number) => (
                      <div className="event-goal-item">
                        <div>
                          {e?.player} ({e?.elapsed}')
                        </div>
                        <BiFootball style={{ marginLeft: "8px" }} size={16} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {matchDetail?.score ? (
                <div className={"team-trandau-tiso"}>
                  <div
                    style={{
                      background: "#3E506D",
                      padding: "4px 6px",
                      fontWeight: "500",
                      color: "#fff",
                      fontSize: "14px",
                      borderRadius: "6px",
                    }}
                    className={"team-trandau-tiso-finish"}
                  >
                    Kết thúc
                  </div>
                  <div
                    style={{
                      marginTop: "12px",
                      background: "#3E506D",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "32px",
                      width: "100%",
                      textAlign: "center",
                      borderRadius: "6px",
                    }}
                    className={"team-trandau-tiso-fulltime"}
                  >
                    {matchDetail?.score?.fulltime?.replace("-", " - ")}
                  </div>
                  <div
                    className={"team-trandau-tiso-halftime"}
                    style={{ marginTop: "6px" }}
                  >
                    Hiệp 1: {matchDetail?.score?.halftime?.replace("-", " - ")}
                  </div>
                </div>
              ) : (
                <div className={"team-trandau-tiso"}>
                  <div
                    style={{
                      marginTop: "24px",
                      background: "#3E506D",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "32px",
                      width: "100%",
                      textAlign: "center",
                      borderRadius: "6px",
                    }}
                    className={"team-trandau-tiso-fulltime"}
                  >
                    {moment(new Date(matchDetail?.event_date)).format(
                      "HH : mm"
                    )}
                  </div>
                </div>
              )}

              <div className={"team-trandau-away"}>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ whiteSpace: "nowrap" }}>
                      {matchDetail?.away_team?.name}
                    </div>
                    <img
                      src={matchDetail?.away_team?.logo}
                      alt={matchDetail?.away_team?.name}
                    />
                  </div>

                  <div className="wrapper-event-goal start">
                    {goals()?.away?.map((e: any, index: number) => (
                      <div className="event-goal-item start">
                        <BiFootball style={{ marginRight: "8px" }} size={16} />
                        <div>
                          {e?.player} ({e?.elapsed}')
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"wrapper-block-match-detail"}>
          <div className={"stat-header"}>
            <button
              disabled={Boolean(!event?.length)}
              onClick={() => handleChangeTab("event")}
              className={`${tab === "event" ? "active" : ""} ${
                Boolean(!event?.length) ? "disable" : ""
              }`}
            >
              Diễn biến
            </button>
            <button
              onClick={() => handleChangeTab("stat")}
              className={`${tab === "stat" ? "active" : ""}`}
              style={{ margin: "0px 8px" }}
            >
              Thống kê
            </button>
            <button
              disabled={Boolean(!matchDetail?.score)}
              onClick={() => handleChangeTab("lineup")}
              className={`${tab === "lineup" ? "active" : ""} ${
                Boolean(!event?.length) ? "disable" : ""
              }`}
            >
              Đội hình ra sân
            </button>
          </div>

          {render[tab as "stat" | "event" | "lineup"]}
        </div>
      </SportLayout>
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx: GetStaticPropsContext) => {
  const id = ctx.params?.slug;
  const event = (await getEventMatch(Number(id)))?.data || [];
  const stats = (await getStatsMatch(Number(id))).data?.[0] || {};

  const matchDetail = (await getMatchDetails(Number(id)))?.data || {};
  const leagueDetail = await getDetailsLeague(Number(matchDetail?.league_id));
  const standingRes = await getStandingByLeague([leagueDetail?.league_id]);
  const standing = Object.keys(standingRes)?.length > 0 ? standingRes?.[leagueDetail?.league_id] : [];
  
  return {
    props: {
      event,
      stats,
      matchDetail,
      leagueDetail,
      standing,
    },
  };
};

export default MatchDetails;
