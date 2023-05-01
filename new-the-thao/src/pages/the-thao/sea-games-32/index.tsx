import MainLayout from "@/Layout/MainLayout";
import SportLayout from "@/Layout/SportLayout";
import SeaGameCalender from "@/containers/SeaGame/SeaGameCalender";
import { getScheduleSeaGame, getScoreSeaGame } from "@/stores/seagame.stores";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { Col, Input, Row } from "antd";
import SeaGameScore from "@/containers/SeaGame/SeaGameScore";
import { getPostByCateSlug } from "@/stores/posts.stores";
import Link from "next/link";

type Props = {
  schedule: any;
  score: any;
  posts: any;
};

function SeaGamesPage({ schedule, score, posts }: Props) {
  return (
    <MainLayout>
      <div className="home-page-wrapper">
        <div className="home-page mx-auto">
          <SeaGameCalender matches={schedule?.arr_box || []} />

          <div className="mb-4 mt-4">
            <div className="grid grid-cols-12 mt-4">
              <div className="col-span-12 md:col-span-1"></div>
              <div className="col-span-12 md:col-span-7">
                {/* post main */}
                {posts?.[0]?.title && (
                  <div className="post-seagame-item-main">
                    <div className="grid grid-cols-12">
                      <div className="col-span-12 md:col-span-7">
                        <img
                          className="post-image-main"
                          src={posts?.[0]?.thumb?.medium}
                          alt={posts?.[0]?.title || ""}
                        />
                      </div>
                      <div className="col-span-12 md:col-span-5">
                        <div className="info">
                          <div className="title">
                            <Link href={`/${posts?.[0]?.slug}`}>
                              {posts?.[0]?.title}
                            </Link>
                          </div>
                          <div className="description mt-2">
                            {posts?.[0]?.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* post secondary */}
                <div
                  className="grid grid-cols-12 mt-4 mt-4"
                  style={{ marginLeft: "-8px", marginRight: "-8px" }}
                >
                  {posts?.slice(1, 4)?.map((post: any, index: number) => (
                    <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
                      <div className="post-seagame-item-secondary">
                        <div>
                          <img
                            className="post-image-secondary"
                            src={post?.thumb?.small}
                          />
                        </div>

                        <div className="info">
                          <div className="title">
                            <Link href={`/${post?.slug}`}>{post?.title}</Link>
                          </div>

                          <div className="description">{post?.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-3"></div>
              <div className="col-span-12 md:col-span-1"></div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-12 md:col-span-1"></div>
            <div className="col-span-12 md:col-span-7">
              {/* post third */}
              {posts?.slice(4, 10)?.map((post: any, index: number) => (
                <div className="grid grid-cols-12 post-seagame-item-third mt-4 pb-4">
                  <div className="col-span-12 md:col-span-4">
                    <div>
                      <img
                        className="post-image-third"
                        src={post?.thumb?.small}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <div className="info ms-4 mt-2 md:mt-0">
                      <div className="title">
                        <Link href={`/${post?.slug}`}>{post?.title}</Link>
                      </div>
                      <div className="description">{post?.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="col-span-12 md:col-span-1"></div>

              <SeaGameScore score={score} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SeaGamesPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const schedule = await getScheduleSeaGame();
  const score = await getScoreSeaGame();
  const posts = await getPostByCateSlug("sea-game-32", 10, 1);

  return {
    props: {
      schedule: schedule || {},
      score: score || {},
      posts: posts?.concat(posts).concat(posts),
    },
  };
}
