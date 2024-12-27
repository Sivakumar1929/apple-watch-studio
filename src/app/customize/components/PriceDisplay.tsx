interface PriceDisplayProps {
  basePrice: number;
  casePrice: number;
  bandPrice: number;
  sizePrice: number;
}
export default function PriceDisplay({ basePrice, casePrice, bandPrice, sizePrice }: PriceDisplayProps) {
  const totalPrice = basePrice + casePrice + bandPrice + sizePrice;

  return (
    <div className="price-display text-xl font-bold text-gray-800 mt-6">
      <p className="transition-colors duration-300">
        Total Price: <span className="text-blue-500">${totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}
