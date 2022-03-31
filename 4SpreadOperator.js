//Spread Operator
const newCooler = ["black","white"]
console.log(newCooler.length)
const coolers = ["red","blue","green",...newCooler]
console.log(coolers.length)
_allCooloer=()=>{
    let allcooler = "coolers all :"+coolers
    return allcooler
}
console.log(_allCooloer())