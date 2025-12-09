import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import crashlytics from "@react-native-firebase/crashlytics";

function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

export const getMethod = async (endURL, body) => {
  try {
    const response = await axios({
      method: 'get',
      url: endURL,
      body: body,
      timeout: 5000,
      signal: newAbortSignal(5000),
    });
    return response;
  } catch (error) {
    if (error?.code != 'ERR_CANCELED') {
      // crashlytics().recordError(error);
    }
    console.log('error', error);
    return error?.code;
  }
};
