import request from "@/utils/request";
export const getCollectMsg = () =>
  request({
    url: "/user/favorites",
  });
