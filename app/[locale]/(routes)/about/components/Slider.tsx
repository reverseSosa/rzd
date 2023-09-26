"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

import vokzalFirst from "@/public/vokzalFirst.png";
import vokzalSecond from "@/public/vokzalSecond.png";
import vokzalThird from "@/public/vokzalThird.png";
import vokzalFourth from "@/public/vokzalFourth.png";

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
					<Image src={vokzalFirst} alt="vokzalFirst" width={480} height={315} />
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={vokzalSecond}
						alt="vokzalSecond"
						width={480}
						height={315}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={vokzalThird} alt="vokzalThird" width={480} height={315} />
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={vokzalFourth}
						alt="vokzalFirst"
						width={480}
						height={315}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
