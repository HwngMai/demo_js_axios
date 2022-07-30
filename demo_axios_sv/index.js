const BASE_URL = "https://62db6ca5e56f6d82a772852f.mockapi.io";
//**FUNCTION lấy dssv */
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

//
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
//**FUNCTION lấy thông tin sv */
function getSV(id) {
  //Bật loading
  loadingOn();
  axios({
    url: `${BASE_URL}/sv/${id}`,
    method: "GET",
  })
    .then(function (res) {
      //Tắt loading
      loadingOff();
      console.log(res);
      //RenderSV lên form
      renderSV(res.data);
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}
//**FUNCTION sửa sinh viên */
function suaSV(id) {
  //Disable thêm sv và ô input mã sv
  togDisable("txtMaSV");
  togDisable("btnThemSV");
  //Enable ô sửa
  togEnable("btnCapNhat");
  //show info sv
  getSV(id);
}
//**FUNCTION cập nhật */
function capNhatSV() {
  let id = document.getElementById("txtMaSV").value;
  axios({
    url: `${BASE_URL}/sv/${id}`,
    method: "PUT",
  })
    .then(function (res) {
      loadingOff();
      console.log("res: ", res);
      getDSSV();
      //Disable thêm sv và ô input mã sv
      togEnable("txtMaSV");
      togEnable("btnThemSV");
      //Enable ô sửa
      togDisable("btnCapNhat");
    })
    .catch(function (err) {
      loadingOff();
      console.log("err: ", err);
    });
}
