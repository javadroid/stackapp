import { useMutation, useQueryClient } from "@tanstack/react-query";

const logout = () => {
  const data = {};
  try {
    localStorage.removeItem("cfb90493-c364-4ade-820d-b6848bc65f44");
    return (data["loginState"] = !0);
  } catch (err) {
    throw new Error("");
  }
};

export const Logout = () => {
  const qc = useQueryClient();
  return useMutation(logout, {
    onSuccess: (newData) => {
      qc.setQueriesData(["user"], newData);
    },
  });
};
