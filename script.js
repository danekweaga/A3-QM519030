// Event listener that runs when the DOM is fully loaded
// Injects navigation bar into the navbar element with links to all portfolio pages
document.addEventListener("DOMContentLoaded", function() 
{
    document.getElementById("navbar").innerHTML = `
        <nav class="navbar">
            <a href="index.html">Home</a> |
            <a href="education.html">Education</a> |
            <a href="experience.html">Experience</a> |
            <a href="projects.html">Projects</a> |
            <a href="contact.html">Contact</a>
        </nav>`;
    
    // Adds a click event listener to the profile picture that shows an alert
    document.getElementById("profilePic").addEventListener("click", function() 
    {
        alert("This is my profile picture!");
    });
});

// Displays a welcome alert message to greet the user
function showWelcome() 
{
    if (!sessionStorage.getItem("visited")) 
    {
        alert("Welcome to my portfolio!");
        sessionStorage.setItem("visited", "true");
    }
}

// Toggles the visibility of the contact information section
// Shows the section if hidden, hides it if visible
function toggleContact() 
{
    const section = document.getElementById("contactInfo");
    if (section.style.display === "block") 
    {
        section.style.display = "none";
    } 

    else 
    {
        section.style.display = "block";
    }
}

// Theme configuration object with visually appealing color schemes
const themes = {
    light: 
    {
        bgColor: "#ffffff",
        textColor: "#222222",
        navbarBg: "#1a1a1a",
        navbarText: "#ffffff"
    },

    dark: 
    {
        bgColor: "#1a1a1a",
        textColor: "#e8e8e8",
        navbarBg: "#0d0d0d",
        navbarText: "#e8e8e8"
    },

    blue: 
    {
        bgColor: "#0f3460",
        textColor: "#e8f4f8",
        navbarBg: "#16213e",
        navbarText: "#00d4ff"
    }
};

// Applies the selected theme by updating CSS variables
function applyTheme(themeName) 
{
    const theme = themes[themeName];
    if (theme) 
    {
        document.documentElement.style.setProperty("--bg-color", theme.bgColor);
        document.documentElement.style.setProperty("--text-color", theme.textColor);
        document.documentElement.style.setProperty("--navbar-bg", theme.navbarBg);
        document.documentElement.style.setProperty("--navbar-text", theme.navbarText);
        document.body.style.backgroundColor = theme.bgColor;
        document.body.style.color = theme.textColor;
    }
}