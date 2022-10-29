//todos os itens devem estar em minúsculo
const objetoItens = new Map([
["aparelho de blu ray",12],
["aparelho de dvd", 15],
["aparelho de som",110],
["aquecedor de ambiente",1612],
["aquecedor de mamadeira",100],
["aquecedor de marmita",60],
["ar-condicionado portátil",1286],
["ar-condicionado tipo janela menor ou igual a 9.000 btu/h",537],
["ar-condicionado tipo janela de 9.001 a 14.000 btu/h",757],
["ar-condicionado tipo janela maior que 14.000 btu/h",1558],
["ar-condicionado tipo split menor ou igual a 10.000 btu/h",593],
["ar-condicionado tipo split de 10.001 a 15.000 btu/h",807],
["ar-condicionado tipo split de 15.001 a 20.000 btu/h",1224],
["ar-condicionado tipo split de 20.001 a 30.000 btu/h",1830],
["ar-condicionado tipo split maior que 30.000 btu/h",2830],
["aspirador de pó",724],
["batedeira",151],
["boiler elétrico de 200l",482],
["bomba d'água 1/2 cv",480],
["bomba d'água 1/3 cv",410],
["cafeteira elétrica",219],
["cafeteira expresso",794],
["caixa amplificadora de som",570],
["caixa de som portátil",33],
["chaleira elétrica",941],
["churrasqueira elétrica",3800],
["chuveiro elétrico 5500w",5500],
["chuveiro elétrico 4500w",4500],
["computador",63],
["enceradeira",450],
["espremedor de frutas",54],
["exaustor fogão",166],
["fax modem em stand by",3],
["ferro elétrico automático a seco 1050w",200],
["ferro elétrico automático a vapor 1200w",600],
["fogão elétrico - cook top (por queimador)",2285],
["forno elétrico",500],
["forno micro-ondas 25l",1412],
["freezer vertical/horizontal",66],
["freezer vertical frost free",75],
["frigobar",26],
["fritadeira elétrica",908],
["furadeira",235],
["geladeira 1 porta",35],
["geladeira 1 porta frost free",55],
["geladeira 2 portas",67],
["geladeira 2 portas frost free",79],
["grill",640],
["home theater 350w",350],
["impressora",15],
["lâmpada fluorescente compacta - 11w",11],
["lâmpada fluorescente compacta - 15w",15],
["lâmpada fluorescente compacta - 23w",23],
["lâmpada incandescente - 40w",40],
["lâmpada incandescente - 60w",60],
["lâmpada incandescente - 100w",100],
["lâmpada led 7w",7],
["lâmpada led 9w",9],
["lâmpada led 12w",12],
["lâmpada led 15w",15],
["lavadora de louças",1559],
["lavadora de roupas",147],
["liquidificador",213],
["máquina de costura",100],
["modem de internet",8],
["modem tv a cabo",10.25],
["monitor",55],
["monitor lcd",34],
["multiprocessador",428],
["nebulizador",42],
["notebook",20],
["panela elétrica",1100],
["parafusadeira",600],
["prancha/chapinha",33],
["projetor",239],
["rádio elétrico pequeno",5],
["rádio relógio",5],
["roteador",6],
["sanduicheira",698],
["scanner",9],
["secador de cabelo - 1000w",1000],
["secadora de roupa",1865],
["serra circular",1420],
["tanquinho",70],
["telefone sem fio",3],
["torneira elétrica - 3250w",3250],
["torradeira",833],
['tv em cores - 14" (tubo)',42],
['tv em cores - 29" (tubo)',101],
['tv em cores - 32" (lcd)',95],
['tv em cores - 40" (led)',83],
['tv em cores - 42" (led)',203],
["tv portátil",47],
["ventilador de mesa",72],
["ventilador de teto",73],
["videogame",24],
]);


let listaEletros= [];

function colocarItensListaSuspensa(){
	let listaSupensa = document.getElementsByClassName("seletor-aparelhos")[0];
	const option = document.createElement("option");
	listaSupensa.appendChild(option);

}

function duplicarItemLinha() {
	let item = document.getElementsByClassName("bloco-itens-list") ;
	if (item.length > 0 ){
		let grade = item[0];
		let linha1 = grade.children[0].cloneNode(true);
		let inputsFilhos = linha1.querySelectorAll(".zerar-valor");
		linha1.querySelectorAll(".resetar-dias")[0].value = "30";
		for(let x = 0;x<inputsFilhos.length;x++){
			inputsFilhos[x].value = "";
		}
		linha1.querySelectorAll(".seletor-aparelhos")[0].addEventListener("change", function () {
			linha1.querySelectorAll(".input-potencia")[0].children[1].value = objetoItens.get(this.value.toLowerCase());
		});

		let button = linha1.lastElementChild;
		button.style.visibility = "visible";
		button.addEventListener("click", function () {
			deletarItemLinha(this);
		});
		grade.appendChild(linha1);
	}
}

