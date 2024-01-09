module.exports = mongoose => {

    var userSchema = new mongoose.Schema({
            _id : {
                type: Number,
            },
            username: {
                type: String,
                unique: true,
                required: true,
            },
            firstName: {
                type: String,
            },
            lastName: {
                type: String,
            },
            phone: {
                type: Number,
            },
            address: {
                type: String,
            },
            address2: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            country: {
                type: String,
            },
            zipCode: {
                type: Number,
            },
            email: {
                type: String,
                unique: true,
                required: true,
            },
            password: {
                type: String,
                max: 1022,
                min: 8,
            },
            isActive: {
                type: Boolean,
            },
            token: {
                type: String,
            },
    }, { versionKey: false, timestamps: true,  }); // This option disables the automatic creation of the default _id field

    // NOTE >>> If you want to use id instead of _id, but which is not advisable. 
    // userSchema.method('toClient', function() {
    //     var obj = this.toObject();
    //
    //     //Rename fields
    //     obj.id = obj._id;
    //     delete obj._id;'
    //
    //     return obj;
    // });

    const User = mongoose.model("User", userSchema);
    // User.create({ id: 4427, username: "admin", firstName: "Oyebanji", lastName: "Gabriel", phone: 2347038662402, address: '11a, Chidison str', address2: '14, Lekan Muritala str, Aboru, Lagos', city: 'Iba', state: 'Oyo', country: 'Nigeria', zipCode: 23401, email: "igabrieloyebanji@gmail.com", password: "Administrativerightsonly", roles: [ { id: 5, role: "ROLE_STAFF" } , { id: 6, role: "ROLE_ADMIN" } ], permission: ["project-index", "project-create", "project-delete"], isActive: true });
    // User.create({ _id: 19242498, username: "admin", firstName: "Oyebanji", lastName: "Gabriel", phone: 2347038662402, address: '11a, Chidison str', address2: '14, Lekan Muritala str, Aboru, Lagos', city: 'Iba', state: 'Oyo', country: 'Nigeria', zipCode: 23401, email: "igabrieloyebanji@gmail.com", password: "Administrativerightsonly", isActive: true });
    // console.log(`***** Created New User: ${User}`);
    // console.log("***** Created New User: ", User);
    return User;

}
