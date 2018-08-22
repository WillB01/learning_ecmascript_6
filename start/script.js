let nameBuilder = function(firstName = "John", age = 55){ //default value
    console.log(`${firstName} ${age}`);
};

nameBuilder();

/////////////////////////////////////
for (let i = 0; i < 45; i++) {
    let div = document.createElement('div');
    div.onclick = function() {
        alert("message");
    };
    document.getElementsByTagName('section')[0].appendChild(div);

    
}