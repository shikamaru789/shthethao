import { API_THETHAO, API_URL } from "@/config/config";
import axios from "axios";
import useSWR from "swr";

const url = `${API_URL}/seagame`;

export const getScheduleSeaGame = async () => {
  try {
    const res = await axios.get(`${url}/schedule`);
    return res.data.data;
  } catch (error) {}
};

export const getScoreSeaGame = async () => {
  try {
    const res = await axios.get(`${url}/score`);
    return res.data.data;
  } catch (error) {}
};

