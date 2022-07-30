renderDSSV = function (dssv) {
  var contentHTML = "";
  dssv.forEach((sv) => {
    var contentTr = `<tr>
        <td>${sv.code}</td>
        <td>${sv.name}</td>
        <td>${sv.email}</td>
        <td>0</td>
        <td> 
        <button onclick="xoaSV('${sv.id}')" class="btn btn-danger"> Xóa </button>
        <button class="btn btn-warning"> Sửa </button>
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
//**FUNCTION lấy thông tin từ form */
function layThongTinTuForm() {
  // lấy các giá trị từ input người dùng
  const name = document.getElementById("txtTenSV").value;
  const code = document.getElementById("txtMaSV").value;
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPass").value;
  const math = document.getElementById("txtDiemToan").value;
  const physic = document.getElementById("txtDiemLy").value;
  const chemistry = document.getElementById("txtDiemHoa").value;
  //đưa về 1 mảng mới theo cấu tạo của model SinhVien từ model.js
  return new SinhVien(name, code, email, password, math, physic, chemistry);
}
