//Destructuring (การสลายโครางสร้าง)
const coolers = ["แดง","เขียว","เหลือง","น้ำเงิน"]
const [red,green,yellow,blue] = coolers

console.log(red,green)

//Destructuring Object
const product = {
    productName : "คอมพิวเตอร์",
    price: 3000,
    stock:10
}

const {productName:productname,price:price,stock:stock} = product
console.log(productname)
console.log(price)
console.log(stock)