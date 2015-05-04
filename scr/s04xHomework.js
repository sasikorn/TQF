	function ELMxOBJxHomework(idx,idy,icode){
		//------------------------------------------
		majorLO=[];majorX=[];majorV=[];
		minorLO=[];minorV=[];minorX=[];
		for(j=0;j<dataOBJ[idy].length;j++){
			if(dataOBJ[idy][j][0]==parseInt(dataOBJ[idy][j][0])){
				majorLO[majorLO.length]=dataOBJ[idy][j][0];
				majorX[majorX.length]=0;
				majorV[majorV.length]=0;
				}
			else{minorLO[minorLO.length]=dataOBJ[idy][j];
				majorX[majorX.length-1]=majorX[majorX.length-1]+1;
				if(parseInt(dataOBJ[idy][j][2])>0){
					majorV[majorV.length-1]=majorV[majorV.length-1]+1;
					minorV[minorV.length]=j-majorLO[majorLO.length-1];
					}
				else{minorX[minorX.length]=j-majorLO[majorLO.length-1];
				}					
			}
		}
		//------------------------------------------
		if(icode==1){
			var temp="<thead><tr><th rowspan=5 width=3%>ลำดับ</th><th rowspan=5 width=60%>รายละเอียด</th>";
			temp=temp+"<th rowspan=5 width=6%>หัวข้อ</th><th rowspan=5 width=6%>คะแนนดิบ</th><th rowspan=5 width=6%>คะแนนสุทธิ</th></tr><tr>";
			for(j=0;j<majorLO.length;j++){
					temp=temp+"<th colspan="+majorX[j]+" style='text-align:center'>"+majorLO[j]+"</th>";
				}
				temp=temp+"<th rowspan=3 style='color:red'>diff</th></tr><tr>";
				for(j=0;j<minorLO.length;j++){
					temp=temp+"<th>"+minorLO[j][0]+"</th>";
				}
				temp=temp+"</tr><tr>";
				for(j=0;j<minorLO.length;j++){
					temp=temp+"<th style='text-align:center' class="+classLOb(minorLO[j][2])+">"+minorLO[j][2]+"</th>";
				}
				temp=temp+"</tr><tr>";
				for(j=0;j<minorLO.length;j++){
					temp=temp+"<th id='xPlus"+j+"' style='color:blue;text-align:center'>"+fRound(xScore[j],1000)+"</th>";
				}					
				temp=temp+"<th style='color:blue;text-align:center'>"+fRound(xScoreDiff,1000)+"</th></tr></thead><tbody>";
			vScoreWeight(idx);
			//--------------------------------------------------
			for (i=0; i<dataOBJ[idx].length; i++){
				temp=temp+"<tr>"
				iMax=Math.max(dataOBJ[idx][i].length,5+minorLO.length);
				//---------------------------------------------------
				for(j=0;j<4;j++){
					dataOBJ[idx][i][j]=xValuex(dataOBJ[idx][i][j]);
					temp=temp+"<td><div id="+idx+i+"x"+j+">"+dataOBJ[idx][i][j]+"</div></td>";
				}
				temp=temp+"<td><div id="+idx+i+"x4>"+Math.round(dataOBJ[idx][i][4]*100)/100+"</div></td>";
				for(j=5;j<iMax;j++){
					dataOBJ[idx][i][j]=xValuex(dataOBJ[idx][i][j]);
					if(xValuex(minorLO[j-5][2])<1){dataOBJ[idx][i][j]="&nbsp"}
					temp=temp+"<td><div id="+idx+i+"x"+j+">"+dataOBJ[idx][i][j]+"</div></td>";
				}
				//---------------------------------------------------		
				temp=temp+"<td style='color:red'>";
				temp=temp+fDiff("xHomework",i,5,1,100);
				temp=temp+"</td></tr>";
			}
			temp=temp+"</tbody>";
			document.getElementById(idx).innerHTML=temp;
			//------------------------------------------
			/* $(document).ready(function(){
				//$.getScript("floatThead-master/dist/jquery.floatThead.min.js");
				var $table = $('table#xHomework');
				$table.floatThead('destroy');
				$table.floatThead();
				$table.floatThead('reflow');
			}); */
			//------------------------------------------
		}
		else if(icode==2){
			temp=document.getElementById(idx).innerHTML;				
			tempK=temp.split("<tr>");	
			tempL=tempK.length-6;
			iMax=5+minorLO.length; // ควรเป็น 6+....?
			alert(iMax);			
			for(i=0;i<tempL;i++){
				for(j=0;j<iMax;j++){
					tempIJ=idx+i+"x"+j;
					dataOBJ[idx][i][j]=xValuex(document.getElementById(tempIJ).innerHTML);
					//alert(i+"x"+j+" = "+dataOBJ[idx][i][j]);
				}
			}
			vScoreWeight(idx);
		}
		else if(icode==3){
			temp="<thead><tr><th rowspan=5 width=3%>ลำดับ</th><th rowspan=5 width=60%>รายละเอียด</th>"
			temp=temp+"<th rowspan=5 width=6%>หัวข้อ</th><th rowspan=5 width=6%>คะแนนดิบ</th><th rowspan=5 width=6%>คะแนนสุทธิ</th></tr><tr>";			
				for(j=0;j<majorLO.length;j++){
					temp=temp+"<th colspan="+majorV[j]+" style='text-align:center'>"+majorLO[j]+"</th>";
				}
				temp=temp+"<th rowspan=3 style='color:red'>diff</th></tr><tr>";
				for(j=0;j<minorV.length;j++){
					temp=temp+"<th>"+minorLO[minorV[j]][0]+"</th>";
				}
				temp=temp+"</tr><tr>";
				for(j=0;j<minorV.length;j++){
					temp=temp+"<th style='text-align:center' class="+classLOb(minorLO[minorV[j]][2])+">"+minorLO[minorV[j]][2]+"</th>";
				}
				temp=temp+"</tr><tr>";
				for(j=0;j<minorV.length;j++){
					temp=temp+"<th id='xPlus"+j+"' style='color:blue;text-align:center'>"+fRound(xScore[minorV[j]],1000)+"</th>";
				}
				temp=temp+"<th style='color:blue;text-align:center'>"+fRound(xScoreDiff,1000)+"</th></tr></thead><tbody>";
			vScoreWeight(idx);
			//--------------------------------------------------
			for (i=0; i<dataOBJ[idx].length; i++){
				temp=temp+"<tr>"
				for(j=0;j<4;j++){
					temp=temp+"<td><div id="+idx+i+"x"+j+">"+xValuex(dataOBJ[idx][i][j])+"</div></td>";
				}
				temp=temp+"<td><div id="+idx+i+"x4>"+Math.round(dataOBJ[idx][i][4]*100)/100+"</div></td>";				
				//---------------------------------------------------
				for(j=0;j<minorV.length;j++){
					jV=minorV[j]+5;
					temp=temp+"<td><div id="+idx+i+"x"+jV+">"+xValuex(dataOBJ[idx][i][jV])+"</div></td>";
				}
				//---------------------------------------------------		
				temp=temp+"<td style='color:red'>";
				temp=temp+fDiff("xHomework",i,5,1,100);
				temp=temp+"</td></tr>";
			}
			temp=temp+"</tbody>";
			document.getElementById(idx).innerHTML=temp;		
			//------------------------------------------
			/* $(document).ready(function(){
				var $table = $('table#xHomework');
				$table.floatThead('destroy');
				$table.floatThead();
				$table.floatThead('reflow');
			}); */
			//------------------------------------------			
		}
		else if(icode==4){		
			temp="<thead><tr><th rowspan=5 width=3%>ลำดับ</th><th rowspan=5 width=50%>รายละเอียด</th><th rowspan=5 width=10%>แก้ไข</th>";
			temp=temp+"<th rowspan=5 width=6%>หัวข้อ</th><th rowspan=5 width=6%>คะแนนดิบ</th><th rowspan=5 width=6%>คะแนนสุทธิ</th></tr><tr>";
				for(j=0;j<majorLO.length;j++){
					temp=temp+"<th colspan="+majorV[j]+" style='text-align:center'>"+majorLO[j]+"</th>";
				}
				temp=temp+"<th rowspan=3 style='color:red'>diff</th></tr><tr>";
				for(j=0;j<minorV.length;j++){
					temp=temp+"<th>"+minorLO[minorV[j]][0]+"</th>";
				}
				temp=temp+"</tr><tr>";
				for(j=0;j<minorV.length;j++){
					temp=temp+"<th style='text-align:center' class="+classLOb(minorLO[minorV[j]][2])+">"+minorLO[minorV[j]][2]+"</th>";
				}
				temp=temp+"</tr><tr>";
				for(j=0;j<minorV.length;j++){
					temp=temp+"<th id='xPlus"+j+"' style='color:blue;text-align:center'>"+fRound(xScore[minorV[j]],1000)+"</th>";
				}
				temp=temp+"<th style='color:blue;text-align:center'>"+fRound(xScoreDiff,1000)+"</th></tr></thead><tbody>";
				vScoreWeight(idx);		
			//--------------------------------------------------
			for (i=0; i<dataOBJ[idx].length; i++){				
				temp=temp+"<tr>";
				temp=temp+"<td><div id="+idx+i+"x"+0+">"+xValuex(dataOBJ[idx][i][0])+"</div></td>";
				temp=temp+"<td><div id="+idx+i+"x"+1+" contentEditable='true'>"+xValuex(dataOBJ[idx][i][1])+"</div></td>";
				temp=temp+"<td>";
				temp=temp+"<img src='img/Aadd.png' title='add' height='15' class='category' onclick='AddxHomework("+i+")'>&nbsp";		
				temp=temp+"<img src='img/Aup.png' title='up' height='15' class='category' onclick='UpxHomework("+i+")'>&nbsp";
				temp=temp+"<img src='img/Adown.png' title='down' height='15' class='category' onclick='DownxHomework("+i+")'>&nbsp";
				temp=temp+"<img src='img/Adelete.png' title='delete' height='15' class='category' onclick='DeletexHomework("+i+")'>";
				temp=temp+"</td>";
				temp=temp+"<td><div id="+idx+i+"x"+2+" contentEditable='true'>"+xValuex(dataOBJ[idx][i][2])+"</div></td>";
				temp=temp+"<td><div id="+idx+i+"x"+3+" contentEditable='true'>"+xValuex(dataOBJ[idx][i][3])+"</div></td>";		
				temp=temp+"<td><div id="+idx+i+"x"+4+">"+Math.round(dataOBJ[idx][i][4]*100)/100+"</div></td>";					
				//---------------------------------------------------
				for(j=0;j<minorV.length;j++){
					jV=minorV[j]+5;
					tempIJ=idx+i+"x"+jV;
					temp=temp+"<td><div id="+tempIJ+" contentEditable='true' title="+tempIJ+">"+xValuex(dataOBJ[idx][i][jV])+"</div></td>";
				} 
				//---------------------------------------------------
				temp=temp+"<td style='color:red'><div id="+idx+i+"xSum title="+idx+i+"xSum>";
				temp=temp+fDiff("xHomework",i,5,1,100);
				temp=temp+"</div></td></tr>";
				//alert("BBBBB0008888888888"+"="+dataOBJ[idx].length+"=="+i);
			}
			temp=temp+"</tbody>";			
			document.getElementById(idx).innerHTML=temp;
			for (i=0; i<dataOBJ[idx].length; i++){
				for(j=0;j<minorV.length;j++){
					jV=minorV[j]+5;
					tempIJ=idx+i+"x"+jV;
					tempTXT='document.getElementById(tempIJ).addEventListener("blur",function(){fDiffHw("xHomework",'+i+');})';
					eval(tempTXT);		
				}
				//------------------------------------
				for(j=2;j<4;j++){
					tempIJ=idx+i+"x"+j;
					tempTXT2='document.getElementById(tempIJ).addEventListener("blur",function(){yScoreWeight("xHomework");})';
					eval(tempTXT2);	
				}
			}
			//------------------------------------------
			/* $(document).ready(function(){
				//$.getScript("floatThead-master/dist/jquery.floatThead.min.js");
				var $table = $('table#xHomework');
				$table.floatThead('destroy');
				$table.floatThead();
				$table.floatThead('reflow');
			}); */
			//------------------------------------------
		}			
		else{
			temp=document.getElementById(idx).innerHTML;				
			tempK=temp.split("<tr>");	
			tempL=tempK.length-6;
			for (i=0; i<tempL; i++){
				for(j=0;j<5;j++){
					tempIJ=idx+i+"x"+j;
					tempV0=document.getElementById(tempIJ).innerHTML;
					tempV1=tempV0.toString().replace("&nbsp;","").replace("&nbsp;","").replace("&nbsp;","").replace("&nbsp;","");
					tempV0=tempV1.replace("&nbsp","").replace("&nbsp","").replace("&nbsp","").replace("&nbsp","");
					tempV1=tempV0.replace("<br>","").replace("<br>","").replace("<br>","").replace("<br>","").fulltrim();
					dataOBJ[idx][i][j]=tempV1;
				}
				for(j=0;j<minorV.length;j++){
					jV=minorV[j]+5;
					tempIJ=idx+i+"x"+jV;
					tempV0=document.getElementById(tempIJ).innerHTML;
					tempV1=tempV0.toString().replace("&nbsp;","").replace("&nbsp;","").replace("&nbsp;","").replace("&nbsp;","");
					tempV0=tempV1.replace("&nbsp","").replace("&nbsp","").replace("&nbsp","").replace("&nbsp","");
					tempV1=tempV0.replace("<br>","").replace("<br>","").replace("<br>","").replace("<br>","").fulltrim();
					dataOBJ[idx][i][jV]=tempV1;					
				}
			}
			//------------------------------------------
			/* $(document).ready(function(){
				//$.getScript("floatThead-master/dist/jquery.floatThead.min.js");
				var $table = $('table#xHomework');
				$table.floatThead('destroy');
				$table.floatThead();
				$table.floatThead('reflow');
			}); */
			//------------------------------------------
			vScoreWeight(idx);
		}
	/*/---------------------------------------------------
		$(document).ready(function(){
			getScript('jquery.sticky.min.js');
			$('#xHomework').sticky();
		});
	*///---------------------------------------------------
	}
	function TogglexHomework(){
		idx="xHomework";
		idy="xLearningOutcome";
		idb="bTogglexHomework";
		iCheck=document.getElementById(idb).value
		//var iRemove=[];
		if(iCheck=="Collapse"){
			ELMxOBJxHomework(idx,idy,3);
			document.getElementById(idb).value="Expand";
			}
		else{document.getElementById(idb).value="Collapse";
				//ELMxOBJxHomework(idx,idy,2);
				ELMxOBJxHomework(idx,idy,1);
				}			
	}
	function EditxHomework(){
		idx="xHomework";
		idy="xLearningOutcome";
		idb="bEditxHomework";
		idc="bTogglexHomework";
		iCheck=document.getElementById(idb).value;
		//var iRemove=[];
		xScoreWeight(idx);
		if(iCheck=="Edit"){
			ELMxOBJxHomework(idx,idy,4);
			document.getElementById(idb).value="Update";
			}
		else{document.getElementById(idb).value="Edit";
				ELMxOBJxHomework(idx,idy,5);				
				ELMxOBJxHomework(idx,idy,3);
				//alert(dataOBJ["xHomework"][0]);				
			}
			document.getElementById(idc).value="Expand";			
	}
	function AddxHomework(iRow){
		idx="xHomework";
		ELMxOBJxHomework("xHomework","xLearningOutcome",5);		
		iMax=dataOBJ[idx].length;
		for(i=iMax; i>Number(iRow)+1; i--){
			dataOBJ[idx][i]=dataOBJ[idx][i-1];
			//alert(dataOBJ[idx][i]);
		}
		//----------------------------------------		
		dataOBJ[idx][iRow+1]=[];
		dataOBJ[idx][iRow+1][0]="&nbsp";
		dataOBJ[idx][iRow+1][1]="&nbsp";
		dataOBJ[idx][iRow+1][2]=dataOBJ[idx][iRow][2];
		dataOBJ[idx][iRow+1][3]=0;
		for(j=4; j<dataOBJ[idx][0].length; j++){
			dataOBJ[idx][iRow+1][j]="&nbsp";
		}
		//----------------------------------------
		reSort("xHomework",0,1);
		xScoreWeight("xHomework");
		ELMxOBJxHomework("xHomework","xLearningOutcome",4);
	}
	function DeletexHomework(iRow){
		idx="xHomework";
		ELMxOBJxHomework("xHomework","xLearningOutcome",5);		
		iMax=dataOBJ[idx].length;
		for(i=iRow; i<iMax-1; i++){
			dataOBJ[idx][i]=dataOBJ[idx][i+1];
		}
		dataOBJ[idx].length = iMax-1; 
		reSort("xHomework",0,1);
		xScoreWeight("xHomework");
		ELMxOBJxHomework("xHomework","xLearningOutcome",4);
	}
	function UpxHomework(iRow){
		idx="xHomework";
		ELMxOBJxHomework("xHomework","xLearningOutcome",5);
		iMax=dataOBJ[idx].length;
		if(iRow>0){
			temp1=dataOBJ[idx][iRow];
			dataOBJ[idx][iRow]=dataOBJ[idx][iRow-1];
			dataOBJ[idx][iRow-1]=temp1;
			reSort("xHomework",0,1);
			xScoreWeight("xHomework");
			ELMxOBJxHomework("xHomework","xLearningOutcome",4);			
		}
	}
	function DownxHomework(iRow){
		idx="xHomework";
		ELMxOBJxHomework("xHomework","xLearningOutcome",5);
		iMax=dataOBJ[idx].length-1;
		if(iRow<iMax){
			temp1=dataOBJ[idx][iRow];
			dataOBJ[idx][iRow]=dataOBJ[idx][iRow+1];
			dataOBJ[idx][iRow+1]=temp1;
			reSort("xHomework",0,1);
			xScoreWeight("xHomework");
			ELMxOBJxHomework("xHomework","xLearningOutcome",4);			
		}	
	}
	function reSort(idx,jIndex,iStart){
		iMax=dataOBJ[idx].length;
		for(i=0; i<iMax; i++){
			dataOBJ[idx][i][jIndex]=iStart+i;
		}		
	}
	function fDiffHw(idx,i){
		ELMxOBJxHomework("xHomework","xLearningOutcome",5);
		tempSum=idx+i+"xSum";
		document.getElementById(tempSum).innerHTML=fDiff("xHomework",i,5,1,100);
	}
	function vScoreWeight(idx){
		vScore=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//not more than 20 Category
		for(jj=0;jj<dataOBJ[idx].length;jj++){
			jType=parseInt(zValue(dataOBJ[idx][jj][2])-1);
			vScore[jType]=vScore[jType]+zValue(dataOBJ[idx][jj][3]);
		}
		for(jj=0;jj<dataOBJ[idx].length;jj++){
			jType=parseInt(zValue(dataOBJ[idx][jj][2])-1);
			dataOBJ[idx][jj][4]=zValue(dataOBJ["xCategory"][jType][2])*zValue(dataOBJ[idx][jj][3])/vScore[jType];
		}
	}
	function yScoreWeight(idx){
		ELMxOBJxHomework("xHomework","xLearningOutcome",5);
		vScoreWeight(idx);	
		ELMxOBJxHomework("xHomework","xLearningOutcome",4);		
	}
	function xScoreWeight(idx){
		xScore=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//not more than 65 Learning Outcome
		if(dataOBJ[idx][0].length>4){
			for(iii=0;iii<dataOBJ[idx].length;iii++){
				iMultiply=zValue(dataOBJ[idx][iii][4])/100;
				for(jj=0;jj<(dataOBJ[idx][0].length-5);jj++){
					jPlus=dataOBJ[idx][iii][jj+5];
					if(jPlus>0){xScore[jj]=xScore[jj]+iMultiply*jPlus;}
				}
			}
		}
		fScoreDiff();
	}	
	function fScoreDiff(){
		xScoreDiff=CategorySumScore;
		for(jj=0;jj<xScore.length;jj++){
			xScoreDiff=xScoreDiff-xScore[jj];
		}
		return xScoreDiff;
	}