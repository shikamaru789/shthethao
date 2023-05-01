import { MatchItemProps } from "@/interface";
import moment from "moment";
import { useState } from "react";
import "moment/locale/vi";
import MatchItem from "../MatchItem";
const ScheduleAndResult = ({
  type,
  dataMatch,
}: {
  type: string;
  dataMatch: MatchItemProps[];
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
  const renderMatchByDate = () => {
    let dataSort = dataMatch.sort((a, b) =>
      type === "result"
        ? b.event_timestamp - a.event_timestamp
        : a.event_timestamp - b.event_timestamp
    );
    let dataDate = groupBy(dataSort, (p) =>
      moment(p.event_date).startOf("date").toISOString()
    );

    return dataDate;
  };
  const [objectDate, setObjectDate] = useState(renderMatchByDate());
  return (
    <>
      <div className="schedule-list-match">
        <div className="schedule-list-match-item">
          <div className="schedule-list-match-item-start d-flex align-items-start">
            {type === "result" ? (
              <i className="fa-solid fa-globe" style={{ color: "#59c541" }}></i>
            ) : (
              <i
                className="fa-regular fa-calendar-days"
                style={{ color: "#59c541" }}
              ></i>
            )}
            <div style={{ fontWeight: "bold", marginLeft: "8px" }}>
              {type === "result" ? "Kết quả" : "Lịch thi đấu"}
            </div>
          </div>
          <div className="time-header">{`${moment(
            Object.keys(objectDate)[0]
          ).format("dddd DD/MM/YYYY ")}`}</div>
          <div className="league-result">
            {Object.keys(
              groupBy(Object.values(objectDate)[0], (p) => p.round)
            ).map((itemRound: any, indexRound: any) => {
              let values = Object.values(
                groupBy(Object.values(objectDate)[0], (p) => p.round)
              );
              return (
                <div className="round-item">
                  {itemRound}
                  <div className="match-item">
                    {values[0]?.map((item) => {
                      return (
                        <MatchItem
                          time={item.event_date.toString()}
                          home={item.home_team.name}
                          away={item.away_team.name}
                          logoHome={item.home_team.logo}
                          logoAway={item.away_team.logo}
                          score={item.score}
                          fixture_id={item.fixture_id}
                          style={{ width: "100%" }}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {Object.keys(objectDate)
        .slice(1, Object.keys(objectDate).length)
        .map((itemDate: any, indexDate: number) => {
          return (
            <div className="schedule-list-match">
              <div className="schedule-list-match-item">
                <div className="time-header">{`${moment(itemDate).format(
                  "dddd DD/MM/YYYY "
                )}`}</div>
                <div className="league-result">
                  {Object.keys(
                    groupBy(
                      Object.values(objectDate).slice(
                        1,
                        Object.keys(objectDate).length
                      )[indexDate],
                      (p) => p.round
                    )
                  ).map((itemRound: any, indexRound: any) => {
                    let values = Object.values(
                      groupBy(
                        Object.values(objectDate).slice(
                          1,
                          Object.keys(objectDate).length
                        )[indexDate],
                        (p) => p.round
                      )
                    );
                    return (
                      <div className="round-item">
                        {itemRound}
                        <div className="match-item">
                          {values[0]?.map((item) => {
                            return (
                              <MatchItem
                                time={item.event_date.toString()}
                                home={item.home_team.name}
                                away={item.away_team.name}
                                logoHome={item.home_team.logo}
                                logoAway={item.away_team.logo}
                                score={item.score}
                                fixture_id={item.fixture_id}
                                style={{ width: "100%" }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ScheduleAndResult;
