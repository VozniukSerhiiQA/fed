//*****************************Test1
function showDiv(ele) {
    var srcElement = document.getElementById(ele);
	srcElement.classList.add('visible');
}

function hideDiv(ele) {
	var srcElement = document.getElementById(ele);
    srcElement.classList.remove('visible');
}

//*****************************Test2 
function collapsExpand(event) {
	event.preventDefault();
    var srcElement = event.target.parentElement.children[1];

        if (srcElement.classList.contains("expanded")) {
                srcElement.classList.remove('expanded');
        }
        else  {
                srcElement.classList.add('expanded');
        }
}

//*****************************Test3
function showMsg(event) {
    event.preventDefault();
	console.log('Message!');
}
//*****************************Test6
function change6() {
    var x = document.getElementById('element6');
    x.value = x.value.toUpperCase();
}