import { User } from "./user.model";

export const findLastUserId = async (): Promise<string | undefined> => {
    const lastUser = await User.findOne({}, { id: 1, _id: 0 })
      .sort({
        createdAt: -1,
      })
      .lean();
  
    return lastUser?.id;
  };