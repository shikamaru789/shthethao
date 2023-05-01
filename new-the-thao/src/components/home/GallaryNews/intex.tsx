import GallaryNewsItem from "./GallaryNewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const GallaryNews = ({ lastestPost }: { lastestPost: any }) => {
  return (
    <div className="d-flex">
      <div className="gallary-news" id="gallary-news">
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
              slidesPerView: 3,
            },
          }}
        >
          {lastestPost?.map((item: any) => {
            return (
              <SwiperSlide key={item.slug}>
                <div className="gallary-news-item">
                  <GallaryNewsItem
                    url={item.slug}
                    background={item.thumb.tall}
                    title={item.title}
                    time={item.createdAt}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default GallaryNews;
