# User Management App

This project is part of the Udemy course [30 Days of Angular: Build 30 Web Projects with Angular](https://www.udemy.com/course/30-days-of-angular/).

## Overview

User Management App is a simple Angular application that demonstrates user CRUD (Create, Read, Update, Delete) operations. It is designed as a learning project to help you understand Angular fundamentals, component-based architecture, service usage, and basic form handling.

## Features

- List users
- Add new users
- Edit existing users
- Delete users

## Technologies Used

- [Angular CLI](https://github.com/angular/angular-cli) v19.0.6
- TypeScript
- SCSS

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
ng serve
```

Open your browser at [http://localhost:4200/](http://localhost:4200/).

### Building

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute unit tests:

```bash
ng test
```

### Running End-to-End Tests

To run e2e tests:

```bash
ng e2e
```

## Project Structure

- `src/app/components/` - Contains Angular components (user list, user form, user card)
- `src/app/models/` - Contains TypeScript interfaces/models
- `src/app/services/` - Contains Angular services for user data management

## License

This project is for educational purposes as part of the Udemy course. For more details, refer to the course page.
