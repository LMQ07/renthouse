import request from "@/utils/request";
export const getHouseList = () =>
  request({
    url: "/user/houses",
  });
