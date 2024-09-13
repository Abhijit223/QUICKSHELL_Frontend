# quicksell-frontend-assignment-main
 
## Overview

This project is a Kanban board application developed with ReactJS, designed for seamless project management. It integrates with the [Quicksell API](https://api.quicksell.co/v1/internal/frontend-assignment) to fetch ticket data, enabling users to interact with and organize tasks. Users can group and sort tickets by various criteria, offering flexibility and customization. See the project live at 

Features
Data Management:

Fetches real-time ticket data from the Quicksell API.
Displays tickets in a user-friendly Kanban board format for efficient task management.
Flexible Grouping Options:

Group tickets by status, user, or priority, allowing users to organize tasks according to their needs.
Custom Sorting Options:

Sort tickets by priority or title to quickly identify tasks based on importance or other criteria.
Priority Levels:

Tickets are assigned priority levels, ranging from Urgent (4) to No Priority (0), for better task prioritization.
Responsive Design:

Features a visually appealing, fully responsive design using pure CSS for an optimized user experience across devices.
Icon Integration:

Utilizes react-icons for seamless icon integration, enhancing the application's visual appeal.
State Persistence:

Saves user preferences for grouping and sorting options using local storage, ensuring settings are retained after a page reload.


## Features

- **Data Interaction:**

  - Fetches ticket data from the Quicksell API.
  - Displays the fetched data on a Kanban board.

- **Grouping Options:**

  - Group tickets by Status, User, or Priority.

- **Sorting Options:**

  - Sort tickets by Priority or Title.

- **Priority Levels:**

  - Tickets are categorized with priority levels ranging from Urgent (4) to No Priority (0).

- **Styling:**

  - Visually appealing and responsive design.
  - Pure CSS is used for styling.

- **Icons:**

  - Icons are integrated for various elements of the application using react-icon.

- **State Persistence:**
  - Saves the user's view state (grouping and sorting options) even after a page reload using local storage.

- **Responsive Design:**
  - Responsive screen size when screen width goes below 768px

- **Skeleton Components:**
  - Skeleton components are used to display a placeholder for the data that is being fetched from the API indicating data is loading

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Abhijit223/QUICKSHELL_Frontend.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd QUICKSHELL_Frontend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application:**

   ```bash
   npm start 
   ```

5. **Access the Application:**
   Open your browser and go to `http://localhost:3000`.
