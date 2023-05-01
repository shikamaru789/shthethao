import React, { useMemo } from "react";
import { GiCardPlay } from "react-icons/gi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { BiFootball } from "react-icons/bi";

const EventItem = ({ data, time, isStart, isEnd, awayTeam, homeTeam }: any) => {
  const genDataByHomeAndAway = (team_name: string) => {
    return data?.filter((item: any) => item?.team_name === team_name) || [];
  };

  const genDataByHomeAndAwayLength = (home: string, away: string) => {
    const homeLength =
      data?.filter((item: any) => item?.team_name === home) || [];
    const awayLength =
      data?.filter((item: any) => item?.team_name === away) || [];

    return homeLength?.length > awayLength?.length
      ? homeLength?.length
      : awayLength?.length;
  };

  const genTypeHome = (type: any, item: any) => {
    switch (type) {
      case "Card":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{item?.player}</span>
            <span>
              <GiCardPlay
                size={22}
                style={{
                  marginLeft: "10px",
                  color: `${
                    item?.detail === "Yellow Card" ? "#FFD643" : "red"
                  }`,
                }}
              />
            </span>
          </div>
        );

      case "subst":
        return (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <span style={{ fontSize: "13px" }}>{item?.player}</span>
              <span>
                <BsArrowUp style={{ color: "#59C541" }} />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <span style={{ color: "#888", fontSize: "13px" }}>
                {item?.detail}
              </span>
              <span>
                <BsArrowDown style={{ color: "#F34848" }} />
              </span>
            </div>
          </div>
        );

      case "Goal":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{item?.player}</span>
            <span>
              <BiFootball size={22} />
            </span>
          </div>
        );

      default:
        break;
    }
  };
  const genTypeAway = (type: any, item: any) => {
    switch (type) {
      case "Card":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <GiCardPlay
                size={22}
                style={{
                  marginLeft: "10px",
                  color: `${
                    item?.detail === "Yellow Card" ? "#FFD643" : "red"
                  }`,
                }}
              />
            </span>
            <span>{item?.player}</span>
          </div>
        );

      case "subst":
        return (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>
                <BsArrowUp style={{ color: "#59C541" }} />
              </span>
              <span style={{ fontSize: "13px" }}>{item?.player}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>
                <BsArrowDown style={{ color: "#F34848" }} />
              </span>
              <span style={{ color: "#888", fontSize: "13px" }}>
                {item?.detail}
              </span>
            </div>
          </div>
        );

      case "Goal":
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <BiFootball size={22} />
            </span>
            <span>{item?.player}</span>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          minWidth: `calc(50% - 25px)`,
          display: "flex",
          justifyItems: "flex-end",
          flexDirection: "column",
        }}
      >
        {genDataByHomeAndAway(homeTeam)?.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              width: "100%",
              flexDirection: "column",
            }}
          >
            {genTypeHome(item?.type, item)}
          </div>
        ))}
      </div>
      <div
        style={{
          minWidth: "50px",
          display: "flex",
          justifyContent: "center",
          minHeight: "100%",
        }}
      >
        <div
          style={{
            minWidth: "35px",
            background: "#59C541",
            minHeight: `${
              genDataByHomeAndAwayLength(homeTeam, awayTeam) <= 1
                ? "70px"
                : genDataByHomeAndAwayLength(homeTeam, awayTeam) <= 2
                ? "150px"
                : "250px"
            }`,
            padding: "32px 6px",
            borderTop: `${isStart ? "none" : "1px solid #ddd"}`,
            borderRadius: `${
              isStart
                ? "12px 12px 0px 0px"
                : isEnd
                ? "0px 0px 12px 12px"
                : "0px"
            }`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {time}
        </div>
      </div>
      <div
        style={{
          minWidth: `calc(50% - 25px)`,
          display: "flex",
          justifyItems: "flex-end",
          flexDirection: "column",
        }}
      >
        {genDataByHomeAndAway(awayTeam)?.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "start",
              width: "100%",
              flexDirection: "column",
            }}
          >
            {genTypeAway(item?.type, item)}
          </div>
        ))}
      </div>
    </div>
  );
};

type Props = {
  lineups: any[];
  event: any;
  matchDetail: any;
};

function EventTab({ event, lineups, matchDetail }: Props) {
  const groupEventByMinute = useMemo(() => {
    const data: any = {};

    event?.forEach((item: any) => {
      data[item?.elapsed] = [...(data[item?.elapsed] || []), item];
    });

    return data;
  }, [event]);

  return (
    <div className={"event-wrapper"}>
      <div className={"event-top"}>
        <div className={"event-top-item"}>
          <img
            style={{ marginRight: "6px" }}
            src={matchDetail?.home_team?.logo}
            alt={matchDetail?.home_team?.name}
          />
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>
            {matchDetail?.home_team?.name}
          </div>
        </div>
        <div style={{ minWidth: "50px" }}></div>
        <div style={{ marginLeft: "35px" }} className={"event-top-item"}>
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>
            {matchDetail?.away_team?.name}
          </div>
          <img
            style={{ marginLeft: "6px" }}
            src={matchDetail?.away_team?.logo}
            alt={matchDetail?.away_team?.name}
          />
        </div>
      </div>

      {Object.entries(groupEventByMinute).map((value, index) => {
        const [key, data] = value;

        return (
          <EventItem
            key={key}
            time={key}
            data={data}
            homeTeam={matchDetail?.home_team?.name}
            awayTeam={matchDetail?.away_team?.name}
            isStart={index === 0}
            isEnd={index === Object.entries(groupEventByMinute)?.length - 1}
          />
        );
      })}
    </div>
  );
}

export default EventTab;
