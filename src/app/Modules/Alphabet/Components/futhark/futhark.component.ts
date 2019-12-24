import { Component, OnInit } from '@angular/core';
import {Letter} from '../../Models';
import {AlphabetService} from '../../alphabet.service';

@Component({
  selector: 'app-futhark',
  templateUrl: './futhark.component.html',
  styleUrls: ['./futhark.component.scss']
})
export class FutharkComponent implements OnInit {
  Letters: Letter[];

  constructor(private alphabetService: AlphabetService) {
  }

  ngOnInit() {
    this.Letters = this.alphabetService.Futhark().filter(x => x.Vectors.length > 0);;
    console.log(this.Letters);
  }

}
