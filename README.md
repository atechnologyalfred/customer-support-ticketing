Customer Support Ticketing System

A full-stack customer support ticketing system that allows customers to create and track support tickets while support agents manage, assign, and resolve customer issues. Administrators can manage users, agents, tickets, and system operations.

🚀 Features

Customer

- Register and log in
- Create support tickets
- View personal tickets
- View ticket details
- Track ticket status
- Send messages on tickets
- Close tickets

Support Agent

- Log in securely
- View assigned tickets
- Manage customer tickets
- Update ticket status
- Respond to customers
- View ticket history

Administrator

- Manage users
- Manage support agents
- View and manage tickets
- Assign tickets to agents
- Manage user roles
- Monitor support activities

🛠️ Tech Stack

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API

Frontend

- React
- JavaScript
- CSS

Development Tools

- Git
- GitHub
- Postman
- VS Code

📁 Project Structure

customer-support-ticketing/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── services/
│   │
│   └── package.json
│
└── README.md

🔐 User Roles

The system has three main roles:

- Customer — creates and manages support tickets.
- Agent — handles and resolves assigned tickets.
- Admin — manages users, agents, tickets, and system operations.

🔄 Git Workflow

The project uses the following branch structure:

main
  ↑
develop
  ↑
feature/*

Main Branch

"main" contains stable production-ready code.

Develop Branch

"develop" is the integration branch where completed features are combined and tested before release.

Feature Branches

Each team member creates a separate feature branch from "develop".

Examples:

feature/auth
feature/tickets
feature/agents
feature/admin
feature/frontend

Changes are submitted through Pull Requests and reviewed before being merged into "develop".

📌 Development Workflow

GitHub Issue
     ↓
Assign Developer
     ↓
Create Feature Branch
     ↓
Develop Feature
     ↓
Test
     ↓
Create Pull Request
     ↓
Code Review
     ↓
Merge into develop
     ↓
Final Testing
     ↓
Merge into main

🔌 API

The backend provides RESTful API endpoints for:

- Authentication
- Users
- Customers
- Agents
- Tickets
- Ticket messages
- Administration

API documentation will be added as the project develops.

👥 Team

This project is developed collaboratively using GitHub, feature branches, issues, and pull requests.

📄 License

This project is created for educational and portfolio purposes.
