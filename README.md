Project Brief: Basketball Scoreboard

Overview:

This project is a simple, interactive basketball scoreboard web application designed for learning purposes. It allows users to track and update scores for two teams (Home and Guest) using a clean, visually appealing interface. The application demonstrates fundamental HTML, CSS, and JavaScript skills, including DOM manipulation, event handling, and responsive styling.

Features:

Score Display: Displays the current score for both the Home and Guest teams in large, readable digits using a custom font (CursedTimer).
Score Increment Buttons: Each team has three buttons to increment their score by +1, +2, or +3 points, simulating common basketball scoring actions.
Responsive Design: The layout is centered and flexible, using CSS Flexbox to ensure proper alignment and spacing across different screen sizes.
Interactive Styling: Buttons feature hover effects, and the design uses a dark theme with contrasting colors for readability.
Technical Details:

HTML (index.html): Structures the scoreboard with two sections for Home and Guest teams. Each section includes a team name, a score display (starting at 0), and three buttons for score increments.
CSS (index.css): Styles the application with a dark background, custom font for scores, and a centered flexbox layout. Buttons are styled with borders, hover effects, and a consistent design. The layout is responsive with percentage-based margins.
JavaScript (index.js): Handles score updates by manipulating the DOM. Six functions (plus1_home, plus2_home, plus3_home, plus1_guest, plus2_guest, plus3_guest) retrieve the current score, increment it by the specified amount, and update the display.
Purpose:

This project serves as a learning exercise to practice front-end web development skills, including:

Structuring web content with HTML.
Styling with CSS, including custom fonts and hover effects.
Implementing interactivity with JavaScript through DOM manipulation and event handling.
Potential Improvements:

Add a reset button to clear scores.
Implement a game timer or quarter tracking.
Enhance accessibility with ARIA attributes or keyboard support.
Optimize JavaScript by consolidating repetitive functions into a single reusable function.
This project effectively demonstrates foundational web development concepts while providing a functional and visually engaging application.
