

function getRandomColor() {
// Generate a random hexadecimal color
 const letters = '0123456789ABCDEF';
 let color = '#'
 for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

function createDivs(num) {
    //clear the container before creating a new grid
    let container = document.getElementById("container");
    container.innerHTML = "";

    //Set sizing of container and percent used in box size below
    let size = 100 / num;

    let containerWidth = window.innerWidth * 0.9;
    let containerHeight = containerWidth;

    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;

    //creates boxes
    for (let i = 0; i < num * num; i++) {
        let myDivs = document.createElement('div');
        myDivs.classList.add('myDivs');
        myDivs.style.width = `${size}%`;   // Set each box's width as a percentage of container width
        myDivs.style.height = `${size}%`;  // Set each box's height as a percentage of container height
    

        //add hover effect dynamically in js and get background color from random color function

        myDivs.addEventListener("mouseover", function() {
            myDivs.style.backgroundColor = getRandomColor();
        });

        myDivs.addEventListener("mouseout", function() {
            myDivs.style.backgroundColor = ""
        });

        document.getElementById("container").appendChild(myDivs);
    }
};


let boxesButton = document.querySelector("#boxesButton")
boxesButton.addEventListener("click", function() {
   let userInput = prompt("Enter number of rows: ");
   let num = parseInt(userInput);
   if (num > 0 && num <= 100) {
    createDivs(num);
   } else {
    alert("Please enter a valid number greater than 0 and less than or equal to 100.")
   };
}
);