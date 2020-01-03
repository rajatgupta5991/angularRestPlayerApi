import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static removeSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { removeSpace: true };
    } else {
      return null;
    }
  }
}
export class usernameValidators {
  static pleaseDontUseAtTheRate(
    control: AbstractControl
  ): ValidationErrors | null {
    if ((control.value as string).indexOf("@") >= 0) {
      return { pleaseDontUseAtTheRate: true };
    } else {
      return null;
    }
  }
}
