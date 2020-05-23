import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  constructor() { }
  // Create the index.ts file
   code = ``;
  
  // Create the index.html file
   html = ``
  
   // Create the project payload.
  
   project = {
    files: {
      'index.js': this.code,
      'index.html': this.html
    },
    title: 'Dynamically Generated Project',
    description: 'Ahmad Mahmoud',
    template: 'javascript',
    tags: ['stackblitz', 'sdk'] ,
    dependencies: {
      moment: '*' // * = latest version
    }
  };
  
  
  
    ngOnInit(): void {
      sdk.embedProject('myDiv', this.project, { height: 551, width:1362});
  
    }
  
  }
  