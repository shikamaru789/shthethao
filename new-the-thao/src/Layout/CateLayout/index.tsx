import { ReactNode } from "react";

const CateLayout = ({ children }: { children?: ReactNode }) => {
  return <div className="page-container px-2">{children}</div>;
};

export default CateLayout;
