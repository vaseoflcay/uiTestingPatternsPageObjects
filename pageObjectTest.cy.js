
const {homePage}= require("../support/home.page")
const {loginPage}= require("../support/login.page")
const{email, senha}=require('../fixtures/data.json')

describe('teste de autenticacao', () => {

 beforeEach(() => {
  cy.setCookie('ebacStoreVersion',  'v2', {domain: 'lojaebac.ebaconline.art.br'})
  cy.visit('/')
 });

  it(' deve fazer o login com sucesso', () => {
   homePage.openMenu('Account')
   loginPage.login(email,senha)
   homePage.openMenu('Account')

  })
})