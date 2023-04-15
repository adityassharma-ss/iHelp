import axios from "axios";
import Cookies from "js-cookie";

export const profilefetcher = async (url) => {
  const profiledata = await axios
    .get(url, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
    .then((res) => res.data);

  return profiledata;
};

export const defaultfetcher = async (url) => {
  const profiledata = await axios.get(url).then((res) => res.data);
  return profiledata;
};