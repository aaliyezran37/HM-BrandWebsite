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

document.addEventListener('DOMContentLoaded', () => {
    const numbers = [
        { id: 'number1', target: 4500 },
        { id: 'number2', target: 125000 },
        { id: 'number3', target: 540 },
        { id: 'number4', target: 78 }
    ];
    const duration = 2000; // Duration of animation in milliseconds
    const interval = 50; // Update interval in milliseconds

    const updateNumber = (numberElement, targetNumber) => {
        let currentNumber = 0;
        const steps = duration / interval;
        const increment = targetNumber / steps;

        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            numberElement.textContent = Math.round(currentNumber);
        }, interval);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target;
                if (!numberElement.classList.contains('animated')) {
                    numberElement.classList.add('animated');
                    const targetNumber = parseInt(numberElement.getAttribute('data-target'), 10);
                    updateNumber(numberElement, targetNumber);
                }
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    numbers.forEach(({ id, target }) => {
        const numberElement = document.getElementById(id);
        observer.observe(numberElement);
    });
});

 let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("demo");
            let captionText = document.getElementById("caption");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; // Hide all slides
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block"; // Show the current slide
            dots[slideIndex - 1].className += " active"; // Highlight the active thumbnail
            captionText.innerHTML = dots[slideIndex - 1].alt; // Update caption
        }

        // Allow navigation with arrow keys
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                plusSlides(-1); // Move to previous slide
            } else if (event.key === 'ArrowRight') {
                plusSlides(1); // Move to next slide
            }
        });

// Get all the "Add to Cart" buttons
 // Select all buttons with the class 'add-to-cart-btn'
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const customAlert = document.getElementById('custom-alert');
const kachingSound = document.getElementById('kaching-sound');


// Function to show the custom alert
function showAlert(productName, productPrice) {
    // Play the sound effect
    kachingSound.currentTime = 0; // Reset sound to start
    kachingSound.play();

    // Show the alert with slide-down effect
    customAlert.textContent = `${productName} added to cart!`;
    customAlert.classList.remove('hidden');
    customAlert.classList.add('show');

    // Hide the alert after 2 seconds
    setTimeout(() => {
        customAlert.classList.remove('show');
        setTimeout(() => {
            customAlert.classList.add('hidden');
        }, 1000); // 1-second fade transition
    }, 2000); // Keep alert visible for 2 seconds

    // Add the item to the cart
    addToCart(productName, productPrice);
}

// Function to add items to local storage (cart)
function addToCart(productName, productPrice) {
    // Retrieve existing cart or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add new product to the cart
    cart.push({ name: productName, price: productPrice });
    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Log the cart contents to confirm it's working
    console.log('Cart:', cart);
}

// Attach event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retrieve product details (name and price) from DOM elements
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = button.previousElementSibling.textContent;

        // Call the alert and cart functions with the product details
        showAlert(productName, productPrice);
    });
});
