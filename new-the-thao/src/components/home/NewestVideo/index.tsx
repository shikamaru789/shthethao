import { NewestVideoProps } from "@/interface";
import Link from "next/link";
import ListNewestVideo from "./ListNewestVideo";
const NewestVideo = (props: NewestVideoProps) => {
  const getNewestVideo = props.listVideo[0];
  return (
    <div className="newest-video-component w-full">
      {
        <Link href={`${getNewestVideo?.slug}`}>
          <div
            className="newest-big-video rounded-lg flex items-end"
            style={{
              background: `url("${getNewestVideo?.thumb?.long}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="newest-big-video-wrapper flex p-8 items-center gap-3">
              <div>
                <img src="/icon/icon-play.png" />
              </div>
              <p className="newest-big-video-title max-w-xs">
                {getNewestVideo?.title}
              </p>
            </div>
          </div>
        </Link>
      }
      <div className="list-newest-video mt-4">
        <ListNewestVideo
          listVideo={props.listVideo.slice(1, props.listVideo.length)}
        />
      </div>
    </div>
  );
};

export default NewestVideo;
