const mongoose = require('mongoose');
// const { Schema } = mongoose;

const Program = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    company_id: {type: connection.Schema.Types.ObjectId, required: false},
    slug: {
      type: String,
      required: true,
    },
    content: Object,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Programs', Program);