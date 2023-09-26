import LoaderIcon from "@/components/icons/LoaderIcon";

export default function Loading() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center">
			<LoaderIcon className="animate-spin h-12 w-12 text-red" />
		</div>
	);
}
