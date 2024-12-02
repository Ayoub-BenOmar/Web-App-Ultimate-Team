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
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

let playersList = [];
let startingPlayers = {
  ST: [],
  CM: [],
  CDM: [],
  LW: [],
  RW: [],
  RB: [],
  LB: [],
  CB: [],
  GK: [],
};

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });
});

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
    (playerPace +
      playerShooting +
      playerPassing +
      playerDribbling +
      playerDeffending +
      playerPhysical) /
      6
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
  playerCard.classList.add("player-card", "relative", "w-full", "h-full");

  playerCard.innerHTML = `
    <div class="relative flex justify-center items-center text-black">
    <img 
        src="${cards[cardType]}" 
        class="object-contain sm:h-[150px] sm:w-[100px] h-[80px] w-[80px]" 
        alt="Player Card"
    >
    <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <img 
            src="pics/anonym-removebg-preview.png" 
            alt="Player Portrait" 
            class="object-contain sm:mb-6 mb-4 sm:h-[60px] sm:w-[60px] h-[40px] w-[40px]"
        >
        <div class="absolute left-[25%] top-[15%] text-center text-black">
            <div class="font-bold sm:text-xs text-[0.5rem]">${overAllRating}</div>
            <div class="font-semibold sm:text-[0.5rem] text-[0.3rem]">${playerPosition.value}</div>
        </div>
        <div class="absolute top-[64%] text-center gap-1">
            <div class="font-bold sm:text-[0.5rem] text-[0.3rem]">${playerName}</div>
            <div class="flex font-bold sm:text-[0.3rem] text-[0.2rem] gap-0.5 sm:gap-1 ">
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
            <div class="absolute flex gap-1 left-[38%] items-center sm:mt-1 mt-0.5">
                <div>
                    <img 
                        src="${country[playerCountry]}" 
                        class="object-contain sm:w-[8px] sm:h-[8px] w-[8px] h-[8px]" 
                        alt="Country Flag"
                    >
                </div>
                <div>
                    <img 
                        src="${club[playerClub]}" 
                        class="object-contain sm:w-[8px] sm:h-[8px] w-[8px] h-[8px]" 
                        alt="Club Badge"
                    >
                </div>
            </div>
        </div>
    </div>
</div>
    <button class="remove-player-btn absolute top-0 right-0 m-1 text-white px-2 py-1 rounded hidden">
    <svg
        class="w-6 h-6 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"             
        >
        <path d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
        </svg>
    </button>

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
    cardElement: playerCard,
  };

  playersList.push(playerData);
  playerModal.classList.add("hidden");
  newPlayer.reset();
  Substitutes.appendChild(playerCard);

  const removePlayerBtn = playerCard.querySelector(".remove-player-btn");
  removePlayerBtn.addEventListener("click", () => {
    Object.keys(startingPlayers).forEach((position) => {
      const index = startingPlayers[position].findIndex(
        (p) => p.id === playerData.id
      );
      if (index !== -1) {
        startingPlayers[position].splice(index, 1);

        const positionContainers = document.querySelectorAll(
          `.position-${position}`
        );
        positionContainers.forEach((container) => {
          if (container.contains(playerCard)) {
            container.innerHTML = `
              <img src="https://pdf-service-static.s3.amazonaws.com/static/layout-images/cardstar/thumbnails/gold-totw-24.webp" class="object-contain sm:h-[150px] sm:w-[100px] h-[80px] w-[80px]" alt="">
              <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <button class="btn-add bg-black rounded-full sm:w-8 sm:h-8 w-4 h-4 flex items-center justify-center hover:shadow-[0_0_15px_#FFD700] transition-shadow duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                ${position}
              </div>
            `;

            const btnAdd = container.querySelector(".btn-add");
            btnAdd.addEventListener("click", handleAddPlayerClick);
          }
        });
      }
    });

    Substitutes.removeChild(playerCard);

    const playerIndex = playersList.findIndex((p) => p.id === playerData.id);
    if (playerIndex !== -1) {
      playersList.splice(playerIndex, 1);
    }
  });
});

function handleAddPlayerClick() {
  let positionContainer = this.closest(".position-btn");
  let position = positionContainer.textContent.trim();

  let positionClasses = Array.from(positionContainer.classList)
    .filter((cls) => cls.startsWith("position-"))
    .map((cls) => cls.replace("position-", ""));

  modalList.style.display = "flex";

  let filteredPlayers = playersList.filter(
    (player) =>
      positionClasses.includes(player.position) &&
      !startingPlayers[player.position].some((p) => p.id === player.id)
  );

  substitutePlayersContainer.innerHTML = "";
  if (filteredPlayers.length === 0) {
    substitutePlayersContainer.innerHTML =
      "<p class='text-gray-500'>No players available for this position.</p>";
  } else {
    filteredPlayers.forEach((player) => {
      let playerItem = document.createElement("div");
      playerItem.className =
        "flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-sm";
      playerItem.innerHTML = `
        <div class="flex items-center gap-2">
          <img src="pics/anonym-removebg-preview.png" class="object-contain" height="40" width="40">
          <div>
            <span class="text-gray-700">${player.player} (OVR: ${player.rating})</span>
            <div class="text-gray-700">PAC: ${player.stats.pace}  |  SHO: ${player.stats.shooting}  |  PAS: ${player.stats.passing}  |  DRI: ${player.stats.dribbling}  |  DEF: ${player.stats.deffending}  |  PHY: ${player.stats.physical}</div>
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
}

document.querySelectorAll(".btn-add").forEach((button) => {
  button.addEventListener("click", handleAddPlayerClick);
});

substitutePlayersContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("addPlayerButton")) {
    const playerId = parseInt(event.target.getAttribute("data-player-id"));
    const selectedPlayer = playersList.find((player) => player.id === playerId);

    if (selectedPlayer) {
      const positionContainers = document.querySelectorAll(
        `.position-${selectedPlayer.position}`
      );

      const emptyPositionContainer = Array.from(positionContainers).find(
        (container) => !container.querySelector(".player-card")
      );

      if (emptyPositionContainer) {
        emptyPositionContainer.innerHTML = "";

        emptyPositionContainer.appendChild(selectedPlayer.cardElement);

        const removeBtn =
          selectedPlayer.cardElement.querySelector(".remove-player-btn");
        removeBtn.classList.remove("hidden");

        startingPlayers[selectedPlayer.position].push(selectedPlayer);

        modalList.style.display = "none";
      } else {
        alert(
          `No empty ${selectedPlayer.position} position available. Remove a player first.`
        );
      }
    }
  }
});
