import Link from "next/link";
import React from "react";

type Props = {
  posts: any[];
};

function PostCategoryRelative({ posts }: Props) {
  return (
    <div className="post-category-relative px-4">
      <div>
        <div className="title-relative">Trong nước</div>
      </div>

      <div className="mt-4">
        {/* primary */}
        <div className="post-category-relative-item-primary">
          <div>
            <img src={posts?.[0]?.thumb?.small} alt={posts?.[0]?.title} />
          </div>

          <div className="title mt-2">
            <Link href={`/${posts?.[0]?.slug}`}>{posts?.[0]?.title}</Link>
          </div>
        </div>

        {/* secondary  */}
        {posts?.slice(1, 3)?.map((item, index) => (
          <div className="post-category-relative-item-secondary" key={index}>
            <div className="title">
              <Link href={`/${item?.slug}`}>{item?.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCategoryRelative;
