
function createDivs(num) {
    for (let i = 0; i < num; i++) {
        let myDivs = document.createElement('div');
        myDivs.textContent = `Div: ${i + 1}`;
        document.getElementById("container").appendChild(myDivs)
    }
};

createDivs(16);