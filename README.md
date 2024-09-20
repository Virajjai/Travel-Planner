
# Safarnama 🌍✈️

**Safarnama** is an AI-powered travel planning platform that generates personalized itineraries based on user preferences such as destination, budget, number of travelers, and travel duration. It allows users to create, view, and manage their trips, giving them a seamless experience for planning their next adventure.

## Features 🚀

- **AI-Powered Itinerary Generation**: Get custom itineraries based on your input, including location, duration, and budget.
- **Firebase Integration**: Secure user authentication and data storage using Firebase.
- **User Trip Management**: View and manage your saved trips in a user-friendly dashboard.
- **Responsive UI**: Designed to work across devices with a modern, clean interface.
- **Serverless Architecture**: Built using cloud functions for a highly scalable solution.

## Tech Stack 🛠️

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication, Cloud Functions)
- **Database**: Firebase Firestore
- **AI Integration**: OpenAI or other AI-based APIs (depending on implementation)
- **Hosting**: Vercel (or another hosting platform)

## Getting Started 🔧

### Prerequisites

- Node.js (>= 14.x)
- Firebase account
- Vercel account (optional, for deployment)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Virajjai/safarnama.git
   cd safarnama
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Setup Firebase**:

   - Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).
   - Enable Firestore, Authentication, and Cloud Functions.
   - Download your Firebase config file and replace it in `/src/services/firebaseConfig.js`.

4. **Environment Variables**:

   Create a `.env.local` file and add your Firebase environment variables:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

5. **Run the app**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage 📖

### Creating a Trip

1. Navigate to the **Create Trip** page.
2. Enter your travel details such as destination, budget, number of travelers, and travel duration.
3. Submit to generate a personalized itinerary using AI.

### Viewing Saved Trips

1. Navigate to the **My Trips** page.
2. View all your previously saved trips.
3. Click on "View Details" for more information on each trip.

## Project Structure 🗂️

```bash
/src
  /components         # Reusable UI components
  /pages              # Page components (Home, MyTrips, CreateTrip)
  /services           # Firebase configuration and services
  /ui                 # UI components like buttons, modals
  App.tsx             # Root component
  index.tsx           # Entry point of the app
```

## Firebase Setup ⚙️

Ensure that you have the following services enabled on Firebase:
- Firestore: For storing trip data.
- Firebase Authentication: For user sign-in and sign-out.
- Firebase Cloud Functions: For handling serverless logic, such as itinerary generation.

## Deployment 🚀

To deploy the app using Vercel:

1. Push your code to GitHub.
2. Link your repository to Vercel.
3. Set your environment variables in the Vercel dashboard.
4. Deploy!

Alternatively, you can use Firebase Hosting.

## Contributing 🤝

Contributions are welcome! If you want to improve or extend the functionality of Safarnama, feel free to open an issue or submit a pull request.

## License 📄

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact 📧

For any queries, feel free to reach out at `jaiswalviraj72005@gmail.com`.

