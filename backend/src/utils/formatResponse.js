function formatResult(result) {
  if (!result || result.length === 0) return "No results found.";
  // Format as markdown table
  const headers = Object.keys(result[0]);
  const table = [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...result.map(row => `| ${headers.map(h => row[h]).join(' | ')} |`)
  ];
  return table.join('\n');
}

module.exports = { formatResult };
