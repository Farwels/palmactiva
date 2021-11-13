describe('My First Test', () => {
    it('Palmactiva descuentos', () => {
        var i=0;
        for (i = 0; i < 5 ; i++) { 
            cy.visit('https://vals.palmaactiva.com/coupon-checkout/ag9sb2NhbG1hcmtldC1wcm9yIwsSBXN0b3JlGICAgPb1_6QKDAsSBGl0ZW0YgICAttOmxwoM')

            cy.wait(1000)
            cy.get('[id=firstname]').type('Carlos Miguel', {force: true})
            cy.get('[id=lastname]').type('Gost Ramis', {force: true})
            cy.get('[id=nif]').type('43189483Z', {force: true})
            cy.get('[id=email]').type('sr.morocco@gmail.com', {force: true})
            cy.get('[id=phone]').type('628442557', {force: true})
            cy.get('[id=legal-text]').click({force: true})
            cy.get('.button__submit').click({force: true})
            cy.wait(3000)
        }
      })
  })
