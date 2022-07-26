import request from "@/utils/request";

export const getUserInfo = (data) =>
  request({
    url: "/user",
    data,
  });
