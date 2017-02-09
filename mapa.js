function mapIgarassu() {

	var mapaIgarassu = new google.maps.Map(document.getElementById("googleMap"), {
		zoom:16,
		center: new google.maps.LatLng(-7.834195, -34.906142), 
		mapTypeId: google.maps.MapTypeId.TERRAIN

	});

	var list = $("#links-list");

	//array dos locais
	var locations = [
 		
 		//arrays
 		['Igreja e Convento Franciscanos de Santo Antônio', -7.832511, -34.905131], //1									[OK]
 		['Secretária de Turismo',-7.8337595,-34.9054833],	//2															[OK]
 		['Empresa de Urbanização de Igarassu(URBI)', -7.834452, -34.905451],	//3										[OK]
 		['Câmara Municipal', -7.835233, -34.906164],	//4																[OK]
 		['Ruínas da Igreja da Misericórdia',-7.8358037,-34.9073714],//5													[OK]
 		['Casa do Artesão', -7.834902, -34.906872],	//6																	[OK]
 		['Casa do Patrimônio em Igarassu/Iphan(Sobrado do Imperador)', -7.834733, -34.906740],	//7						[OK]
 		['Recolhimento e Igreja do Sagrado Coração de Jesus', -7.834387, -34.906491],	//8								[OK]
 		['Museu Histórico', -7.834078, -34.906410],	//9																	[OK]
 		['Igreja de São Cosme e São Damião', -7.834018, -34.906148],	//10											[OK]
 		['Casa Paroquial', -7.833618, -34.906010],	//11																[OK]
 		['CVT - Centro Vocacional Tecnológico', -7.833499, -34.905951],	//12											[OK]
 		['Biblioteca Municipal', -7.833318, -34.905844],	//13														[OK]
 		['Loja Maçônica', -7.832854, -34.906450],	//14																[OK]
 		['Secretária de Planejamento, Meio Ambiente e Patrimônio Histórico(SEPLAMAPH)', -7.832889, -34.906573],	//15	[OK]
 		['Prefeitura Municipal', -7.833217, -34.906572],	//16														[OK]
 		['Igreja de Nossa Senhora do Livramento', -7.833169, -34.906673],	//17										[OK]									
 		['Centro de Artes e Cultura', -7.832004, -34.908098],	//18													[OK]
 		['Igreja de São Sebastião', -7.831667, -34.908622],	//19														[OK]
 		['Secretária de Obras', -7.8316536,-34.9091987],//20															[OK]
 		
 		];

 	var janelaInfo = new google.maps.InfoWindow();

	
	for (i = 0; i < locations.length; i++){ //marcacão de todos os locais
		var a_id = "location-" + i;
		var li = "<li><a class=\"link\" id=\"" + a_id + "\" href=\"#\">" + locations[i][0] + "</a></li>";
		list.append(li);

		 var marker = new google.maps.Marker({
  			title: locations[i][0], //titulo do local
			position: new google.maps.LatLng(locations[i][1], locations[i][2]), //posição do local
    		map: mapaIgarassu //chamada da variavel mapaIgarassu
    	});

		var fn = function(_marker, _i) {
			return function(){
				
				//pop up
				janelaInfo.setContent(locations[_i][0]); 
				janelaInfo.open(mapaIgarassu, _marker);		
				
				//zoom para o marcador 
				mapaIgarassu.setZoom(20);
				mapaIgarassu.setCenter(_marker.getPosition());
			
			}
		};

		google.maps.event.addListener(marker, 'click', fn(marker, i)); 

		$('#' + a_id).on("click", (function(_marker) {
			return function() {
				google.maps.event.trigger(_marker, 'click');			
			}
		})(marker));
	}

/*
var info2 = new google.maps.InfoWindow({map:mapaIgarassu});
	if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            info2.setPosition(pos);
            info2.setContent('Você está aqui.');
            mapaIgarassu.setCenter(pos);
          }, function() {
            handleLocationError(true, info2, mapaIgarassu.getCenter());
          });
        } 
        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, info2, mapaIgarassu.getCenter());
        
      }

      function handleLocationError(browserHasGeolocation, info2, pos) {
        info2.setPosition(pos);
        info2.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
      */
 
  }