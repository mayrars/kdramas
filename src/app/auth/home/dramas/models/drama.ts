export class Drama {
  key?: string
  title : string
  description : string;
  episodes : number
  genre : string;
  emission_date: string;
  url : string;
  urlimage : string;
  constructor(protected file? : File) {
  }
}
