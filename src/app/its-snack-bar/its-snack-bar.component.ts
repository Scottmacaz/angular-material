import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-its-snack-bar',
  templateUrl: './its-snack-bar.component.html',
  styleUrls: ['./its-snack-bar.component.scss']
})
export class ItsSnackBarComponent implements OnInit {

  
  
  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //NOTE: close should be a graphic "X".  See Pizza party example here: https://material.angular.io/components/snack-bar/examples


  /**
   * 
   * @param params 
   * duration is in milliseconds.  To dismiss the snack bar manually set duration to undefined and call dismiss().
   * color is 'mat-primary' to 'mat-accent' or 'mat-warn'
   */
  open(params: {message: string, color?: string, duration?: 3000}) {
    if (params.color === undefined) {
      params.color = 'mat-primary';
    }
    this.matSnackBar.open(params.message, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: params.duration,
    panelClass: ['mat-toolbar',  params.color!]
    
    //https://stackoverflow.com/questions/47560696/angular-5-and-material-how-to-change-the-background-color-from-snackbar-compon

    });

  }

  dismiss() {
    this.matSnackBar.dismiss();
  }
}
