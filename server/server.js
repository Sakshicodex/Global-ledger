require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const { Readable } = require('stream'); // Import the Readable module from 'stream'


const bufferToStream = (buffer) => {
  const stream = new Readable();
  stream.push(buffer); // Push the buffer to the stream
  stream.push(null); // Indicate the end of the stream (EOF)
  return stream;
};

const app = express();
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['https://nvision-24.vercel.app','https://nvision-24.vercel.app/','http://localhost:5173','https://stingray-app-7s33s.ondigitalocean.app']; // List your allowed origins just once
    if (!origin || allowedOrigins.includes(origin)) { // Use 'includes' for better readability
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
  optionsSuccessStatus: 204
};

app.options('*', cors(corsOptions)); // This will apply to all OPTIONS requests
app.use(cors(corsOptions)); // This applies CORS to all other requests



app.use(express.json());

// Configure a JWT auth client
let jwtClient = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  
  process.env.GOOGLE_PRIVATE_KEY,// Replace escaped newlines
  ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets']
);

// Authenticate request
jwtClient.authorize(function (error) {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("Successfully connected!");
  }
});

// Google Drive: Upload function

// Google Sheets: Update function
async function appendToSheet(spreadsheetId, range, values) {
  const sheets = google.sheets({ version: 'v4', auth: jwtClient });
  await sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [values] }
  });
}



app.post('/append-form-data', async (req, res) => {
    // Assuming your form data is sent as a JSON object in the request body
    const formData = req.body; // { name: "John", email: "john@example.com", message: "Hello!" }

    // Convert the object values to an array to match the expected format for appendToSheet
    const values = Object.values(formData);

    // Specify your Google Sheets ID and the range where you want to append the data
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID; // Make sure this is set in your .env file
    const range = 'Sheet1'; // Adjust based on your actual sheet name and desired range

    try {
        await appendToSheet(spreadsheetId, range, values);
        res.status(200).send('Form data appended to Google Sheets successfully.');
    } catch (error) {
        console.error('Error appending form data to Google Sheets:', error);
        res.status(500).send('Failed to append form data to Google Sheets.');
    }
});


app.get('/', (req, res) => {
  res.send('Welcome to my website!');
});
app.get('/submit-abstract', (req, res) => {
  res.send('Welcome to my website!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

