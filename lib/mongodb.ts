import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
      throw new Error(`Что-то не так с env переменной: ${process.env.MONGODB_URI}`);
}

("@ts-ignore");

export const connectToMongoDB = async () => {
      try {
            const { connection } = await mongoose.connect(process.env.MONGODB_URI!);

            if (connection.readyState === 1) {
                  return Promise.resolve(true);
            }
      } catch (err) {
            return Promise.reject(err);
      }
};
