# Book Management Application

## Overview

A simple web-based tool to manage a book collection, including printed and audio books. Users can add, edit, delete, and filter books with data stored in `localStorage`.

## Features

- Add, edit, and delete books.
- Separate fields for printed (pages, print type) and audio books (narrator, duration).
- Filter books by type.
- Persistent storage using `localStorage`.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) & npm

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/jerzyszajner/book-managment-app.git
   cd book-management-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Add a book by filling in the details.
2. Select **Printed Book** or **Audio Book** and enter relevant details.
3. Filter books by type.
4. Edit or delete books as needed.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Storage**: `localStorage`
- **Build Tool**: Vite

## License

See [License.txt](public/License.txt) for details.
