import {Component, OnInit} from '@angular/core';
import {Letter} from '../../Models';
import {AlphabetService} from '../../alphabet.service';

@Component({
  selector: 'app-aurebesh',
  templateUrl: './aurebesh.component.html',
  styleUrls: ['./aurebesh.component.scss']
})
export class AurebeshComponent implements OnInit {
  Letters: Letter[];

  constructor(private alphabetService: AlphabetService) {
  }

  ngOnInit() {
    this.Letters = this.alphabetService.Aurebesh().filter(x => x.Vectors.length > 0);
    console.log(this.Letters);
  }

}
