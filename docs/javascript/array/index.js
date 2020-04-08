// 创建数组的方法
let arr = new Array()
console.log(arr)
arr = new Array(7)
console.log(arr[1])
console.log(arr)
arr = new Array('1','2','3','4','5','6','7')
console.log(arr)
let arr2 = []
const fibonacci = []; 
fibonacci[0] =1
fibonacci[1] =1
for(let i=2;i<20;i+=1) {
  fibonacci[i]= fibonacci[i-1]+ fibonacci[i-2]
}
console.log(fibonacci)

// push
let numbers = [1,2,3,4,5,6,7,8,9]
numbers[numbers.length]=10
console.log(numbers)
numbers.push(11)
numbers.push(12, 13);
console.log(numbers)
//unshift
Array.prototype.insertFirstPosition = function(value) {
  for(let i=this.length;i>=0;i--) {
    this[i]=this[i-1]
  }
  this[0]=value
}
numbers.insertFirstPosition(-1)
console.log(numbers)
numbers.unshift(-2)
console.log(numbers)
numbers.unshift(-4,-3)
console.log(numbers)
//pop
numbers.pop()
console.log(numbers)
Array.prototype.deleteLastPosition = function(){

}