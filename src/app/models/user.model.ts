export interface User {
  user_id?: number;
  email: string;
  name: string;
  age?: number;
  department?: string;
  address?: string;
  position?: string;
  password?: string;
  password_confirmation?: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
  message?: string;
}