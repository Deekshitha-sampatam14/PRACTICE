const btn=document.getElementById("btn");
const latitude=document.getElementById("latitude");
const longitude=document.getElementById("longitude");
btn.addEventListener("click",(e)=>
{
    e.preventDefault();
    const la=latitude.value;
    const lo=longitude.value;
    const url = 'https://air-quality.p.rapidapi.com/history/airquality?lon=${lo}&lat=${la}';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd8f0ca990amsh01b2d69193b0b7bp1405fdjsnab32806395f5',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetchData(url,options);

});
async function fetchData( url,options)
{
    const res= await fetch(url,options);
    const result=await res.json();
    console.log(result);
}
