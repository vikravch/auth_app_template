export interface AuthStore {
  token: string
  error: string
}
export interface LoginData {
  username: string
  password: string
}
export interface SignupData {
  username: string
  password: string
}
export interface ForgotPasswordData {
  username: string
}
