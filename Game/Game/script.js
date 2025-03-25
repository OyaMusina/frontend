const cat = document.getElementById("cat");
const job = document.getElementById("job");

document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if(cat.classList != "jump") {
        cat.classList.add("jump")
    }
    setTimeout(function() {
        cat.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let jobLeft = parseInt(window.getComputedStyle(job).getPropertyValue("left"));

    if(jobLeft < 40 && jobLeft > 0 && catTop >= 150){
        alert("GAME OVER!")
    }
}, 10)
