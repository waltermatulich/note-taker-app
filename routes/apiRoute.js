const router = require("express").Router();
const store = require("../db/store");



router.get("/notes", async (req, res) => {
    const notesData = await store.getNotes()
    res.json(notesData)
});

router.post("/notes", async (req, res) => {
    const newNote = await store.addNotes(req.body)
    res.json(newNote)
})
router.delete("/notes/:id", async (req, res) => {
    await store.removeNote(req.params.id)
    res.json("success")
});
module.exports = router;