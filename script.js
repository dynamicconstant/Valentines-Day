// Track the "No" button clicks
let noButtonClickCount = 0;

// Array of messages to display on the "No" button
const noButtonMessages = [
    "You sure?",
    "Please, I'll cry.",
    "I thought you loved me!"
];

document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');

    // Play music only after user interacts with the page
    document.body.addEventListener('click', function () {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay blocked: " + error));
        }
    });
});

// Function to mute background music
function muteMusic() {
    const music = document.getElementById('background-music');
    music.muted = true;
}

// Function to play/unmute background music
function playMusic() {
    const music = document.getElementById('background-music');
    music.muted = false;
}

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayDog(); // Display the dog.gif and the message
        });
    } else if (option === 'no') {
        updateNoButtonMessage(); // Change the "No" button message
        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to update the "No" button message
function updateNoButtonMessage() {
    const noButton = document.getElementById('no-button');
    if (noButtonClickCount < noButtonMessages.length) {
        noButton.innerText = noButtonMessages[noButtonClickCount];
        noButtonClickCount++;
    } else {
        noButton.innerText = noButtonMessages[noButtonMessages.length - 1]; // Keep the last message
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    const interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display benji.gif initially
function displayBenji() {
    const imageContainer = document.getElementById('image-container');
    const benjiImage = new Image();
    benjiImage.src = 'benji.gif';
    benjiImage.alt = 'Benji';
    benjiImage.onload = function () {
        imageContainer.appendChild(benjiImage);
    };
}

// Function to display dog.gif when "Yes" is clicked
function displayDog() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content
    const dogImage = new Image();
    dogImage.src = 'dog.gif';
    dogImage.alt = 'Dog with Heart';
    dogImage.onload = function () {
        imageContainer.appendChild(dogImage);

        // Add the message under the Dog GIF
        const loveMessage = document.createElement('div');
        loveMessage.id = 'love-message';
        loveMessage.innerText = 'I love you my Mahi';
        imageContainer.appendChild(loveMessage);

        document.getElementById('options').style.display = 'none'; // Hide options
    };
}

// Display Benji GIF when page loads
displayBenji();
