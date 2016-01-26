function Ticket(age, film, day, time) {
  this.age = age;
  this.film = film;
  this.day = day;
  this.time = time;
  this.basePrice = 15;
}

Ticket.prototype.findPrice =function() {

  if((this.age >= 5) || (this.age <= 12))
  { return (this.basePrice -= 4);
  } else if (this.time < 20) {
    return (this.basePrice -= 4);
  } else {
    return (this.basePrice);
  }
}

$(document).ready(function() {

  $("form#new-ticket").submit(function(event){
    event.preventDefault();

    var inputtedAge = parseInt($("input#age").val());
    var inputtedFilm = $("input#film").val();
    var inputtedDay = $("input#day").val();
    var inputtedTime = parseInt($("input#time").val());
    var newTicket = new Ticket (inputtedAge, inputtedFilm, inputtedDay, inputtedTime);
    var totalPrice = newTicket.findPrice();
console.log(newTicket);
  $("#print").text(totalPrice);

  });
});
