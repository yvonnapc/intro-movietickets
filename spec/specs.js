describe('Ticket', function(){
  describe('age', function(){
  it("Allows user to choose their age", function(){
    var testTicket = Object.create(ticket);
    expect(testTicket.age).to.equal("Adult", "Child", "Senior")
  });

  });
});
