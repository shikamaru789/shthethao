import { MatchItemProps } from "@/interface";
import moment from "moment";
import { useState } from "react";
import RoundItem from "../RoundItem";
const LeagueSubHead = ({
  icon,
  title,
  listMatch,
  type,
}: {
  icon: string;
  title: string;
  listMatch: MatchItemProps[];
  type: string;
}) => {
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

  const exportRoundLeague = () => {
    return Array.isArray(listMatch)
      ? groupBy(
          listMatch.sort((a, b) => b.event_timestamp - a.event_timestamp),
          (p) => p.round
        )
      : [];
  };

  const exportGroupDate = () => {
    return Array.isArray(listMatch)
      ? groupBy(
          listMatch.sort((a, b) => a.event_timestamp - b.event_timestamp),
          (p) => moment(p.event_date).format("DD-MM-YYYY")
        )
      : {};
  };

  const [objectDate, setObjectDate] = useState(exportGroupDate());
  const [selectedDate, setSelectedDate] = useState(
    type === "result" ? Object.keys(objectDate).length - 1 : 0
  );

  return (
    <div className="league-item">
      <div className="league-header-item">
        <div className="right league-subhead">
          <i className={icon} style={{ color: "#59c541" }}></i>
          <div className="subhead-title">{title}</div>
        </div>
        <div className="left subhead-menu">
          <button
            className="btn-league btn-prev"
            onClick={() => setSelectedDate(selectedDate - 1)}
            disabled={Object.keys(objectDate)[selectedDate - 1] === undefined}
          >
            {"<"}
          </button>
          <div>{Object.keys(objectDate)[selectedDate]}</div>
          <button
            className="btn-league btn-next"
            onClick={() => setSelectedDate(selectedDate + 1)}
            disabled={Object.keys(objectDate)[selectedDate + 1] === undefined}
          >
            {">"}
          </button>
        </div>
      </div>
      {Object.keys(
        groupBy(Object.values(objectDate)[selectedDate], (p) => p.round)
      ).map((itemRound, index) => {
        return (
          <RoundItem
            round={itemRound}
            listMatch={
              Object.values(
                groupBy(Object.values(objectDate)[selectedDate], (p) => p.round)
              )[index]
            }
          />
        );
      })}
      {/* {Object.values(objectDate)[selectedDate]?.map((itemMatch) => {
        let matchRound = groupBy(itemMatch,(p) => p.round)
        return <></>;
      })} */}
    </div>
  );
};

export default LeagueSubHead;
