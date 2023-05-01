import { API_KEOVIP } from "@/config/config";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { Col, Row } from "antd";
import Link from "next/link";
import MainLayout from "@/Layout/MainLayout";

const Live = ({ matches }: any) => {
  return (
    <>
      <MainLayout >
      <div className="stream-title title-seagame-schedule-page">
          Danh sách trực tiếp
        </div>
      <div className="live-stream-sport">
        <Row
          gutter={[16, 16]}
          style={{
            justifyContent: "center",
            display: "flex",
            margin: "auto !important",
            flexFlow: "row wrap",
          }}
        >
          {matches.map((item: any) => {
            return (
              <>
                <Link key={item?._id} href={`/truc-tiep/${item?.match_id}`}>
                  <Col lg={6}>
                    {/* <div className="live-stream-card">
                        <div className="live-stream-card-content">
                            <div className="live-stream-card-content-logo">
                                <img src={item?.match_live_info?.team_home_logo} />
                            </div>
                            <div>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <p>{item?.match_live_info?.team_home_name}</p>
                                    <span>VS</span>
                                    <p>{item?.match_live_info?.team_away_name}</p>
                                </div>
                                {item?.match_live_info.status > 0 || item?.match_live_info?.status === -1 ? <p style={{textAlign: 'center'}}>{item?.match_live_info?.time}</p> : <p  style={{textAlign: 'center'}}>{item?.match_live_info?.score?.home} - {item?.match_live_info?.score?.away}</p>}
                            </div>
                            <div className="live-stream-card-content-logo">
                                <img src={item?.match_live_info?.team_away_logo} />
                            </div>
                        </div>
                    </div> */}

                    <div
                      className="card-border"
                      style={{ color: "white", padding: "10px" }}
                    >
                      <div className="match_card text-light">
                        <div
                          className="match_header"
                          style={{ color: "yellow" }}
                        >
                          <span className="match_title">
                            {item?.match_live_info?.league}
                          </span>
                        </div>
                        <div
                          className="match_body"
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <div className="team d-flex flex-column align-items-center">
                            <picture>
                              <img
                                src={`${item?.match_live_info?.team_home_logo}`}
                                alt={item?.match_live_info?.team_home_name}
                              />
                            </picture>
                            <span className="team_name">
                              {item?.match_live_info?.team_home_name}
                            </span>
                          </div>
                          <div className="match_status d-flex flex-column justify-content-center">
                            <div
                              className="happening"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <span className="current_status"></span>
                              <span className="match_time">
                                {item?.match_live_info?.time}
                              </span>
                              {item?.match_live_info?.status > 0 ||
                              item?.match_live_info?.status === -1 ? (
                                <span className="current_result">
                                  <span style={{ margin: "0px 10px" }}>
                                    {item?.match_live_info?.score?.home}
                                  </span>
                                  <span />
                                  <span style={{ margin: "0px 10px" }}>
                                    {item?.match_live_info?.score?.home}
                                  </span>
                                </span>
                              ) : (
                                <div>VS</div>
                              )}
                            </div>
                          </div>
                          <div
                            className="team"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <picture>
                              <img
                                src={`${item?.match_live_info?.team_away_logo}`}
                                alt={item?.match_live_info?.team_away_name}
                              />
                            </picture>
                            <span className="team_name">
                              {item?.match_live_info?.team_away_name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Link>
              </>
            );
          })}
        </Row>
      </div>
      </MainLayout>

    </>
  );
};

export async function getServerSideProps(ctx: GetStaticPropsContext) {
  const theSportLiveMatch = await axios.get(
    `${API_KEOVIP}/website/thesports/live`
  );
  const theSportMatch = await axios.get(`${API_KEOVIP}/website/thesports`);
  const matches = await axios.get(`${API_KEOVIP}/website/matches`);
  function reverseString(str: string): string {
    return str === "" || str === undefined
      ? ""
      : reverseString(str.substr(1)) + str.charAt(0);
  }

  const liveMatch = matches.data.data?.map((item: any) =>
    theSportMatch?.data?.data?.find((x: any) => {
      if (x?.match_id == reverseString(item.id.toString().slice(1, 8))) {
        x.match_live_info = item;
        return x;
      }
      return null;
    })
  );
  return {
    props: {
      matches: liveMatch?.filter((item: any) => item) || [],
    },
  };
}
export default Live;
