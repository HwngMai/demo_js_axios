const BASE_URL = "https://62db6ca5e56f6d82a772852f.mockapi.io";
function getDSSV() {
  loadingOn();
  axios({
    url: `${BASE_URL}/sv`,
    method: "GET",
  })
    .then(function (res) {
      loadingOff();
      console.log(res);
      renderDSSV(res.data);
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}
getDSSV();
function xoaSV(id) {
  loadingOn();
  axios({
    url: `${BASE_URL}/sv/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      loadingOff();
      console.log("res: ", res);
      getDSSV();
    })
    .catch(function (err) {
      loadingOff();
      console.log("err: ", err);
    });
}
//POST là thêm
//PUT là cập nhật
//GET:id lấy thông tin từ id
function themSV() {
  //Lấy info từ form
  newSV = layThongTinTuForm();
  //Thêm mới
  loadingOn();
  axios({
    url: `${BASE_URL}/sv`,
    method: "POST",
    data: newSV,
  })
    .then(function (res) {
      loadingOff();
      console.log(res);
      getDSSV();
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}
