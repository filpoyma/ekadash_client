import { IUser } from '../models/User.model';

export interface ILoginRequestData {
  deviceId: string;
}

export interface ISignUpRequestData {
  deviceId: string;
  language: string;
}

export interface ILoginResponseData extends IUser {
  auth_token: string;
}

export interface RequestSMSData {
  mobile_phone: string;
}

export interface ResponseSMSData {
  message: string;
}
