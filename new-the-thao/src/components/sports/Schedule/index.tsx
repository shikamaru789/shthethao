import React from "react";
import Link from "next/link";
import moment from "moment";
import { MatchItemProps } from "@/interface";

const Schedule = ({
  isHome,
  matchResult,
  listSchedule,
}: {
  isHome: boolean;
  matchResult: any;
  listSchedule: MatchItemProps[];
}) => {
  const date = moment(new Date()).format("DD-MM-YYYY");
  return (
    <div className={isHome ? "schedule" : "schedule-league"}>
      <div className="inner-block">
        <div className="header-content-block">
          <div className="left">
            <Link href={""}>
              <div className="text-point">Lịch đấu</div>
            </Link>
          </div>
          <div className="right">
            <div
              className="select-date"
              data-leagueid="4335"
              data-type="lichdau"
            >
              <a
                href="javascript:;"
                className="choose-date left"
                data-action="prev"
              >
                <span className="prev"></span>
              </a>
              <a
                href="javascript:;"
                className="choose-date right"
                data-action="next"
              >
                <span className="next"></span>
              </a>
              <span className="date" data-index="0" id="lichdau-4335">
                {date}
              </span>
            </div>
          </div>
        </div>
        <div className="round">
          {listSchedule?.map((item, index) => (
            <div key={index} className="teamid-34">
              <Link href={`/du-lieu-bong-da/${item.fixture_id}`}>
                <a className="doidau">
                  <div className="doibong">
                    <span className="name">{item?.home_team?.name}</span>
                    <span className="avatar">
                      <img
                        src={
                          item.home_team?.logo
                            ? item?.home_team?.logo
                            : "/no-logo.png"
                        }
                        alt={item?.home_team?.name}
                      />
                    </span>
                  </div>
                  <div className="ti-so">
                    <span className="so">
                      {moment(item.event_date).format("HH:mm")}
                    </span>
                  </div>
                  <div className="doibong-away">
                    <span className="avatar">
                      <img
                        src={
                          item?.away_team?.logo
                            ? item?.away_team?.logo
                            : "/no-logo.png"
                        }
                        alt={item.away_team.name}
                      />
                    </span>
                    <span className="name">{item?.away_team?.name}</span>
                  </div>
                </a>
              </Link>
              {/* <Link href="">
                       <a>
                         <div className={styles["doidaus"]}>
                           <div className={styles["text-trankhac"]}>
                             <div>...</div>
                             <div>2 trận khác cùng ngày</div>
                           </div>
                         </div>
                       </a>
                     </Link> */}
            </div>
          ))}
        </div>
        {/* <div className={styles["wrap-readmore"]}>
          <Link href="">
            <a className={styles["btnreadmore"]} data-tab="container-lichdau">
              <span>Xem tất cả</span>
              <span className={styles["btnreadmore-spam"]}>
                <IconRight />
              </span>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Schedule;
