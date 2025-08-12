describe("Homepage Loads Test", () => {
  it("should visit the homepage", () => {

    cy.visit("https://www.atmosera.com/")

    cy.contains("Atmosera")
  })
})