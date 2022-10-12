import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://fd96-102-215-76-98.in.ngrok.io",
});

instance.interceptors.request.use(
 async (config)=>{
const token = await AsyncStorage.getItem("token")
if(token){
  config.headers.Authorization = `Bearer ${token}`
}
return config;
  },

  (err)=>{
return Promise.reject(err)
  }
)

export default instance;