import express from "express";
import myUser from "../models/User.js";

const myRouter = express.Router();

myRouter.delete("/:reqID4Delete", async (req, res) => {
  let mySuccess = false;
  const delID = req.params.reqID4Delete;

  try {
    const getUser = await myUser.findById(delID);

    if (!getUser) {
      return res
        .status(404)
        .send({ success: mySuccess, message: "No User Found for this ID" });
    }

    const deletedUser = await myUser.findByIdAndDelete(delID);

    mySuccess = true;

    return res.status(200).json({
      success: mySuccess,
      message: "User deleted successfully",
      deletedData: deletedUser,
    });
  } catch (error) {
    console.error("Delete Error:", error);
    return res.status(500).send({
      success: mySuccess,
      message: "Internal Server Error",
    });
  }
});

export default myRouter;
