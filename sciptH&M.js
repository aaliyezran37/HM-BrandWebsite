// Get the popup and buttons
const popup = document.getElementById('product-popup');
const closePopupBtn = document.getElementById('close-popup');

// Function to open the popup with product details
function openPopup(productContent) {
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = productContent;
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Add event listener to close the popup when clicking outside of it
window.onclick = function(event) {
    if (event.target === popup) {
        closePopup();
    }
}

// Event listeners for "More Info" buttons
document.querySelectorAll('.hnm-x-zlatan button').forEach(button => {
    button.addEventListener('click', () => {
        const productContent = `
            <h2>H&M x Zlatan</h2>
            <iframe width="650" height="366" src="https://www.youtube.com/embed/02XKNr2MzRk?autoplay=1&mute=1&loop=1&playlist=02XKNr2MzRk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p>Details about the H&M x Zlatan collection...</p>
        `;
        openPopup(productContent);
    });
});

// Add event listeners for more buttons if you have additional product popups
// You can add similar event listeners for other products if needed
