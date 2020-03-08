import axios from "axios";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { BASE_URL },
} = getConfig();

axios.defaults.baseURL = `${BASE_URL}/api`;

export default axios;
