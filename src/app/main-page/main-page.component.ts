import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';
import { ItsSnackBarComponent } from '../its-snack-bar/its-snack-bar.component';
import { PushMeService } from '../push-me.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  pushed: boolean = false;
  constructor(private pushMeService: PushMeService,
    private itsSnackBar: ItsSnackBarComponent) { }

  ngOnInit(): void {
  }

  pushMe() {
    //this.itsSnackBar.open({message:"Testing 123", duration: undefined});
    this.itsSnackBar.open({message:"Testing 123", duration: 3000});
    console.log("push me pushed ....");
    this.pushed = true;
    this.pushMeService.pushMe().pipe(delay(3000)).subscribe( () => {
      this.pushed=false;
      //this.itsSnackBar.dismiss();
    })
  }
  
}
