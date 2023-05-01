import { Swiper, SwiperSlide } from "swiper/react";
import ChartItem from "./ChartItem";
import { Pagination } from "swiper";
import { StandingItemProps, StandingObjectProps } from "@/interface";

const ChartComponent = ({
  listStanding,
}: {
  listStanding: StandingObjectProps;
}) => {
  return (
    <div className="chart-component h-full py-28">
      <div
        className="chart-component-list-chart relative px-4"
        id="chart-component-list-chart"
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            1080: {
              slidesPerView: "auto",
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {Object.keys(listStanding).map((data: any, index: number) => (
            <SwiperSlide>
              <div className="chart-components-item">
                <ChartItem
                  tableData={
                    //@ts-ignore
                    Object.values(listStanding)
                      [index].sort(
                        (a: StandingItemProps, b: StandingItemProps) =>
                          b?.points - a?.points
                      )
                      ?.slice(0, 5) || []
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ChartComponent;
