function fetchlocaljsonfile()
{
    fetch("./product.json").then((res)=>
{
    if(!res.ok)
    {
        throw new Error(`Https Error!!${res.status}`);
    }
    else
    {
        return res.json();
    }
}).then((data)=>
    console.log(data))
    .catch((error)=>console.log("Unable to Load File"));
}
fetchlocaljsonfile();