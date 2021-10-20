import axios from "axios";

const API_RESOURCE_GET_WORKS =
  "https://api.termicadesign.com/termicadesign-api/get-works";
const API_RESOURCE_SEND_EMAIL =
  "https://api.termicadesign.com/termicadesign-api/send-email";
const API_RESOURCE_GET_LASTCOMMIT =
  "https://api.github.com/repos/javigonz/termicadesign/commits?Fbuild.gradle&page=1&per_page=1";
const TARGET_EMAIL = "fjavier.gonzalez.paez@gmail.com";

const getWorks = async () => {
  const resp = await axios.request({
    url: API_RESOURCE_GET_WORKS,
    method: "GET",
    headers: {
      "X-Api-Key": process.env.REACT_APP_API_KEY,
    },
  });
  return resp.data;
};

const sendEmail = async (params) => {
  const resp = await axios.request({
    url: API_RESOURCE_SEND_EMAIL,
    method: "POST",
    data: params,
    headers: {
      "X-Api-Key": process.env.REACT_APP_API_KEY,
    },
  });
  return resp.data;
};

const getLastCommitInfo = async () => {
  const resp = await axios.request({
    url: API_RESOURCE_GET_LASTCOMMIT,
    method: "GET",
  });
  return resp.data;
};

export default { getWorks, getLastCommitInfo, sendEmail, TARGET_EMAIL };
