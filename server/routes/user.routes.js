module.exports = app => {

    const router = require("express").Router();
    const users = require("../controllers/test.controllers.js");    
    


    // Create a New User
    router.post("/admin/users/manage/create", users.create);

    // Login User
    router.post("/auth/login", users.logIn);
    
    // Retrieve all Users 
    router.get("/admin/users/manage", users.findAll);

    // Retrieve all active Users
    router.get("/admin/users/manage/active", users.findAllActive);

    // Retrieve a single user by Id
    router.get("/admin/users/manage/:id", users.findUserById);

    // Retrieve a single user by Id
    router.put("/admin/users/manage/update/:id", users.updateUser);

    // Retrieve a single user by Id
    router.delete("/admin/users/manage/delete/:id", users.deleteUser);

    // Delete all user entries
    router.delete("/admin/users/manage/delete", users.deleteAllUsers);



    app.use("/api/v1", router);

};