import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
  selector: 'app-its-snack-bar2',
  templateUrl: './its-snack-bar2.component.html',
  styleUrls: ['./its-snack-bar2.component.scss']
})
export class ItsSnackBar2Component implements OnInit{

  //@Input() message!: string;
  message!: string;

  constructor(public snackBarRef: MatSnackBarRef<ItsSnackBar2Component>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,) { }

  ngOnInit(): void {
    debugger;
    this.message = this.data.message;
    console.log(this.message);
  }

  

}
