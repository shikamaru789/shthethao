import { IPost } from "@/interface";
import PostItem from "@/components/posts/PostItem";

const allNews: IPost[] = [
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
  {
    title: "Tin Tức Bóng Đá Mới Mùa 1",
    description:
      "Tất nhiên Puget Sound rất nhiều nước, và ở đâu có nước, ở đó có thuyền. Hôm nay là Khai mạc Mùa chèo thuyền khi giao thông bị đình trệ ở Khu Đại học (UW) trong khi Cầu Montlake",
    url: "#",
    image: "/images/post-bg.png",
  },
];

const AllNews = ({ lastestPost }: { lastestPost: any }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {lastestPost?.map((item: any) => {
        return (
          <div className="small-news-item">
            <PostItem
              image={item.thumb.small}
              description={item.description}
              url={item.slug}
              title={item.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllNews;
