import request from "@/utils/request";

export const getSearchHouseList = (params) =>
  request({
    url: "/house",
    params,
  });
