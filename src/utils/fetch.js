import Axios from './request'


import qs from 'qs'
const getUser=async (value)=>{
  try {
    let res=await Axios.post('/login',qs.stringify(value))
    return res
  } catch (e) {
    console.log(e)
  }
}
export default {getUser}
