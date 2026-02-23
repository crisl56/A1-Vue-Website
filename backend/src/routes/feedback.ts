import { Router } from "express";
import { Feedback } from "../models/Feedback";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const created = await Feedback.create(req.body);
		res.status(201).json(created);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
})

router.get("/", async (req, res) => {
	try {
		const feedback = await Feedback.find({}).sort({ email: 1 });
		res.json(feedback);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
});

router.get("/", async (req, res) => {
	try {
		const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
		res.json(feedbacks);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		if (!updated) return res.status(404).json({ error: "Feedback not found or updated" });
		res.json(updated);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deleted = await Feedback.findByIdAndDelete(req.params.id);
		if (!deleted) return res.status(404).json({ error: "Feedback not found or deleted" });
		res.json(deleted);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}

});

export default router;