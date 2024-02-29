import { IsDateString, IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsFutureDate } from 'src/util/date-validator';

export class CreateVoucherInventoryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @Validate(IsFutureDate)
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  description: string;
}
