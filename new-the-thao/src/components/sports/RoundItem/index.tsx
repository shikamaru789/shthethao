import { MatchItemProps } from "@/interface";
import MatchItem from "../MatchItem";

const RoundItem = ({
  round,
  listMatch,
}: {
  round: string;
  listMatch: MatchItemProps[];
}) => {
  return (
    <div className="round-item">
      <p style={{ marginBottom: "1rem" }}>{round}</p>

      {listMatch?.map((item) => {
        return (
          <MatchItem
            time={item.event_date.toString()}
            home={item.home_team.name}
            away={item.away_team.name}
            logoHome={item.home_team.logo}
            logoAway={item.away_team.logo}
            score={item.score}
            fixture_id={item.fixture_id}
            style={{}}
          />
        );
      })}
    </div>
  );
};

export default RoundItem;
