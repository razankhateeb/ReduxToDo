import axios from "axios";
import { apiCallBegan } from "../api.js";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });

    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000/api",
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (onError) {
        dispatch({ type: onError, payload: error.method });
      }
      dispatch({ type: "SHOW_ERROR", payload: error.method });
    }
  };
export default api;
