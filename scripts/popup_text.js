
function displayPopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.innerHTML = "<p>You here a noise from the darkness...</p>"; 
    
    popupContainer.style.display = "block";

    
}
// Timer to control when popup appears
setTimeout(displayPopup, 1000); 