var API_KEY = constants.API_KEY;
var urlBase = 'https://www.amdoren.com/api/currency.php?api_key=';

function convertCurrency(fromCurrency, toCurrency, amount) {
	document.getElementById('toValue').value = '';
	var xhttp = new XMLHttpRequest();
	var urlToCall = urlBase + API_KEY + '&from=' + fromCurrency + '&to=' + toCurrency + '&amount=' + amount;
	xhttp.open("GET", urlToCall, false);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
	var response = JSON.parse(xhttp.responseText);
	document.getElementById('toValue').value = response.amount;
}