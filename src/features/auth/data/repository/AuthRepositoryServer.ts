import type AuthRepository from '../../domain/repository/AuthRepository';
import * as Api from '../remote/api';

export default class AuthRepositoryServer implements AuthRepository {
  async login(email: string, password: string): Promise<string> {
    console.log("Login");
    const res = await Api.login(email, password);
    return res;
  }

  async forgotPassword(email: string): Promise<string> {
    const res = await Api.forgotPassword(email);
    return res;
  }

  async signup(email: string, password: string): Promise<string> {
    const res = await Api.signup(email, password);
    return res;
  }
}
