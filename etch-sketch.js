
function createDivs(num) {
    for (let i = 0; i < num; i++) {
        let myDivs = document.createElement('div');
        myDivs.classList.add('myDivs');
        myDivs.textContent = `${i + 1}`;
        document.getElementById("container").appendChild(myDivs)
    }
};

createDivs(256);