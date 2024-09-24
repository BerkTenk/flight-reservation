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
            'app_id': '40ff444e',
            'app_key': '33d69f3ac989c680c3180c4b929c5d1b',
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