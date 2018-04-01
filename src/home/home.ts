import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  encapsulation: ViewEncapsulation.None
})
export class Home {

  isMobile: boolean;
  constructor() {
    if (window.screen.width < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  title = 'app';
  tileTitle: string;
  appTileArray: AppTile[] = [
    { title: 'Resume', subtitle: ".PDF..." },
    { title: 'Bio', subtitle: "My Story..." },
    { title: 'Skills', subtitle: "Projects, etc..." },
    { title: 'Experience', subtitle: "Jobs..." },
    { title: 'Contact', subtitle: "Email, etc..." },
  ];

  @Output() tileType = new EventEmitter<string>();

  expandTile(p) {

    this.tileType.emit(p);
    if (this.tileTitle === p) {
      this.tileTitle = "";
    } else {
      this.tileType.emit(p);
      this.tileTitle = p;
    }
  }


}

export class AppTile {
  title: string;
  subtitle: string;
}





@Component({
  selector: 'Resume',
  templateUrl: './Tiles/Resume.html'
})
export class Resume { }

@Component({
  selector: 'Bio',
  templateUrl: './Tiles/Bio.html'
})
export class Bio { age = Math.floor(((Math.abs(Date.now() - new Date("1995-10-06T12:00:00.753Z").getTime())) / (1000 * 3600 * 24)) / 365); }

@Component({
  selector: 'Skills',
  templateUrl: './Tiles/Skills.html'
})
export class Skills { }

@Component({
  selector: 'Experience',
  templateUrl: './Tiles/Experience.html'
})
export class Experience { }

@Component({
  selector: 'Contact',
  templateUrl: './Tiles/Contact.html'
})
export class Contact { }
