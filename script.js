async function check(){
    try{
    let city=document.getElementById('city').value;
    document.getElementById('cityname').innerText=city;
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},india&APPID=9d2d9e79d4e743398385c55e72e6ed31&units=metric`)
    const data=await res.json();
    const temp=data.main.temp;
    let cur=data.weather[0].main;
    console.log(cur);
    let now=new Date;
    let h=now.getHours();
    console.log(h);
    if(cur=='Clouds'){
        if(h>=6 && h<=18){
             document.getElementById('gif').src='cloudy.gif';
        }
        else{
             document.getElementById('gif').src='cloudyn.gif';
        }
    }
    else if(cur=='Thunderstorm'){
        document.getElementById('gif').src='thunder.gif';
    }
    else  if(cur=='Clear'){
        if(h>=6 && h<=18){
             document.getElementById('gif').src='sunny.gif';
        }
        else{
             document.getElementById('gif').src='clearn.gif';
        }
    }
    else  if(cur=='Haze'){
        if(h>=6 && h<=18){
             document.getElementById('gif').src='haze.gif';
        }
        else{
             document.getElementById('gif').src='hazen.gif';
        }
    }
    else if(cur=='Rain'){
         document.getElementById('gif').src='rain.gif';
     }
     const humidity = data.main.humidity;
    document.getElementById('temp').innerText=`Temperature🌡️: ${temp}`
     document.getElementById('humid').innerText=`Humidity: ${humidity}`
     document.getElementById('Condition').innerText=`Condition: ${cur}`
    }
    catch(error){
       document.getElementById('temp').innerText="Something went wrong or Invalid city name..."
    }
    
    
    
}

setInterval(() =>{
const t=new Date();
const time=t.toLocaleTimeString();
document.getElementById('time').innerText=time
},1000);
