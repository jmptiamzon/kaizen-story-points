import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../server/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit, OnDestroy {
  test;
  error = false;
  // tslint:disable-next-line: ban-types
  errorMessage = '';
  dataLoading = false;
  private querySubscription;
  savedChanges = false;
  // tslint:disable-next-line: variable-name
  constructor(private _backendService: ServerService, private _route: Router) { }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {
    this.test = this._backendService.getValues();
  }

  setFibonacci(formData: any) {
    console.log(formData)
    // this.dataLoading = true;
    this.querySubscription = this._backendService.setFibonacci(formData).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = '';
          this.dataLoading = false;
          this.savedChanges = true;
      } else {
          this.error = true;
          // tslint:disable-next-line: no-string-literal
          this.errorMessage = res['errorMessage'];
          this.dataLoading = false;
      }
    },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
  }

  setDev(formData: any) {
    console.log(formData)
    // this.dataLoading = true;
    this.querySubscription = this._backendService.setDev(formData).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = '';
          this.dataLoading = false;
          this.savedChanges = true;
      } else {
          this.error = true;
          // tslint:disable-next-line: no-string-literal
          this.errorMessage = res['errorMessage'];
          this.dataLoading = false;
      }
    },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
  }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
