import axios from "axios";

const baseURL = "http://localhost:5000/";

const api = axios.create({
  baseURL,
});

export const postText = async (content) => {
  try {
    const res = await api.post("/predict_text",{
      'data': content
    });
    console.log(res.data);
    return res.data.link;
  } catch (err) {
    console.log(err);
  }
};

export const postUrl = async (content) => {
  try {
    const res = await api.post("/predict_url",{
      'url': content
    });
    console.log(res.data);
    return res.data.link;
  } catch (err) {
    console.log(err);
  }
};

export const postUpload = async (content) => {
  console.log("inside api.js", content);
  try {
    const res = await api.post("/predict_upload",{
      'upload': content
    });
    console.log(res.data);
    // setFileLink(res.data.link);
    return res.data.link;
  } catch (err) {
    console.log(err);
  }
};

export const getDataFromFile = async () => {
  try {
    const res = await api.get("/get-response");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};