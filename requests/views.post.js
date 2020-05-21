import http from 'k6/http';

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

export default viewPost;