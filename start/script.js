let nameBuilder = function(firstName = "John", age = 55){ //default value
    console.log(`${firstName} ${age}`);
};

nameBuilder();

for (let i = 0; i < 45; i++) { //let block scooping
    let div = document.createElement('div');
    div.onclick = function() {
        alert(`you clicked on box# ${i}`);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
}

function createEmail(firstName, purchasePrice){ //Template Strings
    let shipping = 5.95;
    console.log(`
        hi ${firstName}, 
        Thanks for buying from us!
        Total: $${purchasePrice}
        Shipping: $${shipping}
        Grand Total: $${purchasePrice + shipping}
    `)
}

createEmail("Gina",100);
