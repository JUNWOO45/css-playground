import { Component, OnInit } from '@angular/core';

import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faHorse } from '@fortawesome/free-solid-svg-icons'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  faDragon = faDragon;
  faHorse = faHorse;
  faSpider = faSpider;
  faCat = faCat;

  constructor() { }

  ngOnInit() {
  }

}
