import { headerAxios } from "../../config/instance";

export const loginUser = async (payload) => {
  try {
    headerAxios.defaults.headers.common["Authorization"] = ``;
    headerAxios.defaults.credentials = !0;

    const { data, status } = await headerAxios.post("auth/login/", payload);
    if (status === 200) {
      data["loginState"] = !0;
      return data;
    } else {
    }
  } catch (err) {
    if (err.response.status === 0) {
      throw new Error();
    } else {
      throw { status: err.response.status, message: err.response.data };
    }
  }
};
