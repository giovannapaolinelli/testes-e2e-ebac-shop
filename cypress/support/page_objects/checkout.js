class Checkout {

    preencherCheckout(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone, email){
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_address_2_field').type(complemento)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado+'{enter}')
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new Checkout()