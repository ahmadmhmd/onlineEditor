import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import sdk from '@stackblitz/sdk';


export interface DialogData {
  project: string;
}


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  project:string ;
  
  constructor(public dialog: MatDialog) { }

  open(){

  }
  
  
    ngOnInit(): void {
      const dialogRef = this.dialog.open(DialogOverview, {
        width: '600px',
        height: '300px',
        data: {project: this.project}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.project = result;
        sdk.embedGithubProject('myDiv', result, { height: 551, width:1362});
      });
  
    }
  
  }


  
@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog.component.html',
  styles:["mat-form-field { width: 100%; } "]
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
  