export interface IUser {
  id: string;
  deviceId: string;
  language: string;
  email: string | null;
  daysRemindPush: number;
  tg: string;
  // push_notifications: {
  //   contents: { title: string; message: string };
  //   id: string;
  //   isRead: boolean;
  // }[];
}

export interface IUserUpdate extends Partial<IUser> {}
