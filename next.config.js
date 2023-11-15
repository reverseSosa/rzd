/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.yandexcloud.net",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
