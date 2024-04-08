# NestJS TODO List App

This is a simple TODO list application built with NestJS and MongoDB, containerized using Docker, and orchestrated with Docker Compose.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Nestjs
- Node.js (>=18.x)
- npm (>=10.x)
- Docker
- Docker Compose

### Installation

1. Clone the repository:

```
git clone https://github.com/akifabubakar/todo_list_be
```

2. Navigate to the project directory:
```
cd todo_list_be
```

3. Install dependencies
```
npm install
```

4. Create **.env** file based on this example:
```
MONGO_URL=localhost
```

5. Start the application and database using Docker Compose
```
docker-compose up --build
```
The application should now be running and accessible at http://localhost:3000.



## About this app
- NestJs framework
- Simple todo list to demonstrate CRUD application
- You can *Get All Task, Add New Task, Update Task and Delete Task.*

## Development
Running Locally
To run the application locally without Docker, use the following command:
```
npm run start:dev
```
