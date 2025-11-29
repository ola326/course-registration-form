# Course Registration Form

A small React + Vite project implementing a course registration form for the assignment.

## Project summary

This project implements a course registration form with controlled inputs and basic client-side validation using React hooks (`useState`).  
Features include:
- Required fields: First name, Last name, Email, Age, Course selection
- Email format validation
- Age validation (must be 18 or older)
- Course dropdown selection (required)
- Error messages for validation failures and a success message on valid submission
- Clear form / success state after submission

## Demo
Run locally (see instructions below) and open the app at the Vite dev URL (usually `http://localhost:5173`).

## Prerequisites
- Node.js 16+ / npm 8+ recommended
- Git (optional, for cloning)

## Install & run (development)
```bash
# clone (if not already)
git clone <your-repo-url>
cd <repo-folder>

# install dependencies
npm install

# start dev server
npm run dev
