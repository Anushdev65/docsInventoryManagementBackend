import { Schema } from "mongoose";

const associatedCompanySchema = Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
    },
  },

  { timestamps: true }
);

export default associatedCompanySchema;
