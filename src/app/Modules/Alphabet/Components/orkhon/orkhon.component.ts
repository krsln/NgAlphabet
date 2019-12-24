import { Component, OnInit } from '@angular/core';
import {Letter} from '../../Models';
import {AlphabetService} from '../../alphabet.service';

@Component({
  selector: 'app-orkhon',
  templateUrl: './orkhon.component.html',
  styleUrls: ['./orkhon.component.scss']
})
export class OrkhonComponent implements OnInit {
  Letters: Letter[];

  constructor(private alphabetService: AlphabetService) {
  }

  ngOnInit() {
    this.Letters = this.alphabetService.Orkhon().filter(x => x.Vectors.length > 0);;
    console.log(this.Letters);
  }

}
