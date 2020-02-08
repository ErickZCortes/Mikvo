export class Voucher {
    constructor(
        public 	id_voucher: number,
        public 	iduser_voucher: number,
        public date_voucher: Date,
        public dnsname_voucher: string,
        public nusers_voucher: number,
        public server_voucher: string,
        public prefix_voucher: string,
        public idprofile_voucher: number,
        public nprofile_voucher: string
    ){

    }
}