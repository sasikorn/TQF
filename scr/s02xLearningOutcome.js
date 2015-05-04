	function ARRxOBJxLearningOutcome(idx,jcode,iElement){
		if(jcode==1){
			temp="";
			iMax=dataOBJ[idx].length-1;
			for (i=0; i<=iMax; i++){
				for(j=0;j<3;j++){
					temp=temp+dataOBJ[idx][i][j];
					if(j<2){temp=temp+"*sleepC*";}
				}
				if(i<iMax){temp=temp+"**kungR**";}
			}
		dataARR[iElement]=temp;}
		else if(dataARR.length>iElement){
				if(dataARR[iElement]!=""){
					temp=dataARR[iElement].split("**kungR**");
					for (i=0; i<temp.length; i++){
						tempI=temp[i].split("*sleepC*");
						for(j=0;j<3;j++){
							dataOBJ[idx][i][j]=tempI[j];}
				}
			}	
		}
	}; 
	function ELMxOBJxLearningOutcome(idx,icode){
		if(icode==1){
			var temp="<thead><tr><th>หัวข้อ</th><th>รายละเอียด</th><th>ความรับผิดชอบ</th></tr></thead><tbody>";			
			for (i=0; i<dataOBJ[idx].length; i++){
				temp=temp+"<tr>"
				for(j=0;j<2;j++){
					temp=temp+"<td><div id="+idx+i+"x"+j+">"+dataOBJ[idx][i][j]+"</div></td>";
				}
				temp=temp+"<td><div id="+idx+i+"x2 class="+classLOx(dataOBJ[idx][i][2])+">"+dataOBJ[idx][i][2]+"</div></td></tr>";
			}
			temp=temp+"</tbody>"
			document.getElementById(idx).innerHTML=temp;
			}
		else{
			temp=document.getElementById(idx).innerHTML;				
			tempK=temp.split("<tr>");				
			tempL=tempK.length-2;			
			for (i=0; i<tempL; i++){
				for(j=0;j<3;j++){
					tempIJ=idx+i+"x"+j;
					dataOBJ[idx][i][j]=document.getElementById(tempIJ).innerHTML;
				}
			}
		}
	}
	function classLOx(x){
		if(x==3){temp="LO3";}
				else if(x==2){temp="LO2";}
				else if(x==1){temp="LO1";}
				else{temp="LOx";}
		return temp
	}
	function classLOb(x){
		if(x==3){temp="LO3b";}
				else if(x==2){temp="LO2b";}
				else if(x==1){temp="LO1b";}
				else{temp="LOx";}
		return temp
	}
	function TXTtoOBJxLearningOutcome(){
		TXTtoOBJ("tLearningOutcome","xLearningOutcome");
		ELMxOBJxLearningOutcome("xLearningOutcome",1)
		document.getElementById("tLearningOutcome").style.display="none";
		document.getElementById("bLearningOutcome").style.display="none";	
		document.getElementById("xLearningOutcome").style.display="inline";	
	}
	function TXTtoOBJ(idt,idx) {
		var x = document.getElementById(idt);
		clipText = x.value.rtrim();		
		clipRows = clipText.split("\n");
		dataOBJ[idx] = [];				
		for (i=0; i<clipRows.length; i++) {
			dataOBJ[idx][i] = clipRows[i].split("\t");
		}
    }
	function EditxLearningOutcome(){
		idx="xLearningOutcome";
		idb="bEditxLearningOutcome";
		iCheck=document.getElementById(idb).value
		var iRemove=[];
		if(iCheck=="Edit"){
			document.getElementById(idb).value="Update";
			for (i=0; i<dataOBJ[idx].length; i++){
				tempIJ=idx+i+"x2";
				tempI0=idx+i+"x0";
				x=xValuex(document.getElementById(tempI0).innerHTML);
				tempTXT='document.getElementById(tempIJ).addEventListener("click",function(){toggleLO(\"'+x+'\",\"'+tempIJ+'\")})';
				eval(tempTXT);				
				}}
		else{document.getElementById(idb).value="Edit";
				ELMxOBJxLearningOutcome("xLearningOutcome",2);
				ELMxOBJxLearningOutcome("xLearningOutcome",1);
				}			
	}	
	function toggleLO(x,tempIJ){
		if(x!==parseInt(x)){
			y=document.getElementById(tempIJ).innerHTML;
			if(y=="3"){document.getElementById(tempIJ).innerHTML=2;
						document.getElementById(tempIJ).className="LO2";}			
			else if(y=="2"){document.getElementById(tempIJ).innerHTML=1;
						document.getElementById(tempIJ).className="LO1";}
			else if(y=="1"){document.getElementById(tempIJ).innerHTML=0;
						document.getElementById(tempIJ).className="LOx";}
			else{document.getElementById(tempIJ).innerHTML=3;
						document.getElementById(tempIJ).className="LO3";}				
		}
	}
