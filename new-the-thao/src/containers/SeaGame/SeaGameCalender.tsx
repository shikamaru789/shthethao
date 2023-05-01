import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import SportCalendarItem from "@/components/home/SportCalendar/SportCalendarItem";

type Props = {
  matches: any[];
};

function SeaGameCalender({ matches }: Props) {
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
        {matches?.map((match: any) => (
          <SwiperSlide>
            <div className="calendar-item flex">
              <SportCalendarItem
                date={match?.time_lichdau}
                key={match?.fixture_id}
                round=""
                url={`/the-thao/sea-games-32/lich-thi-dau`}
                home={match?.Team_A}
                away={match?.Team_B}
                homeLogo={match?.Flag_A}
                awayLogo={match?.Flag_B}
                league={match?.Bang_dau}
                score={
                    //   match?.score
                    // ? { home: getScore(match).home, away: getScore(match).away }
                    // :
                    //@ts-ignore
                  { home: "-", away: "-" }
                }
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="show-more-button-wrapper flex items-center flex-1 h-full">
            <Link href={"/the-thao/sea-games-32/lich-thi-dau"}>
              <div className="show-more-button rounded-3xl">
                <span>XEM TẤT CẢ</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SeaGameCalender;
