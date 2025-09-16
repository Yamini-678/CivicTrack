const express = require("express");
const router = express.Router();
const Chat = require("../models/chat");

// Index Route - Show all chats
router.get("/", async (req, res) => {
    const chats = await Chat.find();
    res.render("chats/index.ejs", { chats });
});

// New Chat Form
router.get("/new", (req, res) => {
    res.render("chats/new.ejs");
});

// Create Chat
router.post("/", async (req, res) => {
    const { from, to, msg } = req.body;
    await Chat.create({ from, to, msg });
    res.redirect("/chats");
});

// Edit Form
router.get("/:id/edit", async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("chats/edit.ejs", { chat });
});

// Update Chat
router.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { msg } = req.body;
    await Chat.findByIdAndUpdate(id, { msg });
    res.redirect("/chats");
});

// Delete Chat
router.post("/:id/delete", async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

module.exports = router;
