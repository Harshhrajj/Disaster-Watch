// JavaScript to handle the notification bell
document.getElementById('notification-bell').addEventListener('click', function() {
    alert('You have new notifications!');
});

// JavaScript to handle geolocation
document.getElementById('geolocation-btn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function showPosition(position) {
    alert('Latitude: ' + position.coords.latitude + '\nLongitude: ' + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}

// JavaScript to handle the login page
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'flex';
});

document.getElementById('close-login').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add authentication logic here
    alert('Logged in successfully!');
    document.getElementById('login-page').style.display = 'none';
});

// JavaScript to handle the chatbot
document.getElementById('chatbot-icon').addEventListener('click', function() {
    document.getElementById('chatbot-container').style.display = 'block';
});

document.getElementById('chatbot-close').addEventListener('click', function() {
    document.getElementById('chatbot-container').style.display = 'none';
});

document.getElementById('chat-submit').addEventListener('click', function() {
    const message = document.getElementById('chat-input').value;
    if (message) {
        const chatBody = document.getElementById('chatbot-body');
        chatBody.innerHTML += <p><b>You:</b> ${message}</p>;
        document.getElementById('chat-input').value = '';
        chatBody.innerHTML += <p><b>Chatbot:</b> I received your message: "${message}"</p>;
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
