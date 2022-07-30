//model.js là file chứa các khuôn mẫu cho obj(khuôn mẫu = các lớp đối tượng)
//khai báo khuôn mẫu cho obj SinhVien
function SinhVien(name, code, email, password, math, physics, chemistry) {
  this.name = name;
  this.code = code;
  this.email = email;
  this.password = password;
  this.math = math;
  this.physics = physics;
  this.chemistry = chemistry;
  this.tinhDTB = function () {
    return (
      (this.math * 1 + this.physics * 1 + this.chemistry * 1) /
      3
    ).toFixed(2);
  };
}
