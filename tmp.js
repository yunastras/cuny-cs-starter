let userData = {
    "user": {
        "name": "Carol",
        "settings": {
            "theme": "dark",
            "notifications": true
        }
    }
};

// Access nested properties
console.log(userData.user.settings.theme); // "dark"