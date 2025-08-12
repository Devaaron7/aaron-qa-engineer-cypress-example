describe("Log into Test Website", () => {
  it("should login to Saas staging website", () => {
    cy.visit("https://everytable.getprado-staging.com/account/login")

    cy.xpath("//input[ @id = 'Input_EmailOrPhoneNumber' ]")
      .should("be.visible")
      .type("aaron.tracy.dev@gmail.com")

    cy.xpath("//input[ @id = 'Input_Password' ]")
      .should("be.visible")
      .type("!Password1")

    cy.xpath("//button[ text() = 'Login' ]")
      .should("be.visible")
      .click()

    cy.visit("https://everytable.getprado-staging.com/Account/Manage/Settings?selected=profile")
  
    cy.contains("4P1G2R86")
  })
})