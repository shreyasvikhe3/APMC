export const verifyOTP = async (req, res) => {

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    if (user.otp != otp || user.otpExpire < Date.now()) {
        return res.status(400).json({ msg: "Invalid OTP" });
    }

    res.json({ msg: "OTP verified" });
};
import bcrypt from "bcryptjs";

export const resetPassword = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user.otp = undefined;
    user.otpExpire = undefined;

    await user.save();

    res.json({ msg: "Password Updated" });
};
import User from "../Models/User.js";
import nodemailer from "nodemailer";

export const forgotPassword = async (req, res) => {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ msg: "Email not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    user.otp = otp;
    user.otpExpire = Date.now() + 5 * 60 * 1000;

    await user.save();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "yourgmail@gmail.com",
            pass: "yourapppassword"
        }
    });

    await transporter.sendMail({
        from: "Admin",
        to: email,
        subject: "Password Reset OTP",
        text: `Your OTP is ${otp}`
    });

    res.json({ msg: "OTP sent to email" });
};