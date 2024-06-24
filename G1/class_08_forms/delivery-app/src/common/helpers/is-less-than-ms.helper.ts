export default function isLessThanMs(createdAt: string, ms: number): boolean {
	const now = new Date();
	const createdAtDate = new Date(createdAt);
	const timeDifference = now.getTime() - createdAtDate.getTime();

	return timeDifference < ms;
}
