Name : Chukwunonso Ekweaga
Portfolio Website - HTML, CSS, and JavaScript

1.Overview

This is a multi page personal website created using HTML, CSS, and JavaScript.
I reused assignment 2 when I made this.

Pages included:
- index.html (Home)
- education.html
- experience.html
- projects.html
- contact.html

Files included:
- style.css (Styling, theme system, layout, contact form, education table,
  images, lists, selector examples, media queries)
- script.js (Interactive features and theme switching)

2.File Structure

C:.
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

The bar is created in script.js (it writes HTML into the div with id="navbar").
Theme buttons (Light, Dark, Blue) sit in a fixed bar at the bottom of the screen
and call applyTheme() to update CSS variables.

4. Page Descriptions

index.html (Home Page)
    Purpose: To introduce myself and show skills and social links.

    Includes:
    - Hero section (header.hero) with profile photo, name, short intro
    - Audio pronunciation file (audio/intro.mp4)
    - Skill icons as hyperlinks to their official websites (images/skills/)
    - GitHub icon link (images/github.png)
    - Navigation bar linking to all pages
    - Interactive profile picture with click alert
    - Theme switching buttons (Dark, Light, Blue modes)
    - Welcome message on first visit (sessionStorage)

education.html (Education Page)
    Purpose: Displays my academic history and relevant coursework.

    Includes:
    - Education history in a styled table (class education-table)
    - Nested lists for coursework under each school
    - Theme switching buttons

experience.html (Experience Page)
    Purpose: Display my professional experience.

    Includes:
    - Job and role information in a table layout
    - Link to download resume.pdf
    - Theme switching buttons

projects.html (Projects Page)
    Purpose: Displays my resume-worthy projects.

    Includes:
    - Project descriptions and media in a table layout
    - Video demonstration (video/demo.mp4)
    - Theme switching buttons

contact.html (Contact Page)
    Purpose: Provides contact information and a way to send a message.

    Includes:
    - Email contact and links (LinkedIn, GitHub)
    - Toggleable contact info section (toggleContact in script.js)
    - Simple contact form: name, email, message (class contact-form)
    - Theme switching buttons

6.Interactive Features

Theme System:
- Three theme options: Light, Dark, and Blue
- Implemented using CSS custom properties (variables) on the document root;
  script.js applyTheme() sets --bg-color, --text-color, --navbar-bg,
  --navbar-text, --table-header-bg, --link-color, and --link-hover
- Theme buttons are fixed to the bottom of the viewport on every page
- Changes background, text, navbar, table header row, and link colors

Profile Picture Interaction:
- Clickable profile picture on the home page (id profilePic)
- Displays an alert when clicked
- Uses JavaScript addEventListener inside DOMContentLoaded in script.js

Contact Info Toggle:
- Button to show or hide detailed contact information on contact.html
- toggleContact() changes the display style of the element id contactInfo

Welcome Message:
- One-time welcome alert on first visit to the home page
- showWelcome() uses sessionStorage to track if the user already visited

JavaScript summary (script.js):
- DOMContentLoaded: injects the navbar HTML into #navbar
- showWelcome(): input none; shows alert once per tab session
- toggleContact(): input none; toggles #contactInfo visibility
- applyTheme(themeName): input string light, dark, or blue; updates CSS variables
  and body colors; uses the themes object for color values

7.References

Profile Photo: Personal image
Skill Icons: Official technology logos used for educational purposes
GitHub and LinkedIn links: Official external profiles.

Course Materials:
7-HTML_JS.pdf by Lu Yang and Rina Wehbe
12-CSS.pdf by Lu Yang and Rina Wehbe
11 - IntroToCSS.pdf by Lu Yang and Rina Wehbe
13 - CSS Selectors.pdf by Lu Yang and Rina Wehbe
14 - CSS Layout.pdf by Lu Yang and Rina Wehbe
15 - Mobile Dev.pdf by Lu Yang and Rina Wehbe
16 - Flex.pdf by Lu Yang and Rina Wehbe
17 - Flex2.pdf by Lu Yang and Rina Wehbe
18 - Grid.pdf by Lu Yang and Rina Wehbe
19 - Heuristics.pdf by Lu Yang and Rina Wehbe
20 - Design.pdf by Lu Yang and Rina Wehbe

Web References:
MozDevNet. Cursor. Retrieved April 5, 2026 from https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
W3Schools. CSS Outline. Retrieved April 5, 2026 from https://www.w3schools.com/css/css_outline.asp
MozDevNet. Styling web forms. Retrieved April 5, 2026 from https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms
MozDevNet. text-decoration. Retrieved March 20, 2026 from https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration
W3schools.com. How To Toggle Between Hiding And Showing an Element. Retrieved March 22, 2026 from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
W3School. onload Event. Retrieved March 22, 2026 from https://www.w3schools.com/jsref/event_onload.asp
Mahesh Prajapati. 2024. Understand sessionstorage and localstorage for controlling popups. (December 2024). Retrieved March 22, 2026 from https://dev.to/maheshprajapati/understanding-sessionstorage-and-localstorage-for-controlling-popups-27m6
MozDevNet. CSSStyleDeclaration: setProperty() method. Retrieved March 22, 2026 from https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
MozDevNet. EventTarget: addEventListener() method. Retrieved March 22, 2026 from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
MozDevNet. Using media queries. Retrieved April 5, 2026 from https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
MozDevNet. CSS combinators. Retrieved April 5, 2026 from https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators

I read about using this "target="_blank" rel="noopener noreferrer"" in
https://elementor.com/blog/noopener-noreferrer/
