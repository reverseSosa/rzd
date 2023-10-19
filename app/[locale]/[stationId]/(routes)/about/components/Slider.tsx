"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slider = () => {
	const params = useParams();

	return (
		<div className="w-full overflow-hidden">
			<Swiper
				modules={[Navigation]}
				navigation
				slidesPerView={2}
				spaceBetween={-100}
			>
				<SwiperSlide>
					<Image
						src={`/${params.stationId}_1.jpg`}
						alt="vokzalFirst"
						width={480}
						height={315}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={`/${params.stationId}_2.jpg`}
						alt="vokzalFirst"
						width={480}
						height={315}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={`/${params.stationId}_3.jpg`}
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
