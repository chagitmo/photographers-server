
```markdown
# Intuit Home Assignment - Server

This is the server component for the Intuit home assignment. 
It serves the contents of photographers.json through a REST API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Building](#building)
- [Testing](#testing)

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_directory>
```

2. Install the dependencies:

```bash
npm install
```

## Usage

To start the server in development mode:

```bash
npm run start:dev
```

To start the server in production mode:

```bash
npm run build
npm start
```

## API Endpoints

### GET /api/photographers

Returns the list of all photographers.

**Response:**
```json
[
  {
    "id": "1",
    "firstName": "John",
    "lastName": "Doe",
    "avatar": "https://example.com/avatar.jpg",
    "city": "New York",
    "state": "NY",
  },
  ...
]
```

### GET /api/photographers/{photographerID}

Returns a single photographer by ID.

**Response:**
```json
{
  "id": "1",
  "firstName": "John",
  "lastName": "Doe",
  "avatar": "https://example.com/avatar.jpg",
  "eventType": "wedding, birthdays",
  "city": "New York",
  "state": "NY",
  "email": "john.doe@example.com",
  "phoneNumber": "+501 918.686.1187",
}
```

## Building

To build the project, run:

```bash
npm run build
```

The built files will be located in the `dist` directory.

## Testing

To run tests, use:

```bash
npm test
```