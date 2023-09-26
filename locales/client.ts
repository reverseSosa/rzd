import { createI18nClient } from "next-international/client";

export const {
	useChangeLocale,
	useCurrentLocale,
	useI18n,
	useScopedI18n,
	I18nProviderClient,
} = createI18nClient({
	ru: () => import("./ru"),
	en: () => import("./en"),
});
