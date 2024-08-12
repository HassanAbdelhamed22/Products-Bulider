export function textSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  else return txt;
}

export const formatPrice = (price: string): string => {
  const numericPrice = parseInt(price, 10); // Convert the string to an integer
  if (isNaN(numericPrice)) return price; // Handle cases where conversion fails
  return numericPrice.toLocaleString("en-US"); // Format with commas
};
