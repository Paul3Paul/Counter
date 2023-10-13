const p = document.getElementById('count');
let c=0;
function counterr1()
{
   

    if(c<=19)
    {
        c=c+1;
    p.textContent=c;
    console.log(c);
    }
    else
    {
        c=0;
        p.textContent=c;
    }
}


function counterr2()
{
    if(c>=1)
    {
    c= c-1 ;
    p.textContent=c;
    console.log(c);
}
else
{
    c=0;
    p.textContent=c;
}
}
function counterr3()
{
    c=0;
    p.textContent=c;
    console.log(c);
}

