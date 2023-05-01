import React from "react";

type Props = {
  score: any;
};

function SeaGameScore({ score }: Props) {
  return (
    <div className="score-sea-game">
      {Object.values(score)?.map((table: any, index) => (
        <div className="chart-item-sea-game-wrapper" key={index}>
          <div
            className="chart-item chart-item-sea-game w-full h-full rounded-lg p-3"
            id="chart-item"
          >
            <div className="chart-item-header flex justify-between">
              <div className="chart-item-league-name">
                <span>Bảng {table?.[0]?.Bang_dau || ""}</span>
              </div>
              <div className="chart-item-show-all"></div>
            </div>
            <div className="chart-item-table mt-1">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Đội tuyển</th>
                    <th>Thắng</th>
                    <th>Hòa</th>
                    <th>Thua</th>
                    <th>Điểm</th>
                  </tr>
                </thead>
                <tbody>
                  {table?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center gap-2">
                          <img
                            src={item?.Flag}
                            alt={item?.Doi_bong}
                            className="w-6"
                          />
                          <p className="chart-club-name">{item?.Doi_bong}</p>
                        </div>
                      </td>
                      <td>{item?.Thang || 0}</td>
                      <td>{item?.Hoa || 0}</td>
                      <td>{item?.Thua || 0}</td>
                      <td>{item.Diem || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeaGameScore;
