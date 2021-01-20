import axios from "axios";

const KEY = "AIzaSyDquEbRBpIQblcRfqUZN_BeB9fQ1gMgRwI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
