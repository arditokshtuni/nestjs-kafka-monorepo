import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsDateString,
    IsInt,
    Min,
    MaxLength,
} from 'class-validator';

export class CreateEventDto {
    @IsNotEmpty({ message: 'Title is required' })
    @IsString({ message: 'Title must be a string' })
    @MaxLength(255)
    title: string;

    @IsOptional()
    @IsString({ message: 'Description must be a string' })
    description: string;

    @IsNotEmpty({ message: 'Date is required' })
    @IsDateString({}, { message: 'Date must be a valid date string' })
    date: string;

    @IsNotEmpty({ message: 'Location must be a string' })
    @IsNotEmpty({ message: 'Location is required' })
    @MaxLength(255)
    location: string;

    @IsInt()
    @Min(1, { message: 'Capacity must be at least 1' })
    capacity: number;

    @IsInt()
    @Min(0, { message: 'Price must be at least 0' })
    @IsOptional()
    price: number;
}
