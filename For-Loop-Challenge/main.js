
function getAnswers(n){
    var product = 0;
    var timestables = [];
    for (let i = 0; i < 13; i++){
        product = n * i;
        timestables.push(product);
    }
    for (let i = 0; i < 13; i++){
        console.log(timestables[i]);
    }
}

getAnswers(9)
