const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true
  },
  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case'
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed
  }
});

module.exports = mongoose.model('Log', LogSchema);