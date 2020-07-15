import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 2000,
  headers: {'Content-type': 'application/x-www-form-urlencoded'}
});
// 添加请求拦截器
instance.interceptors.request.use((config)=>{
  // 再次设置tkoen或者添加loading等请求前的操作
  // 添加一个loading
  return config;
},(error)=>{
  //做一些错误处理
  console.log(error)
  Promise.reject(error);
})

// 添加xi响应拦截器
instance.interceptors.response.use(
  (response)=>{
    //响应数据后做点什么
    return response;
  },
  (error)=>{
    // 对响应错误做点什么
    return Promise.reject(error);
  }
)
export default instance
