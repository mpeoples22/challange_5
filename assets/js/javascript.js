//Current date in header
var newDay = $("#currentDay");
newDay.append(new Date());
//send time blocks to html container
//.forEach next...
var timBlock = $('.container');
for(var i = 12; i > 0;){
     timBlock.append("<form><h2></h2><input/><button class='save'>Save</button></form>").addClass("timeBlockEl");
     var x =document.getElementsByTagName("h2");
     x.innerHTML = ""+i;
     i--;
}
var taskEl = [];
saveButton = document.querySelector("save");
saveButton = onclick(formIntake);
  


var formIntake = function (){
   var taskInput = document.querySelector("input").value;
   var textDisply = taskInput.textContent;
   document.querySelector("input").innerHTML = textDisply;
   //local storage
   localStorage.setItem("input", JSON.stringify(taskInput))
   taskEl.push(taskInput);
}