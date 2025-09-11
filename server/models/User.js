// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     _id: {type: String, required:true},
//      email: {type: String, required:true},
//      full_name: {type: String, required:true},
//     username : {type: String, required:true},
//      bio: {type: String, default: 'Hey there! I am using PingUP.'},
//     profile_picture: {type: String, default:''},
//     cover_photo: {type: String, default:""},
//     location: {type: String, default:""},
//     // followers: {type: String, ref:'User'},
//     //  following: {type: String, ref:'User'},
//     // connections: {type: String, ref:'User'},
//      followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
//   following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
//   connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
// },{timestamps: true, minimize:false})

// const User = mongoose.model("User", userSchema)
// export default User

 import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Clerk/User ID

    email: { type: String, required: true },
    full_name: { type: String, required: true },
    username: { type: String, required: true },

    bio: { type: String, default: "Hey there! I am using PingUP." },
    profile_picture: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    location: { type: String, default: "" },

    // ✅ Make these also String, since _id is String
    followers: [{ type: String, ref: "User", default: [] }],
    following: [{ type: String, ref: "User", default: [] }],
    connections: [{ type: String, ref: "User", default: [] }],
  },
  { timestamps: true, minimize: false }
);

const User = mongoose.model("User", userSchema);
export default User;
