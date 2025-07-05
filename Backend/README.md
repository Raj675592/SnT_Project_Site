# Express MySQL App

This project is a simple Express.js application that connects to a MySQL database and provides public routes to fetch data. 

## Project Structure

```
express-mysql-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── config
│   │   └── database.js      # Database configuration
│   ├── controllers
│   │   └── dataController.js # Controller for handling data requests
│   ├── routes
│   │   └── dataRoutes.js     # Routes for fetching data
│   └── models
│       └── index.js         # Model for interacting with the database
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-mysql-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the database:**
   - Open `src/config/database.js` and update the connection parameters (host, user, password, database name) to match your MySQL setup.

4. **Run the application:**
   ```
   node src/app.js
   ```

5. **Access the public routes:**
   - The application exposes public routes to fetch data from the MySQL database. You can access these routes using a tool like Postman or your web browser.

## Usage Examples

- To fetch data, make a GET request to the appropriate route defined in `src/routes/dataRoutes.js`.

## License

This project is licensed under the MIT License.