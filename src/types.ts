export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotoType;
  aboutMe: string;
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotoType = {
  small: string | null;
  large: string | null;
};

export type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: PhotoType;
  followed: boolean;
};

export type DialogsType = {
  id: number;
  name: string;
};
