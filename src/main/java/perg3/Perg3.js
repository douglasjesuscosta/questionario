
function CB(bg) {
var url;
    if(bg=="azul"){
        url= "/questionario/fonte-cores/azul.png";
        txt = "Predominância Azul:";
        desc = "Material de aprendizagem com fontes predominantes na cor azul:";     
        
    }else if(bg=="laranja"){
    	url="/questionario/fonte-cores/laranja.png";
    	txt = "Predominância Laranja:";
        desc = "Material de aprendizagem com fontes predominantes na cor laranja:";
        
	}else if(bg == "preto"){
		url="/questionario/fonte-cores/preto.png";
		txt = "Predominância Preta:";
        desc = "Material de aprendizagem com fontes predominantes na cor preta:";
       
	}else if(bg == "verde"){
		url="/questionario/fonte-cores/verde.png";
		txt = "Predominância Verde:";
        desc = "Material de aprendizagem com fontes predominantes na cor verde:";
        
	}else if(bg == "vermelho"){
		url="/questionario/fonte-cores/vermelho.png";		
		txt = "Predominância Vermelha:";
        desc = "Material de aprendizagem com fontes predominantes na cor vermelha:";
        
	}	
    
    document.getElementById("texto").childNodes[0].nodeValue = txt;
    $("#desc").text(desc);
    
    document.getElementById("imagem").src = url;	
    url="http://www.menucool.com/slider/prod/image-slider-3.jpg";
    document.getElementById("ecard").style.backgroundImage = "url(" + url + ")";
}

