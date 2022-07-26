import request from "@/utils/request";

export const getSwiperImg = () => {
  return request({
    url: "/home/swiper",
  });
};
export const getGroupMsg = () => {
  return request({
    url: "/home/groups",
  });
};
