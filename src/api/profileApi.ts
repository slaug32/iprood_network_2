import { PhotoType, ProfileType } from "../types";
import { instance, MyResponseType } from "./api";

type SavePhotoDataType = {
  photos: PhotoType;
};

export const ProfileAPI = {
  getProfile(userId: number) {
    return instance
      .get<ProfileType>(`profile/` + userId)
      .then((res) => res.data);
  },

  getStatus(userId: number) {
    return instance
      .get<string>("profile/status/" + userId)
      .then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<MyResponseType>("profile/status", { status: status })
      .then((res) => res.data);
  },

  savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<MyResponseType<SavePhotoDataType>>("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
};
