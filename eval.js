function cor(){
	var cor1 = 0;

	if(document.getElementById("A1").value == "chile" || document.getElementById("A1").value == "Chile")
	{cor1 = cor1 +1;}

	if(document.getElementById("A2").value == "ana frank" || document.getElementById("A2").value == "Ana Frank")
	{cor1 = cor1 +1;}

	if(document.getElementById("A3").value == "nb" || document.getElementById("A3").value == "Nb")
	{cor1 = cor1 +1;}

	if(document.getElementById("A4").value == "davis" || document.getElementById("A4").value == "Davis")
	{cor1 = cor1 +1;}

	if(document.getElementById("A5").value == "wilson" || document.getElementById("A5").value == "Wilson")
	{cor1 = cor1 +1;}


	var pm1 = document.getElementById("M1").value;
	if(pm1 == "120")
	{cor1 = cor1+1;}

	var pm2 = document.getElementById("M2").value;
	if(pm2 == "20")
	{cor1 = cor1+1;}

	var pm3 = document.getElementById("M3").value;
	if(pm3 == "verde")
	{cor1 = cor1+1;}

	var pm4 = document.getElementById("M4").value;
	if(pm4 == "4")
	{cor1 = cor1+1;}

	var pm5 = document.getElementById("M5").value;
	if(pm5 == "Canberra")
	{cor1 = cor1+1;}

	if(document.getElementById("MM11").checked == true && document.getElementById("MM12").checked == true && document.getElementById("MM13").checked == false &&document.getElementById("MM14").checked == false )
	{cor1 = cor1+1;}

	if(document.getElementById("MM21").checked == false && document.getElementById("MM22").checked == false && document.getElementById("MM23").checked == true &&document.getElementById("MM24").checked == true )
	{cor1 = cor1+1;}

	if(document.getElementById("MM31").checked == true && document.getElementById("MM32").checked == false && document.getElementById("MM33").checked == true &&document.getElementById("MM34").checked == false )
	{cor1 = cor1+1;}

	if(document.getElementById("MM41").checked == true && document.getElementById("MM42").checked == true && document.getElementById("MM43").checked == false &&document.getElementById("MM44").checked == false )
	{cor1 = cor1+1;}

	if(document.getElementById("MM51").checked == true && document.getElementById("MM52").checked == false && document.getElementById("MM53").checked == true &&document.getElementById("MM54").checked == false )
	{cor1 = cor1+1;}

	if(document.getElementById("PN1").value=="10")
	{cor1 = cor1+1;}

	if(document.getElementById("PN2").value=="5")
	{cor1 = cor1+1;}

	if(document.getElementById("PN3").value=="10")
	{cor1 = cor1+1;}

	if(document.getElementById("PN4").value=="540")
	{cor1 = cor1+1;}

	if(document.getElementById("PN5").value=="2011")
	{cor1 = cor1+1;}

	document.getElementById("evaluar").innerHTML = "Respondiste : " + cor1 + " respuestas de forma correcta";
}
