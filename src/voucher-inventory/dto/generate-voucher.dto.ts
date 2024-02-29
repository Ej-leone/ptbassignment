import { IsInt, IsPositive } from 'class-validator';

export class GenerateVoucherDto {
  @IsInt()
  @IsPositive()
  count: number;
}
