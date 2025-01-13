# Menu-CRUD-Manager

A lightweight, RESTful API built with **Node.js** and **Express.js** for managing menu items. This project includes endpoints for creating, retrieving, updating, and deleting menu items, along with input validation.

---

## Features

- **CRUD Operations**: Add, view, edit, and delete menu items.
- **Validation**: Ensures valid input using `express-validator`.
- **Modular Design**: Organized into controllers, routes, and middleware for maintainability.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Menu-CRUD-Manager.git
   cd Menu-CRUD-Manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

By default, the server runs on [http://localhost:5000](http://localhost:5000).

---

## API Documentation

### Base URL
```
http://localhost:5000/api/menu
```

### Endpoints

#### 1. **Get All Menu Items**
   - **URL**: `/`
   - **Method**: `GET`
   - **Response**: List of all menu items
   ```json
   [
       { "id": 1, "name": "Pizza", "price": 10.99 },
       { "id": 2, "name": "Burger", "price": 7.49 }
   ]
   ```

#### 2. **Get a Single Menu Item**
   - **URL**: `/:itemId`
   - **Method**: `GET`
   - **Response**: The menu item with the specified ID
   ```json
   { "id": 1, "name": "Pizza", "price": 10.99 }
   ```

#### 3. **Add a New Menu Item**
   - **URL**: `/`
   - **Method**: `POST`
   - **Body**: JSON object representing the new menu item
     ```json
     { "name": "Soup", "price": 5.99 }
     ```
   - **Validation Errors**:
     ```json
     {
         "errors": [
             { "msg": "Name is required", "param": "name" },
             { "msg": "Price is required", "param": "price" }
         ]
     }
     ```
   - **Response**: Newly created menu item
     ```json
     { "id": 6, "name": "Soup", "price": 5.99 }
     ```

#### 4. **Update a Menu Item**
   - **URL**: `/:itemId`
   - **Method**: `PATCH`
   - **Body**: JSON object with fields to update
     ```json
     { "name": "Updated Pizza", "price": 12.99 }
     ```
   - **Response**: Updated menu item
     ```json
     { "id": 1, "name": "Updated Pizza", "price": 12.99 }
     ```

#### 5. **Delete a Menu Item**
   - **URL**: `/:itemId`
   - **Method**: `DELETE`
   - **Response**: Confirmation message
     ```json
     { "message": "Item deleted successfully" }
     ```

---

## Project Structure

```
Menu-CRUD-Manager/
│
├── README.md                # Project documentation
├── app.js                   # Application entry point
├── controllers/             # Business logic
│   └── menuControl.js       # Controller for menu CRUD operations
├── middleWares/             # Middleware logic
│   └── validationSchema.js  # Input validation schema
├── routes/                  # Route definitions
│   └── menuRoutes.js        # Routes for menu CRUD operations
├── data/                    # Mock data
│   └── menu.js              # Sample menu items
├── package.json             # Project dependencies
└── package-lock.json        # Dependency lock file
```

---

## How to Contribute

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [RadwaNagy44](https://github.com/RadwaNagy44)
- **Email**: radwanagy561@gmail.com

