
google.charts.load('current', {'packages':['corechart', 'table']});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);
google.charts.setOnLoadCallback(drawChart7);

function drawChart1() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'Conhecimento');
	data.addColumn('number', 'Quantidade');
	data.addRow(['Tem conhecimento',11]);
	data.addRow(['Não tem conhecimento',34]);
	data.addRow(['Tem algum conhecimento',23]);

	let pieOptions = {
		title: 'Gráfico 1: Conhecimento dos Consumidores Sobre os Gastos de Energia',
		titleTextStyle: { color: 'black',
			fontSize: 15,
			bold: true,},
		is3D: true,
		pieHole: 0.0,
		with: 300,
		height: 300,
		backgroundColor: 'white',
		chartArea:{left:0,top:60,width:'100%',height:'auto',},
		legend: {position: 'left', textStyle: {color: 'black', fontSize: 15}, alignment:'center', maxLines:20},
		pieSliceText: 'porcentage',
	};

	let pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
	pieChart.draw(data, pieOptions);
}

function drawChart2() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'Conhecimento');
	data.addColumn('number', 'Quantidade');
	data.addRow(['Tem conhecimento',5]);
	data.addRow(['Não tem conhecimento',55]);
	data.addRow(['Tem algum conhecimento',8]);

	let pieOptions = {
		title: 'Gráfico 2: Conhecimento dos Consumidores Sobre o Custo por Hora dos Eletrodomésticos',
		titleTextStyle: { color: 'black',
			fontSize: 15,
			bold: true,},
		is3D: true,
		pieHole: 0.0,
		with: 300,
		height: 300,
		backgroundColor: 'white',
		chartArea:{left:0,top:60,width:'100%',height:'auto',},
		legend: {position: 'left', textStyle: {color: 'black', fontSize: 15}, alignment:'center', maxLines:20},
		pieSliceText: 'porcentage',
	};

	let pieChart = new google.visualization.PieChart(document.getElementById('piechart-2'));
	pieChart.draw(data, pieOptions);

}

function drawChart3() {
	let data = google.visualization.arrayToDataTable([
        ["Aparelho", "Escolhas", { role: "style" } ],
        ["Televisão", 7, "#b87333"],
        ["Ventilador", 5, "silver"],
        ["Vídeo game", 3, "gold"],
        ["Ar condicionado", 53, "color: #e5e4e7"],
        ["Ferro de passar", 49, "color: #e5e422"],
        ["Máquina de lavar", 41, "color: #e4e4e2"],
        ["Aspirador de pó", 16, "color: #e5e492"],
        ["Notebook", 2, "color: #e5e4e2"],
        ["Impresssora", 1, "color: #e5e4e2"],
      ]);

	var options = {
		legend: { position: '' },
		chart: {
		  title: 'Gráfico 3: Eletrodomésticos Mais Utilizados',
		  titlePosition: 'in',
		  subtitle: 'popularity by percentage' },
		axes: {
		  x: {
			0: { side: 'top', label: 'White to move'} // Top x-axis.
		  }
		},
		bar: { groupWidth: "90%" },
		chartArea: {width: '100%', height: '100%'},
		legend: {position: 'out'},
		titlePosition: 'in', axisTitlesPosition: 'in',
		hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'}
	  };


	let pieChart = new google.visualization.ColumnChart(document.getElementById('piechart-3'));
	pieChart.draw(data, options);

}

function drawChart4() {
	let data = google.visualization.arrayToDataTable([
        ["Aparelho", "Escolhas", { role: "style" } ],
        ["Televisão", 58, "#b87333"],
        ["Ventilador", 25, "silver"],
        ["Vídeo game", 8, "gold"],
        ["Ar condicionado", 10, "color: #e5e4e7"],
        ["Ferro de passar", 17, "color: #e5e422"],
        ["Máquina de lavar", 52, "color: #e4e4e2"],
        ["Aspirador de pó", 15, "color: #e5e492"],
        ["Notebook", 50, "color: #e5e4e2"],
        ["Impresssora", 9, "color: #e5e4e2"],
      ]);

	var options = {
		legend: { position: '' },
		chart: {
		  title: 'Gráfico 4: Eletrodomésticos de Maior Consumo Energético',
		  titlePosition: 'in',
		  subtitle: 'popularity by percentage' },
		axes: {
		  x: {
			0: { side: 'top', label: 'White to move'} // Top x-axis.
		  }
		},
		bar: { groupWidth: "90%" },
		chartArea: {width: '100%', height: '100%'},
		legend: {position: 'out'},
		titlePosition: 'in', axisTitlesPosition: 'in',
		hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'}
	  };


	let pieChart = new google.visualization.ColumnChart(document.getElementById('piechart-4'));
	pieChart.draw(data, options);

}

function drawChart5() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'Conhecimento');
	data.addColumn('number', 'Quantidade');
	data.addRow(['Conhece e já usou',3]);
	data.addRow(['Conhece, mas nunca usou',8]);
	data.addRow(['Não conhece',57]);

	let pieOptions = {
		title: 'Gráfico 5: Conhecimento Sobre Ferramentas de Controle de Consumo',
		titleTextStyle: { color: 'black',
			fontSize: 15,
			bold: true,},
		is3D: true,
		pieHole: 0.0,
		with: 300,
		height: 300,
		backgroundColor: 'white',
		chartArea:{left:0,top:60,width:'100%',height:'auto',},
		legend: {position: 'left', textStyle: {color: 'black', fontSize: 15}, alignment:'center', maxLines:20},
		pieSliceText: 'porcentage',
	};

	let pieChart = new google.visualization.PieChart(document.getElementById('piechart-5'));
	pieChart.draw(data, pieOptions);

}


function drawChart6() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'Conhecimento');
	data.addColumn('number', 'Quantidade');
	data.addRow(['Sim',44]);
	data.addRow(['Não',4]);
	data.addRow(['Talvez',20]);

	let pieOptions = {
		title: 'Gráfico 6: Possibilidade de Redução de Gasto',
		titleTextStyle: { color: 'black',
			fontSize: 15,
			bold: true,},
		is3D: true,
		pieHole: 0.0,
		with: 300,
		height: 300,
		backgroundColor: 'white',
		chartArea:{left:0,top:60,width:'100%',height:'auto',},
		legend: {position: 'left', textStyle: {color: 'black', fontSize: 15}, alignment:'center', maxLines:20},
		pieSliceText: 'porcentage',
	};

	let pieChart = new google.visualization.PieChart(document.getElementById('piechart-6'));
	pieChart.draw(data, pieOptions);

}

function drawChart7() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'Conhecimento');
	data.addColumn('number', 'Quantidade');
	data.addRow(['Sim',43]);
	data.addRow(['Não',8]);
	data.addRow(['Talvez',17]);

	let pieOptions = {
		title: 'Gráfico 7: Site para Acompanhamento do Consumo',
		titleTextStyle: { color: 'black',
			fontSize: 15,
			bold: true,},
		is3D: true,
		pieHole: 0.0,
		with: 300,
		height: 300,
		backgroundColor: 'white',
		chartArea:{left:0,top:60,width:'100%',height:'auto',},
		legend: {position: 'left', textStyle: {color: 'black', fontSize: 15}, alignment:'center', maxLines:20},
		pieSliceText: 'porcentage',
	};

	let pieChart = new google.visualization.PieChart(document.getElementById('piechart-7'));
	pieChart.draw(data, pieOptions);

}
