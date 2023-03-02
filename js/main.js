
function buscar() {
    const encontrar = document.getElementById("buscar").value;
  
   if(encontrar == "arepas con queso"){
    window.location.href='/paginas/arepa_con_queso.html';
   }
   else if(encontrar == "arepas con mantequilla"){
    window.location.href='/paginas/arepa_mantequilla.html';
   }

   else if(encontrar == "Arepa mini con sal"){
    window.location.href='/paginas/Arepa Mini con sal.html';
   }
   else if(encontrar == "arepa burger"){
    window.location.href='/paginas/Arepa_burger.html';
   }
   else if(encontrar == "arepa burger sencilla"){
    window.location.href='/paginas/Arepa burger sencilla.html';
   }
   else if(encontrar == "arepa de chocolo"){
    window.location.href='/paginas/Arepa de chocolo.html';
   }
   else if(encontrar == "arepa con Chorizo"){
    window.location.href='/paginas/arepa con Chorizo.html';
   }
   else if(encontrar == "arepa con carne desmechada"){
    window.location.href='/paginas/arepa con carne desmechada.html';
   }
   else{
    alert(" no se encontra producto");

   }
   


}