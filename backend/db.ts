import mongoose from "mongoose";

export async function connectDB(uri: string) {
    await mongoose.connect(uri);
    console.log("Database connected!");
}

export async function disconnectDB() {
    await mongoose.disconnect();
    console.log("Database disconnect.");
}