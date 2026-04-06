import { IsNotEmpty, IsString } from "class-validator";

export class CheckInTicketDto {
    @IsString({ message: 'Ticket Code must be a vild string' })
    @IsNotEmpty({ message: 'Ticket code is required' })
    ticketCode: string;
}
