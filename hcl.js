function sumDigits(num) {
  // Tab to edit
  let sum = 0;
  while (num>0) {
    // Tab to edit
    sum +=num%10;
    num=Math.floor(num/10)
    
  }return sum;
}
console.log(sumDigits(400))

let age =20;
let dept='xyz';
setInterval(()=>{
  console.log(age,dept)
},1000)