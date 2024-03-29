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
    userCart,
    getUserCart,
    createOrder,
    resetPassword,
    removeProductFromCart,
    updateProductQuantityFromCart,
    getMyOrders,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { checkout, paymentVerification } = require("../controller/paymentCtrl");

const router = express.Router();
router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/order/checkout", authMiddleware, checkout)
router.post("/order/paymentVerification",authMiddleware, paymentVerification)

// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.get('/all-users', getallUser);
router.get("/getmyorders", authMiddleware, getMyOrders);
// router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
// router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);
router.get("/logout", logout);
router.get('/refresh', handleRefreshToken);
router.get('/wishlist', authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);
// router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete('/:id', deleteaUser);
// router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);
router.put('/edit-user', authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
module.exports = router;

