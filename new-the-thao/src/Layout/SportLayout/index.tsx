import SportNavbar from "@/components/sports/Navbar";
import { ReactNode } from "react";

const SportLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="sport-layout">
      <SportNavbar />
      <div className="sport">{children}</div>
    </div>
  );
};

export default SportLayout;
