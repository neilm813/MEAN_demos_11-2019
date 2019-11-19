import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent implements OnChanges {

  @Input() errors;

  errorMessages: string[] = [];

  constructor() { }

  flattenErrorsToArray(validationErrs) {
    const errorsMsgs = [];

    const nestedErrors = validationErrs.errors;

    for (let errorKey in nestedErrors) {
      errorsMsgs.push(nestedErrors[errorKey].message);
    }
    return errorsMsgs
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.theNameOfTheInputProp
    this.errorMessages = this.flattenErrorsToArray(changes.errors.currentValue);
  }

}
