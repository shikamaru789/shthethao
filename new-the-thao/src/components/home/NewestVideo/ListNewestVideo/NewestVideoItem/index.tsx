import { IVideo } from "@/interface";
import Link from "next/link";

const NewestVideoItem = (props: IVideo) => {
  return (
    <Link href={props.url}>
      <div className="newest-video-item w-full h-full ">
        <div
          className="newest-video-background h-40 rounded-md flex items-end p-4"
          style={{
            background: `url("${props.background}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="newest-video-button-play">
            <img src="/icon/icon-play.png" className="w-6" />
          </div>
        </div>
        <div className="mt-2 w-30">
          <p className="newest-video-title">{props.title}</p>
          {/* <p className="newest-video-time mt-2">11 giờ trước</p> */}
        </div>
      </div>
    </Link>
  );
};

export default NewestVideoItem;
