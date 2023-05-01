import { API_URL, URL } from "@/config/config";
import axios from "axios";

const url = `${API_URL}/category`;

export const getAllCateByDomain = async () => {
  try {
    let res = await axios.get(`${url}/domains?domain=${URL}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCateBySlug = async (slug: string) => {
  try {
    let res = await axios.get(`${url}/${slug}?domain=${URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
