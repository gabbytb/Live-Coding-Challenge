module.exports = mongoose => {

    
    var roleSchema = new mongoose.Schema({
        _id : {
            type: Number,
        },
        role: {
            type: String,
            unique: true,
            required: true,
        },
    }, { versionKey: false, timestamps: true, });


    const Role = mongoose.model("Role", roleSchema);
    return Role;

};