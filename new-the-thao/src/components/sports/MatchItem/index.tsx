import moment from "moment";
import Link from "next/link";

const MatchItem = ({
  time,
  home,
  away,
  logoHome,
  logoAway,
  score,
  fixture_id,
  style,
}: {
  time: string;
  home: string;
  away: string;
  logoHome: string;
  logoAway: string;
  score: {
    fulltime?: string;
    halftime?: string;
  };
  fixture_id: number;
  style: {};
}) => {
  return (
    <Link
      className="league-match-item"
      href={`/the-thao/chi-tiet-tran/${fixture_id}`}
      style={style}
    >
      {moment(time) < moment() && (
        <div className="time-left">{moment(time).format("HH:mm")}</div>
      )}
      <div className="team-item team-1">
        <div>{home}</div>
        <img width={20} height={20} src={logoHome} />
      </div>

      {moment(time) < moment() && (
        <div className="score">
          <div className="fullscore">{score?.fulltime}</div>
          <div className="halfscore">H1: {score?.halftime}</div>
        </div>
      )}
      {moment(time) > moment() && (
        <div className="time-center">{moment(time).format("HH:mm")}</div>
      )}

      <div className="team-item team-2">
        <img width={20} height={20} src={logoAway} />
        <div>{away}</div>
      </div>
    </Link>
  );
};

export default MatchItem;
