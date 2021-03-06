var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
            var url_btc_convert=(new URL(document.location));
			let url_params_convert_btc=url_btc_convert.searchParams;
            var amount_convert_btc=url_params_convert_btc.get('amount');
			
            xmlhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status ==200) {
                    var json = JSON.parse(this.responseText);
                parseJson(json,amount_convert_btc);
            }
        };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function parseJson(json,amount_convert_btc){
                    var time="<b>Last Updated: " + json["time"]["updated"] + "</b>";
                    
                    var usdValue = json["bpi"]["USD"]["rate"];
                
                    //var gbpValue = json["bpi"]["GBP"]["rate"];
                
                    //var euroValue = json["bpi"]["EUR"]["rate"];
                
                    var usdPrice = amount_convert_btc/parseFloat(usdValue.replace(",",""));
                
                    //var gbpPrice = 100/parseFloat(gbpValue.replace(",",""));
                
                    //var euroPrice = 100/parseFloat(euroValue.replace(",",""));
                    
                    var usdPrice_round = usdPrice.toFixed(5);
                
                    //var gbpPrice_round = gbpPrice.toFixed(5);
                
                    //var euroPrice_round = euroPrice.toFixed(5);
                    var productPrice = parseFloat(usdValue.replace(",",""))*usdPrice_round;
                
         
                //+ "<br />" + gbpPrice_round + "<br />" + euroPrice_round;
				document.getElementById("orderprice_btc").innerHTML = usdPrice_round + "  BTC" ;
				document.getElementById("orderprice_btc1").innerHTML = " &#8776 " + productPrice.toFixed(2) + "  USD";
				
            }