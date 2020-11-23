import axios from 'axios'

export function request(config) {
  const instance=axios.create({
    baseURL:'http://150.158.6.238:8888',
    timeout:5000
  })

  //发送拦截
  // instance.interceptors.request.use(config=>{
  //   // console.log(config);
  //   return config
  // },err => {
  //   // console.log(err);
  // })
  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    // console.log(falgtt);
  })

  //本身就是返回promise
  return instance(config)

}

// export function requestpost(config) {
//   const instance=axios.create({
//     baseURL:'http://150.158.6.238:8888',
//     timeout:5000
//   })
//
//   //发送拦截
//   // instance.interceptors.request.use(config=>{
//   //   // console.log(config);
//   //   return config
//   // },err => {
//   //   // console.log(err);
//   // })
//   //响应拦截
//   instance.interceptors.response.use(res=>{
//     return res.data
//   },err=>{
//     // console.log(err);
//   })
//
//   //本身就是返回promise
//   return instance(config)
//
// }
