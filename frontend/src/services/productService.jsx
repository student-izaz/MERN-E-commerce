export const fetchProductDetails = async (productId) => {
  const response = await fetch(
    `http://localhost:5000/api/products/${productId}`
  );
  return response.json();
};

export const fetchOriginalPakistanWear = async () => {
  const response = await fetch(
    `http://localhost:5000/api/product-category/original-pakistani-suits`
  );
  return response.json();
};

