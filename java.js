function ketqua(){
    var tienLuong = document.getElementById('tienLuong').value;
    var ngayLam = document.getElementById('ngayLam').value;
    var tongCong = 0;
    tongCong = tienLuong * ngayLam;
    document.getElementById('tongCong').innerHTML = tongCong;
}

function tinhTB(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var number3 = parseFloat(document.getElementById('number3').value);
    var number4 = parseFloat(document.getElementById('number4').value);
    var number5 = parseFloat(document.getElementById('number5').value);
    var ketquaTB = 0;
    ketquaTB = (number1 + number2 + number3 + number4 + number5)/5;
    document.getElementById('ketquaTB').innerHTML = ketquaTB;
}

function quyDoi() {
    var money = document.getElementById('money').value*1;
    var change = 23500;
    var vnd = money*change;
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    document.getElementById('ketqua_QD').innerHTML = formatter.format(vnd);
}

function tinhPS() {
    var dai = document.getElementById('dai').value*1;
    var rong = document.getElementById('rong').value*1;
    var P = (dai+rong)*2;
    var S = dai*rong;
    document.getElementById("ketqua_PS").innerHTML = `P = ${P}, S = ${S}`;
}

function tinhTong(){
    var num = document.getElementById('number').value;
    var donVi = num % 10;
    var chuc = Math.floor(num / 10);
    var tong = donVi+chuc;
    document.getElementById('ketqua_tong').innerHTML = tong;
}

