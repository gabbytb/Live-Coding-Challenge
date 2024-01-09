const db = require("../models");
const Role = db.roles;







// Create New User
exports.createRole = async (req, res) => {
   
    try {
        const { id, role } = req.body;
        const roleExists = await Role.findOne({ role: role.toUpperCase() });

        // FORM VALIDATION:  If any of these fields, is missing in the payload, display 'errMsg' !!!!
        if (!(id && role)) {
            const errorMessage = {
                success: false,
                message: "Fill the required inputs"
            }
            return res.status(200).json(errorMessage);
        } else if (roleExists) {
            const errorMessage = {
                success: false,
                message: "Role exists."
            }
            return res.status(200).json(errorMessage);
        } else {
            const newRole = new Role ({
                _id: id,
                role: role.toUpperCase(),    // sanitize: convert role to uppercase
            });          

            newRole.save();
            // *********************************************************************                         
            // ******************    LOG: CONSOLE IN BACKEND     *******************
            // *********************************************************************                         
            console.log(`\n*********************************************************
                         \n*****        NEW => ROLE SUCCESSFULLY SAVED         ***** 
                         \n********************************************************* 
                         \n ${newRole} 
                         \n*********************************************************
                         \n*********************************************************`);
            // *********************************************************************                         
            // *********************************************************************                         
            

            const savedRole = {
                success: true,
                data: newRole,
                message: "ROLE SAVED SUCCESSFULLY !!!",
            }
            return res.status(201).json(savedRole);
        }
    } catch (error) {      
        const serverErrorMsg = {
            success: false,
            error: error.message,
            message: "Internal Server Error",
        }
        return res.status(500).json(serverErrorMsg);
        // return res.status(500).json(`Internal Server Error: ${err}`);
    }
};






// Find All Users
exports.findAllUserRoles = async (req, res) => {
    // res.setHeader('Content-Type', 'application/json');

    try {
        const allRoles = await Role.find({});
        const usersRetrieved = {
            success: true,
            data: allRoles,
            message: "Data Retrieved Successfully"
        }
        return res.status(200).json(usersRetrieved);
    } catch (error) {
        return res.status(500).json(`Internal Server Error: ${err}`);
    }
};






// Find All isActive Users
// exports.findRoleById = async (req, res) => {
//     //  res.setHeader('Content-Type', 'application/json');
//     //  This method is typically used to look up a user by their unique identifier.
//     const id = req.params.id;
//     try{
//         //  The response body(i.e userId) will contain the user document.
//         //  NOTE:  This is a query operation:- User.findById();
//         const userId = User.findById(id)
//         if (userId) {
//             return res.status(200).json(userId);
//         } else {
//             return res.status(404).json({ message: `User with ID: ${id} not found` });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: `Error retrieving User with ID ${id}`, error });
//     }
// };






// Find All isActive Users
// exports.findAllActive = async (req, res) => {
//     //  res.setHeader('Content-Type', 'application/json');
//     //  NOTE:  To filter a search results, specify a search condition using a "key-value" pair within curly braces, within the find method!
//     //  For example, User.find({ username: 'john' }) would find all users with the username 'john'.     i.e  username = "john"
//     //  In this case, We are searching for records where the isActive property is equal to true.        i.e  isActive = true
//     try {
//         //  The response body(i.e allActiveUsers) will contain an array of user objects representing all the active users.
//         const allActiveUsers = await User.find({ isActive: true });
//         return res.status(200).json(allActiveUsers);
//     } catch(error) {
//         // Catch error
//         return res.status(500).json({ message: 'Error updating user', error });
//     }
// };






// Update User Information
// exports.updateUser = async (req, res) => {
//     //  res.setHeader('Content-Type', 'application/json');
//     const {username, phone, address, address2, city, state, country, zipCode, email} = req.body;
//     const dataToUpdate = {   
//         phone, address, address2, city, state, country, zipCode, token
//     };

//     try {
//         // Use $or to find the user by username or email and update it
//         const updatedUser = await User.findOneAndUpdate({ $or: [{ username }, { email }] }, dataToUpdate, { new: true });
//         if (updatedUser) {

//             const token_key = process.env.TOKEN_KEY
//             const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
//             const token = jwt.sign({userId: updatedUser.id, email}, generatedToken, { expiresIn: "2h" });
//             updatedUser.token = token;
            
//             // User updated successfully
//             res.status(200).json({ message: 'User updated successfully', updatedUser });
//             console.log('\n', "EXISTING USER: ", updatedUser.username + " was updated!", '\n', "EXISITNG USER UPDATED: ", updatedUser);
//             return;
//         } else {
//             // User not found
//             return res.status(404).json({ message: 'User not found' });
//         }
//     } catch (error) {
//         // Catch error
//         return res.status(500).json({ message: 'Error updating user', error });
//     }
// };







// Deleta a User with the Specified id in the request
// exports.deleteUser = async (req, res) => {
//     //  res.setHeader('Content-Type', 'application/json');
//     const id = req.params.id;
//     try{
//         const userId = User.findByIdAndRemove(id, { useFindAndModify: false })
//         if (!(userId)) {
//             return res.status(404).json({ message: `Cannot delete User with ID = ${id}. User was not found!` });
//         } else {
//             return res.status(200).json({ message: "User deleted successfully!", userId});
//         }
//     } catch (error) {
//         return res.status(500).json({ message: `Could not delete User with ID = ${id}`, err });
//     }
// };






// Delete all Users from the Database
// exports.deleteAllUsers = (req, res) => {
//     //  res.setHeader('Content-Type', 'application/json');
//     try{
//         const users = User.deleteMany({});
//         if (!users) {
//             return res.status(404).json({ message: "Failed to execute action!" });
//         } else {
//             return res.status(200).json({ message: `${users.deletedCount} Users was deleted successfully!`});
//         }
//     } catch (error) {
//         return res.status(500).json({ message: error.message || "Some error occurred while removing all Users."});
//     }
// };