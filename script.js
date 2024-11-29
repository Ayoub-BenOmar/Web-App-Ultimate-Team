let addPlayer = document.getElementById("add-player");
let playerModal = document.getElementById("modalPlayer");
let closeModal = document.getElementById("closeModal");
let newPlayer = document.getElementById("form");
let Substitutes = document.getElementById("Substitutes");
let otherStats = document.getElementById("otherStats");
let gkStats = document.getElementById("gkStats");
let playerPosition = document.getElementById("Position");
let cancelModal = document.getElementById("cancelModal");
let modalList = document.getElementById("list");
let substitutePlayersContainer = document.getElementById("substitutePlayers");

let playersList = [];
let startingPlayers = {
    'ST': null,
    'CM': null,
    'LW': null,
    'RW': null,
    'CB': null,
    'GK': null
};

addPlayer.onclick = function () {
  playerModal.classList.remove("hidden");
};

closeModal.onclick = function () {
  playerModal.classList.add("hidden");
  newPlayer.reset();
};

cancelModal.onclick = function () {
  modalList.style.display = "none";
};

playerPosition.addEventListener("change", (e) => {
  let selectedValue = e.target.value;

  if (selectedValue == "GK") {
    gkStats.classList.remove("hidden");
    otherStats.classList.add("hidden");
  } else {
    otherStats.classList.remove("hidden");
    gkStats.classList.add("hidden");
  }
});

newPlayer.addEventListener("submit", function (event) {
  event.preventDefault();

  let playerName = document.getElementById("player-name").value.trim();
  let playerClub = document.getElementById("club").value;
  let playerCountry = document.getElementById("country").value;
  let cardType = document.getElementById("cardtype").value;

  let playerPace = parseInt(document.getElementById("pac").value);
  let playerShooting = parseInt(document.getElementById("sho").value);
  let playerPassing = parseInt(document.getElementById("pas").value);
  let playerDribbling = parseInt(document.getElementById("dri").value);
  let playerDeffending = parseInt(document.getElementById("def").value);
  let playerPhysical = parseInt(document.getElementById("phy").value);

  if (!playerName || !playerPosition.value || !playerClub || !playerCountry) {
    alert("Please fill all the player informations.");
    return;
  }

  let statsValidation = [
    { name: "pace", value: playerPace },
    { name: "shooting", value: playerShooting },
    { name: "passing", value: playerPassing },
    { name: "dribbling", value: playerDribbling },
    { name: "deffending", value: playerDeffending },
    { name: "physical", value: playerPhysical },
  ];

  for (let stat of statsValidation) {
    if (isNaN(stat.value) || stat.value < 1 || stat.value > 99) {
      alert("Enter a stat between 1-99");
      return;
    }
  }

  let overAllRating = Math.round(
    (playerPace + playerShooting + playerPassing + playerDribbling + playerDeffending + playerPhysical) / 6
  );

  let country = {
    br: "https://cdn.sofifa.net/flags/br.png",
    fr: "https://cdn.sofifa.net/flags/fr.png",
    arg: "https://cdn.sofifa.net/flags/ar.png",
    mr: "https://cdn.sofifa.net/flags/ma.png",
    en: "https://cdn.sofifa.net/flags/gb-eng.png",
    it: "https://cdn.sofifa.net/flags/it.png",
    pr: "https://cdn.sofifa.net/flags/pt.png",
    gr: "https://cdn.sofifa.net/flags/de.png",
    nd: "https://cdn.sofifa.net/flags/nl.png",
    bl: "https://cdn.sofifa.net/flags/be.png",
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
    pk: "https://pdf-service-static.s3.amazonaws.com/static/layout-images/cardstar/thumbnails/rare-bronze-25.webp",
  };

  let playerCard = document.createElement("div");
  playerCard.classList.add("p-2", "flex", "justify-center", "space-x-4");

  playerCard.innerHTML = `
    <div class="relative flex justify-center items-center text-black">
        <img src="${cards[cardType]}" class="object-contain" height="170" width="120" alt="">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <img src="pics/anonym-removebg-preview.png" alt="Left ST" class="object-contain mb-6" height="60" width="60">
            <div class="absolute left-[17%] top-[15%] text-center text-black">
                <div class="font-bold text-xs">${overAllRating}</div>
                <div class="font-semibold text-[0.5rem]">${playerPosition.value}</div>
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
    `;
  
  playerModal.classList.add("hidden");

  let playerData = {
    id: Date.now(),
    player: playerName,
    position: playerPosition.value,
    club: playerClub,
    country: playerCountry,
    rating: overAllRating,
    stats: {
      pace: playerPace,
      shooting: playerShooting,
      passing: playerPassing,
      dribbling: playerDribbling,
      deffending: playerDeffending,
      physical: playerPhysical,
    },
    cardType: cardType,
    cardElement: playerCard
  };

  playersList.push(playerData);
  playerModal.classList.add("hidden");
  newPlayer.reset();
  Substitutes.appendChild(playerCard);
});

