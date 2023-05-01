import Link from "next/link";
import SportCalendarItem from "./SportCalendarItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import getLeagueById from "@/helper/getLeagueById";
import moment from "moment";
import { MatchItemProps } from "@/interface";
import { useMemo } from "react";
import { formatDate, genDateToVietnamese } from "@/helper";

const SportCalendar = ({ matches }: { matches: any }) => {
  const data = useMemo(() => {
    const list: any[] = Object.values(matches);

    const resultMatch = list.filter((item) => !item?.score?.fulltime);
    const result = list.filter((item) => item?.score?.fulltime);

    resultMatch.sort((a, b) => a?.event_timestamp - b?.event_timestamp);

    result.sort((a, b) => b?.event_timestamp - a?.event_timestamp);
    return resultMatch?.slice(0, 10).concat(result?.slice(0, 2));
  }, [matches]);

  const getScore = (match: MatchItemProps) => {
    return {
      home: match.score?.fulltime?.split("-")?.[0],
      away: match.score?.fulltime?.split("-")?.[1],
    };
  };
  return (
    <div
      className="sport-calendar flex mt-4 mx-auto"
      id="swiper-sport-calendar"
    >
      <Swiper
        slidesPerView={2}
        modules={[Navigation]}
        navigation
        breakpoints={{
          1080: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((match: any) => (
          <SwiperSlide>
            <div className="calendar-item flex">
              <SportCalendarItem
                date={formatDate(new Date(match?.event_date))}
                key={match?.fixture_id}
                round=""
                url={`/the-thao/chi-tiet-tran/${match.fixture_id}`}
                home={match?.home_team?.team_name}
                away={match?.away_team?.team_name}
                homeLogo={match?.home_team?.logo}
                awayLogo={match?.away_team?.logo}
                league={getLeagueById(match?.league_id)?.label || ""}
                //@ts-ignore
                score={
                  match?.score
                    ? { home: getScore(match).home, away: getScore(match).away }
                    : { home: "-", away: "-" }
                }
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="show-more-button-wrapper flex items-center flex-1 h-full">
            <Link href={"/lich-thi-dau"}>
              <div className="show-more-button rounded-3xl">
                <span>XEM TẤT CẢ</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SportCalendar;
