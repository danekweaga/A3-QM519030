Name : Chukwunonso Ekweaga
Portfolio Website - HTML, CSS, and JavaScript

1.Overview

This is a multi page personal website created using HTML, CSS, and JavaScript.
I reused assignment 1 when I made this.

Pages included:
- index.html (Home)
- education.html
- experience.html
- projects.html
- contact.html

Files included:
- style.css (Styling and theme system)
- script.js (Interactive features and theme switching)

2.File Structure

C:.
|   Code Review ofAss 2.pdf
|   contact.html
|   education.html
|   experience.html
|   index.html
|   projects.html
|   README.txt
|   resume.pdf
|   script.js
|   style.css
|
+---audio
|       intro.mp4
|
+---images
|   |   favicon.ico
|   |   github.png
|   |   icon.jpeg
|   |
|   \---skills
|           c.png
|           css.png
|           git.png
|           html.png
|           java.png
|           JavaScript.png
|           jetbrains.png
|           linux.png
|           python.png
|           sql.png
|           vscode.png
|
\---video
        demo.mp4
This was gotten by using the " tree /F /A" command in command prompt.

3. Navigation Structure

Each page contains a navigation bar that links to:

- index.html
- education.html
- experience.html
- projects.html
- contact.html

Because the navigation bar appears on every page, users can move
between all pages at any time. Additionally at the bottom of each page, 
there is a link to return to the home page (index.html).

4. Page Descriptions

index.html (Home Page)
    Purpose: To introduce myself and give a brief history of my academic journey.

    Includes:
    - Profile information
    - Audio pronunciation file (audio/intro.mp4)
    - Skill icons as hyperlinks to their official websites (images/skills/)
    - Navigation bar linking to all pages
    - Interactive profile picture with click alert
    - Theme switching buttons (Dark, Light, Blue modes)

education.html (Education Page)
    Purpose: Displays my academic history and my completed relevant coursework.

    Includes:
    - List of schools attended
    - Program details
    - Relevant academic information
    - Theme switching buttons (Dark, Light, Blue modes)

experience.html (Experience Page)
    Purpose: Display my professional experience

    Includes:
    - Job titles
    - Dates
    - Responsibilities
    - Theme switching buttons (Dark, Light, Blue modes)

projects.html (Projects Page)
    Purpose: Displays my resume-worthy projects

    Includes:
    - Project descriptions
    - Video demonstration (video/demo.mp4)
    - Theme switching buttons (Dark, Light, Blue modes)

contact.html (Contact Page) 
    Purpose: Provides contact information

    Includes:
    - Email contact
    - GitHub link
    - LinkedIn link
    - Toggleable contact info section
    - Theme switching buttons (Dark, Light, Blue modes)

6. Interactive Features

Theme System:
- Three theme options: Light, Dark, and Blue
- Implemented using CSS custom properties (variables) for consistent theming
- Theme buttons appear in the top right corner of every page
- Changes background color, text color, and navigation bar styling

Profile Picture Interaction:
- Clickable profile picture on the home page
- Displays an alert message when clicked
- Uses JavaScript event listeners for interactivity

Contact Info Toggle:
- Button to show/hide detailed contact information
- Uses JavaScript to toggle element visibility

Welcome Message:
- One-time welcome alert on first visit to the home page
- Uses sessionStorage to track visitor status

7. References

Profile Photo: Personal image
Skill Icons: Official technology logos used for educational purposes
GitHub and LinkedIn links: Official external profiles.

Course Materials:
7-HTML_JS.pdf by Lu Yang and Rina Webhe
12-CSS.pdf
11 - IntroToCSS_Annotated.pdf

Web References:
MozDevNet. text-decoration. Retrieved March 20, 2026 from https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration
W3schools.com. How To Toggle Between Hiding And Showing an Element. Retrieved March 22, 2026 from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp 
W3School. onload Event. Retrieved March 22, 2026 from https://www.w3schools.com/jsref/event_onload.asp 
Mahesh Prajapati. 2024. Understand sessionstorage and localstorage for controlling popups. (December 2024). Retrieved March 22, 2026 from https://dev.to/maheshprajapati/understanding-sessionstorage-and-localstorage-for-controlling-popups-27m6 
MozDevNet. CSSStyleDeclaration: setProperty() method. Retrieved March 22, 2026 from https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty 
MozDevNet. EventTarget: addEventListener() method. Retrieved March 22, 2026 from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 

I read about using this "target="_blank" rel="noopener noreferrer"" in 
https://elementor.com/blog/noopener-noreferrer/