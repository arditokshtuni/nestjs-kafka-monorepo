import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Request,
    UseGuards,
    ParseUUIDPipe,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { TicketsService } from './tickets.service'
import { PurchaseTicketDto, CheckInTicketDto } from '@app/common'

@Controller('tickets')
@UseGuards(AuthGuard('jwt'))
export class TicketsController {
    constructor(
        private readonly tciketsService: TicketsService,
    ) {}

    @Post('purchase')
    purchase(
        @Body() purchaseDto: PurchaseTicketDto,
        @Request() req : { user: { userId: string } },
    ) {
        return this.tciketsService.purchase(purchaseDto, req.user.userId);
    }

    @Get('my-tickets')
    findMyTickets(
        @Request() req : { user: { userId: string } },
    ) {
        return this.tciketsService.findMyTickets(req.user.userId);
    }

    @Get(':id')
    findOne(
        @Param('id', ParseUUIDPipe) id: string,
        @Request() req : { user: { userId: string } },
    ) {
        return this.tciketsService.findOne(id, req.user.userId);
    }

    @Post(':id/cancel')
    cancel(
        @Param('id', ParseUUIDPipe) id: string,
        @Request() req : { user: { userId: string } },
    ) {
        return this.tciketsService.cancel(id, req.user.userId);
    }

    @Post('check-in')
    checkIn(
        @Body() checkInDto: CheckInTicketDto,
        @Request() req : { user: { userId: string } },
    ) {
        return this.tciketsService.checkIn(checkInDto, req.user.userId);
    }

    @Get('event/:eventId')
    findEventTickets(
        @Param('eventId', ParseUUIDPipe) eventId: string,
        @Request() req : { user: { userId: string } },
    ) {
        return this.tciketsService.findEventTickets(eventId, req.user.userId);
    }

}
