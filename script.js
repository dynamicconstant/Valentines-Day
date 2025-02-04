// Updated script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayDog(); // Display the dog.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the benji.gif initially
function displayBenji() {
    var imageContainer = document.getElementById('image-container');
    var benjiImage = new Image();
    benjiImage.src = 'benji.gif'; // Path to benji.gif
    benjiImage.alt = 'Benji';
    benjiImage.onload = function() {
        imageContainer.appendChild(benjiImage);
    };
}

// Function to display the dog.gif when "Yes" is clicked
function displayDog() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var dogImage = new Image();
    dogImage.src = 'dog.gif'; // Path to dog.gif
    dogImage.alt = 'Dog with Heart';
    dogImage.onload = function() {
        imageContainer.appendChild(dogImage);
        document.getElementById('options').style.display = 'none'; // Hide options
    };
}

// Display the benji.gif initially
displayBenji();
