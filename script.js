let str = "888888";

// Bài 1: Kiểm tra chuỗi đưa vào có đúng dạng dd/mm/yyyy
let regex1 = /^[0123][0-9][/][01][0-9][/][12][0-9]{3,}$/;

// Bài 2: Đếm số từ trong một chuỗi
function bai2(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i, i + 1) === " ") count++;
    }
    return ++count;
}

// Bài 3: Đếm số nguyên âm/phụ âm trong một chuỗi
function bai3(str) {
    let nguyenam = 0;
    let phuam = 0;
    let regex = /^[bcdfghjklmnpqrstvwxyz]$/;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (regex.test(str.substring(i, i + 1))) phuam++;
        else if (str.substring(i, i + 1) === " ") {}
        else nguyenam++;
    }
    result = "Số phụ âm là " + --phuam + "; số nguyên âm là :" + --nguyenam;
    return result;
}

// Bài 4: Kiểm tra mã số bảo mật hợp lệ
let regex4 = /^[\d]{8,}$/;

console.log(regex4.test(str));