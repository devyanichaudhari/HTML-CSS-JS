//create function to Load JSON File

function loadJson(path,success,error)
{
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4)
        {
            if(xhr.status==200)
            {
                success(JSON.parse(xhr.responseText))
            }
            else
            {
                error(xhr)
            }
        }
    }
    
xhr.open('GET',path,true)
xhr.send()
}
loadJson("https://jsonplaceholder.typicode.com/posts",show,'jsonp')

function show(Data)
{
    console.log(Data[0]);

    console.log("For Displaying 3 Records: ");
    for(var i=1;i<=3;i++)
    {
        console.log(Data[i]);
    }
}


