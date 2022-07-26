import request from "@/utils/request";
export const getUserMsg = (data) => {
  return request({
    url: "/user/login",
    method: "POST",
    data,
  });
};
