const axios = require('axios');

module.exports = async (req, res) => {
    try {
      const { searchQ, page } = req.query;
      const apiKey = '4bc4912a5f8448e09f5da308e62c27be'; // Replace with your actual API key
  
      const apiUrl = `https://newsapi.org/v2/everything?q=${searchQ}&from=${year}-${month}-${day}&sortBy=publishedAt&pageSize=5&page=${page}`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
  
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  }