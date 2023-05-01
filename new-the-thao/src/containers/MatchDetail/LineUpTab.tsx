import { genPositionPlayer } from "@/helper";
import React, { useMemo } from "react";

const SoDoItem = ({ item }: { item: any }) => {
  return (
    <div className={"pl-item"}>
      <div className={"number-pl"}>{item?.number}</div>
      <div className={"name-pl"}>{item?.player_name}</div>
    </div>
  );
};

type Props = {
  lineups: any[];
  players: any[];
  matchDetail: any;
};

function LineUpTab({ lineups, matchDetail, players }: Props) {
  const playersMain = useMemo(() => {
    const homeTeam = lineups?.[0]?.team_name;
    const awayTeam = lineups?.[1]?.team_name;

    const mainHome: any[] = [];
    const mainAway: any[] = [];
    const extraHome: any[] = [];
    const extraAway: any[] = [];

    players?.forEach((item) => {
      if (item?.team_name === homeTeam && item?.substitute === "False") {
        mainHome.push(item);
      } else if (item?.team_name === awayTeam && item?.substitute === "False")
        mainAway.push(item);
      else if (item?.team_name === homeTeam && item?.substitute === "True")
        extraHome.push(item);
      else if (item?.team_name === awayTeam && item?.substitute === "True")
        extraAway.push(item);
    });

    return {
      mainHome,
      mainAway,
      extraAway,
      extraHome,
    };
  }, [lineups, players]);

  const getPlayersByPosition = (players: any, position: any) => {
    return players?.filter((item: any) => item?.position === position);
  };

  return (
    <div>
      <div>
        <div className="wrapper-lineup-tab">
          <div className="wrapper-lineup-tab-left-right">
            <div className={"match-detail-lineup-tab-team-item"}>
              <div style={{ marginRight: "8px" }}>
                <img
                  src={matchDetail?.home_team?.logo}
                  alt={matchDetail?.home_team?.name}
                />
              </div>
              <div>{matchDetail?.home_team?.name}</div>
            </div>

            <div className={"match-detail-lineup-tab-team-table"}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={2}>Đội hình ra sân</th>
                  </tr>
                </thead>
                <tbody>
                  {playersMain?.mainHome?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td
                        className={"match-detail-lineup-tab-team-table-td-name"}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-soao"
                            }
                          >
                            {item?.number}
                          </span>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-name"
                            }
                          >
                            {item?.player_name}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          className={"match-detail-lineup-tab-team-table-vitri"}
                        >
                          {genPositionPlayer(item?.position)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={"match-detail-lineup-tab-team-table"}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={2}>Đội hình dự bị</th>
                  </tr>
                </thead>
                <tbody>
                  {playersMain?.extraHome?.map((item, index) => (
                    <tr key={index}>
                      <td
                        className={"match-detail-lineup-tab-team-table-td-name"}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-soao"
                            }
                          >
                            {item?.number}
                          </span>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-name"
                            }
                          >
                            {item?.player_name}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          className={"match-detail-lineup-tab-team-table-vitri"}
                        >
                          {genPositionPlayer(item?.position)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={"match-detail-lineup-tab-team-table"}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th>Huấn luyện viên</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lineups?.[0]?.coach}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="wrapper-lineup-tab-center">
            <div className={"block"}>
              <div className={"block-doi-hinh"}>
                <div
                  className={"head-top-team"}
                  style={{ borderRadius: "6px 6px 0px 0px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={matchDetail?.home_team?.logo}
                      alt={matchDetail?.home_team?.name}
                    />
                    <div>{matchDetail?.home_team?.name}</div>
                  </div>
                  <div>{lineups?.[0]?.formation}</div>
                </div>

                <div className={"box-sododoihinh"}>
                  <img
                    className={"img_football_field"}
                    alt="So do doi hinh"
                    src="https://s1.vnecdn.net/vnexpress/restruct/c/v1948/dulieubongda/pc/images/graphics/football_field.png"
                  />
                  <div className={"inner-field-team"}>
                    <div className={"sodo-hometeam"}>
                      {["G", "D", "M", "F"].map((position) => (
                        <div className={"vi-tri-doi-hinh"} key={position}>
                          {getPlayersByPosition(
                            playersMain.mainHome,
                            position
                          )?.map((item: any, index: number) => (
                            <SoDoItem key={index} item={item} />
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className={"sodo-awayteam"}>
                      {["G", "D", "M", "F"].map((position) => (
                        <div className={"vi-tri-doi-hinh"} key={position}>
                          {getPlayersByPosition(
                            playersMain.mainAway,
                            position
                          )?.map((item: any, index: number) => (
                            <SoDoItem key={index} item={item} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={"head-top-team"}
                  style={{ borderRadius: "0px 0px 6px 6px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={matchDetail?.away_team?.logo}
                      alt={matchDetail?.away_team?.name}
                    />
                    <div>{matchDetail?.away_team?.name}</div>
                  </div>
                  <div>{lineups?.[1]?.formation}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-lineup-tab-left-right">
            <div
              className={"match-detail-lineup-tab-team-item"}
              style={{ justifyContent: "flex-end" }}
            >
              <div style={{ marginRight: "8px" }}>
                <img
                  src={matchDetail?.away_team?.logo}
                  alt={matchDetail?.away_team?.name}
                />
              </div>
              <div>{matchDetail?.away_team?.name}</div>
            </div>

            <div className={"match-detail-lineup-tab-team-table"}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={2}>Đội hình ra sân</th>
                  </tr>
                </thead>
                <tbody>
                  {playersMain?.mainAway?.map((item, index) => (
                    <tr key={index}>
                      <td
                        className={"match-detail-lineup-tab-team-table-td-name"}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-soao"
                            }
                          >
                            {item?.number}
                          </span>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-name"
                            }
                          >
                            {item?.player_name}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          className={"match-detail-lineup-tab-team-table-vitri"}
                        >
                          {genPositionPlayer(item?.position)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={"match-detail-lineup-tab-team-table"}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={2}>Đội hình dự bị</th>
                  </tr>
                </thead>
                <tbody>
                  {playersMain?.extraAway?.map((item, index) => (
                    <tr key={index}>
                      <td
                        className={"match-detail-lineup-tab-team-table-td-name"}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-soao"
                            }
                          >
                            {item?.number}
                          </span>
                          <span
                            className={
                              "match-detail-lineup-tab-team-table-name"
                            }
                          >
                            {item?.player_name}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          className={"match-detail-lineup-tab-team-table-vitri"}
                        >
                          {genPositionPlayer(item?.position)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={"match-detail-lineup-tab-team-table"}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th>Huấn luyện viên</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lineups?.[1]?.coach}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineUpTab;
