"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface SliderProps {
	images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
	const params = useParams();

	return (
		<div className="w-full overflow-hidden">
			<Swiper
				modules={[Navigation]}
				navigation
				slidesPerView={2}
				spaceBetween={-100}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<Image src={image} alt={String(index)} width={480} height={315} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
