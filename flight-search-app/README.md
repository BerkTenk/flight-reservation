# Schiphol Airport Flight Reservation App

This is a simple React-based application that fetches flight data from the Schiphol Airport API and allows users to filter, sort, and reserve flights. Users can add flights to their "My Reservations" section, which keeps track of their selected flights.

## Features

- Fetches flight data from the Schiphol Airport API.
- Filters flights by departure and arrival airports, departure date, and arrival date.
- Sorts flights by price, flight name, duration, and departure/arrival time.
- Allows users to reserve flights and view them in a dedicated "My Reservations" section.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Axios**: HTTP client to make requests to the flight API.
- **Schiphol Airport API**: Provides flight data for the application.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **Schiphol API Credentials**: You'll need an `app_id` and `app_key` from the [Schiphol API](https://developer.schiphol.nl/) to fetch flight data.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flight-reservation-app.git
cd flight-reservation-app
```

### 2.Install Dependencies

Install the required dependencies using npm:
```bash
npm install
```

### 3. Start the Development Server

To start the application locally, run the following command:
```bash
npm start
```

This will start the development server, and you can view the app by navigating to http://localhost:3000 in your browser.

### 5. API Proxy Setup

Make sure your backend server (e.g., Express.js) is running at http://localhost:3000/api/flights for the frontend to properly fetch the flight data.

### 6.Usage

Once the app is running:

Use the filters to narrow down flights by departure and arrival airports, dates, etc.
Use the sorting buttons to organize flights by price, name, duration, or time.
Add flights to your reservations using the "Add to Reservations" button.
View all reserved flights in the "My Reservations" section.

## Project Structure
src/components/FlightList.js: Displays the list of flights, allows filtering, sorting, and reservations.
src/App.js: Main application component.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

