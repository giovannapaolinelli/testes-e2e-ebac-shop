/// <reference types="cypress" />
import Checkout from '../support/page_objects/checkout'
const dadosEndereco = require('../fixtures/dados.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var produto = ['Abominable Hoodie', 'M', 'Red', 4]
        cy.addProdutos(produto[0], produto[1], produto[2], produto[3])
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', produto[3])
        cy.get('.top-cart-wishlist').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        Checkout.preencherCheckout(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].complemento,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-table__product-name > a').should('contain', produto[0] + ' - ' + produto[1] + ', ' + produto[2] )
        cy.get('.product-quantity').should('contain', produto[3])

    });
})