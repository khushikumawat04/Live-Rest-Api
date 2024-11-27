# Live REST API Setup

Live Demo: [https://live-rest-api-production.up.railway.app/](https://live-rest-api-production.up.railway.app/)

Follow the steps below to run the project locally:

## Steps to Run the Project Locally

```bash
# 1. Clone the Repository
git clone https://github.com/khushikumawat04/Live-Rest-Api.git

# 2. Navigate to the Project Directory
cd Live-Rest-Api

# 3. Install all Required Dependencies
npm install

# 4. Configure Environment Variables
# Create a .env file in the root of the project and add the following variables:
# PORT=5000
# MONGO_URI=your-mongodb-connection-string

# Replace `your-mongodb-connection-string` with your MongoDB connection string.

# 5. Add Data to the Database
# Before starting the server, you need to populate the database with initial data. Run the following command:
node productDB.js

# 6. Start the Server
npm start

# The API will be accessible at http://localhost:5000.

