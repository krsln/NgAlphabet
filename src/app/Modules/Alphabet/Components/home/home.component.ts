import {Component, OnInit} from '@angular/core';
import {AlphabetService} from "../../alphabet.service";
import {Alphabet} from "../../Models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Alphabet: Alphabet | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router, private alphabetService: AlphabetService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const Name = params.get('Name');
      switch (Name) {
        case 'Aurebesh':
          this.Alphabet = this.alphabetService.Aurebesh();
          break;
        case 'Futhark':
          this.Alphabet = this.alphabetService.Futhark();
          break;
        case 'Orkhon':
          this.Alphabet = this.alphabetService.Orkhon();
          break;
        case 'Yenisei':
          this.Alphabet = this.alphabetService.Yenisei();
          break;
      }
    });

  }

}
