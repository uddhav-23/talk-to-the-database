function validateSQL(sql) {
  const dangerous = /drop\s+table|delete\s+from|truncate\s+table|alter\s+table/i;
  if (dangerous.test(sql)) {
    return {
      isDangerous: true,
      warning: 'Dangerous operation detected! This query may delete or alter data. Please confirm.'
    };
  }
  return { isDangerous: false };
}

module.exports = { validateSQL };
