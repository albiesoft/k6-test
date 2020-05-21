import http from 'k6/http';
import { sleep } from "k6";

const viewPost = (url) => {
  var payload = JSON.stringify({
    slug: "https://google.com",
    referrer: "https://facebook.com",
    browser: "IE",
    auth: false,
    userID: "12345"
  });

  const postParams = {
    headers: {
      'hbism': '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5'
    }
  };

  http.post(`${url}/views`, payload, postParams);
}

const conversionsPost = (url) => {
  const conversions = new Array(20).fill().map((e,i) => {
    return {
      skuID: `${1000 * (i + 1)}`,
      quantity: 2
    }
 });

  var payload = JSON.stringify({
    conversions,
    type: 'purchase',
    sessionID: '123456789',
    referrer: "https://facebook.com",
    browser: "IE",
    auth: false,
    userID: "12345"
  });

  const postParams = {
    headers: {
      'hbism': '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5'
    }
  };

  http.post(`${url}/conversions`, payload, postParams);
}

const conversionsGet = (url) => {
  http.get(`${url}/conversions?skus=1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019`);
  sleep(10);
}


export default function() {
  const url = 'http://localhost:3004/';

  new Array(20).fill().map((e,i) => {
    conversionsGet(url);
  });
}