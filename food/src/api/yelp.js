import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8rzDnHX5U9VhDs1dHZTn2_JQMWQ2YNGccVXXJsgy5rNcpVdt2w8M5n8cbCjsp2aMqHNHuoHuSD3wMJYBOO-oSqLr_bBChQ-psFwF_34ZzyCpEZMzeNwbo63zIj2NX3Yx",
  },
});
