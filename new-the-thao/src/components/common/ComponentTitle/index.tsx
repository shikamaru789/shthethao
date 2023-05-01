import { ComponentTitleProps } from "@/interface";
import Link from "next/link";

const ComponentTitle = (props: ComponentTitleProps) => {
  return (
    <div className="component-title-wrapper flex justify-between items-center">
      <p className="component-title font-bold">{props.title}</p>
      {props.showAll && (
        <p className="component-show-all">
          <Link href={`${props.url}`}>Xem tất cả</Link>
        </p>
      )}
    </div>
  );
};

export default ComponentTitle;
