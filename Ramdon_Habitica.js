describe('Habitica - Monkey', function() {
    it('visits habitica', function() {
        cy.visit('https://habitica.com/static/home');
        cy.wait(1000);
        randomEvent(20);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function randomEvent(monkeysLeft) {
    if(monkeysLeft > 0) {
        var evento = getRandomInt(1, 3);
        if(evento===1){
            //CLick en u link al azar
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});  
                    monkeysLeft = monkeysLeft - 1;                  
                }                  
                cy.wait(1000);    
                randomEvent(monkeysLeft);                       
            });   
            
                
        }else if(evento===2){
            //Llenar un campo de texto al azar
            cy.get('input').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if(!Cypress.dom.isHidden(randomInput)) {
                    cy.wrap(randomInput).click({force: true}).type("monkey's text", {force: true}); 
                    monkeysLeft = monkeysLeft - 1;
                }     
                cy.wait(1000);    
                randomEvent(monkeysLeft);           
            });
            
        }else{
            //Hacer click en un botón al azar
            cy.get('button').then($bottons => {
                var randomBotton = $bottons.get(getRandomInt(0, $bottons.length));
                if(!Cypress.dom.isHidden(randomBotton)) {
                    cy.wrap(randomBotton).click({force: true});   
                    monkeysLeft = monkeysLeft - 1;                    
                }       
                cy.wait(1000);    
                randomEvent(monkeysLeft);            
            });
        }       
    } 
}