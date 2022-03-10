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

      openFromComponent() {
        //this.itsSnackBar.open({message:"Testing 123", duration: undefined});
        var snackBarRef: any;
        this.snackBar.openFromComponent(ItsSnackBar2Component, {
          data: {
            snackBarRef,
            message: "This is a test 123 ....."
          },
          duration: 300000000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
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
