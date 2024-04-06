
const Student=
{
    rno:101,
    Name:"Devyani Chaudhari",
    Age:24
}
const x=JSON.stringify(Student)

console.log(typeof(Student))
console.log(x)

const Employee=
`{
    "empId":1,
    "empName":"Devyani",
    "DeptName":"IT",
    "designation":"Developer"
}`

console.log(typeof(Employee))
const y = JSON.parse(Employee);
console.log(y)