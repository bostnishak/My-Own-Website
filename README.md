# Developer Portfolio Website

A modern, responsive, and lightweight Single Page Application (SPA) designed to showcase technical skills, projects, and professional experience. Built completely from scratch without the use of heavy front-end frameworks.

## 🚀 Overview

This project serves as a professional digital resume and portfolio. The core objective was to create a fast, maintainable, and aesthetically pleasing interface while demonstrating a strong command of core web technologies.

## 🛠️ Built With

*   **HTML5:** Semantic structuring for accessibility and SEO.
*   **Vanilla CSS3:** Custom styling featuring CSS variables for easy theming, modern layout techniques (Flexbox/Grid), and smooth transitions.
*   **Vanilla JavaScript (ES6+):** Handling dynamic routing, DOM manipulation, and interactive components like carousels without any external libraries.
*   **FontAwesome:** For scalable vector icons.
*   **Google Fonts:** Utilizing modern typography for clean readability.

## 🧠 Architecture & Implementation Details

### 1. Single Page Application (SPA) Routing
Instead of traditional multi-page navigation, the website utilizes a custom-built vanilla JavaScript routing mechanism. 
*   **How it works:** The `index.html` file acts as a shell. Navigation links trigger JavaScript functions that prevent default page reloads and dynamically inject HTML template strings into the main content area.
*   **Why:** This approach provides a seamless, app-like user experience with instant page transitions, reducing server requests and improving perceived performance.

### 2. Custom Carousel Component
The landing page features a dynamic carousel to display recent activities and projects.
*   **How it works:** Built using CSS Flexbox for the layout and JavaScript to handle the sliding logic. It includes automatic sliding (auto-play) that pauses on hover, manual navigation buttons, and interactive dot indicators to jump between slides.
*   **Why:** Demonstrates the ability to build complex, interactive UI components from scratch, avoiding the overhead and potential conflicts of third-party plugins.

### 3. Responsive Design & CSS Architecture
*   **How it works:** The styling relies heavily on CSS custom properties (variables) defined at the root level for consistent colors, spacing, and typography. Media queries ensure the layout adapts gracefully from large desktop monitors down to mobile devices.
*   **Why:** CSS variables make the application highly maintainable and easily adaptable for future theme changes (e.g., implementing a dark mode).

### 4. Interactive CV Layout
*   **How it works:** The CV section features a split layout on larger screens with a sticky sidebar for navigation. Clicking a section in the sidebar utilizes JavaScript to smoothly scroll to the corresponding content area, enhancing the reading experience for long-form content.

## ⚙️ Setup & Installation

Since this is a static website, no build processes or dependencies (like `npm` or `yarn`) are required.

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory.
3.  Open `index.html` directly in any modern web browser.
    *Note: For the best experience during local development, it is recommended to use a simple development server like the "Live Server" extension in VS Code or Python's built-in HTTP server (`python -m http.server`).*

## 📈 Future Enhancements

*   Implementation of a Dark/Light mode toggle.
*   Adding a functional contact form utilizing a serverless function.
*   Internationalization (i18n) support for multiple languages.
