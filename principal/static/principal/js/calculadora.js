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

/*Função para preencher lista das opções de itens*/
function preencherListaItens(){
	let lista = document.getElementById("lista-aparelhos");
	let nome = document.getElementById("valorNomeAparelho");
	objetoItens.forEach(function(v,k){
		let opt = document.createElement("option");
		opt.value = k.toString();
		lista.appendChild(opt);
	});
	nome.addEventListener("change",function(){
		preencherValorPadrao(this);
	});
}

function preencherValorPadrao(nome){
	let potencia = document.getElementById("valorPotencia"); 
	if(objetoItens.has(nome.value)){
		potencia.value = objetoItens.get(nome.value);
	}
} 

/*Função para duplicar o item*/
function duplicarItemLinha() {
	let item = document.getElementsByClassName("bloco-itens-list");
	if (item.length > 0 ){
		let grade = item[0];
		let linha1 = grade.children[0].cloneNode(true);
		let inputsFilhos = linha1.querySelectorAll(".zerar-valor");
		for(let x = 0;x<inputsFilhos.length;x++){
			inputsFilhos[x].innerHTML = "";
		}
		let button = linha1.lastElementChild;
		let editButton = linha1.children[5];
		editButton.addEventListener("click", function() {
			editarValores(this);
		});
		button.style.visibility = "visible";
		button.style.display = "flex";
		button.addEventListener("click", function () {
			deletarItemLinha(this);
		});
		grade.appendChild(linha1);
	}
	let editButton = document.getElementsByClassName("action-editar");
	editarValores(editButton[(editButton.length)-1]);
}

/*Função para excluir item*/ 
function deletarItemLinha(item){
	item.parentElement.remove();
}

function mostrarBloco(){
    const bloco = document.getElementById("bloco-popup");
    bloco.style.display ="block";
}

function fecharBloco(){
    const bloco = document.getElementById("bloco-popup");
    bloco.style.display ="none";
}

function adicionarValores(item){
	const bloco = document.getElementById("bloco-info");
	let inputs = bloco.querySelectorAll(".itens-atributes-pop");
	let listaAtributos = item.parentElement.querySelectorAll(".itens-atributes");
	if (listaAtributos.length > 0 ){
		listaAtributos[0].innerHTML = inputs[0].value;
		listaAtributos[1].innerHTML = validarNumero(inputs[1].value);
		listaAtributos[2].innerHTML = validarNumero(inputs[2].value);
		if(inputs[4].value == "horasDia"){
			listaAtributos[3].innerHTML =  `${validarNumero(inputs[3].value)} ${inputs[4].children[0].innerHTML}`;
		}else {
			listaAtributos[3].innerHTML =  `${validarNumero(inputs[3].value)} ${inputs[4].children[1].innerHTML}`;
		}

		listaAtributos[4].innerHTML = validarNumero(inputs[5].value);
		
	}
	fecharBloco();
}

function validarNumero(num) {
	if(isNaN(num) || (num == null) ) {
		return 0;
	}
	if ((typeof num == typeof undefined)){
		return 0;
	}
	if ((num == '')){
		return 0;
	}
	if(num < 0){
		return (num * (-1));
	}
	return num;
}

function editarValores(item){
	mostrarBloco();
	let itens = item.parentElement.querySelectorAll(".itens-atributes");
	let bloco = document.getElementById("bloco-info");
	let inputs = bloco.querySelectorAll(".itens-atributes-pop");
	inputs[0].value = itens[0].innerHTML;
	inputs[1].value = itens[1].innerHTML;
	inputs[2].value = itens[2].innerHTML;
	let usoDiario = itens[3].innerHTML.split(" ");
	inputs[3].value = usoDiario[0];
	if(usoDiario[1] == "horas/dia") {
		inputs[4].value = "horasDia";
	}else {
		inputs[4].value = "minutosDia";
	}

	inputs[5].value = itens[4].innerHTML;

	let addValoresButton = document.getElementById("bloco-adicionar"); 
	if (addValoresButton != null) {
		let buttonNew = addValoresButton.cloneNode(true);
		addValoresButton.remove();
		buttonNew.addEventListener("click", function () {
			adicionarValores(item);
		});
		bloco.appendChild(buttonNew);
	}
}

