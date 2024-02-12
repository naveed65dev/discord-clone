 
import User from '../models/userSchema.js';

// Get all user
export const getAllUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a new user

export const createuser = async (req, res) => {
    try {
    
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};











// // Delete user by ID

// exports.deleteduserById = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const deleteduser = await user.findOneAndDelete({ id: id });

//         if (!deleteduser) {
//             return res.status(404).json({ message: 'user not found' });
//         }

//         res.status(200).json({ message: 'user deleted successfully', deleteduser });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
 
// // Update user by ID

// exports.updateduserById = async (req, res) => {
//     const id = req.params.id;

//     try {
//         // Find the existing user by ID and update with the new data
//         const updateduser = await user.findOneAndUpdate(
//             { id: id },
//             req.body,
//             { new: true, runValidators: true }
//         );

//         if (!updateduser) {
//             return res.status(404).json({ message: 'user not found' });
//         }

//         res.status(200).json(updateduser);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating user', error: error.message });
//     }
// };
 
