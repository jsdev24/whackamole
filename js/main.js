
let mole = document.querySelectorAll("img");
let scoreDiv = document.getElementById("scoreDiv");
let score = 0;
let previousMole;
let isClickable = true;


let start = () => {
    setInterval(() => {
        mole.forEach(img => {
            if (img.classList[1] != undefined) {
                img.classList.remove(img.classList[1]);
            }
            img.style.zIndex = "-1";
        })

        let randomIndex;

        let generateRandomIndex = () => {
            randomIndex = Math.floor(Math.random() * 6);

            if (randomIndex == previousMole) {
                generateRandomIndex();
            }
        }
        generateRandomIndex();
		

        if (randomIndex == 0 || randomIndex == 1 || randomIndex == 2) {
            mole[randomIndex].classList.add("firstrow");
            mole[randomIndex].style.zIndex = "1";
        } else {
            mole[randomIndex].classList.add("secondrow");
            mole[randomIndex].style.zIndex = "1";
        }

        mole[randomIndex].onclick = () => {
            if (isClickable) {
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                isClickable = false;               
            }
        }

        previousMole = randomIndex;
        isClickable = true;
    }, 700)

}

window.onload = start;