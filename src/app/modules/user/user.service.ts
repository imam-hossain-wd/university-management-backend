import config from "../../../config";
import { IUser } from "./user.interface"
import { User } from "./user.model"
import { generateUserId } from "./user.utils";
import ApiError from '../../../error/ApiError';


const createUser = async (user: IUser): Promise<IUser | null> => {
    const id = await generateUserId();
    user.id = id;
    if (!user.password) {
      user.password = config.default_user_pass as string;
    }
  
    const createdUser = await User.create(user);
  
    if (!createdUser) {
      throw new ApiError(400,'Failed to create');
    }
    return createdUser;
  }


export const userService ={
    createUser
}