function deletarItemLinha(item){
	item.parentElement.remove();
}


function setListeners() {
	let seletor = document.getElementsByClassName("itens-inputs");
	let addButton = document.getElementsByClassName("action-add");
	let calcularButton = document.getElementsByClassName("action-calcular");
	let valueTaxaKWH = document.getElementById("taxa-kwh");
	if(seletor.length > 0){
		seletor[0].children[0].children[1].addEventListener("change", function () {
			seletor[0].querySelectorAll(".input-potencia")[0].children[1].value = objetoItens.get(this.value.toLowerCase());
		});
	}

	if (addButton.length > 0 ){
		addButton[0].addEventListener("click", duplicarItemLinha);
	}
	if (calcularButton.length > 0 ){
		 calcularButton[0].addEventListener("click", calcularKWh);
	}
	valueTaxaKWH.addEventListener("change", calcularKWhTotal);

}

function calcularKWh(){
	google.charts.load('current', {'packages':['corechart', 'table']});
	google.charts.setOnLoadCallback(drawChart);
	let somaTotal = 0;

	let valueTotalKWH = document.getElementById("total-kwh");
	let valueTaxaKWH = document.getElementById("taxa-kwh");
	let valueTotalReais = document.getElementById("total-reais-gasto");

	listaEletros = [];
	let blockLista = document.getElementsByClassName("itens-inputs");
	for (let x =0; x < blockLista.length;x++) {
		let inputLista = blockLista[x].querySelectorAll(".itens-atributes");
		let eletro = new Eletro(inputLista[0].value,inputLista[1].value,inputLista[2].value,inputLista[3].value, inputLista[4].value,inputLista[5].value);
		listaEletros.push(eletro);
		somaTotal += eletro.gasto;
	}

	valueTotalKWH.value = somaTotal;
	valueTotalReais.value = "R$ " + ((somaTotal * valueTaxaKWH.value).toFixed(2).toString());

}
function calcularKWhTotal(){
	let valueTotalKWH = document.getElementById("total-kwh");
	let valueTaxaKWH = document.getElementById("taxa-kwh");
	let valueTotalReais = document.getElementById("total-reais-gasto");
	let tempValor =valueTotalKWH.value * valueTaxaKWH.value;
	valueTotalReais.value = "R$ " + (tempValor.toFixed(2).toString());
}

class Eletro {
	gasto = 0;
	constructor(nome, potencia, quantidade, uso, intervalouso, dias){
		this.nome = String(nome);
		this.potencia = Number(potencia);
		this.quantidade = Number(quantidade);
		this.uso = Number(uso);
		this.intervalouso = String(intervalouso);
		this.dias = Number(dias);
		this.calcularGasto();
	}
	calcularGasto() {
		if(this.intervalouso == "minutosDia" ){
			this.gasto = ((this.potencia / 1000) * this.quantidade * (this.uso/60.0) * this.dias);
		}else{
			this.gasto = ((this.potencia / 1000) * this.quantidade * this.uso * this.dias);
		}

	}
	getListaDados(){
		this.calcularGasto();
		return [this.nome,this.gasto];
	}
}


function drawChart() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'Aparelho');
	data.addColumn('number', 'Uso Total (kWh)');
	for (let v =0;v < listaEletros.length;v++){
		data.addRow(listaEletros[v].getListaDados());
	}

	let pieOptions = {
		title: 'Porcentual de Consumo dos Aparelhos',
		titleTextStyle: { color: 'black',
			fontSize: 15,
			bold: true,},
		is3D: false,
		pieHole: 0.3,
		with: 300,
		height: 300,
		backgroundColor: 'none',
		chartArea:{left:0,top:60,width:'100%',height:'auto',},
		legend: {position: 'bottom', textStyle: {color: 'black', fontSize: 16}, alignment:'center', maxLines:20},
		pieSliceText: 'percentage',
	};

	let tableOptions = {
		showRowNumber: true, 
		width: '100%', 
		height: '100%',
	}

	let pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
	pieChart.draw(data, pieOptions);
	
	let formatter = new google.visualization.NumberFormat(
		{suffix: 'kWh',});
	formatter.format(data, 1); 

	let tableChart = new google.visualization.Table(document.getElementById('tablechart'));
	tableChart.draw(data, tableOptions);
}

setListeners();

