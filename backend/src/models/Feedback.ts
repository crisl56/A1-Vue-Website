import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
	{
		userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true},
		feedback: { type: String, trim: true, required: true },
	},
	{
		timestamps: true
	}
);

export const Feedback = mongoose.model("Feedback", feedbackSchema)
