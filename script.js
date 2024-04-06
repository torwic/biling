// Text for the top placeholder
const topText = `
    <header>
        <h1>Welcome to My Website</h1>
    </header>
`;

// Text for the bottom placeholder
const bottomText = `
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
`;

// Get the placeholders by their IDs
const topPlaceholder = document.getElementById('top-placeholder');
const contentContainer = document.getElementById('content');
const bottomPlaceholder = document.getElementById('bottom-placeholder');

// Insert text into the placeholders
topPlaceholder.innerHTML = topText;
bottomPlaceholder.innerHTML = bottomText;

// Load content from an external HTML file
fetch('content.html')
    .then(response => response.text())
    .then(data => {
        contentContainer.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });
