var result = null;
axios({
  url: "https://62db6ca5e56f6d82a772852f.mockapi.io/sv",
  method: "GET",
})
  .then(function (res) {
    console.log(res);
    result = res;
  })
  .catch(function (err) {
    console.log(err);
  });
