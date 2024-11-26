const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
};

const createCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/create-category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!response.ok) throw new Error("Failed to create category");
  return response.json();
};

const updateCategory = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/update-category/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) throw new Error("Failed to update category");
  return response.json();
};

export { getCategories, createCategory, updateCategory };
