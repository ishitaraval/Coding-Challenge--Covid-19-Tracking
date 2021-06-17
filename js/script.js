const submit= document.querySelector('.submit')

submit.addEventListener("click", function(){

    const city= document.querySelector('#text').value;
    
    text.value="";
	function covid(){
	fetch(`https://covid-19-tracking.p.rapidapi.com/v1/${city}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "d98c69ccf1mshd527d2d5e50e8b2p1c4c81jsn38370dfdd88b",
			"x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
		}
	})
.then(response => response.json())
.then(response => {
	console.log(response);

	
	const activeCases = response["Active Cases_text"]
	const country = response.Country_text;
	const lastUpdate = response["Last Update"]
	const newCases = response["New Cases_text"]
	const newdeaths = response["New Deaths_text"]
	const totalCases = response["Total Cases_text"]
	const totalDeaths = response["Total Deaths_text"]
	const totalRecovered = response["Total Recovered_text"]
	const htmlCode= document.querySelector('.displayData');

    htmlCode.innerHTML=`
   <ul class="display">
    <li>Active Cases: ${activeCases} </li> 
    <li>Country: ${country} </li>
    <li>Country: ${lastUpdate} </li>
    <li>New Cases: ${newCases} </li> 
    <li>New Deaths Cases: ${newdeaths} </li>
    <li>Total Cases: ${totalCases} </li>
    <li>Total Deaths: ${totalDeaths} </li>
    <li>Total Recovered Cases: ${totalRecovered} </li>
   </ul> `



})
.catch(err => {
	console.error(err);
});
	}
covid();

})