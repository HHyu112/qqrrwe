
const quotes2 = [
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&address=Lav3xNomwXvGsESoy2WV7wwAE12K3JKJDu',
	author2: 'Lav3xNomwXvGsESoy2WV7wwAE12K3JKJDu',
    ordernum2: 'Order #24Q0QX3211'
},
    
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&address=LbyMv7eWfXqU9TiyAALrhhbxdxNDvdvQha',
	author2: 'LbyMv7eWfXqU9TiyAALrhhbxdxNDvdvQha',
    ordernum2: 'Order #55H9KK7996'
},
    
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&address=LR6GniPSzuaKK1tCVzze3Bf7yorjHkeu5x',
	author2: 'LR6GniPSzuaKK1tCVzze3Bf7yorjHkeu5x',
    ordernum2: 'Order #44J5QC1255'
},	
	
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&address=LbRwkNYn46S8dUewpGodj5QM6LyMFSgafq',
	author2: 'LbRwkNYn46S8dUewpGodj5QM6LyMFSgafq',
    ordernum2: 'Order #81U3JB6693'
},	
	
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&address=LSxCfb6PcMk6r5W3Zg2DGxyF4GJoHfCEJu',
	author2: 'LSxCfb6PcMk6r5W3Zg2DGxyF4GJoHfCEJu',
    ordernum2: 'Order #30Q4QQ6372'
},	
	
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&address=LSz4A7EinbezB1mfE2Yt3tCNyUMmU4LjDA',
	author2: 'LSz4A7EinbezB1mfE2Yt3tCNyUMmU4LjDA',
    ordernum2: 'Order #83E9IM0533'
},
]


const quote2 = document.querySelector('.quote_litecoin');
const author2= document.querySelector('.author_litecoin');


function litecoinqr() {
	let random = Math.floor(Math.random() * quotes2.length);
	var url_ltc=(new URL(document.location));
    var url_api_picture_ltc= quotes2[random].quote2;
    var url_api_ltc=new URL(url_api_picture_ltc);
    let url_params_ltc=url_ltc.searchParams;
	let url_parameter_api_ltc=url_api_ltc.searchParams;
	let amount_ltc=url_params_ltc.get('amount');
	url_parameter_api_ltc.set('amount', amount_ltc);
	url_api_ltc.search = url_parameter_api_ltc.toString();
	var new_url_ltc =url_api_ltc.toString();
	quote2.getElementsByTagName("IMG")[0].src =new_url_ltc;
	author2.innerHTML = quotes2[random].author2;
}