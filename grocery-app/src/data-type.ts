export interface User_Register_Model {
    first_name?: string;
    last_name?: string;
    primary_mobile_number?: number;
    primary_email?: string;
    username: string;
    password: string;
  }
  
  export interface User_Login_Model{

    username: string | null,
    password: string | null
    
  }