import { ISportItemProps } from "@/interface";
import Link from "next/link";
import VerticalDivider from "@/components/common/Divider/VerticalDivider";
import { genDateToVietnamese, reverseDate } from "@/helper";

const SportCalendarItem = (props: ISportItemProps) => {
  return (
    <Link href={`${props?.url}`}>
      <div className="flex w-full">
        <div className="sport-calendar-item flex flex-col  flex-1">
          <div className="sport-league">
            <p className="sport-league-name">{props.league}</p>
          </div>
          <div className="sport-result flex mt-3 justify-between items-center">
            <div className="sport-result-logo">
              <div className="sport-result-logo-team-home flex gap-2">
                <img className="w-6" src={props.homeLogo} />
                <span className="font-bold team-name">{props.home}</span>
              </div>
              <div className="sport-result-logo-team-away flex gap-2 mt-2">
                <img className="w-6" src={props.awayLogo} />
                <span className="font-bold team-name">{props.away}</span>
              </div>
            </div>
            <div className="sport-result-score">
              <div className="sport-result-home-score">
                <span>{props?.score?.home ? props.score.home : "-"}</span>
              </div>
              <div className="sport-result-away-score">
                <span>{props?.score?.away ? props.score.away : "-"}</span>
              </div>
            </div>
          </div>
          <div className="sport-league-round">{props.date}</div>
        </div>
        <VerticalDivider />
      </div>
    </Link>
  );
};

export default SportCalendarItem;
