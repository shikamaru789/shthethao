import Link from "next/link";
import MediumPost from "@/components/posts/MediumPost";
import React, { useState } from "react";
import { PostItemProps } from "@/interface";
const CategoryList = ({
  listPostCate,
}: {
  listPostCate: { slug: string; post: PostItemProps[] }[];
}) => {
  const [selected, setSelected] = useState("bong-da-trong-nuoc");

  return (
    <div className="category-list">
      <div className="category-list-menu">
        <ul className="p-0 m-0">
          {/* <div
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          > */}
          <li
            className={
              selected === "bong-da-trong-nuoc"
                ? "menu-cate active"
                : "menu-cate"
            }
            onClick={() => setSelected("bong-da-trong-nuoc")}
          >
            Trong nước
          </li>
          {/* </div>
          <div
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          > */}
          <li
            className={
              selected === "ngoai-hang-anh" ? "menu-cate active" : "menu-cate"
            }
            onClick={() => setSelected("ngoai-hang-anh")}
          >
            Ngoại hạng Anh
          </li>
          {/* </div>
          <div
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          > */}
          <li
            className={
              selected === "champion-league" ? "menu-cate active" : "menu-cate"
            }
            onClick={() => setSelected("champion-league")}
          >
            Champion League
          </li>
          {/* </div>
          <div
            className={selected === 3 ? "active" : ""}
            onClick={() => setSelected(3)}
          > */}
          <li
            className={
              selected === "la-liga" ? "menu-cate active" : "menu-cate"
            }
            onClick={() => setSelected("la-liga")}
          >
            Laliga
          </li>
          {/* </div>
          <div
            className={selected === 4 ? "active" : ""}
            onClick={() => setSelected(4)}
          > */}
          <li
            className={selected === "seri-a" ? "menu-cate active" : "menu-cate"}
            onClick={() => setSelected("seri-a")}
          >
            Seria
          </li>
          {/* </div> */}
        </ul>
      </div>

      {listPostCate.map(
        (item: { slug: string; post: PostItemProps[] }, index: number) => {
          return (
            <div
              key={index}
              className="category-list-posts mt-4"
              style={selected === item.slug ? {} : { display: "none" }}
            >
              <div className="flex gap-3 flex-wrap">
                {item.post.map((item: PostItemProps, index: number) => {
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
          );
        }
      )}
    </div>
  );
};

export default CategoryList;
