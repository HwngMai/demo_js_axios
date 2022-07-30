//model.js là file chứa các khuôn mẫu cho obj(khuôn mẫu = các lớp đối tượng)
//khai báo khuôn mẫu cho obj SinhVien
function SinhVien(name, id, email, password, math, physic, chemistry) {
  this.name = name;
  this.code = code;
  this.email = email;
  this.password = password
  this.math = math;
  this.physic = physic;
  this.chemistry = chemistry;
  this.tinhDTB = function(){
    return ((this.toan  * 1 + this.ly * 1 + this.hoa * 1) / 3 ).toFixed(2);
  }
}

