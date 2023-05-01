import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType, NextPageContext } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/sports.css";
import "@/styles/posts.css";
import "@/styles/cssforlive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";
import { getAllCateByDomain } from "@/stores/categories.stores";
import "moment/locale/vi";
moment.locale("vi");

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
