it('Should display text after a delay', () => {
  const delay = 1000;
  const text = "Test - 1";

  cy.visit(baseUrl + "/main.html"); 
  cy.get("input#text").type(text);
  cy.get("input#delay").type(delay);
  cy.get("button#btn").click();

  // Validate the output shows 'Waiting...' after clicking the button
  cy.get("div#output").should("have.text", "Waiting...");

  // Wait for the specified delay + buffer
  cy.wait(delay + 500);

  // Validate that the output now displays the entered text
  cy.get("div#output").should("have.text", text);
});
