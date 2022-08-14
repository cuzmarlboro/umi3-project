// 运行时配置

import mockjs from 'mockjs';

// 异步请求运行时配置
export const request = {
  requestInterceptors: [
    (url, option) => {
      console.log('请求拦截', url, option);
      option.url = 'https://esv3yewe.lc-cn-n1-shared.com/1.1' + url;
      option.headers = {
        'X-LC-Id': 'eSV3yEWEKKfxWxdGp5crvOK7-gzGzoHsz',
        'X-LC-Key': 'OQjDUpaV3zagNycGL1MRTaEh',
        'Content-Type': 'application/json',
      };
      return option; // 此处return的内容是自定义请求配置
    },
  ], // 请求拦截
  responseInterceptors: [
    // (response, option) => {
    //   console.log('响应拦截', response, option);
    //   console.log(response.json());
    //   return response; // 此处return的内容是后端下发的数据包
    // },
    async (response, option) => {
      console.log('响应拦截', response, option);
      let res = await response.json();
      console.log(res);
      return { data: res.results }; // 协助处理useRequest的格式需求
    },
  ], // 响应拦截
};
