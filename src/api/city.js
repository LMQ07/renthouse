import request from "@/utils/request";

export const getCityList = (params) => {
  return request({
    url: "/area/city",
    params,
  });
};
