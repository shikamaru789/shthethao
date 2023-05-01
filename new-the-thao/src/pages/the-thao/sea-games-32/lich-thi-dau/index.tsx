import MainLayout from "@/Layout/MainLayout";
import SeaGameScore from "@/containers/SeaGame/SeaGameScore";
import { getScheduleSeaGame, getScoreSeaGame } from "@/stores/seagame.stores";
import { GetServerSidePropsContext } from "next";
import React, { useMemo } from "react";

type Props = {
  schedule: any;
  score: any;
};

function SeaGameSchedulePage({ score, schedule }: Props) {

  const matches = useMemo(() => {
    const all = schedule?.arr_all || {};

    const result = Object.entries(all)
      ?.sort((a, b) => new Date(a?.[0]).getTime() - new Date(b?.[0]).getTime())
      ?.map((item) => {
        return item?.[1];
      });

    return result || [];
  }, [schedule]);

  return (
    <MainLayout>
      <div className="home-page-wrapper">
        <div className="home-page mx-auto">
          <div className="mt-4 px-3 md:px-0">
            <h1 className="title-seagame-schedule-page">
              Lịch thi đấu bóng đá
            </h1>
            <hr className="my-4" />
            <div className="grid grid-cols-12 mt-4">
              <div className="col-span-12 md:col-span-8">
                <div className="schedule-seagame-wrapper">
                  {matches?.map((item: any, index) => (
                    <div className="schedule-seagame-item" key={index}>
                      <div className="title-schedule-seagame">
                        {item?.[0]?.time_lichdau2}
                      </div>

                      <div>
                        {item?.map((match: any, index: number) => (
                          <div
                            className="match-schedule-seagame-item"
                            key={index}
                          >
                            <div className="grid grid-cols-5 py-2 px-4">
                              <div className="col-span-1 md:col-span-1">
                                {match?.Bang_dau}
                              </div>
                              <div className="col-span-4 md:col-span-4">
                                <div className="d-flex align-items-center">
                                  <div className="d-flex align-items-center justify-content-end team-a">
                                    <div className="font-semibold team-name">{match?.Team_A}</div>
                                    <div>
                                      <img
                                        className="ms-2"
                                        src={match?.Flag_A}
                                        alt={match?.Team_A}
                                      />
                                    </div>
                                  </div>
                                  <div className="seagame-tiso text-center fw-bolder font-semibold">
                                    {match?.Hour}
                                  </div>
                                  <div className="d-flex align-items-center justify-content-start team-b">
                                    <div>
                                      <img
                                        className="me-2"
                                        src={match?.Flag_B}
                                        alt={match?.Team_B}
                                      />
                                    </div>
                                    <div className="font-semibold team-name">{match?.Team_B}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-1"></div>
              <div className="col-span-12 md:col-span-3">
                <SeaGameScore score={score} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SeaGameSchedulePage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const schedule = await getScheduleSeaGame();
  const score = await getScoreSeaGame();

  return {
    props: {
      schedule: schedule || {},
      score: score || {},
    },
  };
}
