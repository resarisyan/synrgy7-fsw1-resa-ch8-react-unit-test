import CryptoJS from 'crypto-js';
import { UserResponse } from './dto/response/userResponse';

const encryptionKey = import.meta.env.VITE_ENCRYPT_KEY as string;

export const EncryptString = (val: string) => {
  return CryptoJS.AES.encrypt(val, encryptionKey).toString();
};

export const DecryptString = (val: string) => {
  const bytes = CryptoJS.AES.decrypt(val, encryptionKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const EncryptUser = (data: UserResponse) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
};

export const DecryptUser = (val: string): UserResponse => {
  const bytes = CryptoJS.AES.decrypt(val, encryptionKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
