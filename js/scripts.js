function Ticket(age, film, day, time) {
  this.age = age;
  this.film = film;
  this.day = day;
  this.time = time;
}

$(document).ready(function() {

  $("form#new-ticket").submit(function(event){
    event.preventDefault();
    var inputtedAge = parseInt($("input#age").val());
    var inputtedFilm = $("input#film").val();
    var inputtedDay = $("input#day").val();
    var inputtedTime = parseInt($("input#time").val());

    var newTicket =


  });
});
