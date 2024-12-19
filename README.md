# Employee Management App

A React-based Employee Management application that allows users to add, search, filter, and sort employees. Employee data is persisted using `localStorage` and can be initialized from a JSON file.

## Features

- Add new employees
- Search employees by name
- Filter employees by department
- Sort employees by name (ascending/descending)
- Persist employee data in `localStorage`
- Display loading and error states during data initialization

## Project Structure

- **App**: Main component handling state and rendering other components
- **EmployeeList**: Displays the list of employees
- **EmployeeForm**: Form to add new employees
- **SearchFilter**: Input fields to search and filter employees
- **Button**: Reusable button component

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes. You may also see linting errors in the console.

## Usage

1.  **Search Employees**: Use the search bar to find employees by name.
2.  **Filter by Department**: Use the department filter to narrow down results.
3.  **Sort by Name**: Click the "Sort by Name" button to toggle between ascending and descending order.
4.  **Add Employees**: Click the "Add Employee" button, fill in the form, and save.

## Error Handling

- If there’s an issue loading data, an error message is displayed.
- While data is being loaded, a loading indicator is shown.

## Technologies Used

- **React**: Frontend library for building user interfaces
- **CSS Modules**: Scoped styles for components
- **localStorage**: For data persistence between sessions
