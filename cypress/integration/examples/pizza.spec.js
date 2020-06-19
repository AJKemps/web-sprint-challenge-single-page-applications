// write tests here
describe("Inputs and submit button", () => {
  // grouping several tests that are related
  it("can navigate to home page", () => {
    // this is the test
    // remote control operation
    cy.visit("http://localhost:3000");

    // assertion
    cy.url().should("include", "http://localhost:3000");
  });

  it("can navigate to order page", () => {
    // this is the test
    // remote control operation
    cy.visit("http://localhost:3000/pizza");

    // assertion
    cy.url().should("include", "http://localhost:3000/pizza");
  });

  it("can type a name for a new order", () => {
    cy.get("input[name=name]")
      .type("Lady Gaga")
      .should("have.value", "Lady Gaga");
  });

  it("can type a size for a new order", () => {
    cy.get('[name="size"]').select("Large").should("have.value", "Large");
  });

  it("pepperoni button should select", () => {
    cy.get("input[name=pepperoni]").click().should("have.value", "true");
  });

  it("banana pepper button should select", () => {
    cy.get("input[name=bananaPeppers]").click().should("have.value", "true");
  });

  it("can add a new order", () => {
    cy.get("button").click();
  });
});
