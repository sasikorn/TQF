	function fExportTxtFile(){
		iConfirm=confirm("you are exporting data to file (Yes/No)");
		if (iConfirm==true){
			fElementxObject(2);	
			fArrayxObject(1);
			dataTXT=dataARR.join("***kungsleep***");		
			var textFileAsBlob = new Blob([dataTXT], {type:'text/plain'});
			var fileNameToSaveAs = document.getElementById("textFileNameToSaveAs").value;
			//var fileNameToSaveAs = prompt("File name to save as:", "info.txt");
			//---------------------------------------------	
			var downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			if (window.webkitURL != null)
			{
				// Chrome allows the link to be clicked
				// without actually adding it to the DOM.
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			}
			else
			{
				// Firefox requires the link to be added to the DOM
				// before it can be clicked.
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			}
			downloadLink.click();}
	}
	function destroyClickedElement(event){
		document.body.removeChild(event.target);
	}
	function loadFileAsText(){
		var fileToLoad = document.getElementById("fileToLoad").files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
		{ var textFromFileLoaded = fileLoadedEvent.target.result;
				document.getElementById("inputTextToSave").value = textFromFileLoaded;
				temp=document.getElementById("inputTextToSave");
				dataTXT=temp.value;
				dataARR=dataTXT.split("***kungsleep***");
				fArrayxObject(2);
				fElementxObject(1);};
		fileReader.readAsText(fileToLoad, "UTF-8");	
		document.getElementById("fileToLoad").style.display="none";
		document.getElementById("bUpdatefromFile").style.display="none";		
		document.getElementById("textFileNameToSaveAs").style.display="inline";
		document.getElementById("textFileNameToSaveAs").value=document.getElementById("fileToLoad").value;
		}		
	function loadFileShow(){
		if(document.getElementById("fileToLoad").style.display=="inline"){
			document.getElementById("fileToLoad").style.display="none";
			document.getElementById("bUpdatefromFile").style.display="none";
			document.getElementById("textFileNameToSaveAs").style.display="inline";
			}
		else{
			document.getElementById("fileToLoad").style.display="inline";
			document.getElementById("bUpdatefromFile").style.display="inline";
			document.getElementById("textFileNameToSaveAs").style.display="none";
			}
	}
	function learningOutcomeToggle(){
		if(document.getElementById("xLearningOutcome").style.display=="none"){
			document.getElementById("tLearningOutcome").style.display="none";
			document.getElementById("bLearningOutcome").style.display="none";	
			document.getElementById("xLearningOutcome").style.display="inline";	
			}
		else{
			document.getElementById("tLearningOutcome").style.display="inline";
			document.getElementById("bLearningOutcome").style.display="inline";	
			document.getElementById("xLearningOutcome").style.display="none";	
			}
	}
	function kTest(e) {
		for(i=11;i<14;i++){
			if(e!=i){document.getElementById("mChap"+i).style.display = "none";}
			else{document.getElementById("mChap"+e).style.display = "block";}
		}
		for(i=31;i<35;i++){
			if(e!=i){document.getElementById("mChap"+i).style.display = "none";}
			else{document.getElementById("mChap"+e).style.display = "block";}
		}
	}
	function kTestBack(e) {alert("99999");
	 }
	function fCreateTable(idx,idy) {
		var x = document.getElementById(idx);
		clipText = x.value;		
		clipRows = clipText.split("\n");	
		for (i=0; i<clipRows.length; i++) {
			clipRows[i] = clipRows[i].split("\t");
		}
		var tkung = "<table border=1>";		
		for (i=0; i<clipRows.length; i++){
			tkung = tkung+"<tr>";
			for(j=0;j<clipRows[i].length;j++){
				tkung=tkung+"<td><div id="+idy+i+"x"+j+">"+clipRows[i][j]+"</div>";
			}
			tkung=tkung+"<td><select id="+idy+i+"zzZ><option>หลัก</option><option>รอง</option><option selected></option></select>";
		}
		tkung=tkung+"</table>";
		y = document.getElementById(idy);
		y.innerHTML = tkung;
		x.style.display="none";
		for(i=0; i<clipRows.length; i++){alert(clipRows[i]);}
    }
    function clip(eindex) {
      var psmtext = document.getElementById("psmtext");
      clipText = psmtext.value;
      clipRows = clipText.split("\n");
      for (i=0; i<clipRows.length; i++) {
    	  clipRows[i] = clipRows[i].split("\t");
      }
      tkung="<table  border=1><tr><th><th> work no.=>";
      for (i=0; i<clipRows[0].length-2; i++){tkung=tkung+"<th>#"+(i+1)}
      for (i=0; i<clipRows.length; i++){
      tkung=tkung+"<tr>";
        for(j=0;j<clipRows[i].length;j++){
          if (eindex==1){
            tkung=tkung+"<td><div id=x"+i+"x"+j+"x contenteditable=true>"+clipRows[i][j]+"</div>";}
          else{
            tkung=tkung+"<td><div id=x"+i+"x"+j+"x>"+clipRows[i][j]+"</div>";
          }
        }
      }
      tkung=tkung+"</table>"
      document.getElementById("ktable").innerHTML = tkung;
      document.getElementById("psmtext").style.display="none";   
    }
    function kback() {
      document.getElementById("ktable").innerHTML = "";
      document.getElementById("psmtext").style.display = "block"; 
    }
    function kclear() {
      kback();
      document.getElementById("psmtext").value = "";
	}
function autoGrow(element) {
        element.style.height = "1px";
        element.style.height = (element.scrollHeight)+"px";
}
function autoRowsFit(idx,idy) {
	var x = document.getElementById(idx);
	y = x.value
	z = y.split("\n");
	x.rows = z.length;
	var xx = document.getElementById(idy);
	tkung="";
	for(i=1; i<=z.length; i++){tkung=tkung+i+"\n";}
	xx.rows = z.length;
	xx.innerHTML=tkung;
	//alert(element.rows);
        //element.row = "10";
}
function countLines(area){ 
 // trim trailing return char if exists 
 var text = area.value.replace(/\s+$/g,"");
 var split = text.split("\n");
 return split.length ;
} 

function getScript(url) {
    e = document.createElement('script');
    e.src = url;
    document.body.appendChild(e);
}
    function fRound(fValue,fMult) {
	  var ftempRound = parseInt(fValue*fMult,10);
	  var ftempCheck = Math.abs(ftempRound);
	  if(ftempCheck>0.001){return ftempRound/fMult;}
	  else{return  "";}
    }