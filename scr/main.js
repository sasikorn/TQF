	var dataARR=[];
	var dataTXT;
	var dataOBJ=[];
	//var xScore=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//not more than 65 Learning Outcome
	//------------------------------------------------------------------------------------
	var $table = $('table.demo');
	$table.floatThead();
	//------------------------------------------------------------------------------------
	$('table.demo2').floatThead({
	useAbsolutePositioning: false
	// absolutePositioning is better for
	// highly dynamic sites
	// (which this is not)
	});
	//------------------------------------------------------------------------------------
	function ELMxOBJ(idx,icode){
		if(icode==1){document.getElementById(idx).value=dataOBJ[idx];}
		else{dataOBJ[idx]=document.getElementById(idx).value;}
	}
	function ARRxOBJ(idx,jcode,i){
		if(jcode==1){dataARR[i]=dataOBJ[idx];}
		else{dataOBJ[idx]=dataARR[i];}
	}
	function kStart(){
		alert("Welcome to ENG-NU TQF SYSTEM!!");
		dataOBJ["tUniversityName"]="มหาวิทยาลัยนเรศวร";
		dataOBJ["tFacultyName"]="คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมโยธา";
		dataOBJ["tSubjectTh"]="304101  แนะนำอาชีพวิศวกรรมโยธา";
		dataOBJ["tSubjectEn"]="304101  Introduction to Civil Engineering Profession";
		dataOBJ["tCredit"]="1(1-0-3)"
		dataOBJ["tPreRequisite"]="-ไม่มี-";
		dataOBJ["tCurriculum"]="วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมโยธา";
		//dataOBJ("sSubjectType")=["วิชาพื้นฐานทางวิศวกรรม","วิชาบังคับเฉพาะสาขา","วิชาเลือกเฉพาะสาขา","วิชาบังคับไม่นับหน่วยกิต"]; //--check this object ----------------------------//
		dataOBJ["sSubjectType"]="วิชาพื้นฐานทางวิศวกรรม"; //--check this object ----------------------------//
		dataOBJ["tTeacherA"]="1. อาจารย์วรางค์ลักษณ์ ซ่อนกลิ่น \r\n 2. ผศ.ดร.สสิกรณณ์ เหลืองวิชชเจริญ  \r\n 3. ดร.พงษ์ธร จุฬพันธอง";
		dataOBJ["tTeacherB"]="1. อาจารย์วรางค์ลักษณ์ ซ่อนกลิ่น \r\n 2. ผศ.ดร.สสิกรณณ์ เหลืองวิชชเจริญ  \r\n 3. ดร.พงษ์ธร จุฬพันธอง";
		dataOBJ["tSemester"]="ภาคการศึกษาต้น ปีการศึกษา 2558";
		dataOBJ["tStudentYear"]="1";
		dataOBJ["tStudyPlace"]="วันจันทร์ เวลา 13.00-13.50 น. ห้องเรียน EN513 \r\n วันอังคาร เวลา 13.00-14.50 น. ห้องเรียน EN513";
		dataOBJ["tM3CreateDate"]="10 กุมภาพันธ์ 2558";
		//--------------------------------
		dataOBJ["tTarget"]="เพื่อให้นิสิตเรียนอย่างประสบความสําเร็จ  ในสาขาวิศวกรรมโยธา  มีความรักในวิชาชีพและ เข้าใจในขอบเขตของงานในแต่ละสาขา มี จรรยาบรรณวิศวกรที่ดี โดยเมื่อเมื่อผ่านการเรียนวิชานี้แล้ว นิสิตจะมีคุณสมบัติดังนี้ \r\n 1.1 มีความรู้ ความสามารถในการปฏิบัติงานด้านวิศวกรรมโยธา  \r\n 1.2 มีความสามารถในการพัฒนาทักษะอย่างต่อเนื่อง และการใช้องค์ความรู้ และทักษะที่ได้รับอย่าง มีประสิทธิภาพ  \r\n 1.3 มีคุณธรรม สํานึกในจรรยาบรรณแห่งวิชาชีพ และมีความรับผิดชอบต่อหน้าที่ และสังคม";
		dataOBJ["tObjective1"]="เพื่อให้สอดคล้องกับกรอบมาตรฐานคุณภาพการศึกษาระดับอุดมศึกษา";
		dataOBJ["tObjective2"]="เพื่อปรับปรุงรายวิชาให้สอดคล้องกับผลการประเมินรายวิชาในรอบที่ผ่านมา" ;
		dataOBJ["tObjective3"]="เพื่อพัฒนารายวิชาให้สอดคล้องกับความก้าวหน้าของเทคโนโลยีที่เกี่ยวข้องกับรายวิชา";
		dataOBJ["tObjective4"]="";
		//--------------------------------
		dataOBJ["tCourseDescription"]="แนะนําวิชาชีพวิศวกรรมโยธาในแขนงต่างๆ วิธีการเรียนในสาขาวิศวกรรมโยธาให้ได้ผล ฝึกการคิดและแก้ปัญหาทางวิศวกรรมโยธาด้วยเครื่องมือทางคณิตศาสตร์และวิทยาศาสตร์อย่างเป็นระบบ";
		dataOBJ["tM3CreateDate"]="45 ชั่วโมง (ปฏิบัติการ)";
		//-------------------------------------------------------------------------
		//dataOBJ["xLearningOutcome"]=[];
		dataOBJ["xLearningOutcome"]=[[1,"คุณธรรม",""],
				[1.1,"เข้าใจและซาบซึ้งในวัฒนธรรมไทย ตระหนักในคุณค่าของระบบคุณธรรม จริยธรรม เสียสละ และซื่อสัตย์สุจริต",0],
				[1.2,"มีวินัย ตรงต่อเวลา รับผิดชอบต่อตนเองและสังคม เคารพกฎระเบียบและข้อบังคับต่าง ๆ ขององค์กรและสังคม",1],
				[1.3,"มีภาวะความเป็นผู้นำและผู้ตาม สามารถทำงานเป็นหมู่คณะ สามารถแก้ไขข้อขัดแย้งตามลำดับความสำคัญ เคารพสิทธิและรับฟังความคิดเห็นของผู้อื่น รวมทั้งเคารพในคุณค่าและศักดิ์ศรีของความเป็นมนุษย์",0],
				[1.4,"สามารถวิเคราะห์และประเมินผลกระทบจากการใช้ความรู้ทางวิศวกรรมต่อบุคคล องค์กร สังคมและสิ่งแวดล้อม",1],
				[1.5,"มีจรรยาบรรณทางวิชาการและวิชาชีพ และมีความรับผิดชอบในฐานะผู้ประกอบวิชาชีพ รวมถึงเข้าใจถึงบริบททางสังคมของวิชาชีพวิศวกรรมในแต่ละสาขา ตั้งแต่อดีตจนถึงปัจจุบัน",0],
				[1.6,"มีทัศนคติที่ดีต่ออาชีพ แสดงออกซึ่งคุณธรรมและจริยธรรมในการปฏิบัติงานและการปฏิบัติตนต่อผู้อื่นอย่างสม่ำเสมอ",2],
				[2,"ความรู้",""],
				[2.1,"มีความรู้และความเข้าใจทางคณิตศาสตร์พื้นฐาน วิทยาศาสตร์พื้นฐาน วิศวกรรมพื้นฐาน และเศรษฐศาสตร์ เพื่อการประยุกต์ใช้กับงานทางด้านวิศวกรรมศาสตร์ที่เกี่ยวข้อง และการสร้างนวัตกรรมทางเทคโนโลยี",2],
				[2.2,"มีความรู้และความเข้าใจเกี่ยวกับหลักการที่สำคัญ ทั้งในเชิงทฤษฎีและปฏิบัติ ในเนื้อหาของสาขาวิชาเฉพาะด้านทางวิศวกรรม อย่างกว้างขวาง เป็นระบบ สากล และทันสมัย",1],
				[2.3,"สามารถบูรณาการความรู้ในสาขาวิชาที่ศึกษากับความรู้ในศาสตร์อื่นๆ ที่เกี่ยวข้อง",0],
				[2.4,"สามารถวิเคราะห์และแก้ไขปัญหา ด้วยวิธีการที่เหมาะสม รวมถึงการประยุกต์ใช้เครื่องมือที่เหมาะสม เช่น โปรแกรมคอมพิวเตอร์ เป็นต้น",2],
				[2.5,"มีความรู้ในมาตรฐานวิชาชีพวิศวกรรม สามารถใช้ความรู้และทักษะในสาขาวิชาของตน ในการประยุกต์แก้ไขปัญหาในงานจริงได้",0],
				[3,"ทักษะทางปัญญา",""],
				[3.1,"มีความคิดอย่างมีวิจารณญาณที่ดี",1],
				[3.2,"สามารถรวบรวม ศึกษา วิเคราะห์ และสรุปประเด็นปัญหาและความต้องการ",0],
				[3.3,"สามารถคิด วิเคราะห์ และแก้ไขปัญหาด้านวิศวกรรมได้อย่างเป็นระบบ รวมถึงการใช้ข้อมูลประกอบการตัดสินใจในการทำงานได้อย่างมีประสิทธิภาพ",2],
				[3.4,"มีจินตนาการและความยืดหยุ่นในการปรับใช้องค์ความรู้ที่เกี่ยวข้องอย่างเหมาะสม ในการพัฒนานวัตกรรมหรือต่อยอดองค์ความรู้จากเดิมได้อย่างสร้างสรรค์",0],
				[3.5,"สามารถสืบค้นข้อมูลและแสวงหาความรู้เพิ่มเติมได้ด้วยตนเอง เพื่อการเรียนรู้ตลอดชีวิตและทันต่อการเปลี่ยนแปลงทางองค์ความรู้และเทคโนโลยีใหม่ ๆ",0],
				[3.6,"มีความสามารถในการประยุกต์ใช้ความรู้ทั้งภาคทฤษฎี ภาคปฏิบัติ รวมถึงองค์ความรู้จากศาสตร์อื่นๆ เพื่อใช้ประโยชน์ในการปฏิบัติงานทางด้านวิศวกรรมได้อย่างมีประสิทธิภาพ",1],
				[4,"ทักษะความสัมพันธ์ระหว่างบุคคลและความรับผิดชอบ",""],
				[4.1,"สามารถสื่อสารกับกลุ่มคนที่หลากหลาย และสามารถสนทนาทั้งภาษาไทยและภาษาต่างประเทศได้อย่างมีประสิทธิภาพ สามารถใช้ความรู้ในสาขาวิชาชีพมาสื่อสารต่อสังคมได้ในประเด็นที่เหมาะสม",0],
				[4.2,"สามารถเป็นผู้ริเริ่มแสดงประเด็นในการแก้ไขสถานการณ์เชิงสร้างสรรค์ทั้งส่วนตัวและส่วนรวม พร้อมทั้งแสดงจุดยืนอย่างพอเหมาะทั้งของตนเองและของกลุ่ม รวมทั้งให้ความช่วยเหลือและอำนวยความสะดวกในการแก้ไขปัญหาสถานการณ์ต่าง ๆ",0],
				[4.3,"สามารถวางแผนและรับผิดชอบในการพัฒนาการเรียนรู้ของตนเอง และสอดคล้องกับทางวิชาชีพอย่างต่อเนื่อง",2],
				[4.4,"รู้จักบทบาท หน้าที่ และมีความรับผิดชอบในการทำงานตามที่ได้รับมอบหมาย ทั้งงานบุคคลและงานกลุ่ม สามารถปรับตัวและทำงานร่วมกับผู้อื่นทั้งในฐานะผู้นำและผู้ตามได้อย่างมีประสิทธิภาพ สามารถวางตัวได้อย่างเหมาะสมกับความรับผิดชอบ",0],
				[4.5,"มีจิตสำนึกความรับผิดชอบด้านความปลอดภัยในการทำงาน และการรักษาสภาพแวดล้อมต่อสังคมและประเทศชาติ",0],
				[5,"ทักษะการวิเคราะห์เชิงตัวเลข การสื่อสาร และการใช้เทคโนโลยีสารสนเทศ",""],
				[5.1,"มีทักษะในการใช้คอมพิวเตอร์ สำหรับการทำงานที่เกี่ยวข้องกับวิชาชีพได้เป็นอย่างดี",0],
				[5.2,"มีทักษะในการวิเคราะห์ข้อมูลสารสนเทศทางคณิตศาสตร์หรือการแสดงสถิติประยุกต์ ต่อการแก้ปัญหาที่เกี่ยวข้องได้อย่างสร้างสรรค์",1],
				[5.3,"สามารถประยุกต์ใช้เทคโนโลยีสารสนเทศและการสื่อสาร ที่ทันสมัยได้อย่างเหมาะสมและมีประสิทธิภาพ",0],
				[5.4,"มีทักษะในการสื่อสารข้อมูลทั้งทางการพูด การเขียน และการสื่อความหมายโดยใช้สัญลักษณ์",2],
				[5.5,"สามารถใช้เครื่องมือการคำนวณและเครื่องมือทางวิศวกรรม เพื่อประกอบวิชาชีพในสาขาวิศวกรรมที่เกี่ยวข้องได้" ,0],
				[5.6,"มีความสามารถในการใช้เทคโนโลยีสารสนเทศในการติดต่อสื่อสาร รู้จักเลือกรูปแบบของการนำเสนอที่เหมาะสมสำหรับเรื่อง และผู้ฟังที่แตกต่างกันได้อย่างมีประสิทธิภาพ",2]];
		//-------------------------------------------------------------------------
		//dataOBJ["xCategory"]=[];
		dataOBJ["xCategory"]=[[1,"การบ้าน",15],
				[2,"รายงาน",10],
				[3,"สอบย่อย",10],
				[4,"สอบกลางภาค",30],
				[5,"สอบปลายภาค",40]];
		//-------------------------------------------------------------------------
		//dataOBJ["xHomework"]=[];
		dataOBJ["xHomework"]=[[1,"การบ้าน ข้อ 1",1,10],[2,"การบ้าน ข้อ 2",1,20],[3,"การบ้าน ข้อ 3",1,20],[4,"การบ้าน ข้อ 4",1,20],
				[5,"รายงานชิ้นที่ 1",2,10],[6,"รายงานชิ้นที่ 2",2,10],
				[7,"สอบย่อย ครั้งที่ 1",3,10],[8,"สอบย่อย ครั้งที่ 2",3,10],[9,"สอบย่อย ครั้งที่ 3",3,10],
				[10,"สอบกลางภาค ข้อ 1",4,30],[11,"สอบกลางภาค ข้อ 2",4,30],[12,"สอบกลางภาค ข้อ 3",4,30],[13,"สอบกลางภาค ข้อ 4",4,30],[14,"สอบกลางภาค ข้อ 5",4,30],
				[15,"สอบปลายภาค ข้อ 1",5,30],[16,"สอบปลายภาค ข้อ 2",5,30],[17,"สอบปลายภาค ข้อ 3",5,30],[18,"สอบปลายภาค ข้อ 4",5,30],[19,"สอบปลายภาค ข้อ 5",5,30],];
		//-------------------------------------------------------------------------
		fElementxObject(1);		
	}
	function fElementxObject(icode){
		ELMxOBJ("tUniversityName",icode);
		ELMxOBJ("tFacultyName",icode);
		ELMxOBJ("tSubjectTh",icode);
		ELMxOBJ("tSubjectEn",icode);
		ELMxOBJ("tCredit",icode);
		ELMxOBJ("tPreRequisite",icode);
		ELMxOBJ("tCurriculum",icode);
		//document.getElementById("sSubjectType").value;
		ELMxOBJ("sSubjectType",icode);
		ELMxOBJ("tTeacherA",icode);
		ELMxOBJ("tTeacherB",icode);
		ELMxOBJ("tSemester",icode);
		ELMxOBJ("tStudentYear",icode);
		ELMxOBJ("tStudyPlace",icode);
		ELMxOBJ("tM3CreateDate",icode);
		//--------------------------------
		ELMxOBJ("tTarget",icode);
		ELMxOBJ("tObjective1",icode);
		ELMxOBJ("tObjective2",icode);
		ELMxOBJ("tObjective3",icode);
		ELMxOBJ("tObjective4",icode);
		//--------------------------------
		ELMxOBJ("tCourseDescription",icode);
		ELMxOBJ("tM3CreateDate",icode);
		//--------------------------------
		ELMxOBJxLearningOutcome("xLearningOutcome",icode);
		//--------------------------------
		ELMxOBJxCategory("xCategory",icode);
		xScoreWeight("xHomework");
		//fScoreDiff();
		//--------------------------------
		ELMxOBJxHomework("xHomework","xLearningOutcome",icode);		
	}
	function fArrayxObject(jcode){
		ARRxOBJ("tUniversityName",jcode,0);
		ARRxOBJ("tFacultyName",jcode,1);
		ARRxOBJ("tSubjectTh",jcode,2);
		ARRxOBJ("tSubjectEn",jcode,3);
		ARRxOBJ("tCredit",jcode,4);
		ARRxOBJ("tPreRequisite",jcode,5);
		ARRxOBJ("tCurriculum",jcode,6);
		//document.getElementById("sSubjectType").value;
		ARRxOBJ("sSubjectType",jcode,7);
		ARRxOBJ("tTeacherA",jcode,8);
		ARRxOBJ("tTeacherB",jcode,9);
		ARRxOBJ("tSemester",jcode,10);
		ARRxOBJ("tStudentYear",jcode,11);
		ARRxOBJ("tStudyPlace",jcode,12);
		ARRxOBJ("tM3CreateDate",jcode,13);
		//--------------------------------
		ARRxOBJ("tTarget",jcode,14);
		ARRxOBJ("tObjective1",jcode,15);
		ARRxOBJ("tObjective2",jcode,16);
		ARRxOBJ("tObjective3",jcode,17);
		ARRxOBJ("tObjective4",jcode,18);
		//--------------------------------
		ARRxOBJ("tCourseDescription",jcode,19);
		ARRxOBJ("tM3CreateDate",jcode,20);
		//--------------------------------
		ARRxOBJxLearningOutcome("xLearningOutcome",jcode,21);
		ARRxOBJxLearningOutcome("xCategory",jcode,22);
		ARRxOBJxHomework("xHomework","xLearningOutcome",jcode,23);		
	}
