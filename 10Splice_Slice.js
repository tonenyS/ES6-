//splice slice
const data = [10, 20, 30, 40, 50];
console.log(data);
//(ตำแหน่งที่จะลบ,จำนวนที่จะลบ, สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่เดิม)
data.splice(1, 2, 70);
console.log(data);
//(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย -1)
const lastdata = data.slice(1, 3); 
console.log(lastdata);
