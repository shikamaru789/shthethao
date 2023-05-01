//@ts-nocheck

import { PostItemProps } from "@/interface";
import moment from "moment";
import Link from "next/link";

const PostDetails = ({ post, watchMore }: { post: PostItemProps, watchMore: PostItemProps[] }) => {
  return (
    <div className="post-details">
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          {/* @ts-ignore */}
          <a href={`${post?.categories[0]?.slug}`}>
            {/* @ts-ignore */}
            {post?.categories[0]?.name}
          </a>
        </li>
        <li>{post?.title}</li>
      </ul>

      <h1 className="post-title">{post.title}</h1>
      <div className="post-time-left">
        {moment(post.createdAt).format("dddd, DD/MM/YYYY")}
      </div>

      <h2>{post.description}</h2>
      <div className="d-flex justify-center">
        <img src={post.thumb.medium} />
      </div>
      <div
        className="post-content text-justify"
        dangerouslySetInnerHTML={{ __html: post.content?.toString() }}
      ></div>
      {watchMore?.length > 0 && <div className="watch-more">
        <h2 className="watch-more-title">Xem thêm</h2>
        <div className="watch-more-link">
          {watchMore?.map((item, index) => {
            return <Link key={index} href={item.slug}>{item.title}</Link>
          })}

        </div>
      </div>}

      <div className="wrapper-tags">
        {post.tags?.map((item) => {
          return <div className="post-tags">{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default PostDetails;
