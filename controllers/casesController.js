export const getAllCases = (req, res) => {
  res.json({
    message: 'Retrieved all cases 🎯',
    timestamp: new Date().toISOString()
  });
};