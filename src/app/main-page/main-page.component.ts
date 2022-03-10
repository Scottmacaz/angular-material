import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';
import { ItsSnackBarComponent } from '../its-snack-bar/its-snack-bar.component';
import { ItsSnackBar2Component } from '../its-snack-bar2/its-snack-bar2.component';
import { PushMeService } from '../push-me.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  pushed: boolean = false;
  
  constructor(private pushMeService: PushMeService,
    private snackBar: MatSnackBar,
    private itsSnackBar: ItsSnackBarComponent ) { }
    
    

  ngOnInit(): void {
  
  }

    open() {
        //this.itsSnackBar.open({message:"Testing 123", duration: undefined});
        this.itsSnackBar.open({message:"Testing 123", color: 'mat-primary'});
        this.pushed = true;
        this.pushMeService.pushMe().pipe(delay(3000)).subscribe( () => {
          this.pushed=false;
          //this.itsSnackBar.dismiss();
        })
      }

      openFromComponent(status:string) {
        
        //Only two options right now but not using a bool in case more are added.  Example a "warn" status.
        debugger;
        let colorClass = status === 'success' ? 'green-snack-bar' : 'red-snack-bar';
        
        var snackBarRef: any;
        this.snackBar.openFromComponent(ItsSnackBar2Component, {
          data: {
            snackBarRef,
            message: "This is a test 123 blah"
          },
          duration: 300000000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['mat-toolbar',  colorClass]
        });
        this.pushed = true;
        this.pushMeService.pushMe().pipe(delay(3000)).subscribe( () => {
          this.pushed=false;
          //this.itsSnackBar.dismiss();
        })
      }
    

      
// export class MainPageComponent implements OnInit {

//   pushed: boolean = false;
//   constructor(private pushMeService: PushMeService,
//     private itsSnackBar: ItsSnackBarComponent) { }

//   ngOnInit(): void {
//   }

//   pushMe() {
//     //this.itsSnackBar.open({message:"Testing 123", duration: undefined});
//     this.itsSnackBar.open({message:"Testing 123", color: 'mat-primary'});
//     console.log("push me pushed ....");
//     this.pushed = true;
//     this.pushMeService.pushMe().pipe(delay(3000)).subscribe( () => {
//       this.pushed=false;
//       //this.itsSnackBar.dismiss();
//     })
//   }
  
}
