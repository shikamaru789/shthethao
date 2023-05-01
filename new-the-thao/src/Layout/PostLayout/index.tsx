import { ReactNode } from "react";

const PostLayout = ({ children }: { children?: ReactNode }) => {
  return <div className="page-container post-container ">{children}</div>;
};

export default PostLayout;
