function revisarParam(parametro){
    if(parametro.includes("&")||parametro.includes("?")){
    return "&";
    }else{
    return "?";
    }
    }
    
    window.onload = function(){
      //se obtiene todos los botones con atributo clase "botoncompra"
      var botonesCompra = document.getElementsByClassName("botoncompra");
      const urlParam = new URLSearchParams(window.location.search);
      const myParam = urlParam.get('src');
      let sourceHotmart = myParam;
      if (sourceHotmart=="" || sourceHotmart==null || sourceHotmart=="null"){
        sourceHotmart="src=default";
      }else{
        sourceHotmart="src="+sourceHotmart;
      }
      for(var i = 0; i<botonesCompra.length;i++){
        let urlBoton = botonesCompra[i].getElementsByTagName('a')[0].href;
        botonesCompra[i].getElementsByTagName('a')[0].href = botonesCompra[i].getElementsByTagName('a')[0].href+revisarParam(urlBoton)+sourceHotmart+"btn"+(i+1);
      }
    
      let botonFlotante  = document.getElementsByClassName('botoncompraFLT');
      if(botonFlotante.length >0){
        let urlBotonFlt = botonFlotante[0].getElementsByTagName('a')[0].href;
        botonFlotante[0].getElementsByTagName('a')[0].href = botonFlotante[0].getElementsByTagName('a')[0].href + revisarParam(urlBotonFlt)+ sourceHotmart + "btnft1";
      }
    
      var botonduro = document.getElementsByClassName("botonduro");
      for(var i = 0; i< botonduro.length; i++){
        let urlBotonDuro = botonduro[i].href;
        botonduro[i].href = botonduro[i].href + revisarParam(urlBotonDuro) + sourceHotmart + "btonduro"+ (i+1);
      }
    }
    
    