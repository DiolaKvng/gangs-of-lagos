const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Supabase using the URL you generated earlier
const supabase = createClient(
  "https://supabase.co", 
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

app.get('/', (req, res) => {
  res.send('Gangs of Lagos Game Server Running Securely!');
});

// Smuggling checkpoint resolution endpoint
app.post('/api/smuggle', async (req, res) => {
  const { playerId } = req.body;
  try {
    const roll = Math.random();
    if (roll > 0.4) {
      res.json({ success: true, message: "Success! You crossed the Third Mainland Bridge safely." });
    } else {
      res.json({ success: false, message: "Busted! The Task Force seized your cargo stash." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server blasting live on port ${PORT}`));
