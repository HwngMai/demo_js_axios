renderDSSV = function (dssv) {
  var contentHTML = "";
  dssv.forEach((sv) => {
    let diemTB = (sv.math * 1 + sv.physics * 1 + sv.chemistry * 1) / 3;
    var contentTr = `<tr>
        <td>${sv.code}</td>
        <td>${sv.name}</td>
        <td>${sv.email}</td>
        <td>${diemTB}</td>
        <td> 
        <button onclick="xoaSV('${sv.id}')" class="btn btn-danger"> Xóa </button>
        <button onclick="suaSV('${sv.id}')" class="btn btn-warning"> Sửa </button>
        </td>
        </tr>`;
    contentHTML += contentTr;
  });
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
};
//**FUNCTION BẬT LOADING */
function loadingOn() {
  document.getElementById("loading").style.display = "flex";
}
function loadingOff() {
  document.getElementById("loading").style.display = "none";
}
// FUNCTION disable ô input và btn
function togDisable(id) {
  document.getElementById(id).disabled = true;
}
function togEnable(id) {
  document.getElementById(id).disabled = false;
}
//**FUNCTION lấy thông tin từ form */
function layThongTinTuForm() {
  // lấy các giá trị từ input người dùng
  const name = document.getElementById("txtTenSV").value;
  const code = document.getElementById("txtMaSV").value;
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPass").value;
  const math = document.getElementById("txtDiemToan").value;
  const physics = document.getElementById("txtDiemLy").value;
  const chemistry = document.getElementById("txtDiemHoa").value;
  //đưa về 1 mảng mới theo cấu tạo của model SinhVien từ model.js
  return new SinhVien(name, code, email, password, math, physics, chemistry);
}

//**FUNCTION show thông tin từ id lên form */
let renderSV = function (sv) {
  document.getElementById("txtTenSV").value = sv.name;
  document.getElementById("txtMaSV").value = sv.code;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.password;
  document.getElementById("txtDiemToan").value = sv.math;
  document.getElementById("txtDiemLy").value = sv.physics;
  document.getElementById("txtDiemHoa").value = sv.chemistry;
};
//**FUNCTION reset input */

function resetThongTin() {
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
  togDisable("btnCapNhat");
  togEnable("txtMaSV");
  togEnable("btnThemSV");
}
