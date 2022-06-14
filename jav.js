var number = window.prompt("Enter Timer Limit(in Minutes)");
document.getElementById('countdown').innerHTML=number;
let time = number*60;
setInterval(updatecountdown, 1000);
function updatecountdown()
{
    
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    if(time>0)
    {
        
    document.getElementById('countdown').innerHTML=minutes + ':' + seconds;
   
    
}
else
{
    document.getElementById('countdown').innerHTML="Ended";
}
time--;
}
