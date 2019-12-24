import { Component, OnInit } from '@angular/core';
import {Letter} from '../../Models';
import {AlphabetService} from '../../alphabet.service';

@Component({
  selector: 'app-yenisei',
  templateUrl: './yenisei.component.html',
  styleUrls: ['./yenisei.component.scss']
})
export class YeniseiComponent implements OnInit {
  Letters: Letter[];

  constructor(private alphabetService: AlphabetService) {
  }

  ngOnInit() {
    this.Letters = this.alphabetService.Yenisei().filter(x => x.Vectors.length > 0);;
    console.log(this.Letters);
  }

}
