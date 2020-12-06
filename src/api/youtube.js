import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyCNWGrE-uNAe5bB83YVZ9Bia5XQpzkJnWk",
  },
});
