function mapIgarassu() {
	
	var mapProp= {
    	center:new google.maps.LatLng(-7.834195, -34.906142),
    	zoom:16,
	};

	var maps=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	//array dos locais
	var locations = [
 		
 		//arrays
 		["Igreja e Convento Franciscanos de Santo Antônio", -7.832511, -34.905131], //1									[OK]
 		["Secretária de Turismo", -7.834078, -34.906410],	//2
 		["Empresa de Urbanização de Igarassu(URBI)", -7.834078, -34.906410],	//3
 		["Câmara Municipal", -7.834078, -34.906410],	//4
 		["Ruínas da Igreja da Misericórdia", -7.834078, -34.906410],	//5
 		["Casa do Artesão", -7.834078, -34.906410],	//6
 		["Casa do Patrimônio em Igarassu/Iphan(Sobrado do Imperador)", -7.834078, -34.906410],	//7
 		["Recolhimento e Igreja do Sagrado Coração de Jesus", -7.834387, -34.906491],	//8								[OK]
 		["Museu Histórico", -7.834078, -34.906410],	//9																	[OK]
 		["Igreja de São Cosme e São Damião", -7.834018, -34.906148],	//10											[OK]
 		["Casa Paroquial", -7.834078, -34.906410],	//11
 		["CVT - Centro Vocacional Tecnológico", -7.834078, -34.906410],	//12
 		["Biblioteca Municipal", -7.833318, -34.905844],	//13														[OK]
 		["Loja Maçônica", -7.832854, -34.906450],	//14																[OK]
 		["Secretária de Planejamento, Meio Ambiente e Patrimônio Histórico(SEPLAMAPH)", -7.832889, -34.906573],	//15	[OK]
 		["Prefeitura Municipal", -7.833217, -34.906572],	//16														[OK]
 		["Igreja de Nossa Senhora do Livramento", -7.834078, -34.906410],	//17
 		["Centro de Artes e Cultura", -7.832004, -34.908098],	//18													[OK]
 		["Igreja de São Sebastião", -7.831667, -34.908622],	//19														[OK]
 		["Secretária de Obras", -7.834078, -34.906410],	//20
	
	];

	//marcacão de locais
	for (i = 0; i < locations.length; i++) {  
  		marker = new google.maps.Marker({
  			title: locations[i][0], //titulo do local
			position: new google.maps.LatLng(locations[i][1], locations[i][2]), //posição do local
    		map: maps //chamada da variavel mapaIgarassu
  		});
	}

}

