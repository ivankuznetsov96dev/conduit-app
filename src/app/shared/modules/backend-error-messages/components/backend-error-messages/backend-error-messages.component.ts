import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  // @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface;
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;

  public errorMessages!: string[];

  ngOnInit(): void {
    if (this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
        const messages = this.backendErrorsProps?.[name].join(', ');
        return `${name} ${messages}`;
      });
    }
  }
}
