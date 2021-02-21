export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  is_active?: boolean;
  is_deleted?: boolean;
}
