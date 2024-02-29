import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'isFutureDate', async: false })
export class IsFutureDate implements ValidatorConstraintInterface {
 validate(date: Date) {
    if (!date) {
      return false;
    }

    const inputDate = new Date(date);
    const now = new Date();

    // Check if the input date is in the future
    return inputDate > now;
 }

 defaultMessage() {
    return 'Date must be in the future.';
 }
}