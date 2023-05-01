import { API_THETHAO, API_URL } from "@/config/config";
import axios from "axios";
import useSWR from "swr";

const url = `${API_URL}/football`;

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const getMatchToday = async (leagueId?: Number) => {
  try {
    let res = await axios.get(`${url}/match/today?id=${leagueId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getMatchOfWeek = async (leagueId?: Number) => {
  try {
    let res = await axios.get(`${url}/match/week?id=${leagueId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getHotMatch = async () => {
  try {
    let res = await axios.get(`${url}/match/hot`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getMatchFinish = async (
  leagueId?: Number,
  pageSize: Number = 15,
  pageIndex: Number = 1
) => {
  try {
    let res = await axios.get(
      `${url}/match/finish?id=${leagueId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getMatchPending = async (
  leagueId: Number,
  pageSize: Number = 15,
  pageIndex: Number = 1
) => {
  try {
    let res = await axios.get(
      `${url}/match/pending?id=${leagueId}&pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getMatchByLeague = async (
  leagueId: Number = 4377,
  status: String = ""
) => {
  try {
    let res = await axios.get(`${url}/match?id=${leagueId}&status=${status}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getLeague = async (
  search: String = "",
  pageSize: Number = 15,
  pageIndex: Number = 1
) => {
  try {
    let res = await axios.get(
      `${url}/league?search=${search}&pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getStandingByLeague = async (leagueId: number[] | number) => {
  try {
    let res = await axios.get(`${url}/league/standing?id=${leagueId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getMatchDetails = async (matchId: number) => {
  try {
    let res = await axios.get(`${url}/match/${matchId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getEventMatch = async (matchId: number) => {
  try {
    let res = await axios.get(`${url}/match/events?id=${matchId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getStatsMatch = async (matchId: number) => {
  try {
    let res = await axios.get(`${url}/match/stats?id=${matchId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getDataFixtureMicro = async () => {
  try {
    const response = await axios.get(
      `${API_THETHAO}/api/dataFootball/micro/getDataFixture`
    );

    return response?.data?.data;
  } catch (error) {}
};

export const getTablePoint = async (ids: number[]) => {
  try {
    const response = await axios.post(
      `${API_THETHAO}/api/dataFootball/getTablePoint`,
      {
        id: ids,
      }
    );
    const data = response.data;
    return data?.data || [];
  } catch (error) {}
};

export const getDetailsLeague = async (leagueId: number) => {
  try {
    const res = await axios.get(`${url}/league/${leagueId}`);
    return res.data.data;
  } catch (error) {}
};


export const getSchedule = async () => {
  try {
    const res = await axios.get(`${url}/schedule`);
    return res.data.data;
  } catch (error) {}
};
