import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }

// Create the index.ts file
code = `import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './index.html',
})
export class AppComponent {
  
  title = 'OnlineEditor';

  
}


;
`;

// Create the index.html file
 html = `<h1>app works</h1>`

 // Create the project payload.

 project = {
  files: {
    'main.ts': this.code,
    'index.html': this.html
  },
  title: 'Dynamically Generated Project',
  description: 'ahmad mahmoud',
  template: 'angular-cli',
  tags: ['stackblitz', 'sdk'] ,
  dependencies: {
    moment: '*' // * = latest version
  }
};



  ngOnInit(): void {
    sdk.embedProject('myDiv', this.project, { height: 551, width:1362});

  }

}
