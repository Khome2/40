let getColor = document.querySelector(".container");

const changeColor = () => {
    let arr = ["green", "white", "gold", "purple", "black", "blue", "brown"];

    let rand = Math.floor(Math.random() * arr.length);

    let finalArr = arr [rand];

    const change = (getColor.style.backgroundColor = finalArr);
     return change;
};


