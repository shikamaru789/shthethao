import MainLayout from "@/Layout/MainLayout";
import SportLayout from "@/Layout/SportLayout";
import LeagueSubHead from "@/components/sports/LeagueSubHead";
import Schedule from "@/components/sports/Schedule";
import ScheduleAndResult from "@/components/sports/ScheduleAndResult";
import LeagueStanding from "@/components/sports/Standing";
import {
  LeagueItemProps,
  MatchItemProps,
  StandingItemProps,
} from "@/interface";
import { LeagueConstants } from "@/interface/constanst";
import {
  getDetailsLeague,
  getMatchFinish,
  getMatchPending,
  getStandingByLeague,
} from "@/stores/footballs.stores";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const LeagueDetails = ({
  league,
  listFinish,
  listPending,
  listStanding,
}: {
  league: LeagueItemProps;
  listFinish: MatchItemProps[];
  listPending: MatchItemProps[];
  listStanding: StandingItemProps[];
}) => {
  const [menu, setMenu] = useState(0);

  return (
    <MainLayout>
      <SportLayout>
        <div className="league-header">
          <div className="wrap-block-league">
            <Link href={`/the-thao/chi-tiet-giai/${league.league_id}`}>
              <span className="sport-icon">
                <img
                  src={league.logo}
                  alt={LeagueConstants[league.league_id]}
                  width={48}
                  height={48}
                />
              </span>
            </Link>
            <Link href={`/the-thao/chi-tiet-giai/${league.league_id}`}>
              <h1 className="league-name">
                {LeagueConstants[league.league_id]}
              </h1>
            </Link>

            <div className="wrap-button right">
              <button
                className={menu === 0 ? "button-link-active" : "button-link"}
                onClick={() => setMenu(0)}
              >
                <i className="fa-solid fa-bars fa-lg"></i>
              </button>
              <button
                className={menu === 1 ? "button-link-active" : "button-link"}
                onClick={() => setMenu(1)}
              >
                Kết quả
              </button>
              <button
                className={menu === 2 ? "button-link-active" : "button-link"}
                onClick={() => setMenu(2)}
              >
                Bảng Điểm
              </button>
              <button
                className={menu === 3 ? "button-link-active" : "button-link"}
                onClick={() => setMenu(3)}
              >
                Lịch đấu
              </button>
            </div>
          </div>
        </div>
        {menu === 0 && (
          <div className="league-header grid grid-cols-2 gap-4 p-6">
            <LeagueSubHead
              title="Kết quả"
              listMatch={listFinish}
              icon="fa-solid fa-globe"
              type="result"
            />
            <LeagueSubHead
              title="Lịch thi đấu"
              listMatch={listPending}
              icon="fa-regular fa-calendar-days"
              type=""
            />
          </div>
        )}
        {menu === 1 && (
          <ScheduleAndResult type="result" dataMatch={listFinish} />
        )}
        {menu === 2 && (
          <LeagueStanding data={listStanding} league_detail={league} />
        )}
        {menu === 3 && (
          <ScheduleAndResult type="schedule" dataMatch={listPending} />
        )}
      </SportLayout>
    </MainLayout>
  );
};

export async function getServerSideProps(ctx: GetStaticPropsContext) {
  let id = Number(ctx.params?.slug);
  let leagueDetail = await getDetailsLeague(id);
  let leagueFinishMatch = await getMatchFinish(id, 50, 1);
  let leaguePendingMatch = await getMatchPending(id, 50, 1);
  let leagueStanding = await getStandingByLeague(id);

  return {
    props: {
      league: leagueDetail || {},
      listFinish: leagueFinishMatch.data || [],
      listPending: leaguePendingMatch.data || [],
      listStanding: Object.values(leagueStanding)[0] || [],
    },
  };
}

export default LeagueDetails;
