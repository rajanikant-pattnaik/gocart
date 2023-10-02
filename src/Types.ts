export interface post {
  name: string;
  owner: string;
  star: number;
  price: number;
}
export interface UserState {
  user: null | {
    username: string;
    id: string;
    email: string;
    userType: string;
  };
}
