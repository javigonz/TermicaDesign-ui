import axios from "axios";

const API_RESOURCE_GET_WORKS =
  "https://tij1t4a5jl.execute-api.us-east-1.amazonaws.com/prod/termicadesign-api/get-works";
const API_RESOURCE_GET_LASTCOMMIT =
  "https://api.github.com/repos/javigonz/termicadesign/commits?Fbuild.gradle&page=1&per_page=1";

const getWorks = async () => {
  const resp = await axios.request({
    url: API_RESOURCE_GET_WORKS,
    method: "GET",
    headers: {
      "X-Api-Key": process.env.REACT_APP_API_KEY,
      "Access-Control-Allow-Origin": "*",
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

export default { getWorks, getLastCommitInfo };
