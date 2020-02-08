export class Detailvoucher {
    constructor(
        public id_detailv: number,
        public idvoucher_detailv: number,
        public server_detailv: string,
        public user_detailv: string,
        public password_detailv: string,
        public limittime_detailv: string,
        public limitbin_detailv: string,
        public limitout_detailv: string
    ){

    }
}