const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
  "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara", "Abuja"
];

async function getAllStatesWeather() {
  const promises = nigerianStates.map(state => getStateWeather(state));
  const results = await Promise.allSettled(promises);
  
  return results
    .filter(r => r.status === "fulfilled" && r.value)
    .map(r => r.value);
}
async function getStateWeather(city){
 
  const res = await fetch(`https://wttr.in/${city},Nigeria?format=j1`);
  const data = await res.json();
  return {
    city: city,
    temp: `${data.current_condition[0].temp_C}°C`,
    weather: data.current_condition[0].weatherDesc[0].value
  
};

getWeatherQuick("Port Harcourt").then(console.log);
}
// Usage
getAllStatesWeather().then(data => {
  console.table(data.map(d => ({
    State: d.state,
    Temp: d.temperature,
    Weather: d.weather
  })));
});