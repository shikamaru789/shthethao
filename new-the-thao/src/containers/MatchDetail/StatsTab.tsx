import { renderColorStanding } from "@/helper";
import { convertFormeToView } from "@/helper/functions";
import React, { useMemo } from "react";

const data = [
  {
    id: 1,
    name: "Tỉ lệ kiểm soát bóng",
    value: "ball_possession",
  },
  {
    id: 2,
    name: "Tỉ lệ đường chuyền chính xác",
    value: "passes",
  },
  {
    id: 3,
    name: "Dứt điểm hướng mục tiêu",
    value: "shots_on_goal",
  },
  {
    id: 4,
    name: "Số lần dứt điểm",
    value: "total_shots",
  },
  {
    id: 5,
    name: "Số đường chuyền",
    value: "total_passes",
  },
  {
    id: 6,
    name: "Phạm lỗi",
    value: "fouls",
  },
  {
    id: 7,
    name: "Thẻ vàng",
    value: "yellow_cards",
  },
  {
    id: 8,
    name: "Thẻ đỏ",
    value: "red_cards",
  },
  {
    id: 9,
    name: "Việt vị",
    value: "offsides",
  },
  {
    id: 10,
    name: "Phạt góc",
    value: "corner_kicks",
  },
];

type Props = {
  stats: any;
  matchDetail: any;
  leagueDetail: any;
  standing: any;
};

function StatsTab({ leagueDetail, matchDetail, standing, stats }: Props) {
  const renderDataCup = useMemo(() => {
    const homeName = matchDetail?.home_team?.name;
    const awayName = matchDetail?.away_team?.name;
    const allGroup = new Set(
      standing
        ?.filter(
          (item: any) =>
            item?.team_name === homeName || item?.team_name === awayName
        )
        ?.map((item: any) => item?.group)
    );

    const valuesAllGroup: any = allGroup.values();

    const res = [];
    for (const item of valuesAllGroup) {
      res.push({
        name: item,
        data: standing?.filter((e: any) => e?.group === item),
      });
    }
    return res;
  }, [standing, leagueDetail]);

  return (
    <div className={"match-detail-stat-tab"}>
      {matchDetail?.score && (
        <div className={"match-detail-stat-tab-info"}>
          <table cellPadding={0} cellSpacing={0} border={0}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th colSpan={3}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={matchDetail?.home_team?.logo}
                        alt={matchDetail?.home_team?.name}
                      />
                      <span style={{ fontWeight: "500", marginLeft: "6px" }}>
                        {matchDetail?.home_team?.name}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ fontWeight: "500", marginRight: "6px" }}>
                        {matchDetail?.away_team?.name}
                      </span>
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={matchDetail?.away_team?.logo}
                        alt={matchDetail?.away_team?.name}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <tr
                    key={item?.value}
                    className={"tr-match-detail-stat-tab-info"}
                  >
                    <td style={{ textAlign: "left" }}>
                      {stats?.statistic?.[item?.value]?.home || 0}
                    </td>
                    <td>{item.name}</td>
                    <td style={{ textAlign: "right" }}>
                      {stats?.statistic?.[item?.value]?.away || 0}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {leagueDetail?.type === "League" ? (
        <div className="overflow-x-xs-auto">
          <div className={"match-detail-stat-tab-standing"}>
            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <a>Thứ hạng</a>
                  </th>
                  <th>
                    <a>Trận</a>
                  </th>
                  <th>
                    <a>Thắng</a>
                  </th>
                  <th>
                    <a>Hòa</a>
                  </th>
                  <th>
                    <a>Bại</a>
                  </th>
                  <th>
                    <a>Bàn thắng</a>
                  </th>
                  <th>
                    <a>Bàn bại</a>
                  </th>
                  <th>
                    <a>+/-</a>
                  </th>
                  <th>
                    <a>Điểm</a>
                  </th>
                  <th>
                    <a>Phong độ </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {standing
                  ?.sort((a: any, b: any) => a?.rank - b?.rank)
                  .map((item: any, index: any) => {
                    return (
                      <tr
                        key={index}
                        className={"tr-match-detail-stat-tab-standing"}
                      >
                        <td
                          style={{
                            color: renderColorStanding(
                              leagueDetail?.league_id,
                              index + 1
                            ).color,
                            background: renderColorStanding(
                              leagueDetail?.league_id,
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
        </div>
      ) : (
        <div className="overflow-x-xs-auto">
          {renderDataCup?.map((table, index) => (
            <div className={"match-detail-stat-tab-standing"} key={index}>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <a className="d-flex align-items-center">{table?.name}</a>
                    </th>
                    <th>
                      <a>Trận</a>
                    </th>
                    <th>
                      <a>Thắng</a>
                    </th>
                    <th>
                      <a>Hòa</a>
                    </th>
                    <th>
                      <a>Bại</a>
                    </th>
                    <th>
                      <a>Bàn thắng</a>
                    </th>
                    <th>
                      <a>Bàn bại</a>
                    </th>
                    <th>
                      <a>+/-</a>
                    </th>
                    <th>
                      <a>Điểm</a>
                    </th>
                    <th>
                      <a>Phong độ </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table?.data?.map((item: any, index: number) => {
                    return (
                      <tr
                        key={index}
                        className={"tr-match-detail-stat-tab-standing"}
                      >
                        <td
                          style={{
                            color: renderColorStanding(
                              leagueDetail?.league_id,
                              index + 1
                            ).color,
                            background: renderColorStanding(
                              leagueDetail?.league_id,
                              index + 1
                            ).background,
                          }}
                          className={"match-detail-stat-tab-standing-stt"}
                        >
                          {item?.rank}
                        </td>
                        <td className={"match-detail-stat-tab-standing-name"}>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default StatsTab;
