import { useQuery } from "@tanstack/react-query";
import { headerAxios } from "../../config/instance";

export const getUserDetailsQuery = async () => {
  const token = localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44");
  if (token) {
    headerAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      headerAxios.defaults.headers.common["Content-Type"] = "application/json";
      const { data, status } = await headerAxios.get("user/");
      if (status === 200) {
        return data.data;
      } else {
      }
    } catch (err) {
      throw new Error();
    }
  } else {
    headerAxios.defaults.headers.common["Authorization"] = ``;
    throw new Error();
  }
};

export const useUserQuery = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: getUserDetailsQuery,
    retry: 1,
    refetchOnMount: !1,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1,
    retryOnMount: !1,
    refetchInterval: 60000,
    refetchIntervalInBackground: !0,

    onSuccess: (data) => {
      data["loginState"] = !0;
    },
  });
