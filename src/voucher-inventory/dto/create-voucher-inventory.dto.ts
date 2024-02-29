import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateVoucherInventoryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  description: string;
}
