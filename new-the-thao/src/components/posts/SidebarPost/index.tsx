import HorizontalDivider from "@/components/common/Divider/HorizontalDivider";
import { PostItemProps } from "@/interface";
import Link from "next/link";

const SidebarPost = ({ post }: { post: PostItemProps }) => {
  return (
    <Link href={`${post?.slug}`}>
      <div className="sidebar-post">
        <img src={post.thumb.small} />
        <div className="sidebar-post-title">{post.title}</div>
      </div>
    </Link>
  );
};

export default SidebarPost;
