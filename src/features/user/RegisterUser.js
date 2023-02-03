import { headerAxios } from "../../config/instance";

export const registerUser = async (payload) => {
  try {
    headerAxios.defaults.headers.common[
      "Authorization"
    ] = '';
    headerAxios.defaults.credentials = 'included';

    const { data, status } = await headerAxios.post("register/", payload);
    if (status === 201) {
      data["loginState"] = !0;
      return data;
    } else {
    }
  } catch (err) {
    if (err.response.status === 0) {
      throw new Error();
    } else {
      throw ({ status: err.response.status, message: err.response.data });
    }
  }
};

