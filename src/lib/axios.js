import env from "@/env";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: env.API_URL,
});

export const sendCareerApplication = async (formData) => {
  try {
    const response = await axiosInstance.post("/contact", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    if (error.response?.data) {
      throw error.response.data;
    }
    throw error;
  }
};

export default axiosInstance;
