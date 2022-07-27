import request from "@/utils/request";

export const getSearchHouseList = (id) =>
  request({
    url: `/houses/condition`,
    params: {
      id,
    },
  });
export const getList = (id) =>
  request({
    url: `/houses`,
    params: {
      id,
    },
  });
