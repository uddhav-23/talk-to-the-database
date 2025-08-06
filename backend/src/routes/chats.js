const express = require('express');
const router = express.Router();
const { generateSQL } = require('../services/openai');
const { executeQuery, getSchema } = require('../services/db');
const { validateSQL } = require('../utils/sqlValidator');
const { formatResult } = require('../utils/formatResponse');

router.post('/', async (req, res) => {
  const { message, schemaKey } = req.body;
  try {
    const schema = getSchema(schemaKey);
    const sqlQuery = await generateSQL(message, schema);
    const validation = validateSQL(sqlQuery);
    if (validation.isDangerous) {
      return res.json({ warning: validation.warning, query: sqlQuery });
    }
    const result = await executeQuery(sqlQuery);
    res.json({ result: formatResult(result), query: sqlQuery });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
