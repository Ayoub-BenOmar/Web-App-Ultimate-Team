let addPlayer = document.getElementById("add-player");
let playerModal = document.getElementById("modalPlayer");
let closeModal = document.getElementById("closeModal");
let newPlayer = document.getElementById("form");
let Substitutes = document.getElementById("Substitutes");

addPlayer.onclick = function(){
    playerModal.classList.remove("hidden");
};

closeModal.onclick = function(){
    playerModal.classList.add("hidden");
};

newPlayer.addEventListener("submit", function(event){
    event.preventDefault();

    let playerName = document.getElementById("player-name").value.trim();
    let playerPosition = document.getElementById("Position").value;
    let playerClub = document.getElementById("club").value;
    let playerCountry = document.getElementById("country").value;
    let playerPace = parseInt(document.getElementById("pac").value);
    let playerShooting = parseInt(document.getElementById("sho").value);
    let playerPassing = parseInt(document.getElementById("pas").value);
    let playerDribbling = parseInt(document.getElementById("dri").value);
    let playerDeffending = parseInt(document.getElementById("def").value);
    let playerPhysical = parseInt(document.getElementById("phy").value);

    if (!playerName || !playerPosition || !playerClub || !playerCountry) {
        alert("Please fill all the player informations.");
        return;
    }

    let statsValidation = [
        {name: "pace", value: playerPace},
        {name: "shooting", value: playerShooting},
        {name: "passing", value: playerPassing},
        {name: "dribbling", value: playerDribbling},
        {name: "deffending", value: playerDeffending},
        {name: "physical", value: playerPhysical},
    ];

    for (let stat of statsValidation) {
       if (isNaN(stat.value) || stat.value < 1 || stat.value > 99) {
         alert("Enter a stat between 1-99");
         return;
       }
    }

    let playerCard = document.createElement("div");
    playerCard.classList.add("bg-[#555555]", "rounded-lg", "p-2", "flex", "justify-center", "space-x-4");

    playerCard.innerHTML = `
                <div class="relative">
                    <img src="pics/badge_gold-removebg-preview.png" class="object-contain" height="170" width="120" alt="">
                    <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="Left ST" class="object-contain mb-4" height="45" width="45">
                    </div>
                </div>
    `

    Substitutes.appendChild(playerCard);

    newPlayer.reset();
    playerModal.classList.add("hidden");
});