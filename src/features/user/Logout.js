import { useMutation, useQueryClient } from "@tanstack/react-query";

const logout = () => {
  const data = {};
  try {
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
