import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  displayName?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateUserDto)
  settings?: string;
}
