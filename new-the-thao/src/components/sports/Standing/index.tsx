//@ts-nocheck
import React, { useMemo } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { convertFormeToView } from "../../../helper/functions";
import { renderColorStanding } from "../../../helper/functions";

function LeagueStanding({
  data,
  league_detail,
}: {
  data: any;
  league_detail: any;
}) {
  const renderDataCup = useMemo(() => {
    const allGroup = new Set(data?.map((item: any) => item?.group));
    const res = [];

    for (const item of allGroup.values()) {
      res.push({
        name: item,
        data: data?.filter((e) => e?.group === item),
      });
    }
    return res;
  }, [data]);
  return (
    <div className="schedule-list-match">
      <div className="schedule-list-match-item">
        <div className="schedule-list-match-item-start d-flex align-items-start">
          <AiOutlineBarChart size={22} style={{ color: "#6acb54" }} />

          <div style={{ fontWeight: "bold", marginLeft: "8px" }}>Bảng điểm</div>
        </div>

        <div className="schedule-list-match-item-body">
          {league_detail?.type === "League" ? (
            <div className="match-detail-stat-tab-standing">
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={2}>Thứ hạng</th>
                    <th>Trận</th>
                    <th>Thắng</th>
                    <th>Hòa</th>
                    <th>Bại</th>
                    <th>Bàn thắng</th>
                    <th>Bàn bại</th>
                    <th>+/-</th>
                    <th>Điểm</th>
                    <th>Phong độ</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="tr-match-detail-stat-tab-standing"
                      >
                        <td
                          style={{
                            color: renderColorStanding(
                              league_detail?.league_id,
                              index + 1
                            ).color,
                            background: renderColorStanding(
                              league_detail?.league_id,
                              index + 1
                            ).background,
                          }}
                          className={"match-detail-stat-tab-standing-stt"}
                        >
                          {item?.rank}
                        </td>
                        <td className={"match-detail-stat-tab-standing-name"}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              style={{ width: "20px" }}
                              src={item?.logo}
                              alt={item?.team_name}
                            />
                            <span
                              style={{ marginLeft: "4px", fontWeight: "600" }}
                            >
                              {item?.team_name}
                            </span>
                          </div>
                        </td>
                        <td>{item?.all?.matchs_played}</td>
                        <td>{item?.all?.win || 0}</td>

                        <td>{item?.all?.draw || 0}</td>

                        <td>{item?.all?.lose || 0}</td>
                        <td>{item?.all?.goals_for || 0}</td>
                        <td>{item?.all?.goals_against || 0}</td>
                        <td>{item?.goals_diff || 0}</td>
                        <td>{item?.points || 0}</td>
                        <td>
                          <div className={".match-detail-stat-tab-standing-pd"}>
                            {convertFormeToView(item?.forme)}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              {renderDataCup?.map((table, index) => (
                <div className="match-detail-stat-tab-standing" key={index}>
                  <table cellSpacing={0}>
                    <thead>
                      <tr>
                        <th colSpan={2}>
                          <div className="d-flex align-items-center">
                            {table?.name}
                          </div>
                        </th>
                        <th>Trận</th>
                        <th>Thắng</th>
                        <th>Hòa</th>
                        <th>Bại</th>
                        <th>Bàn thắng</th>
                        <th>Bàn bại</th>
                        <th>+/-</th>
                        <th>Điểm</th>
                        <th>Phong độ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table?.data?.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className={"tr-match-detail-stat-tab-standing"}
                          >
                            <td
                              style={{
                                color: renderColorStanding(
                                  league_detail?.league_id,
                                  index + 1
                                ).color,
                                background: renderColorStanding(
                                  league_detail?.league_id,
                                  index + 1
                                ).background,
                              }}
                              className={"match-detail-stat-tab-standing-stt"}
                            >
                              {item?.rank}
                            </td>
                            <td
                              className={"match-detail-stat-tab-standing-name"}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{ width: "20px" }}
                                  src={item?.logo}
                                  alt={item?.team_name}
                                />
                                <span style={{ marginLeft: "4px" }}>
                                  {item?.team_name}
                                </span>
                              </div>
                            </td>
                            <td>{item?.all?.matchs_played}</td>
                            <td>{item?.all?.win || 0}</td>

                            <td>{item?.all?.draw || 0}</td>

                            <td>{item?.all?.lose || 0}</td>
                            <td>{item?.all?.goals_for || 0}</td>
                            <td>{item?.all?.goals_against || 0}</td>
                            <td>{item?.goals_diff || 0}</td>
                            <td>{item?.points || 0}</td>
                            <td>
                              <div className="match-detail-stat-tab-standing-pd">
                                {convertFormeToView(item?.forme)}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeagueStanding;
