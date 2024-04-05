class A
{
    dis(x,y)
    {
        console.log(x+y);
    }
}
class B extends A{
    dis(x,y,z)
    {
        super.dis(10,20)
        console.log(x+y+z);
    }
}

let a= new B();
a.dis(10,20,20);