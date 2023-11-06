export default interface AuthRepository {
  login: (email: string, password: string) => Promise<string>
  signup: (email: string, password: string) => Promise<string>
  forgotPassword: (email: string) => Promise<string>
};
