document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " W3Schools. All rights reserved.</p>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a onmousedown='kTest(11)'>A</a></li>" +
"<li><a onmousedown='kTest(12)'>B</a></li>" +
"<li><a onmousedown='kTest(13)'>C</a></li>" +
"<li><a onmousedown='kTest(31)'>001</a></li>" +
"<li><a onmousedown='kTest(32)'>002</a></li>" +
"<li><a onmousedown='kTest(33)'>003</a></li>" +
"<li><a onmousedown='kTest(34)'>004</a></li>" +
"</ul>"; 
//-------------------------------------------------------
function fSubjectTypeOpen(){
	document.getElementById("tSubjectTypeAdd").style.display="inline";
	document.getElementById("bSubjectTypeAdd").style.display="inline";
	document.getElementById("bSubjectTypeDelete").style.display="inline";
	document.getElementById("bSubjectTypeClose").style.display="inline";
}
function fSubjectTypeAdd(){
	var x = document.getElementById("sSubjectType");
	var y = document.getElementById("tSubjectTypeAdd");
	if(y.value!="-ระบุ-"&&y.value!='')
		{var option = document.createElement("option");
			option.text = document.getElementById("tSubjectTypeAdd").value;
			x.add(option);
			y.value="-ระบุ-";}
}
//-------------------------------------------------------
function fSubjectTypeDelete(){
	var x = document.getElementById("sSubjectType");
	var y = x.length-1;
	if(y > 2)
	{x.remove(x.selectedIndex);}
	else{alert('ไม่สามารถลบจนน้อยกว่า '+y+' หัวข้อได้ ')};
}
function fSubjectTypeClose(){
	document.getElementById("tSubjectTypeAdd").style.display="none";
	document.getElementById("bSubjectTypeAdd").style.display="none";	
	document.getElementById("bSubjectTypeDelete").style.display="none";	
	document.getElementById("bSubjectTypeClose").style.display="none";
}


//----------------------------------------------------------------------------
// ศึกษา การแสดง place holder แบบหลายบันทัด
var textAreas = document.getElementsByClassName('textAreaMultiligne');

Array.prototype.forEach.call(textAreas, function(elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\r\n');
});
//----------------------------------------------------------------------------
// ศึกษาวิธีการ trim ข้อความ

String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};

String.prototype.ltrim=function(){return this.replace(/^\s+/,'');};

String.prototype.rtrim=function(){return this.replace(/\s+$/,'');};

String.prototype.fulltrim=function(){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');};

//----------------------------------------------------------------------------

// String.prototype.trim = function() {return this.replace(/^\s+|\s+$/g, "");};

//----------------------------------------------------------------------------
/* fix หัวช้อ
var header = document.querySelector('.header');
var origOffsetY = header.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? header.classList.add('sticky') :
                                  header.classList.remove('sticky');
}
document.addEventListener('scroll', onScroll); */
//----------------------------------------------------------------------------
var menu = document.querySelector('.menu');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;
 
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});