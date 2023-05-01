import { IVideo } from "@/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import NewestVideoItem from "./NewestVideoItem";

const ListNewestVideo = (props: { listVideo: IVideo[] }) => {
  return (
    <div className="list-newest-videos" id="list-newest-videos">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        breakpoints={{
          1080: {
            slidesPerView: "auto",
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {props.listVideo.map((video) => (
          <SwiperSlide>
            <NewestVideoItem
              //@ts-ignore
              background={video.thumb.medium}
              url={video.slug}
              title={video.title}
              key={video.slug}
              time={video.createdAt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListNewestVideo;
