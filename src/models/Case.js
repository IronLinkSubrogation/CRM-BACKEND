// src/models/Case.js
const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
  referenceId: {
    type: String,
    required: true,
    unique: true
  },
  insuredName: String,
  insurer: String,
  claimNumber: String,
  status: {
    type: String,
    enum: ['open', 'closed', 'archived'],
    default: 'open'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  notes: [String]
}, { timestamps: true });

module.exports = mongoose.model('Case', CaseSchema);