// Loop Array
// For Loop ,ForEach, ForOf

const data = [10, 20, 30, 40, 50]

// for(i = 1; i<data.length;i++){
//     if (data[i]>=50)break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`)
// }
let sum =0;
data.forEach(e=>{
    console.log(`Array Data = ${e}`)
    // sum+=e
    // console.log(`ผลรวมทั้งหมด =${e}`)
}) 

for (elem of data){
    if(elem>=30) break
    console.log(`สมาชิด Array Data = ${elem}`)
}