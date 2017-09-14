var inputElement = "";

$(document).ready(function(){
	
	$(document).on("mouseover",".intel-list-item",function(e){
		
		//GET THE HOVERED ITEM AND SAVE IN A HIDDEN FIELD
		var selectedItem = $(this).html();
		$("#intel-hiddenSelected").val(selectedItem);
		//SET THE GLOBAL VARIABLE TO HOLD THE OBJECT USER IS WORKING IN
		inputElement = $(document.activeElement);			
	})	
	
	$(document).on("click",".intel-list-item",function(e){
		//ADD TO TEXT FIELD WHEN THE USER SELECTS AN ITEM AND RE-FOCUS ON TEXT BOX
		$("#intel-list").css("visibility","hidden");
		var selectedItem = $("#intel-hiddenSelected").val();
		inputElement.val(inputElement.val().replace("item.",selectedItem) + " ")
		inputElement.focus()
	})
	
	$(".intellisense").keyup(function(e){
		//CHECK THE KEYCODE TO SEE IF A PERIOD WAS PRESSED
		if (e.keyCode == 190) {
			//GET THE CHARACTER LOCATION OF THE CURSOR SO WE KNOW WHERE TO PUT THE DATA IN
			var curPosition = parseInt($(document.activeElement.selectionStart)[0])
			//IF THE SYNTAX 'item.' WAS FOUND THEN DISPLAY THE INTELLISENSE BOX
			if ($(this).val().substring(curPosition-5,curPosition) == "item.") {
				$("#intel-list").empty()
				$("#intel-list").css("top",$(document.activeElement).position().top+$(document.activeElement).height())
				$("#intel-list").css("left",$(document.activeElement).position().left+50)
				$("#intel-list").css("visibility","visible");
				var availableTags = getDataforListBox();
				$.each(availableTags, function(e){
					var item = $(this)[0]
					$("#intel-list").append("<div class='intel-list-item'>Item " + item.item + " ~ " + item.PartNumber + " ~ " + item.Description + "</div>")
				})
			} 
		}else {
			$("#intel-list").css("visibility","hidden");
		}
	})	
})

function getDataforListBox(){
	//USE AJAX CALL TO POPULATE DATA LIST
	var availableTags = [
	    { item: '1', PartNumber: '205-205', Description: 'Boss' }, 
	    { item: '2', PartNumber: '304-123', Description: 'Link' },
	    { item: '3', PartNumber: 'cat-123-4567', Description: 'Plate' },
	    { item: '4', PartNumber: '209-063', Description: 'Bracket' },
	    { item: '5', PartNumber: 'cat-7t-1099', Description: 'wire clip' },
	    { item: '6', PartNumber: 'cat-236-1600', Description: 'Tank' },
	];
	
	return availableTags;
}