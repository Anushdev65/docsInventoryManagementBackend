import { Schema, SchemaType } from "mongoose";

const candidateInfoSchema = Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },

    middleName: {
      type: String,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    passportNum: {
      type: Number,
      trim: true,
    },

    parmanentAddress: {
      type: String,
    },

    temporaryAddress: {
      type: String,
    },

    maritalStatus: {
      type: Boolean,
      defalut: false,
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    appliedPosition: {
      type: String,
      trim: true,
    },

    documents: [
      {
        type: String,
      },
    ],

    associatedCompany: {
      type: Schema.Types.ObjectId,
      ref: "AssociatedCompany",
    },
  },
  { timestamps: true }
);

export default candidateInfoSchema;
