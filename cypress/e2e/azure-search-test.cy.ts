describe("Ask question on Azure Website", () => {
  it("should ask question on Azure's website", () => {
    
    cy.visit("https://azure.microsoft.com/en-us/")

    cy.xpath("//input [ @placeholder = 'Ask a question about Azure.' ]")
      .should("be.visible")
      .type("Does your platform support Mac testing?")

    cy.xpath("//div [ @class= 'ai-search ai-search--md' ] //button")
      .should("be.visible")
      .click()
  
    cy.xpath("//div [@class = 'ai-chat-drawer__body' ]", { timeout: 15000 })
      .contains("Does your platform support Mac testing?")

  })
})