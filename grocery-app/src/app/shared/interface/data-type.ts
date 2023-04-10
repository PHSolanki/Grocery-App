export interface User_Register_Model {

  first_name?: string;
  last_name?: string;
  primary_mobile_number?: number;
  primary_email?: string;
  username: string;
  password: string;

}
  
export interface User_Login_Model{

  username: string | null | undefined,
  password: string | null | undefined
    
}

export interface Add_User_Address {

  address_line_1: string;
  address_line_2: string;
  area: string;
  city: string;
  state: string;
  country: string;
  postal_code: number;
  landmark: string;
  tag: string;
} 

export interface Category {

  id: number;
  title: string;
  parent_id: number;

}

export interface ChangePassword{

  oldPassword : string, 
  newPassword : string

}

export interface Edit_user_detail{

  first_name: string;
  last_name: string;
  password: string;
  date_of_birth: string; 
  secondary_mobile_number: number;
  secondary_email: string;

}

export interface User_Address {
  address_line_1: string;
  address_line_2?: string;
  area: string;
  city: string;
  state: string;
  country: string;
  postal_code: number;
  landmark?: string;
  tag?: string;
}

