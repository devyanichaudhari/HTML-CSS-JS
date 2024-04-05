//By Literal
var emp={
    fname:"Devyani",
    lname:"Chaudhari"
}

console.log(emp.fname+" "+emp.lname)

//By Constructor using new Keyword
function show()
{
    roll_no=123,
    name="Devyani"
    console.log(roll_no+" "+name)
}
var x = new show();

//By Object Class Instance

var product = new Object();
product.id=101;
product.name="speaker";
product.price=1200;
console.log(product.id+" "+product.name+" "+product.price)

function customer(id,name,address)
{
    this.id=id;
    this.name=name;
    this.address=address;
}

c = new customer(101,"Devyani","Dombivli")
console.log(c)

//ES6 Format
class Company
{
    constructor(name,address)
    {
        this.name=name;
        this.address=address;
    }
}
var c1=new Company("TCS","Airoli")
console.log(c1.name+" "+c1.address)

class Calculation
{
    constructor(num1,num2)
    {
        this.num1=num1;
        this.num2=num2;
    }
    add()
    {
        console.log(this.num1+this.num2);
    }
    sub()
    {
        console.log(this.num1-this.num2);
    }
    mul()
    {
        console.log(this.num1*this.num2);
    }
    div()
    {
        console.log(this.num1/this.num2);
    }
    mod()
    {
        console.log(this.num1%this.num2);
    }
}
cal1=new Calculation(10,20)
cal1.add()
cal1.sub()
cal1.mul()
cal1.div()
cal1.mod()
