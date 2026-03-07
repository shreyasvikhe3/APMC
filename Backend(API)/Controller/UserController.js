// const User = require("../Model/User");
// const user = require("../Model/User");
// //model means schema i.e above user
// //POST API

// const addUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const data = new user({
//             email, password
//         })
//         await data.save();
//         res.status(200).send({ message: "User added successfully" });
//     }
//     catch (err) {
//         res.status(500).send({ message: "Failed to add user", err: err.message });
//     }
// }
//GET API

// const getAllUsers = async (req, res) => {
//     try {
//         const data = await user.find();
//         res.status(200).send(data);
//     }
//     catch (err) {
//         res.status(500).send({ message: "Failed to get users", err: err.message });
//     }
// }

// //Delete API

// const DeleteUsers = async (req, res) => {
//     try{
//     const Delete = await User.deleteOne({ _id: req.params.id })
//     res.status(200).send({ message: "User deleted successfully" });
//     }
//     catch (err) {
//         res.status(500).send({ message: "Failed to delete user", err: err.message });
//     }
// }

// // Update API
// const UpdateUsers = async (req, res) => {
//     const { email, password } = req.body;
//     const userData ={
//         email, password
//     }
//     try {
//         // const Update = await User.updateOne({ _id: req.params.id },{$set: { name, address }});
//         const Update = await User.updateOne({ _id: req.params.id },{$set: userData});
//         res.status(200).send({ message: "User updated successfully" });
//         if(Update.modifiedCount>0){
//             res.status(200).send({ message: "User updated successfully..." });
//         }
//         else{
//             res.status(404).send({ message: "User not found or no changes made" });
//         }
//     }
//     catch (err) {
//         res.status(500).send({ message: "Failed to update user", err: err.message });
//     }
// }

import express from "express";
import { addUser, getAllUsers, DeleteUsers, UpdateUsers } from "../Controllers/UserController.js";

const router = express.Router();

router.post("/user", addUser);
router.get("/findData", getAllUsers);
router.delete("/deleteUser/:id", DeleteUsers);
router.put("/updateUser/:id", UpdateUsers);

export default router;