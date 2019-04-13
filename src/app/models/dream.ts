export interface IDream {
  date: string;
  title: string;
  text: string;
  mood: number;
  tags: Array<string>;
  conscious: boolean;
  nightmare: boolean;
}