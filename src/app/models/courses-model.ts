export interface ICourse {
  id: number;
  title: string;
  fee: number;
  image: string;
  duration: string;
  dates?: string;
  description: string;
  category: 'full' | 'short';
  level?: string[];
}
