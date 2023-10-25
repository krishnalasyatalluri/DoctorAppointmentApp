const Slot=require("../models/slotModel")
const slotCltr={}
slotCltr.findSlots=async (req, res) => {
    const { doctorId } = req.params;
    try {
        const slots = await Slot.find({ doctorId, isAvailable: true });
        res.json(slots);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = slotCltr;