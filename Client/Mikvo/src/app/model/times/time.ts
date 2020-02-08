export class Time {
    constructor(
        public id_time: number,
        public iduser_time: number,
        public type_time: string,
        public start_time: Date,
        public end_time: Date,
        public activity_time: Time        
    ){

    }
}