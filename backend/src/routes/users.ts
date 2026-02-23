import { Router } from "express";
import { User } from "../models/Users";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const created = await User.create(req.body);
		res.status(201).json(created);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
})

router.get("/", async (req, res) => {
	try {
		const users = await User.find({}).sort({ email: 1 });
		res.json(users);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ error: "User not found" });
		res.json(user);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		if (!updated) return res.status(404).json({ error: "User not found or updated" });
		res.json(updated);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deleted = await User.findByIdAndDelete(req.params.id);
		if (!deleted) return res.status(404).json({ error: "User not found or deleted" });
		res.json(deleted);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}

});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json({ error: "User not found" });

		// very secure and encrypted password method trust me
		if (user.password !== password) {
			return res.status(401).json({ error: "Invalid password" });
		}

		res.json({ _id: user._id, email: user.email });
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
});

export default router;