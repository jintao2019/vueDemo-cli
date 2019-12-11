import { post } from "@utils/http";
import { url } from "./url";

class Ajax {
  getparams(key) {
    return post(url.paramsListApi, { key });
  }
}

export default new Ajax();
