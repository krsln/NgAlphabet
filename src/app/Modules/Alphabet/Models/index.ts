export class Letter {
  Origin: string;
  Type: LetterType;
  Vectors: Svg [];
}

export enum LetterType {
  Letter,
  Syllable,
  Separator
}

export class Svg {
  viewBox: string;
  width: string;
  height: string;
  transform: string;
  paths: Path[];
}

export class Path {
  d: string;
  style: string;
}

