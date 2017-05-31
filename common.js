//version jquery

$(document).ready(function(){
	// Ejecuta el boton Generar
	var numeros2digitos=function(valor){
		if(valor<10){
			return "0"+valor;
		}else{
			return valor;
		}
	}

	// La Funcion general de generar
	var Generar = function(){
		for(var i=0;i<15;i++){
			for(var j=0;j<15;j++){
				var numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
				var nombre="#p"+numeros2digitos(i)+numeros2digitos(j);
				if(numero_random=="0"){
					$(nombre).removeClass().addClass("terreno_basico");
				}
				if(numero_random=="1"){
					$(nombre).removeClass().addClass("agua_basica");
				}
				if(numero_random=="2"){
					$(nombre).removeClass().addClass("roca_basica");
				}
				if(numero_random=="3"){
					$(nombre).removeClass().addClass("grama_basica");
				}
				if(numero_random=="4"){
					$(nombre).removeClass().addClass("suelo_basica");
				}

			}
		}
	}

	// La funciones de bloques.

	var Generar_Bloques = function(){
		Blokes(0,8,0,8);
		Blokes(8,15,0,8);
		Blokes(0,8,8,15);
		Blokes(8,15,8,15);
	}

	var Blokes = function(minx,maxx,miny,maxy){
		var numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
		for(var i=miny;i<maxy;i++){
			for(var j=minx;j<maxx;j++){
				var nombre="#p"+numeros2digitos(i)+numeros2digitos(j);	
				//console.log(nombre+" "+numero_random);	
				if(numero_random=="0"){
					$(nombre).removeClass().addClass("terreno_basico");
				}
				if(numero_random=="1"){
					$(nombre).removeClass().addClass("agua_basica");
				}
				if(numero_random=="2"){
					$(nombre).removeClass().addClass("roca_basica");
				}
				if(numero_random=="3"){
					$(nombre).removeClass().addClass("grama_basica");
				}

			}
		}
	}

	// Funciones de modo realista

	var mapa=[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	];


	var Generar_Realista=function(){
		var x=Math.floor(Math.random() * (10 - 0)) + 0;
		var y=Math.floor(Math.random() * (10 - 0)) + 0;
		var isla_tamano=8;
		Generar_Mar();
		Generar_Isla(x,y,isla_tamano);
		Display_Mapa();
	}

    var Generar_Mar=function(){
		for(var i=0;i<15;i++){
			for(var j=0;j<15;j++){
				mapa[i][j]=1;
			}
		}
	}

	var Generar_Isla=function(x,y,tam){
		xmax=x+tam;
		ymax=y+tam;
		if(xmax>15)
			xmax=15;
		if(ymax>15)
			ymax=15;
		for(var i=y;i<y+tam;i++){
			for(var j=x;j<x+tam;j++){
				mapa[i][j]=0;	
			}
		}
		Generar_verde(x+1,y+1,tam-2);
	}

    var Generar_verde=function(x,y,tam){
		xmax=x+tam;
		ymax=y+tam;
		for(var i=y;i<ymax;i++){
			for(var j=x;j<xmax;j++){
				mapa[i][j]=3;	
			}
		}
		Castillito(x+1,y+1,tam-2);	
	}

	var Castillito=function(x,y,tam){
		xmax=x+tam;
		ymax=y+tam;
		for(var i=y;i<ymax;i++){
			for(var j=x;j<xmax;j++){
				mapa[i][j]=2;	
			}
		}
		Puerta(x,y,tam);
		Suelo_Castillo(x+1,y+1,tam-2);
	}

	var Puerta=function(x,y,tam){
		xmax=x+tam;
		ymax=y+tam;
		for(var i=y;i<ymax;i++){
			for(var j=x+1;j<xmax-1;j++){
				if(y==i || j==x || i==ymax-1 || j==xmax-1){
					numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
					if(numero_random==3){
						mapa[i][j]=4;
						return "";	
					}
				}
			}
		}
		mapa[ymax-1][x+2]=4;
	}

	var Suelo_Castillo=function(x,y,tam){
		xmax=x+tam;
		ymax=y+tam;
		for(var i=y;i<ymax;i++){
			for(var j=x;j<xmax;j++){
				mapa[i][j]=4;	
			}
		}
	}

	var Display_Mapa=function(){
		for(var i=0;i<15;i++){
			for(var j=0;j<15;j++){
				var numero_random=mapa[i][j];
				var nombre="#p"+numeros2digitos(i)+numeros2digitos(j);
				if(numero_random=="0"){
					$(nombre).attr("class","terreno_basico");
				}
				if(numero_random=="1"){
					$(nombre).attr("class","agua_basica");
				}
				if(numero_random=="2"){
					$(nombre).attr("class","roca_basica");
				}
				if(numero_random=="3"){
					$(nombre).attr("class","grama_basica");
				}
				if(numero_random=="4"){
					$(nombre).attr("class","suelo_basica");
				}
			}
		}
	}

	// Boton de generar
    $("#Generar").click(function(){
    	if($("#tipo").val()=="general"){
			Generar();
		}
		if($("#tipo").val()=="bloques"){
			Generar_Bloques();
		}
		if($("#tipo").val()=="realista"){
			Generar_Realista();
		}
    });

	// Limpia el contenido
	$("#Inicializar").click(function(){
        for(var i=0;i<15;i++){
			for(var j=0;j<15;j++){
				var numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
				var nombre="#p"+numeros2digitos(i)+numeros2digitos(j);
				$(nombre).attr("class","terreno_basico");
			}
		}
    });    
});