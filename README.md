# Role-Based Access Control (RBAC) UI

## Project Overview
This project provides an admin dashboard for managing users, roles, and permissions. It is designed with a user-friendly interface to facilitate dynamic role-based access control, enabling administrators to efficiently manage application security.

---

## Features

### 1. User Management
- View, add, edit, and delete users.
- Assign roles to users and toggle their status (Active/Inactive).

### 2. Role Management
- Define and edit roles.
- Assign permissions to roles, such as Read, Write, and Delete.

### 3. Permission Management
- Dynamically assign and modify permissions for roles.
- Display permissions clearly for easy management.

### 4. Mock API
- Utilizes JSON Server for simulating backend API.
- Supports CRUD operations for users and roles.

---

## Project Structure

```plaintext
rbac-ui/
├── mock-api/           # Contains mock API configuration
│   ├── db.json        # Mock database for users and roles
│   └── package.json   # Dependencies for JSON Server
├── src/               # React app source files
│   ├── components/    # UI components (User, Role, and Permission Management)
│   ├── App.js         # Main app file
│   └── App.css        # Styling
├── .gitignore         # Ignored files and folders
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

---

## Getting Started

### Prerequisites
- **Node.js**: Download and install [Node.js](https://nodejs.org/).
- **VS Code**: Install [Visual Studio Code](https://code.visualstudio.com/).

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   cd rbac-ui
   ```

2. **Install Project Dependencies**:
   ```bash
   npm install
   ```

3. **Install Mock API Dependencies**:
   Navigate to the `mock-api` directory:
   ```bash
   cd mock-api
   npm install
   ```

4. **Run the Mock API**:
   Start JSON Server to simulate the backend API:
   ```bash
   npx json-server --watch db.json --port 3001
   ```
   The API will be available at `http://localhost:3001`.

5. **Run the React App**:
   Navigate back to the root folder and start the React development server:
   ```bash
   cd ..
   npm start
   ```
   The app will open in your default browser at `http://localhost:3000`.

---

## Example Data in `db.json`

```json
{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "status": "Active", "roles": ["Admin"] },
    { "id": 2, "name": "Bob", "email": "bob@example.com", "status": "Inactive", "roles": ["Editor"] }
  ],
  "roles": [
    { "id": 1, "name": "Admin", "permissions": ["read", "write", "delete"] },
    { "id": 2, "name": "Editor", "permissions": ["read", "write"] }
  ]
}
```

---

## Features Demonstration

### 1. User Management
- Navigate to the "Users" tab.
- Add, edit, or delete users.
- Assign roles dynamically and toggle their status.

### 2. Role Management
- Navigate to the "Roles" tab.
- Create, update, or delete roles.
- Assign permissions to roles interactively.

### 3. Permission Management
- Navigate to the "Permissions" tab.
- View and edit role permissions dynamically.

---

## Customizations and Future Enhancements
- Add authentication for administrators.
- Integrate a real backend for persistent data.
- Improve UI/UX with advanced styling and responsive design.

---

## Contributing
Feel free to fork this repository and submit pull requests for new features or bug fixes.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

