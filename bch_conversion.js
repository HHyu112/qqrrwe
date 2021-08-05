var xmlhttp = new XMLHttpRequest();
var url = "https://api.cryptonator.com/api/ticker/bch-usd";
var url_bch_convert=(new URL(document.location));
let url_params_convert_bch=url_bch_convert.searchParams;
var amount_convert_bch=url_params_convert_bch.get('amount');           
            
xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200) {
			var json = JSON.parse(this.responseText);
		parseJson_bch(json,amount_convert_bch);
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
            
function parseJson_bch(json,amount_convert_bch){


		var usdValue = json["ticker"]["price"];

		//var gbpValue = json["bpi"]["GBP"]["rate"];

		//var euroValue = json["bpi"]["EUR"]["rate"];

		var usdPrice = amount_convert_bch/parseFloat(usdValue.replace(",",""));

		//var gbpPrice = 100/parseFloat(gbpValue.replace(",",""));

		//var euroPrice = 100/parseFloat(euroValue.replace(",",""));

		var usdPrice_round = usdPrice.toFixed(5);

		//var gbpPrice_round = gbpPrice.toFixed(5);

		//var euroPrice_round = euroPrice.toFixed(5);
		var productPrice = parseFloat(usdValue.replace(",",""))*usdPrice_round;

	document.getElementById("orderprice_bch").innerHTML = usdPrice_round + "  BCH" ;
	document.getElementById("orderprice_bch1").innerHTML = " &#8776 " + productPrice.toFixed(2) + "  USD";
	//+ "<br />" + gbpPrice_round + "<br />" + euroPrice_round;
}
