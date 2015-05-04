	function fSum(idx,iIndex,iStart,scode){
		var jTemp=iIndex;
		if(scode==1){ //รวมตลอดแถว
			rSum=0;
			for (ii=iStart; ii<dataOBJ[idx][jTemp].length; ii++){
				var rTemp=zValue(dataOBJ[idx][jTemp][ii]);
				rSum=rSum+Number(rTemp);
			}
			return rSum}
		else{ //รวมตลอดคอลัมภ์
			cSum=0;
			for (ii=iStart; ii<dataOBJ[idx].length; ii++){
				cSum=cSum+parseFloat(xValuex(dataOBJ[idx][ii][jTemp]));}
			
			return cSum}
	}
	function xValuex(x){
		y=x;
		if(x===undefined || x===null || x===""){y="&nbsp"}
		return y
	}
	function zValue(x){
		y0=x.toString().replace("&nbsp;","").replace("&nbsp;","").replace("&nbsp;","").replace("&nbsp;","");
		y1=y0.replace("&nbsp","").replace("&nbsp","").replace("&nbsp","").replace("&nbsp","");
		y2=y1.replace("<br>","").replace("<br>","").replace("<br>","").replace("<br>","").fulltrim();
		y=Number(y2);
		if(isNaN(y)){y=0};
		return y
	}
	function fDiff(idx,iIndex,iStart,scode,ivTarget){
		tempDiff=ivTarget-fSum(idx,iIndex,iStart,scode);
		if(tempDiff!=0){return tempDiff}
		else{return ""}
	}
	function ELMxOBJxCategory(idx,icode){
		if(icode==1){
			document.getElementById(idx).style.width="50%";
			var temp="<tr><th width=6%>หัวข้อ</th><th width=78%>รายละเอียด</th><th width=16%>คะแนน</th></tr>";			
			for (i=0; i<dataOBJ[idx].length; i++){
				temp=temp+"<tr>"
				for(j=0;j<3;j++){
					temp=temp+"<td><div id="+idx+i+"x"+j+">"+dataOBJ[idx][i][j]+"</div></td>";
				}
				temp=temp+"</tr>";
			}
			CategorySumScore=fSum(idx,2,0,2);			
			temp=temp+"<tr><td></td><td>รวม</td><td>"+CategorySumScore+"</td></tr>";
			document.getElementById(idx).innerHTML=temp;}
		else if(icode==2){temp=document.getElementById(idx).innerHTML;				
			tempK=temp.split("<tr>");	
			tempL=tempK.length-3;
			for (i=0; i<tempL; i++){
				for(j=0;j<3;j++){
					tempIJ=idx+i+"x"+j;
					dataOBJ[idx][i][j]=document.getElementById(tempIJ).innerHTML;
				}
			}
		}
		else{
			document.getElementById(idx).style.width="60%";
			var temp="<tr><th width=5%>หัวข้อ</th><th width=65%>รายละเอียด</th><th width=14%>คะแนน</th><th>แก้ไข</th></tr>";			
			for (i=0; i<dataOBJ[idx].length; i++){
				temp=temp+"<tr>"
				temp=temp+"<td><div id="+idx+i+"x"+0+">"+dataOBJ[idx][i][0]+"</div></td>";
				for(j=1;j<3;j++){
					temp=temp+"<td><div id="+idx+i+"x"+j+" contentEditable='true'>"+dataOBJ[idx][i][j]+"</div></td>";
				}
				//-------------------------
				temp=temp+"<td>"+
				"<img src='img/Aadd.png' title='add' height='15' class='category' onclick='AddxCategory("+i+")'>&nbsp"+
				"<img src='img/Aup.png' title='up' height='15' class='category' onclick='UpxCategory("+i+")'>&nbsp"+
				"<img src='img/Adown.png' title='down' height='15' class='category' onclick='DownxCategory("+i+")'>&nbsp"+
				"<img src='img/Adelete.png' title='delete' height='15' class='category' onclick='DeletexCategory("+i+")'>"+
				"</td></tr>";
			}
			CategorySumScore=fSum(idx,2,0,2);
			temp=temp+"<tr><td></td><td>รวม</td><td>"+CategorySumScore+"</td><td></td></tr>";
			document.getElementById(idx).innerHTML=temp;
			}
	}
	function ARRxOBJxCategory(idx,jcode,iElement){
		"use ARRxOBJxLearningOutcome"}; 
	function EditxCategory(){
		idx="xCategory";
		idb="bEditxCategory";
		iCheck=document.getElementById(idb).value
		//var iRemove=[];
		if(iCheck=="Edit"){
			ELMxOBJxCategory("xCategory",3);
			document.getElementById(idb).value="Update";
			}
		else{document.getElementById(idb).value="Edit";
				ELMxOBJxCategory("xCategory",2);
				ELMxOBJxCategory("xCategory",1);
				}			
	}
	function AddxCategory(iRow){
		idx="xCategory";
		iMax=dataOBJ[idx].length;
		dataOBJ[idx][iMax]=[dataOBJ[idx].length+1,dataOBJ[idx][iMax-1][1],dataOBJ[idx][iMax-1][2]];
		for(i=iMax-1; i>iRow+1; i--){
			dataOBJ[idx][i][0]=i+1;
			dataOBJ[idx][i][1]=dataOBJ[idx][i-1][1];
			dataOBJ[idx][i][2]=dataOBJ[idx][i-1][2];
		}
		dataOBJ[idx][iRow+1]=[iRow+2,'&nbsp',0];
		ELMxOBJxCategory("xCategory",3);
	}
	function DeletexCategory(iRow){
		idx="xCategory";
		iMax=dataOBJ[idx].length;
		for(i=iRow; i<iMax-1; i++){
			dataOBJ[idx][i][0]=i+1;
			dataOBJ[idx][i][1]=dataOBJ[idx][i+1][1];
			dataOBJ[idx][i][2]=dataOBJ[idx][i+1][2];
		}
		dataOBJ[idx].length = iMax-1; 
		ELMxOBJxCategory("xCategory",3);
	}
	function UpxCategory(iRow){
		idx="xCategory";
		iMax=dataOBJ[idx].length;
		if(iRow>0){
			temp1=dataOBJ[idx][iRow][1];temp2=dataOBJ[idx][iRow][2];
			dataOBJ[idx][iRow][1]=dataOBJ[idx][iRow-1][1];
			dataOBJ[idx][iRow][2]=dataOBJ[idx][iRow-1][2];
			dataOBJ[idx][iRow-1][1]=temp1;
			dataOBJ[idx][iRow-1][2]=temp2;}
		ELMxOBJxCategory("xCategory",3);
	}
	function DownxCategory(iRow){
		idx="xCategory";
		iMax=dataOBJ[idx].length-1;
		if(iRow<iMax){
			temp1=dataOBJ[idx][iRow][1];temp2=dataOBJ[idx][iRow][2];
			dataOBJ[idx][iRow][1]=dataOBJ[idx][iRow+1][1];
			dataOBJ[idx][iRow][2]=dataOBJ[idx][iRow+1][2];
			dataOBJ[idx][iRow+1][1]=temp1;
			dataOBJ[idx][iRow+1][2]=temp2;
		ELMxOBJxCategory("xCategory",3);}	
	}
