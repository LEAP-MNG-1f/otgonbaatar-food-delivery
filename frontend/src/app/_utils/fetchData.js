const fetchData = async (endpoint) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};
export default fetchData;
