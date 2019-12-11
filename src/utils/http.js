import axios from "axios";
import qs from "qs";

const dev = "http://admin.yb3167.cc"; // 测试环境接口
const pro = "http://admin.yb3167.cc"; // 生产环境接口

const baseURL = process.env.NODE_ENV === "development" ? dev : pro;

axios.defaults.baseURL = baseURL;

// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  res => {
    // 对响应数据做些什么
    return Promise.resolve(res);
  },
  err => {
    // 对响应错误做些什么
    console.log("err", err.response); // 修改后
    return Promise.reject(err);
  }
);

/**
 * 封装 get 方法
 * @param {String} url
 * @param {Object} params
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(res => {
        if (res.status === 200) {
          if (res.data) {
            // 请求成功
            resolve(res.data);
          } else {
            // 请求错误
            reject(res);
          }
        } else {
          // 服务器错误
          console.log("服务器错误!");
          reject(res);
        }
      })
      .catch(error => {
        // console.log('网络错误!')
        reject(error);
      });
  });
}

/**
 * 封装 post 方法
 * @param {String} url
 * @param {Object} params
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(res => {
        if (res.status === 200) {
          if (res.data) {
            // 请求成功
            resolve(res.data);
          } else {
            // 请求错误
            reject(res);
          }
        } else {
          // 服务器错误
          console.log("服务器错误!");
          reject(res);
        }
      })
      .catch(error => {
        // console.log('网络错误!')
        reject(error);
      });
  });
}
