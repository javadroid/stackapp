import { useQuery, useQueryClient } from "@tanstack/react-query";
import { headerAxios } from "../../config/instance";

export const getUserLoginQuery = async () => {
  const token = localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44");
  if (token) {
    // headerAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      headerAxios.defaults.headers.common["Content-Type"] = "application/json";
      const { status } = await headerAxios.post("token/verify/", {token});
      if (status === 200) {
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

export const useUserLoginQuery = () => {
  const qc = useQueryClient();
  return useQuery({
    queryKey: ["checkAuth"],
    queryFn: getUserLoginQuery,
    retry: 0,
    refetchOnMount: !1,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1,
    // retryOnMount: !1,
    // refetchInterval: 60000,
    // refetchIntervalInBackground: !0,

    onSuccess: () => {
      qc.setQueriesData(["user"], (oldData) => [...oldData, { loginState: !0 }]);
    },

    onError: () => {
      qc.setQueriesData(["user"], () => [{ loginState: !1 }]);
    },
  });
};
