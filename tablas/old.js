function calcularOld(){
  var selectedResult = document.querySelector('input[name="result"]:checked').value;

  var itsOK = selectedResult == (multiplo1 * multiplo2);
  console.log("Resultado: "+itsOK);
  if(itsOK){
    if(multiplo2 == 10){
      multiplo2 = 1;
      multiplo1++;
    }
    else{
      multiplo2++;
    }
    carga();
    return false;
  }
  else{
    var tmpString = document.querySelector('input[name="result"]:checked').id
    var lastChar = tmpString.charAt(tmpString.length - 1);

    document.getElementById('divOpcion'+lastChar).className = "alert alert-danger";
    return false;

  }
}
