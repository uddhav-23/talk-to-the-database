# Talk to Database

Interact with your database using natural language via an AI-powered chatbot.

## Features
- React + Tailwind chat UI
- Node.js/Express backend
- SQLite database
- OpenAI-powered NL → SQL conversion

## Getting Started

### Backend
```bash
cd backend
npm install
# add your OpenAI key in .env
npm start
```

### Database
```bash
cd database
sqlite3 db.sqlite < init.sql
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Usage
- Go to `http://localhost:3000`
- Select a schema, type your question, and chat with your database!

## License
MIT
