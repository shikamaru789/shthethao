import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { API_URL, URL } from "@/config/config";
import { getAllCateByDomain } from "@/stores/categories.stores";
import Head from "next/head";
import { ReactNode } from "react";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const MainLayout = ({ children }: { children?: ReactNode }) => {
  const { data, error } = useSWR(
    `${API_URL}/category/domains?domain=${URL}`,
    fetcher
  );

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/fac459bf2d.js"
          crossOrigin="anonymous"
        ></script>
        <title>Thể thao SH, tin tức thể thao mới nhất</title>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>

      <div className="container bg-white min-h-screen min-w-full mx-auto">
        <div className="main-layout min-h-screen mx-auto">
          <Navbar listCate={data?.data} />
          <div className="main-content">{children}</div>
          <Footer listCate={data?.data}/>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
