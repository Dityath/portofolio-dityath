import fetcher from "./fetcher";
import { auth } from "./token";

const apiEmail = {
  postEmail: (data) =>
    fetcher
      .post("/Email", data, {
        headers: {
          Authorization: `Bearer ${auth}`,
          apikey: auth,
        },
      })
      .then((res) => res)
      .catch((err) => err),
};

export default apiEmail;
