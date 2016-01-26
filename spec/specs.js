describe('Ticket', function(){
  it("Allows user to choose their ticket features", function(){
    var testTicket = new Ticket("Adult", "Kill Bill", "Friday");
    expect(testTicket.age).to.equal("Adult");
    expect(testTicket.film).to.equal("Kill Bill");
    expect(testTicket.day).to.equal("Friday");
  });
  
});
