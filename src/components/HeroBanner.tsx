import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerTile from "./BannerTile";
import { BannerPropsExport } from "./Banner";
import dataFile from "../assets/moviedata.json";

type DataFile = Pick<BannerPropsExport, "title" | "description"> & {
  genres: string[];
  cover_url: string;
};

const StyledSwiper = styled(Swiper)`
  & .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

SwiperCore.use([Navigation]);

const HeroBanner = () => {
  return (
    <StyledSwiper navigation slidesPerView={1}>
      {dataFile.data.map((item: DataFile, i: number) => (
        <SwiperSlide key={`key-${item.title}-${i}`}>
          <BannerTile
            title={item.title}
            tags={item.genres}
            image={item.cover_url}
            description={item.description}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default HeroBanner;
