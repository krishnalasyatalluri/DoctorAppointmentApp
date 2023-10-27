// // const Slot = require("../models/slotModel")
// // const slotCltr = {}
// // slotCltr.availableSlots = async (req, res) => {
// //     try {
// //         const availableSlots = await Slot.find({ isAvailable: true });
// //         res.json(availableSlots);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // }
// // slotCltr.bookSlot = async (req, res) => {
// //     const { slotId } = req.body;

// //     try {
// //         const slot = await Slot.findById(slotId);
// //         if (!slot || !slot.isAvailable) {
// //             return res.status(400).json({ error: 'Invalid or unavailable slot' });
// //         }

// //         // Update the slot to mark it as booked
// //         slot.isAvailable = false;
// //         await slot.save();

// //         res.json({ message: 'Slot booked successfully' });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // }
// // // Add a new endpoint to create slots
// // slotCltr.create = async (req, res) => {
// //     const { doctorId, startDateTime, endDateTime } = req.body;

// //     try {
// //         const slot = new Slot({
// //             doctorId,
// //             startDateTime,
// //             endDateTime,
// //             isAvailable: true
// //         });

// //         await slot.save();
// //         res.json({ message: 'Slot created successfully' });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // }

// // module.exports = slotCltr;
// const Slot = require("../models/slotModel");
// const slotCltr = {};

// slotCltr.availableSlots = async (req, res) => {
//     try {
//         const availableSlots = await Slot.find({ isAvailable: true });
//         res.json(availableSlots);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// slotCltr.bookSlot = async (req, res) => {
//     const { slotId } = req.body;

//     try {
//         const slot = await Slot.findById(slotId);
//         if (!slot || !slot.isAvailable) {
//             return res.status(400).json({ error: 'Invalid or unavailable slot' });
//         }

//         // Update the slot to mark it as booked
//         slot.isAvailable = false;
//         await slot.save();

//         res.json({ message: 'Slot booked successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// slotCltr.create = async (req, res) => {
//     const { doctorId, startDateTime, endDateTime } = req.body;

//     try {
//         const slot = new Slot({
//             doctorId,
//             startDateTime,
//             endDateTime,
//             isAvailable: true
//         });

//         await slot.save();
//         res.json({ message: 'Slot created successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = slotCltr;
const Slot = require("../models/slotModel");

const slotCltr = {};

slotCltr.availableSlots = async (req, res) => {
    try {
        const availableSlots = await Slot.find({ isAvailable: true });
        res.json(availableSlots);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

slotCltr.bookSlot = async (req, res) => {
    const { slotId } = req.body;

    try {
        const slot = await Slot.findById(slotId);
        if (!slot || !slot.isAvailable) {
            return res.status(400).json({ error: 'Invalid or unavailable slot' });
        }

        // Update the slot to mark it as booked
        slot.isAvailable = false;
        await slot.save();

        res.json({ message: 'Slot booked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

slotCltr.create = async (req, res) => {
    const { doctorId, startDateTime, endDateTime } = req.body;

    try {
        const slot = new Slot({
            doctorId,
            startDateTime,
            endDateTime,
            isAvailable: true
        });

        await slot.save();
        res.json({ message: 'Slot created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = slotCltr;
