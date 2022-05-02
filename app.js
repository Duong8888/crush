var count = 0;
function non() {
    count++;
    console.log(count);
    var btn2 = document.querySelector('.main-btn2').style;
    if (count == 1) {
        btn2.transform = 'translateX(-300px)';
    } else if(count == 2) {
        btn2.transform = 'translateY(100px)';
    } else if(count == 3) {
        btn2.transform = 'translateX(300px)';
    } else if(count == 4) {
        btn2.transform = 'translateY(-400px)';
    } else if(count == 5) {
        btn2.transform = 'translateY(100px)';
    } else if(count == 6) {
        btn2.transform = 'translateX(300px)';
    } else if(count == 7) {
        btn2.transform = 'translateX(600px)';
        btn2.display = 'none';
    }
}
function non1() {
    count++;
    console.log(count);
    var btn2 = document.querySelector('.main-btn2').style;
    if (count == 1) {
        btn2.transform = 'translateX(-300px)';
    } else if(count == 2) {
        btn2.transform = 'translateY(100px)';
    } else if(count == 3) {
        btn2.transform = 'translateX(300px)';
    } else if(count == 4) {
        btn2.transform = 'translateY(-400px)';
    } else if(count == 5) {
        btn2.transform = 'translateY(100px)';
    } else if(count == 6) {
        btn2.transform = 'translateX(300px)';
    } else if(count == 7) {
        btn2.transform = 'translateX(600px)';
        btn2.display = 'none';
    }
}
function mo() {
    document.querySelector('.khung').style.zIndex = '10';
    document.querySelector('.thongBao').style.transform = 'scale(1.2)';
}
function dong() {
    document.querySelector('.khung').style.zIndex = '-10';
    document.querySelector('.thongBao').style.transform = 'scale(0.1)';
}