document.querySelectorAll(".btn-add").forEach(button => {
  button.addEventListener("click", function () {
    let position = button.closest(".position-btn").id;
    modalList.style.display = "flex";

    let filteredPlayers = playersList.filter(player => player.position === position);

    substitutePlayersContainer.innerHTML = "";
    if (filteredPlayers.length === 0) {
      substitutePlayersContainer.innerHTML = "<p class='text-gray-500'>No players available for this position.</p>";
    } else {
      filteredPlayers.forEach(player => {
        let playerItem = document.createElement("div");
        playerItem.className = "flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-sm";
        playerItem.innerHTML = `
          <div class="flex items-center gap-2">
            <img src="pics/anonym-removebg-preview.png" class="object-contain" height="40" width="40">
            <div>
              <span class="text-gray-700">${player.player} (OVR: ${player.rating})</span>
              <div class="text-gray-700">PAC: ${player.stats.pace}  ||  SHO: ${player.stats.shooting}  ||  PAS: ${player.stats.passing}  ||  DRI: ${player.stats.dribbling}  ||  DEF: ${player.stats.deffending}  ||  PHY: ${player.stats.physical}</div>
            </div>
          </div>
          <button class="addPlayerButton bg-[#333333] hover:bg-[#bc953d] text-[#bc953d] hover:text-[#333333] px-3 py-1 font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
                  data-player-id="${player.id}">
            Add
          </button>
        `;
        substitutePlayersContainer.appendChild(playerItem);
      });
    }
  });
});

substitutePlayersContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("addPlayerButton")) {
    // Find the player in playersList
    const playerId = parseInt(event.target.getAttribute('data-player-id'));
    const selectedPlayer = playersList.find(player => player.id === playerId);

    if (selectedPlayer) {
      // Get the position container in the starting 11
      const positionContainer = document.getElementById(selectedPlayer.position);

      // Check if the position is already filled
      const existingPlayerInPosition = startingPlayers[selectedPlayer.position];
      if (existingPlayerInPosition) {
        // If position is filled, swap back to substitutes
        Substitutes.appendChild(existingPlayerInPosition.cardElement);
      }

      // Move the selected player to the position container
      positionContainer.innerHTML = ''; // Clear any existing player
      positionContainer.appendChild(selectedPlayer.cardElement);

      // Update the startingPlayers object
      startingPlayers[selectedPlayer.position] = selectedPlayer;

      // Remove the player from the substitutes list
      const playerIndex = playersList.findIndex(player => player.id === playerId);
      if (playerIndex > -1) {
        // You might want to modify this logic to keep the player in playersList 
        // but mark it as in starting 11
        // playersList.splice(playerIndex, 1);
      }

      // Close the modal
      modalList.style.display = "none";
    }
  }
});