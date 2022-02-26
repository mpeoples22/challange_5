$(document).ready(function(){
   //listen for button clicks
   $('.saveBtn').on('click', function(){
      //get values
    var value = $(this)
      .siblings('.description').val();
    var time = $(this)
      .parent().attr('id');
    //localStorage
    localStorage.setItem(time, value);
    //notify item saved/remove after 3 seconds
    $('.notification').addClass('show');  
    setTimeout(function(){
      $('.notification').removeClass('show');
    }, 3000);
   });
   //dev
   function blockUpdator(){
      //get hours
     var curntHr = moment().hours();
     //loop through blocks
     $('.time-block').each(function(){
       var blockHr =parseInt(
          $(this).attr('id').split('-')[1]
       );
       //check against present time
       if ( curntHr>blockHr ) {
          $(this).addClass('past');
       } else if(curntHr === blockHr) {
         $(this).addClass('present');
         $(this).removeClass('past');
       } else {
         $(this).addClass('future');
         $(this).removeClass('present');
         $(this).removeClass('past');
       }
     });
   }
   blockUpdator();
   //check if time need update
   var timeChk = setInterval(blockUpdator,30000);
   //access data in localStorage
   $('#hour-8 .description').val(localStorage.getItem('hour-8'));
   $('#hour-9 .description').val(localStorage.getItem('hour-9'));
   $('#hour-10 .description').val(localStorage.getItem('hour-10'));
   $('#hour-11 .description').val(localStorage.getItem('hour-11'));
   $('#hour-12 .description').val(localStorage.getItem('hour-12'));
   $('#hour-13 .description').val(localStorage.getItem('hour-13'));
   $('#hour-14 .description').val(localStorage.getItem('hour-14'));
   $('#hour-15 .description').val(localStorage.getItem('hour-15'));
   $('#hour-16 .description').val(localStorage.getItem('hour-16'));
   //current day
   $('#currentDay').text(moment().format('dddd, MMMM Do'));
});

/*
//Current date in header
var newDay = $("#currentDay");
newDay.append(new Date());
//send time blocks to html container
//.forEach next...
var timBlock = $('.container');
for(var i = 12; i > 0;i--){
     timBlock.append("<h2 class='text'>"+i+"</h2><input class='input'/><button class='save'>Save</button>").addClass("timeBlockEl");
     var x =document.querySelector(".text");
     x.innerHTML = i;

}
var taskEl = [];
$(".save").on("click",formIntake);
  


var formIntake = function (){
   var taskInput = document.querySelector(".input").value;
   console.log(taskInput);
   //var textDisply = taskInput.textContent;
  // document.querySelector("input").innerHTML = textDisply;
  
  
  
  //local storage
   localStorage.setItem("input", JSON.stringify(taskInput))
   taskEl.push(taskInput);
}*/