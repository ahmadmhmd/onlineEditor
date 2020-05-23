import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';


@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  constructor() { }
// Create the index.ts file
 code = `import moment from 'moment';

document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
`;

// Create the index.html file
 html = `<h1>I was created on <span id='time'></span></h1>`

 // Create the project payload.

 project = {
  files: {
    'index.ts': this.code,
    'index.html': this.html
  },
  title: 'Dynamically Generated Project',
  description: 'Ahmad Mahmoud',
  template: 'typescript',
  tags: ['stackblitz', 'sdk'] ,
  dependencies: {
    moment: '*' // * = latest version
  }
};



  ngOnInit(): void {
    sdk.embedProject('myDiv', this.project, { height: 551, width:1362});

  }

}
