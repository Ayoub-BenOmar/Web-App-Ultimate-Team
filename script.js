
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
    let cardType = document.getElementById("cardtype").value;
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

    let country = {
        br: "https://cdn.sofifa.net/flags/br.png",
        fr: "https://cdn.sofifa.net/flags/fr.png",
        arg:"https://cdn.sofifa.net/flags/ar.png",
        mr:"https://cdn.sofifa.net/flags/ma.png",
        en:"https://cdn.sofifa.net/flags/gb-eng.png",
        it:"https://cdn.sofifa.net/flags/it.png",
        pr:"https://cdn.sofifa.net/flags/pt.png",
        gr:"https://cdn.sofifa.net/flags/de.png",
        nd:"https://cdn.sofifa.net/flags/nl.png",
        bl:"https://cdn.sofifa.net/flags/be.png",
    };

    let club = {
        c1: "https://cdn.sofifa.net/meta/team/239235/120.png",
        c2: "https://cdn.sofifa.net/meta/team/2506/120.png",
        c3: "https://cdn.sofifa.net/meta/team/9/120.png",
        c4: "https://cdn.sofifa.net/meta/team/3468/120.png",
        c5: "https://cdn.sofifa.net/meta/team/503/120.png",
        c6: "https://cdn.sofifa.net/meta/team/7011/120.png",
        c7: "https://cdn.sofifa.net/meta/team/14/120.png",
    };

    let cards = {
        gd: "https://pdf-service-static.s3.amazonaws.com/static/layout-images/cardstar/thumbnails/rare-gold-25.webp",
        ic: "pics/icon-25-removebg-preview.png",
        sl: "pics/rare-silver-25-removebg-preview.png",
        pk: "https://pdf-service-static.s3.amazonaws.com/static/layout-images/cardstar/thumbnails/rare-bronze-25.webp"
    };

    let playerCard = document.createElement("div");
    playerCard.classList.add("p-2", "flex", "justify-center", "space-x-4");

    playerCard.innerHTML = `
                <div class="relative flex justify-center items-center text-black">
        <img src="${cards[cardType]}" class="object-contain" height="170" width="120" alt="">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="Left ST" class="object-contain mb-4" height="60" width="60">
            <div class="absolute left-[17%] top-[15%] text-center text-black">
                <div class="font-bold text-xs">97</div>
                <div class="font-semibold text-[0.5rem]">${playerPosition}</div>
            </div>
            <div class="absolute top-[64%] text-center gap-1">
                <div class="font-bold text-[0.5rem]">${playerName}</div>
                <div class="flex font-semibold text-[0.4rem] gap-1 ">
                    <div class="flex flex-col">
                        <span>PAC</span>
                        <span>${playerPace}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>SHO</span>
                        <span>${playerShooting}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>PAS</span>
                        <span>${playerPassing}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>DRI</span>
                        <span>${playerDribbling}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>DEF</span>
                        <span>${playerDeffending}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>PHY</span>
                        <span>${playerPhysical}</span>
                    </div>
                </div>
                <div class="absolute flex gap-1 left-[38%] items-center mt-1">
                    <div ><img src="${country[playerCountry]}" class="object-contain" width="10" height="10" alt=""></div>
                    <div><img src="${club[playerClub]}" class="object-contain" width="10" height="10" alt=""></div>
                </div>
            </div>
        </div>
    </div>
    `

    Substitutes.appendChild(playerCard);

    newPlayer.reset();
    playerModal.classList.add("hidden");
});