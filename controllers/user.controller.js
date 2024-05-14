import { httpStatusCodes } from "../constants/constants.js";
import createUser from "../db/database_functions/user/createUser.js";
import sendResponse from "../helpers/sendResponse.js";

export const createUserController = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    return sendResponse(res, httpStatusCodes['Created'], 'success', 'Create a user', user);
  } catch (error) {
    next(error);
  }
}