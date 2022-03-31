//Join & Concat
const data1 =[100,200,300,400]
const data2 =[500,600]
console.log(data1)
console.log(typeof(data1))

const result = data1.join("*")
console.log(result)
console.log(typeof(result));

const alldata = data1.concat(data2)
const alldatatostring =alldata.join("*")
console.log(alldatatostring)
console.log(typeof(alldatatostring))