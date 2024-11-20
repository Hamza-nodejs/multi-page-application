import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000,
});

apiClient.interceptors.request.use((config) => {
  if (config.method === "get") {
    delete config.headers["Content-Type"];
  }
  return config;
});

const apiHelper = async ({ endpoint, method = "GET", data = null, params = null, headers = {} }) => {
  try {
    const response = await apiClient({
      url: endpoint,
      method: method.toUpperCase(),
      data: method === "GET" ? null : data,
      params: params,
      headers: { ...apiClient.defaults.headers, ...headers },
    });
    return response.data;
  } catch (error) {
    console.error("API Call Error:", error.response || error.message);
    throw error.response ? error.response.data : error;
  }
};

export default apiHelper;
