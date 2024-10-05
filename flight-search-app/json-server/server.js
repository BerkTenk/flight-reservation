const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
app.use(cors()); // CORS'u etkinleştir

// Schiphol API uçuş verilerini almak için bir endpoint tanımla
app.get('/api/flights', async (req, res) => {
    try {
        const url = 'https://api.schiphol.nl/public-flights/flights';
        const headers = {
            'Accept': 'application/json',
            'app_id': `${process.env.YOUR_APP_ID}`,
            'app_key': `${process.env.YOUR_APP_KEY}`,
            'ResourceVersion': 'v4'
        };

        // API'yi çağır
        const response = await axios.get(url, { headers });
        res.json(response.data);  // Veriyi JSON formatında frontend'e gönder
    } catch (error) {
        console.error('Error fetching flight data:', error);
        res.status(500).json({ error: 'Error fetching flight data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});