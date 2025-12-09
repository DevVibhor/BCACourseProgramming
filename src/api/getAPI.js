import axios from "axios";

const getMethod = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getMethod;
