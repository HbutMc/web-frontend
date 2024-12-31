import {FileServerAddr} from "@/config/config";
import axios from "axios";

export default axios.create({
  baseURL: FileServerAddr,
  timeout: 3000,
})
