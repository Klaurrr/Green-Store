import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
      email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email Adress"],
      },
      password: {
            type: String,
            required: [true, "password is required"],
            select: false,
      },
});

const User = models.User || model("User", UserSchema);

export default User;
