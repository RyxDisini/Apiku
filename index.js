const express = require('express');
const cors = require('cors');
const path = require('path');
const { ragBot,
  degreeGuru,
  pinecone,
  smartContract,
  blackboxAIChat,
  GPT,
  luminai
} = require("./api/ai.js")
const { Shadow,
  Romantic,
  Smoke,
  BurnPapper,
  Naruto,
  LoveMsg,
  MsgGrass,
  Glitch,
  DoubleHeart,
  CoffeCup,
  LoveText,
  Butterfly
} = require("./api/photooxy.js")
const app = express();
const PORT = process.env.PORT || 3000;
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/home.html'));
});

app.get('/about/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/about.html'));
});

app.get('/chatbot', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/exp/chatbot.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/dash.html'));
});
app.get('/changelog', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/exp/changelog.html'));
})
app.get('/cooming', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/exp/soon.html'));
});
/* PEMBATAS HTML */
app.get('/api/ragbot', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await ragBot(message);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/degreeguru', async (req, res) => {
  try {
    const { message }= req.query;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await degreeGuru(message);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/pinecone', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await pinecone(message);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/smartcontract', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await smartContract(message);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/blackboxAIChat', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await blackboxAIChat(message);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/luminai', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await luminai(message);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/openai', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    const response = await GPT(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// DOWNLOADER 
app.get('/api/igdl', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) {
      return res.status(400).json({ error: 'Your Link?' });
    }
    const respon = await igdl(url);
    res.status(200).json({
      status: 200,
      creator: 'Ryx',
      data: { video: respon}
    });
  } catch (error) {
    res.status(500).json({ error: 'Ups, ada Yang Eror! Hub Owner Website kami di about' });
  }
});

app.get('/api/tiktok', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) {
      return res.status(400).json({ error: 'Your Link?' });
    }
    const respon = await tiktok(url);
    res.status(200).json({
      status: 200,
      creator: 'Ryx',
      data: { video: respon }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ups, ada Yang Eror! Hub Owner Website kami di about' });
  }
});
app.get('/api/sportify', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) {
      return res.status(400).json({ error: 'Your Link?' });
    }
    const respon = await spotify(url);
    res.status(200).json({
      status: 200,
      creator: 'Ryx',
      data: { url: respon }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ups, ada Yang Eror! Hub Owner Website kami di about' });
  }
});

app.get('/api/shadow', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await Shadow(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/romantic', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await Romantic(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/burnpapper', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await BurnPapper(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/Smoke', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }

    const imageUrl = await Smoke(text);

    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { imageUrl }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/naruto', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await naruto(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/lovemsg', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await lovemsg(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/msggrass', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await msggrass(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/glitch', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await glitch(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/doubleheart', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await doubleheart(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/coffeecup', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await coffeecup(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/lovetext', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await lovetext(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/butterfly', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) {
      return res.status(400).json({ error: 'Parameter "text" tidak ditemukan' });
    }
    const response = await butterfly(text);
    res.status(200).json({
      status: 200,
      creator: "Ryx",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/* PEMBATAS */
// Handle 404 error
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'pages', 'system', '404.html'));
});

// Handle 500 error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'pages', 'system', 'error.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app
