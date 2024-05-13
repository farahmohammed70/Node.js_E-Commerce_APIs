This repository contains the source code for a full-featured e-commerce application built using Node.js and Express.js. It provides functionalities for users to browse products, manage shopping carts, place orders, and leave reviews. Additionally, it offers admin features such as managing brands, categories, products, and users.

Features:

-User Management: Registration, login, profile updates, authentication, and authorization.
-Product Management: Create, edit, delete products with features like brands, categories, sub-categories, and images.
-Order Management: Place orders, view order history, manage order status (optional for admin).
-Review Management: Users can leave reviews on products (optional for admin moderation).
-Shopping Cart: Add, remove, and manage items in the shopping cart.
-Error Handling: Robust error handling with informative messages.
-Validation: Form validation ensures data integrity.

Project Structure:

The project is organized into a modular structure for better maintainability:

-controllers: Handle incoming requests, interact with models, and send responses.
-config: Configuration files like database connection details and JWT secret.
-factories: Simplify creation of complex model instances for testing.
-middlewares: Provide additional functionalities for request processing (e.g., authentication, logging).
-models: Define database schema for entities like users, products, orders, etc.
-routes: Define API endpoints for various functionalities.
-utils: Contain utility functions reusable across the app.
-validators: Custom validation logic for user input and data integrity.
-server.js: The main entry point that starts the server and initializes application logic.

Running the Project (Prerequisites):

-Node.js and npm (or yarn): Ensure you have Node.js and npm (or yarn) installed on your system.
-Database Setup: Configure the database connection details in config/db.js.
-Install Dependencies: Run npm install (or yarn install) in the project root directory to install dependencies.
-Start the Server: Run node server.js to start the server.

Additional Information:

-This project uses a database (MongoDB) for data persistence.
-Authentication and authorization are implemented (e.g., JWT) for secure user access control.
-Error handling provides informative messages and ensures robust application behavior.