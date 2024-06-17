export default function calculateDiscountedPrice(
	price: number,
	discountPercentage: number
): number {
	return price - (price * discountPercentage) / 100;
}