/*Coloca os eventos*/
function setListeners() {
	let editButton = document.getElementsByClassName("action-editar"); // botão de editar
	let closeButton = document.getElementById("bloco-fechar"); //botão de fechar edição
	let addButton = document.getElementsByClassName("action-add"); //botão de adicionar novo item
	let calcularButton = document.getElementsByClassName("action-calcular"); // botão de calcular resultado
	let valueTaxaKWH = document.getElementById("taxa-kwh");

	if (editButton.length > 0) {
		editButton[0].addEventListener("click", function () {
			editarValores(this);
	});
	}
	if (addButton.length > 0){
		addButton[0].addEventListener("click", duplicarItemLinha);
	}

	closeButton.addEventListener("click",fecharBloco);

	if (calcularButton.length > 0){
		 calcularButton[0].addEventListener("click", calcularKWh);
	}
	valueTaxaKWH.addEventListener("change", calcularKWhTotal);

}

function calcularKWh(){

	let somaTotal = 0;

	let valueTotalKWH = document.getElementById("total-kwh");
	let valueTaxaKWH = document.getElementById("taxa-kwh");
	let valueTotalReais = document.getElementById("total-reais-gasto");

	listaEletros = [];
	let blockLista = document.getElementsByClassName("bloco-itens-list")[0].children;
	for (let x =0; x < blockLista.length;x++) {
		let inputLista = blockLista[x].querySelectorAll(".itens-atributes");
		let usoDiario = inputLista[3].innerHTML.split(" ");
		let tempoValor = usoDiario[0]; 
		let tempoTipo = "";
		if(usoDiario[1] == "horas/dia") {
			tempoTipo = "horasDia";
		}else {
			tempoTipo = "minutosDia";
		}
		let eletro = new Eletro(inputLista[0].innerHTML,inputLista[1].innerHTML,inputLista[2].innerHTML,tempoValor, tempoTipo,inputLista[4].innerHTML);
		listaEletros.push(eletro);
		somaTotal += eletro.gasto;
	}
	valueTotalKWH.value = somaTotal.toFixed(2);
	valueTotalReais.value = "R$ " + ((somaTotal * valueTaxaKWH.value).toFixed(2).toString().replace(".",","));
	
	google.charts.load('current', {'packages':['corechart', 'table']});
	google.charts.setOnLoadCallback(drawChart);
	/*
	if(somaTotal > 0) {

	}else {
		let mensagem = document.getElementById('piechart');
		mensagem.style.visibility = "visible";
		mensagem.innerHTML = "<p style='text-align:center;color:#000'>A potência total deve ser maior que 0kWh para mostrar o gráfico</p>";
	}*/
}


function calcularKWhTotal(){
	let valueTotalKWH = document.getElementById("total-kwh");
	let valueTaxaKWH = document.getElementById("taxa-kwh");
	let valueTotalReais = document.getElementById("total-reais-gasto");
	let tempValor =valueTotalKWH.value * valueTaxaKWH.value;
	valueTotalReais.value = "R$ " + (tempValor.toFixed(2).toString().replace(".",","));
}


/*Classe do Aparelho*/ 
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
	var cssClassNames = {
		'headerRow': 'tabela-titulo',
		'tableRow': '',
		'oddTableRow': 'tabela-linha',
		'selectedTableRow': '',
		'hoverTableRow': '',
		'headerCell': '',
		'tableCell': 'tabela-celula',
		'rowNumberCell': ''};

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
		'allowHtml': true,
		'cssClassNames': cssClassNames,
	}
	let grafico1 = document.getElementById('piechart');
	let grafico2 = document.getElementById('tablechart');
	grafico1.style.visibility = 'visible';
	grafico2.style.visibility = 'visible';

	let pieChart = new google.visualization.PieChart(grafico1);
	pieChart.draw(data, pieOptions);
	
	let formatter = new google.visualization.NumberFormat(
		{suffix: 'kWh',});
	formatter.format(data, 1); 

	let tableChart = new google.visualization.Table(grafico2);
	tableChart.draw(data, tableOptions);
}

window.addEventListener("load", preencherListaItens);
setListeners();
