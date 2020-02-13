export class User {
    constructor(
        public id_user: number,
        public fullname_user: string,
        public user_name: string,
        public email_user: string,
        public password_user: string,
        public token_user: string,
        public img_user: string,
        public access_user: string,
        public token?: string
    ){

    }
}
