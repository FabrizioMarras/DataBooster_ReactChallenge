# BADIR Framework App
This project is a frontend application built using React and Remix as part of an assignment. The application implements two screens based on the provided Figma designs and utilizes the lessons.json file as the data source.

## Table of Contents
- Project Structure
- Features
- Technologies Used
- Installation
- Approach
- Improvements
- Conclusion

## Project Structure

The project follows a modular structure, with components organized by their purpose. Here's a brief overview:

- **components**: Contains reusable UI components and specific components for exercises and navigation.
- **data**: Contains the lessons.json file used as the data source.
- **styled**: Contains styled components that apply consistent styling across the application.
- **routes**: Contains the dynamic route files for handling landing page, different lessons and thank you page.
- **tailwind.config.ts**: The Tailwind CSS configuration file for customizing themes, colors, and other utilities.

## Features

### Responsive Design
The application is fully responsive, ensuring a seamless experience on mobile, tablet, and desktop devices.

### Modular Components
Components are designed to be reusable and easy to maintain, with a focus on clean and readable code.

### Custom Styling
Utilizes Tailwind CSS for styling, with custom utility classes and components to handle common styles across the app.

### Navigation Between Lessons
Users can navigate through lessons using the "Next" and "Previous" buttons, with the navigation buttons dynamically enabling/disabling based on the lesson's progress.

### Multiple Choice Interaction
Users can select an answer from multiple choices, with feedback provided for correct or incorrect selections.

## Technologies Used

- **React**: For building the user interface.
- **Remix**: For handling routing, data loading, and server-side rendering.
- **Tailwind CSS**: For utility-first CSS styling.
- **TypeScript**: For type safety and improved developer experience.

## Installation

To run the project locally:

1. Clone the repository:

```
git clone https://github.com/FabrizioMarras/DataBooster_ReactChallenge.git
```

2. Navigate to the project directory:

```
cd DataBooster_ReactChallenge
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and navigate to http://localhost:5173 to view the application.

## Approach

### Project Structure and Modularity

The project is structured with modularity and reusability in mind. Components are split into smaller, reusable pieces that can be easily maintained and extended. Styled components are used to enforce consistent styling across the application.

### Problem-Solving and Attention to Detail

- **Data Loading**: The lessons.json file is loaded using a Remix loader, which allows the application to dynamically render exercises based on the provided data.
- **Dynamic Routing**: Dynamic routes are used to handle different lessons, with the URL parameter determining which lesson is currently displayed.
- **Interactivity**: The multiple-choice component allows users to interact with the content, providing immediate feedback on their selections.

### Focus on Usability

The navigation buttons are designed to be user-friendly, with clear feedback on whether they can proceed to the next lesson. The responsive design ensures that users have a seamless experience on any device.

### Improvements
The following improvements could be implemented:

- **Scoring System**: A scoring system to handle complex scenarios and provide detailed feedback to the user.
- **Animation and Transitions**: Add more animations and transitions to improve the overall user experience and make the application more engaging.
- **Accessibility Improvements**: Ensure the application is fully accessible, including adding ARIA labels and keyboard navigation.
- **Unit Tests**: Implement unit tests for key components to ensure the application's reliability and prevent future regressions.
