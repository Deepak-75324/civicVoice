
import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../modules/users/user.model.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function createOfficer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected.");

    const name = (await rl.question("Officer name: ")).trim();
    const email = (await rl.question("Officer email: "))
      .trim()
      .toLowerCase();
    const password = await rl.question("Temporary password: ");

    if (!name || !email || password.length < 8) {
      throw new Error(
        "Name and email are required; password must be at least 8 characters."
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("An account with this email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role: "officer",
    });

    console.log("Officer account created successfully.");
    console.log(`Login email: ${email}`);
  } catch (error) {
    console.error("Could not create officer:", error.message);
    process.exitCode = 1;
  } finally {
    rl.close();
    await mongoose.disconnect().catch(() => {});
  }
}

createOfficer();
