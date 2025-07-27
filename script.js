const temprature = document.querySelector('.temp')
const inputValue = document.querySelector('#country')
const searchBtn = document.querySelector('#searchBtn')
const humidity = document.querySelector('.humPercantage')
const winDetails = document.querySelector('.winDetails')
const weatherImg = document.querySelector('#image')
const tempDescraption = document.querySelector('.tempDescraption')
const locationNotFound = document.querySelector('.locationNotFound')
const wetherDetails = document.querySelector('.wetherDetails')
const tempDetails = document.querySelector('.tempDetails')


async function showWether(city){
  inputValue.value =''
  const apiKey = '8e585ade93f9c95ef6bf738b7b51772b'
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const data = await fetch(api).then(response => response.json())
  
  if(data.cod === '404'){
    locationNotFound.style.display = 'flex'
    wetherDetails.style.display = 'none'
    tempDetails.style.display = 'none'
    return;
  }
  locationNotFound.style.display = 'none'
  wetherDetails.style.display = 'flex'
  tempDetails.style.display = 'flex'
  temprature.innerHTML = `${Math.round(data.main.temp-273.15)}°C`
  humidity.innerHTML = `${data.main.humidity}%`
  winDetails.innerHTML = `${data.wind.speed}Km/H`
  tempDescraption.innerHTML = `${data.weather[0].description}`
  
      switch (data.weather[0].main) {
      case 'Clouds':
        weatherImg.src = "assest/cloud.png";
        break;
      case 'Clear':
        weatherImg.src = "assest/clear.png";
        break;
      case 'Rain':
        weatherImg.src = "assest/rain.png";
        break;
      case 'Snow':
        weatherImg.src = "assest/snow.png";
        break;
        
    }
}

searchBtn.addEventListener('click',()=>{
  if(!inputValue.value) return 
  showWether(inputValue.value.trim())
})
