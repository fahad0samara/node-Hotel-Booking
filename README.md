
# Hotel Booking Application

This is a full-stack hotel booking application built using the MERN stack (MongoDB, Express.js, Node.js). It allows users to browse hotels, make bookings, and manage their bookings.

## Features

- User authentication and registration
- Hotel management (add, edit, delete hotels)
- Booking management (view, make, and cancel bookings)
- Search hotels by various criteria
- Stripe integration for payment processing
- Image upload for hotel images using Cloudinary

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Processing**: Stripe
- **Image Upload**: Cloudinary

## Installation

1. Clone this repository: `git clone https://github.com/yourusername/hotel-booking-app.git`
2. Navigate to the project directory: `cd hotel-booking-app`
3. Install dependencies for the server: `npm install`
4. Navigate to the client directory: `cd client`
5. Install dependencies for the client: `npm install`
6. Navigate back to the root directory: `cd ..`
7. Create a `.env` file in the root directory and add the following variables:

```
MONGODB_CONNECTION_STRING=your-mongodb-connection-string
JWT_SECRET_KEY=your-jwt-secret-key
FRONTEND_URL=http://localhost:3000

# Cloudinary Variables
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Stripe
STRIPE_API_KEY=your-stripe-api-key

```

8. Start the development server: `npm run dev`

## Usage

- Register a new account or login with an existing one.
- Browse hotels, make bookings, and manage your bookings.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


