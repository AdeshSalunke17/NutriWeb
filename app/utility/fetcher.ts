
const API_BASE_URL =  "https://trackapi.nutritionix.com";  // Define your base URL here

export async function fetcher(
  endpoint: string,
  options: RequestInit = {}
) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    'x-app-id': "c06f8b5d",
    'x-app-key': "3735d9e77aefbeea88e475c97dff12af"
  };

  // Add the base URL to the endpoint and merge default headers with user-specified headers
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers, // Allow overriding default headers
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json(); // Assuming you expect a JSON response
}
