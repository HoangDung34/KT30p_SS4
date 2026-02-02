let n = Number(prompt("Nhập một số nguyên n : "));
    console.log("Nhập số n :", n);

    if(n % 2 == 0){
        console.log("số là số chẵn"); 
    }else{
        console.log("Là số lẻ");   
    }

    if(n == 0){
        console.log("n = 0")
    }else if(n > 0){
        console.log("Đây là số dương");
    }else{
        console.log("Đây là số âm");
    }

    for(let i = 1; i <= n; i++){
        if(n > 0){
            console.log(`${i}`);
        }else if(n <= 0){
            console.log("giá trị không hợp lệ")
        }
    }


