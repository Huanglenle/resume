window.onload = function(){

	var studyMessage = document.getElementById("studyMessage"),
		sm_divs = studyMessage.getElementsByClassName("stu_content"),
		sm_items = document.getElementById("studyMessage_item"),
		sm_list = sm_items.getElementsByTagName("li");
    var sm_back = document.getElementById("studyMessage_back"),
    	sm_go = document.getElementById("studyMessage_go"),
    	sm_pointers = document.getElementsByClassName("pointer");

//标签切换函数封装
    var index = null;
	function tabItem(listsTab,divsTab){
	    for(var i = 0; i < listsTab.length; i++){
	    	index = i;
	    	listsTab[i].id = i;
	    	listsTab[i].onmouseover = function(){
	    		for(var j = 0; j < listsTab.length; j++){
	    		    listsTab[j].className = "sm_item";
	    			divsTab[j].style.display = "none";
	    		}
			this.className = "sm_item item_selected";
	        divsTab[this.id].style.display = "block";
	    	}
	    }
	    return index;
	}
	// console.log(index);
//标签切换
	tabItem(sm_list,sm_divs);
	function pointerBox(fatherBox,pointers){
	    fatherBox.onmouseover = function(){
	    	for(var i= 0; i < pointers.length; i++){
	    		pointers[i].style.display = "block";
	    	}
	    }
	    fatherBox.onmouseout = function(){
	    	for(var i= 0; i < pointers.length; i++){
	    		pointers[i].style.display = "none";
			}
	    }
	}

	pointerBox(studyMessage,sm_pointers);

	sm_back.onclick = function(){
		console.log("1");
    	sm_divs[index].style.left = "-944px";
	}
}