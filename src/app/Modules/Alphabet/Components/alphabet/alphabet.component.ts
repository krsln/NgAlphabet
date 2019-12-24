import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Letter, Svg} from '../../Models';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  @Input() Letters: Letter[];
  @Input() IsTextRight: boolean;

  Text: { Svg: Svg, Letter: string }[] = [];
  Sentence: SafeHtml;
  SentenceReadable: string;

  Deciphered: { Original: string, Reverse: string };

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const letter = event.key.toLowerCase();
    this.onClick(this.Letters.find(x => x.Origin === letter));
    // console.log(letter);
  }

  onClick(letter: Letter) {
    if (letter) {
      const randomIndex = Math.floor((Math.random() * letter.Vectors.length));
      this.Text.push({Svg: letter.Vectors[randomIndex], Letter: letter.Origin});
      if (this.IsTextRight) {
        this.Text.reverse();
      }
      this.Sentence = this.domSanitizer.bypassSecurityTrustHtml(this.Text.filter(x => x).map(x => Helper.SvgToString(x.Svg)).join(''));
      this.SentenceReadable = this.Text.filter(x => x).map(x => x.Letter).join('');
      if (this.IsTextRight) {
        this.Text.reverse();
      }
    }
  }

  onClear() {
    this.Text = [];
    this.Sentence = '';
    this.SentenceReadable = '';
  }

  onDecipher() {
    const result = Helper.Decipher(this.Letters, this.Sentence.toString());
    this.Deciphered = result;
  }
}

export class Helper {
  private static Tokenizer(text: string): string[] {
    return text.replace('\\p{P}', '').split(' ');
  }

  private static SvgUniquePartG(svg: Svg) {
    let paths = '';
    svg.paths.forEach(x => {
      paths += '<path d="' + x.d + '" style="' + x.style + '" />';
    });

    return '<g>' + paths + '</g>';
  }

  static SvgToString(svg: Svg) {
    let paths = '';
    svg.paths.forEach(x => {
      paths += '<path d="' + x.d + '" style="' + x.style + '" />';
    });

    let gTag = `<g>${paths}</g>`;
    if (svg.transform) {
      gTag = `<g transform="${svg.transform}">${paths}</g>`;
    }
    let viewBox = '';
    if (svg.viewBox) {
      viewBox = `viewBox="${svg.viewBox}"`;
    }
    // tslint:disable-next-line:max-line-length
    const ret = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" ${viewBox} width="${svg.width}" height="${svg.height}">${gTag}</svg>`;

    return ret;
  }

  static Decipher(Alphabet: Letter[], value: string): { Original: string, Reverse: string } {
    const pattern = new RegExp('<\\s*svg[^>]*>(.*?)<\\s*/\\s*svg>');
    // const pattern   = new RegExp('<\\s*svg[^>]*><g>(.*?)</g><\\s*/\\s*svg>');
    const parts = value.split(pattern).filter(x => x.length > 0);

    // console.log(parts);

    const alphabet = [];
    Alphabet.forEach(x => {
      x.Vectors.forEach(a => {
        alphabet.push({Origin: x.Origin, Vector: Helper.SvgUniquePartG(a)});
      });
    });
    console.log(alphabet);

    const results: string[] = [];
    parts.forEach((part) => {
      // console.log(alphabetOld.find(x => x.Vectors.indexOf(part) > 0));
      const letter = alphabet.find(x => x.Vector === part);
      if (letter) {
        results.push(letter.Origin);
      }
    });
    // console.log(results);

    const original = results.join('');
    const reverse = results.reverse().join('');

    return {Original: original, Reverse: reverse};
  }
}
