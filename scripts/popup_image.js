function displayPopupImage() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.innerHTML="<img src=\"werewolf.png\" alt='image'>"; 
    
    popupContainer.style.display = "block";

    
}
// Timer to control when popup appears
setTimeout(displayPopup, 7000); 