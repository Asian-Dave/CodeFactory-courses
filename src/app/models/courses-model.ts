export interface ICourse {
  title: string;
  fee: number;
  image: string;
  duration: string;
  dates: string;
  description: string;
}

export class courseModel {
  constructor(
    public title: string,
    public fee: number,
    public image: string,
    public duration: string,
    public dates: string,
    public description: string
  ) {}
}
