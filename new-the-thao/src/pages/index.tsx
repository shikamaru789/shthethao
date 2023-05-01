import { Inter } from "next/font/google";
import MainLayout from "@/Layout/MainLayout";
import { ReactNode } from "react";
import SportCalendar from "@/components/home/SportCalendar";
import ComponentTitle from "@/components/common/ComponentTitle";
import GallaryNews from "@/components/home/GallaryNews/intex";
import NewestVideo from "@/components/home/NewestVideo";
import {
  IVideo,
  MatchItemProps,
  PostItemProps,
  StandingItemProps,
  StandingObjectProps,
} from "@/interface";
import CategoryList from "@/components/home/CategoryList";
import ChartComponent from "@/components/home/ChartComponent";
import AllNews from "@/components/home/AllNews";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import {
  getDataFixtureMicro,
  getHotMatch,
  getMatchFinish,
  getMatchOfWeek,
  getMatchPending,
  getMatchToday,
  getStandingByLeague,
  getTablePoint,
} from "@/stores/footballs.stores";
import { getAllCateByDomain } from "@/stores/categories.stores";
import {
  getLastestPost,
  getPostByCateSlug,
  getPostByMultiCateSlug,
} from "@/stores/posts.stores";
const inter = Inter({ subsets: ["latin"] });

export default function Home({
  // matches,
  // tablePoint,
  listVideo,
  lastestPost,
  weekListMatch,
  listStanding,
  listPostCate,
  listPostBongDaVietNam,
}: {
  // matches: any;
  // tablePoint: any;
  listVideo: any;
  lastestPost: any;
  weekListMatch: any;
  listStanding: StandingObjectProps;
  listPostCate: [{ slug: string; post: PostItemProps[] }];
  listPostBongDaVietNam: any
}) {
  return (
    <div className="home-page-wrapper">
      <div className="home-page mx-auto">
        <SportCalendar matches={weekListMatch} />
        <div className="home-page-news">
          <div className="home-page-news-newest">
            <ComponentTitle title="Tin mới nhất" url="#" />
            <div className="home-page-news-galary  mt-5">
              <GallaryNews lastestPost={lastestPost} />
            </div>
          </div>
          <div className="home-page-video-newest mt-8">
            <ComponentTitle title="Video mới nhất" showAll url="/video" />
            <div className="video-newest-video mt-4 w-full mb-4">
              <NewestVideo listVideo={listVideo} />
            </div>
          </div>
          <div className="home-page-sport-category my-8">
            <ComponentTitle title="Danh mục" url="#" />
            <div className="mt-4">
              <CategoryList listPostCate={listPostCate} />
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-charts my-12">
        <ChartComponent listStanding={listStanding} />
      </div>
      <div className="home-page mx-auto px-2">
        <div className="homepage-all-new my-2">
          <ComponentTitle title="Tin bóng đá" showAll url="/tin-bong-da" />
          <div className="mt-6">
            <AllNews lastestPost={lastestPost} />
          </div>
        </div>
      </div>

      <div className="home-page mx-auto px-2 mt-10">
        <div className="homepage-all-new my-2">
          <ComponentTitle title="Bóng đá Việt Nam" showAll url="/bong-da-viet-nam" />
          <div className="mt-6">
            <AllNews lastestPost={listPostBongDaVietNam} />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactNode, listCate: any) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let listStanding = await getStandingByLeague([
    4335, 4378, 4346, 4399, 4347, 4976,
  ]);
  // let weekListMatch = await getMatchOfWeek();
  let weekListMatch = await getHotMatch();
  let lastestPost = await getPostByCateSlug("tin-bong-da");
  let listVideo = await getPostByCateSlug("video");
  let listPostCate = await getPostByMultiCateSlug(
    "bong-da-trong-nuoc,champion-league,la-liga,ngoai-hang-anh,seri-a"
  );
  let listPostBongDaVietNam = await getPostByCateSlug("bong-da-viet-nam");

  return {
    props: {
      listVideo: listVideo || [],
      lastestPost: lastestPost || [],
      weekListMatch: weekListMatch?.data || {},
      listStanding: listStanding || [],
      listPostCate: listPostCate || [],
      listPostBongDaVietNam: listPostBongDaVietNam || [],
    },
  };
}
