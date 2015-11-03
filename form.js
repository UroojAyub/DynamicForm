
var formname;

function newForm(){
	
	formname = prompt("Please enter form name");

	document.getElementById("head").innerHTML=formname;
	document.getElementById("pane").style.visibility = "visible"
	document.getElementById("right").innerHTML= "<form  class=\"myform\" id=\" "+formname+"\" action=\"\" name=\""+formname+"\"  ><input type=\"submit\" /></form>";

}



function newText(){
		var labelName = prompt("Enter label");
		$(".myform").append(labelName+"<input type=\"text\" name=\" "+labelName+"\" id=\"" + labelName+"\" /><br>");	
}

function newArea(){
		var labelName = prompt("Enter name");
		var col=prompt("Enter columns");
		var row=prompt("Enter rows");
		$(".myform").append(labelName+"<textarea name=\"textarea\" cols=\""+col+"\" rows=\""+row+"\">"+labelName+"</textarea><br>");	
		}

function newNum(){
		var labelName = prompt("Enter name");
		$(".myform").append(labelName+"<input type=\"number\" name=\" "+labelName+"\" id=\"" + labelName+"\" /><br>");	
}

function newPass(){
		var labelName = prompt("Enter name or id");
		$(".myform").append("Password <input type=\"password\" name=\" "+labelName+"\" id=\"" + labelName+"\" /><br>");	
}
function newRadio(){
		var labelName = prompt("Enter group name");
		$(".myform").append(""+labelName+"<br>");
		var num = prompt("Enter no. of options");
		for( i=0;i<num;i++){
		var opt = prompt("Enter option "+i);
		$(".myform").append("<input type=\"radio\" name=\" "+labelName+"\" id=\"" + labelName+"\"  value=\""+opt+"\"/>"+opt+"<br>");

		}	
}

function newCheck(){
		var labelName = prompt("Enter group name");
		$(".myform").append(""+labelName+"<br>");
		var num = prompt("Enter no. of options");
		for( i=0;i<num;i++){
		var opt = prompt("Enter option "+i);
		$(".myform").append("<input type=\"checkbox\" name=\" "+labelName+"\" id=\"" + labelName+"\"  value=\""+opt+"\"/>"+opt+"<br>");

		}	
}

function newDrop(){

		var name = prompt("Enter name of drop down");
		$(".myform").append("<select id=\"s\" name=\""+name+"\"></select><br>");
		var num=prompt("Enter number of options");
		x=parseInt(num);
	
		for (i=0; i<x; i++){
			n=prompt("Enter Option "+i);
			 $("#s").append("<option value=\""+n+"\">"+n+"</option>" );   
		}
	
}

function newFile(){
		var labelName = prompt("Enter option name");
		$(".myform").append("<input type=\"file\" name=\" "+labelName+"\" id=\"" + labelName+"\" />");	
}


function newKey(){
	var name = prompt("Enter name of keygen");
	$(".myform").append("Encryption<keygen name=\""+name+"\"><br>");
}





