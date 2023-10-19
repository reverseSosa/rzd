"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import invalidFirst from "@/public/invalidFirst.png";
import invalidSecond from "@/public/invalidSecond.png";
import invalidThird from "@/public/invalidThird.png";
import invalidFourth from "@/public/invalidFourth.png";

const Slider = () => {
	return (
		<div className="w-full overflow-hidden">
			<Swiper
				modules={[Navigation]}
				navigation
				slidesPerView={2}
				spaceBetween={-100}
			>
				<SwiperSlide>
					<Image src={invalidFirst} alt="invalidFirst" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={invalidSecond} alt="invalidSecond" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={invalidThird} alt="invalidThird" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={invalidFourth} alt="invalidFirst" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
