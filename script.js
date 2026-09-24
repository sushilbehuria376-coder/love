```javascript
function startExperience() {

    document.getElementById("welcomeScreen").classList.remove("active");

    document.getElementById("loadingScreen").classList.add("active");

    let progress = 0;

    const loadingBar =
        document.getElementById("loadingBar");

    const loadingPercent =
        document.getElementById("loadingPercent");


    const loading = setInterval(() => {

        progress++;

        loadingBar.style.width =
            progress + "%";

        loadingPercent.textContent =
            progress + "%";


        if (progress >= 100) {

            clearInterval(loading);

            setTimeout(() => {

                document.getElementById("loadingScreen")
                    .classList.remove("active");

                document.getElementById("loveScreen")
                    .classList.add("active");

            }, 500);
        }

    }, 35);
}


function loveAnswer(answer) {

    localStorage.setItem(
        "loveAnswer",
        answer
    );

    alert("Answer saved ❤️");

}
```
