import { GallaryNewsProps } from "@/interface";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
const GallaryNewsItem = (props: GallaryNewsProps) => {
  return (
    <Link href={`${props.url}`}>
      <div
        className="w-full h-full rounded-lg flex items-end p-6 new-card-item"
        style={{
          background: `url("${props.background}")`,
          backgroundSize: "cover",
        }}
      >
        {/* <img alt='' src={props.background} width={270} height={500}/> */}

        <p className="gallary-items-title">
          {props.title}
          <span className="gallary-items-times">
            {moment(props.time).fromNow()}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default GallaryNewsItem;
