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
app.post('/api/extort', async (req, res) => {
  const { playerId } = req.body;
  try {
    const roll = Math.random();
    // Area boy tax challenge loop
    if (roll > 0.30) {
      res.json({ 
        success: true, 
        payout: 75000, 
        credGain: 5,
        message: "Oshodi run clean! You collected ₦75,000 protection tax from local transit parks." 
      });
    } else {
      res.json({ 
        success: false, 
        message: "Agberos blocked the path! You dropped your phone and wallet trying to scale a highway fence." 
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/heist', async (req, res) => {
  const { playerId } = req.body;
  try {
    const roll = Math.random();
    // High-heat island operational loop
    if (roll > 0.55) {
      res.json({ 
        success: true, 
        payout: 3500000, 
        heatGain: 15,
        message: "Heist successful! Your hackers bypassed the security protocol on the Lekki yacht party." 
      });
    } else {
      res.json({ 
        success: false, 
        heatGain: 25,
        message: "Alarms triggered! The naval task force cornered your speedboats. You escaped, but your operational heat is burning." 
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
