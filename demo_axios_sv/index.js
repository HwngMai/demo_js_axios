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
//Tạo biến svEdit
//**FUNCTION sửa sinh viên */
function suaSV(id) {
  //Disable thêm sv và ô input mã sv
  togDisable("txtMaSV");
  togDisable("btnThemSV");
  //Enable ô sửa
  togEnable("btnCapNhat");
  //Lấy thông tin sv
  getSV(id);
}
// Tạo biến chứa index cần tìm để edit
let indexEdit = "";
//**FUNCTION lấy thông tin sv và show lên form */
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
      svEdit = res.data;
      indexEdit = svEdit.id;
      console.log("indexEdit: ", indexEdit);
      console.log("svEdit: ", svEdit);
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}
//**FUNCTION cập nhật */

function capNhatSV() {
  console.log("indexEdit: ", indexEdit);
  newSV = layThongTinTuForm();
  //Lấy thông tin index sv
  axios({
    url: `${BASE_URL}/sv/${indexEdit}`,
    method: "PUT",
    data: newSV,
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
      resetThongTin();
    })
    .catch(function (err) {
      loadingOff();
      console.log("err: ", err);
    });
}
//**FUNCTION tìm kiếm sinh viên */
function searchSV() {
  loadingOn();
  axios({
    url: `${BASE_URL}/sv`,
    method: "GET",
  })
    .then(function (res) {
      //Tắt loading
      loadingOff();
      console.log(res);
      // Tạo biến chứa input - tên cần tìm
      let nameSearch = document.getElementById("txtSearch").value;
      // Tìm index trong mảng theo tên
      let indexSearch = searchNameForId(res.data, nameSearch);
      //Show thông tin lên form
      if (indexSearch != -1) {
        getSV(indexSearch);
        togDisable("txtMaSV");
        togDisable("btnThemSV");
        togEnable("btnCapNhat");
        resetInput("txtSearch");
      } else {
        alert(" Không tìm thấy");
        resetThongTin();
      }
    })
    .catch(function (err) {
      loadingOff();
      console.log(err);
    });
}
// 1. get toàn bộ dssv
// 2. tìm sv.name = input
// 3. trả về sv.id = indexEdit
// 4. show thông tin sv[indexEdit] lên form
// 5. Cập nhật sv[indexEdit]
