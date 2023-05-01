//@ts-nocheck
import CateLayout from "@/Layout/CateLayout";
import MainLayout from "@/Layout/MainLayout";
import PostLayout from "@/Layout/PostLayout";
import MediumPost from "@/components/posts/MediumPost";
import PostDetails from "@/components/posts/PostDetails";
import PostItem from "@/components/posts/PostItem";
import RelativePost from "@/components/posts/RelativePost";
import Sidebar from "@/components/posts/Sidebar";
import { PostItemProps } from "@/interface";
import { getCateBySlug } from "@/stores/categories.stores";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getLastestPost,
  getPostByCateSlug,
  getPostBySlug,
  getRelativePost,
} from "@/stores/posts.stores";
import { debounce } from "lodash";
import { GetServerSidePropsContext, NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import { getHotMatch } from "@/stores/footballs.stores";
import SportCalendar from "@/components/home/SportCalendar";
import Link from "next/link";
import PostCategoryRelative from "@/containers/PostCategoryRelative";

const SlugHandle: NextPage = (props: {
  slug: string;
  post: PostItemProps;
  listNews: PostItemProps[];
  weekListMatch: any;
}) => {
  //@ts-ignore
  const [end, setEnd] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [total, setTotal] = useState(1);
  const [posts, setPosts] = useState([]);
  const [listRelative, setListRelative] = useState([]);

  if (props.type === "category") {
    const handleGetPost = async () => {
      setPageIndex(1);
      let res = await getPostByCateSlug(props.slug, 10, 1);
      if (res.length === 0) {
        setEnd(true);
      }
      setPosts(res || []);
    };

    const firstPost = posts?.slice(0, 4);
    const listPost = posts?.slice(4, posts.length);
    useEffect(() => {
      handleGetPost();
    }, [props.slug]);

    const handleFetchMoreData = async () => {
      setPageIndex(pageIndex + 1);
      let res = await getPostByCateSlug(props.slug, 10, pageIndex + 1);
      if (res.length > 0) {
        setPosts([...posts, ...res]);
      } else {
        setEnd(true);
      }
    };


    return (
      <MainLayout>
        <div className="home-page mx-auto">
          <SportCalendar matches={props.weekListMatch} />

          <div className="mb-4 mt-4">
            <div className="grid grid-cols-12 mt-4">
              <div className="col-span-12 md:col-span-1"></div>
              <div className="col-span-12 md:col-span-7">
                <Link href={`${posts?.[0]?.slug}`}>
                  {/* post main */}
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
                            <Link href={"/"}>{posts?.[0]?.title}</Link>
                          </div>
                          <div className="description mt-2">
                            {posts?.[0]?.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>

                  {/* post secondary */}
                  <div
                    className="grid grid-cols-12 mt-4 mt-4"
                    style={{ marginLeft: "-8px", marginRight: "-8px" }}
                  >
                    {posts?.slice(1, 4)?.map((post: any, index: number) => (
                      <Link href={`/${post.slug}`} className="col-span-12 md:col-span-4 mb-4 md:mb-0">
                        <div className="post-seagame-item-secondary">
                          <div>
                            <img
                              className="post-image-secondary"
                              src={post?.thumb?.small}
                            />
                          </div>

                          <div className="info">
                            <div className="title">
                              <Link href={`/${post.slug}`}>{post?.title}</Link>
                            </div>

                            <div className="description">{post?.description}</div>
                          </div>
                        </div>
                      </Link>
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
                <Link href={`/${post?.slug}`}>
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
                          <Link href={"/"}>{post?.title}</Link>
                        </div>
                        <div className="description">{post?.description}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="col-span-12 md:col-span-1">
                <PostCategoryRelative posts={posts} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="category-first-post mt-3">
            <div className="flex flex-wrap gap-5">
              {firstPost?.map((post: any) => (
                <div className="small-news-item">
                  <PostItem
                    image={post?.thumb?.medium}
                    title={post?.title}
                    url={post?.slug}
                    description={post?.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <InfiniteScroll dataLength={posts?.length}
            next={() => handleFetchMoreData()}
            hasMore={true}
            loader={!end ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : <></>}
          >

            <div className="category-list-post">
              <div className="flex gap-3 flex-wrap mt-5">
                {listPost?.map((item: PostItemProps, index: number) => {
                  return (
                    <div className="category-post" key={index}>
                      <MediumPost
                        url={item.slug}
                        image={item.thumb.medium}
                        title={item.title}
                        description={item.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll> */}
      </MainLayout>
    );
  } else {
    const initData = async () => {
      setPageIndex(1);
      let relativePost = await getRelativePost(
        props.post?.categories?.[0]?.slug,
        props.slug,
        10,
        1
      );
      if (listRelative.length > 0) {
        setListRelative(relativePost);
      } else {
        setEnd(true);
      }
    };

    useEffect(() => {
      initData();
    }, [props.slug]);
    const handleFetchMoreData = async () => {
      setPageIndex(pageIndex + 1);
      let listNews = await getRelativePost(
        props.post?.categories?.[0]?.slug,
        props.slug,
        10,
        pageIndex + 1
      );
      if (listNews?.length > 0) {
        setListRelative([...listRelative, ...listNews]);
      } else {
        setEnd(true);
      }
    };

    return (
      <MainLayout>
        <PostLayout>
          <div className="main-post">
            <PostDetails
              post={props.post}
              watchMore={listRelative?.slice(0, 3)}
            />
            <Sidebar title="Tin mới nhất" listPost={props.listNews} />
          </div>
          <InfiniteScroll
            dataLength={listRelative?.length}
            next={() => handleFetchMoreData()}
            hasMore={true}
            loader={
              !end ? (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <></>
              )
            }
          >
            <RelativePost
              listPost={listRelative.slice(4, listRelative.length)}
            />
          </InfiniteScroll>
        </PostLayout>
      </MainLayout>
    );
  }
};

export default SlugHandle;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let slug = ctx.query.slug;
  //@ts-ignore
  let resCate = await getCateBySlug(slug);

  if (resCate.success) {
    const weekListMatch = await getHotMatch();

    return {
      props: {
        slug: slug,
        type: "category",
        weekListMatch: weekListMatch?.data || {},
      },
    };
  } else {
    let post = await getPostBySlug(slug);
    let listNews = await getLastestPost();

    return {
      props: {
        type: "post",
        post: post,
        slug: slug,
        listNews: listNews || [],
      },
    };
  }
}
