window.onload = function(){
	var studyMessage = document.getElementById("studyMessage"),
		divs = studyMessage.getElementsByTagName("div"),
		items = document.getElementById("studyMessage_item"),
		list = items.getElementsByTagName("li");
    
    for(var i = 0; i < list.length; i++){
    	list[i].id = i;
    	list[i].onmouseover = function(){
    		for(var j = 0; j < list.length; j++){
    		    list[j].className = "sm_item";
    			divs[j].style.display = "none";
    		}
    		this.className = "sm_item item_selected";

        divs[this.id].style.display = "block";
    	}
    }
}