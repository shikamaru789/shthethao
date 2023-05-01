import { API_URL, URL } from "@/config/config";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const url = `${API_URL}/posts`;

export const getPostByCategory = () => {
  try {
  } catch (error) {}
};

export const getPostByCateSlug = async (
  slug: string,
  pageSize: number = 10,
  pageIndex: number = 1
) => {
  try {
    const response = await axios.get(
      `${url}/category/${slug}?domain=${URL}&pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response?.data?.data;
  } catch (error) {}
};

export const getPostByMultiCateSlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${url}/category?slug=${slug}&domain=${URL}`
    );
    return response?.data?.data;
  } catch (error) {}
};

export const getLastestPost = async () => {
  try {
    const response = await axios.get(`${url}/lastest?domain=${URL}`);
    return response?.data.data;
  } catch (error) {}
};


export const getPostBySlug = async (slug:string) =>{
  try {
    const response = await axios.get(`${url}/getBySlug/${slug}?domain=${URL}`);
    return response?.data?.data;
  } catch (error) {}
}
export const getRelativePost = async (cateSlug:string, postSlug:string,pageSize:number = 10, pageIndex = 1) =>{
  try {
    const response = await axios.get(`${url}/relative/${cateSlug}?postSlug=${postSlug}&pageSize=${pageSize}&pageIndex=${pageIndex}&domain=${URL}`);
    return response?.data.data;
  } catch (error) {}
}