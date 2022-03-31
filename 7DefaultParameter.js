//DefaultParameter
customer = (customerName, customerAddess) => {
    if(!customerAddess){
        customerAddess ="ไม่มีข้มูล"
    }
  const address = `ชื่อลูกค้า :${customerName} 
ที่อยู่ : ${customerAddess}`;
  return address;
};

console.log(customer("โทน", "ด่านขุนทด"));
console.log(customer("โทน", ""));
