let emp=new Array("Devyani","Yukta","Preeti")
console.log(emp)
let age =new Array(3)
age[0]=24
age[1]=23
age[2]=22
age[3]=20
age[4]=65
let x=age[age.length-1]
console.log(x)
console.log(emp,age)
//Modify Array
console.log("Modify Array")

age[4]=25
console.log(age)

console.log("Add Array Element")
emp.push("Snehal");
console.log(emp)

emp.unshift("Pooja")
console.log(emp) 
console.log("Iteration Array")
//Iteration
for(var i=0;i<emp.length;i++)
{
    console.log(emp[i])
}

//Concat
console.log("Concat")
console.log(emp.concat(age))
//Pop
let name=["Dev","Shrey"]
name.pop()
console.log(name)
name.push("Preet","Pooh")
console.log(name)
name.shift()
console.log(name)  

var fname = prompt("Enter Your First name:")
var lname = prompt("Enter Your Last name:")
console.log(fname+" "+lname)