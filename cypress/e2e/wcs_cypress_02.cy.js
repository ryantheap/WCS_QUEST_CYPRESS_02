/// <reference types="cypress" />

const data = {
  firstname: "Michel",
  lastname: "Berger",
  password: "MonCompte.32546",
};

describe("Back Market", () => {
  it("Register", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get('[data-qa="accept-cta"]').click();
    cy.wait(2000);
    cy.get("#firstName").type(data.firstname);
    cy.get("#lastName").type(data.lastname);
    cy.get("#signup-email").type(`${data.firstname}.${data.lastname}@mail.com`);
    cy.get("#signup-password").type(data.password);
    cy.get('[data-qa="signup-submit-button"]').click();
  });

  it("login", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get('[data-qa="accept-cta"]').click();
    cy.wait(2000);
    cy.get("#signin-email").type(`${data.firstname}.${data.lastname}@mail.com`);
    cy.get("#signin-password").type(data.password);
    cy.get('[data-qa="signin-submit-button"]').click();
  });

  it("Bad login", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get('[data-qa="accept-cta"]').click();
    cy.wait(2000);
    cy.get("#signin-email").type(`bademail`);
    cy.get("#signin-password").type("badpassword");
    cy.get('[data-qa="signin-submit-button"]').click();
  });

  it("Error test", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.wait(2000);
    cy.get("#signin-email").type(`bademail`);
    cy.get("#signin-password").type("badpassword");
    cy.get('[data-qa="signin-submit-button"]').click();
  });
});
