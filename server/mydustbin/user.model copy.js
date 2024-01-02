// module.exports = mongoose => {
//     var userSchema = new mongoose.Schema({
//             username: {
//                 type: String,
//                 unique: true,
//             },
//             firstName: {
//                 type: String,
//             },
//             lastName: {
//                 type: String,
//             },
//             phone: {
//                 type: Number,
//             },
//             address: {
//                 type: String,
//             },
//             address2: {
//                 type: String,
//             },
//             city: {
//                 type: String,
//             },
//             state: {
//                 type: String,
//             },
//             country: {
//                 type: String,
//             },
//             zipCode: {
//                 type: Number,
//             },
//             email: {
//                 type: String,
//                 unique: true,
//             },
//             password: {
//                 type: String,
//                 max: 1022,
//                 min: 8,
//             },
//             roles: [
//                 { 
//                     role: {
//                         type: String,
//                     },
//                 },
//                 { timestamps: true, toJSON: {
//                     virtuals: true,
//                     transform: function (doc, ret) {
//                         // Exclude the _id field and include id field in the JSON representation
//                         delete ret._id;
//                         ret.id = ret._id;
//                         delete ret._id;
//                     }
//                   }
//                 }
//             ],
//             // permission: [String],
//             isActive: {
//                 type: Boolean,
//             },
//             token: {
//                 type: String,
//             },
//         }, 
//         { timestamps: true, versionKey: false, toJSON: {
//             virtuals: true,
//             transform: function (doc, ret) {
//                 // Exclude the _id field and include id field in the JSON representation
//                 delete ret._id;
//                 ret.id = ret._id;
//                 delete ret._id;
//             }
//           }
//         }
//     );




//     // Define a virtual 'id' property
//     userSchema.virtual('id').get(function () {
//         return this._id.toHexString();
//     });



//     const User = mongoose.model("User", userSchema);
//     // User.create({ username: "admin", firstName: "Oyebanji", lastName: "Gabriel", phone: 2347038662402, address: '11a, Chidison str', address2: '14, Lekan Muritala str, Aboru, Lagos', city: 'Iba', state: 'Oyo', country: 'Nigeria', zipCode: 23401, email: "igabrieloyebanji@gmail.com", password: "Administrativerightsonly", roles: [ { id: 5, role: "ROLE_STAFF" } , { id: 6, role: "ROLE_ADMIN" } ], permission: ["project-index", "project-create", "project-delete"], isActive: true });
//     // console.log("***** Created New User: ", User);
//     return User;

// };

