let t1:[number,string,boolean]=[101,"Devyani",true];
console.log(t1)
for(let i=0;i<t1.length;i++)
    {
        console.log(t1[i])
    }
let product:any=[101,"Speakers",2500]
console.log(product)
console.log(product[1])
product.push(102,"Shoes",60000)
console.log(product)
product.unshift(103,"TV",25000)
console.log(product)
product.pop()
console.log(product)
product.shift()
console.log(product)