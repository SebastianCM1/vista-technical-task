# VISTA-JOB-INTERVIEW PROJECT

This is a Next.js project developed as part of a job interview assignment for **Vista Higher Learning**.

## Table of Contents
- [VISTA-JOB-INTERVIEW PROJECT](#vista-job-interview-project)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Technologies Used](#technologies-used)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Steps to Install](#steps-to-install)
  - [How to Run the Project](#how-to-run-the-project)
  - [Features](#features)
  - [Usage](#usage)
  - [Improvements](#improvements)
  - [Author](#author)

---

## Project Overview
The goal of this project is to implement a **recording activity interface** where users can:
- Record their voice.
- Play back the recording.
- View a timer while recording or playing.
- Input text based on the activity and submit it as the final answer.

This demonstrates:
- Frontend development skills.
- State management using React hooks.
- UI responsiveness and accessibility.

---

## Technologies Used
- **Next.js 13** - React-based framework for server-side rendering.
- **CSS Modules** - Scoped component styling.
- **React Icons** - Icons used in buttons.
- **HTML5 & Modern CSS** - Layouts and responsive design.

---

## Installation and Setup
Follow these steps to set up the project on your local machine:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**

### Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/sebastian-cm/vista-job-interview.git
   cd vista-job-interview
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open the project in your browser at `http://localhost:3000`.

---



## How to Run the Project
   **Development Mode**: Use the following command:
   ```bash
   npm run dev
   ```
   - The project will run locally on `http://localhost:3000`.


---

## Features
1. **Activity Buttons**:
   - Start recording, stop recording, and play the recorded content.
2. **Timer**:
   - Displays recording or playback duration.
   - Smooth transitions for active states.
3. **Text Input and Submission**:
   - Users can input their response and submit it as a final answer.
4. **State Management**:
   - Handled using React hooks (e.g., `useState`, `useEffect`).
5. **Responsive Design**:
   - Supports desktop and mobile views.
6. **Accessibility**:
   - Semantic HTML and `aria` attributes ensure a better user experience.

---

## Usage
1. Launch the project in your browser.
2. Follow these steps:
   - Click **Record** to start recording.
   - Click **Stop** to stop the recording.
   - Click **Review** to play the recording.
   - Input text based on the instructions.
   - Submit the response.
3. Observe the smooth animations, timers, and state changes during the process.

---

## Improvements
Some additional features that could be implemented:
1. **Audio Playback and Storage**: Store recordings using a service like Firebase.
2. **Visual Feedback**: Waveforms or progress bars for recordings.
3. **Error Handling**: Alerts if recordings fail.
4. **Unit Testing**: Add test coverage using Jest and React Testing Library.

---

## Author
**Sebastian Correa Morales**
- [GitHub](https://github.com/correasebastian/)
- [LinkedIn](https://www.linkedin.com/in/elkykelyn/)

---




