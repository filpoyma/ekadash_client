export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  mobile_phone: string;
  email: string;
  push_notifications: { contents: { en: string }; headings: {}; id: string; is_read: boolean }[];
}

export interface IUserUpdate extends Partial<IUser> {}
