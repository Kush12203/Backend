const express = require("express");

const {
    createUser, 
    loginUserCtrl, 
    getallUser, 
    getaUser, 
    deleteaUser, 
    updatedUser, 
    blockUser, 
    unblockUser,
    logout,
    handleRefreshToken,
    updatePassword,
    forgotPasswordToken,
    loginAdmin,
    getWishlist,
    saveAddress,
} = require("../controller/userCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware")

const router = express.Router();
router.post("/register",createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/login",loginUserCtrl);
router.post("/admin-login",loginAdmin);
router.get('/all-users',getallUser);
router.get("/logout", logout);
router.get('/refresh', handleRefreshToken);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/:id', authMiddleware, isAdmin , getaUser);
router.delete('/:id',deleteaUser);
router.put('/edit-user',authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put('/block-user/:id',authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id',authMiddleware, isAdmin, unblockUser);
module.exports = router;

 