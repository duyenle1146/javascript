let so = prompt('nhập giai thừa');
let kq = 1;
console.log(so);
if(Number(so)==0){
    console.log(1)
}else{
    for(let i = 1; i <= Number(so); i++){
        kq=kq * i;
    }
    console.log(kq);
}
