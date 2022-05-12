import fetcher from "./fetcher";
import { auth } from "./token";

const apiCv = {
  getCv: () =>
    fetcher
      .get("/link", {
        headers: {
          Authorization: `Bearer ${auth}`,
          apikey: auth,
        },
      })
      .then((res) => res)
      .catch((err) => err),
};

export default apiCv;
