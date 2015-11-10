
var formname;
var json;

function newForm(){
	
	formname = prompt("Please enter form name");

	document.getElementById("head").innerHTML=formname;
	document.getElementById("pane").style.visibility = "visible"
	document.getElementById("right").innerHTML= "<form  class=\"myform\" id=\" "+formname+"\" action=\"\" name=\""+formname+"\"onsubmit=\"myFunction()\"  ><input type=\"submit\" id=\"sub\" /></form>";
    json = '{"form"[';
}



function newText(){
		var labelName = prompt("Enter label");
		var r = prompt("Is this a required field? Y/N");
		var l = prompt("Enter character limit");
		
		l=parseInt(l);
		if(r=="Y" || r=="y"){
		$(".myform").append(labelName+"<input type=\"text\" name=\" "+labelName+"\" id=\"" + labelName+"\" maxlength=\" "+l+"\" required><br>");	
		}
		else{
		$(".myform").append(labelName+"<input type=\"text\" name=\" "+labelName+"\" id=\"" + labelName+"\" maxlength=\" "+l+"\" ><br>");	
		}
		 json+='{"element":"input", "type":"text","name":"'+labelName+'"}';

}

function newArea(){
		var labelName = prompt("Enter name");
		var col=prompt("Enter columns");
		var row=prompt("Enter rows");
		
		var l = prompt("Enter character limit");
		
		l=parseInt(l);
		
		var r = prompt("Is this a required field? Y/N");

		if(r=="Y" || r=="y"){
		$(".myform").append(labelName+"<textarea name=\"textarea\" cols=\""+col+"\" rows=\""+row+"\" maxlength=\""+l+"\" required>"+labelName+"</textarea><br>");	
		}
		else{
		$(".myform").append(labelName+"<textarea name=\"textarea\" cols=\""+col+"\" rows=\""+row+"\">"+labelName+"</textarea><br>");	
		
		}
		
		
        json+='{"element":"input", "type":"textarea","name":"'+labelName+'"}';

		}

function newNum(){
		var labelName = prompt("Enter name");
		
		var r = prompt("Is this a required field? Y/N");
		var min = prompt("Minimum number");
		var max = prompt("Maximum number");
		
		min=parseInt(min);
		max=parseInt(max);
		

		if(r=="Y" || r=="y"){
			$(".myform").append(labelName+"<input type=\"number\" name=\" "+labelName+"\" id=\"" + labelName+"\" max=\""+max+"\" min=\""+min+"\"  required><br>");	
		}
		else{
				$(".myform").append(labelName+"<input type=\"number\" name=\" "+labelName+"\" id=\"" + labelName+"\" max=\""+max+"\" min=\""+min+"\" ><br>");	

		}
		
		
	
		 json+='{"element":"input", "type":"number","name":"'+name+'"}';
		
}

function newPass(){
		var labelName = prompt("Enter name or id");
		
		
		var r = prompt("Is this a required field? Y/N");
		var l = prompt("Enter character limit");
		
		l=parseInt(l);
		
		if(r=="Y" || r=="y"){
				$(".myform").append("Password <input type=\"password\" name=\" "+labelName+"\" id=\"" + labelName+"\" maxlength=\" "+l+"\" required><br>");	
		}
		else{
				$(".myform").append("Password <input type=\"password\" name=\" "+labelName+"\" id=\"" + labelName+"\" maxlength=\""+l+"\" /><br>");		
		
		}
		
	
		json+='{"element":"input", "type":"password","name":"'+labelName+'"}';
}
function newRadio(){
		var labelName = prompt("Enter group name");
		$(".myform").append(""+labelName+"<br>");
		
		var r = prompt("Is this a required field? Y/N");
		
		var num = prompt("Enter no. of options");
		for( i=0;i<num;i++){
		var opt = prompt("Enter option "+i);
		if(r=="Y" || r=="y"){
				$(".myform").append("<input type=\"radio\" name=\" "+labelName+"\" id=\"" + labelName+"\"  value=\""+opt+"\" required>"+opt+"<br>");
		}
		else{
			$(".myform").append("<input type=\"radio\" name=\" "+labelName+"\" id=\"" + labelName+"\"  value=\""+opt+"\"/>"+opt+"<br>");		
		
		}
		
		
		

		}	
	 json+='{"element":"input", "type":"radio","name":"'+labelName+'"}';

}

function newCheck(){
		var labelName = prompt("Enter group name");
		$(".myform").append(""+labelName+"<br>");
		
		var r = prompt("Is this a required field? Y/N");
		
		var num = prompt("Enter no. of options");
		for( i=0;i<num;i++){
		var opt = prompt("Enter option "+i);
		if(r=="Y" || r=="y"){
			$(".myform").append("<input type=\"checkbox\" name=\" "+labelName+"\" id=\"" + labelName+"\"  value=\""+opt+"\" required>"+opt+"<br>");
			}
		else{
			$(".myform").append("<input type=\"checkbox\" name=\" "+labelName+"\" id=\"" + labelName+"\"  value=\""+opt+"\">"+opt+"<br>");
			}
		}	
       json+='{"element":"input", "type":"checkbox","name":"'+labelName+'"}';
	   
	   
	}

function newDrop(){

		var name = prompt("Enter name of drop down");
		$(".myform").append("<select id=\"s\" name=\""+name+"\"></select><br>");
		var num=prompt("Enter number of options");
		x=parseInt(num);
	    json+='{"element":"select","name":"'+name+'" ,"options"frown emoticon';
      
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

function myFunction()
{
	 localStorage.setItem("json", json);
    json+="]}";
    alert("Will fetch from local storage");
    alert(localStorage.getItem("json"));
}


