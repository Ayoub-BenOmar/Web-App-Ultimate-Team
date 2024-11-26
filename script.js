let addPlayer = document.getElementById("add-player");
let playerModal = document.getElementById("modalPlayer");
let closeModal = document.getElementById("closeModal");

addPlayer.onclick = function(){
    playerModal.classList.remove("hidden");
};

closeModal.onclick = function(){
    playerModal.classList.add("hidden");
};