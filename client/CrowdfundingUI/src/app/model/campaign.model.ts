export interface Campaign{
    id:number;
    name:string;
    description:string;
    goalAmount: number;
    deadline: Date;
    userId: number;
    donatedAmount: number;
    imageUrl: string;
    category:string;
    status: string ;
}