export interface IDream {
  date: {
    day: string, // 2 numbers
    month: string,
    year: string,
    fullDate: string // YYYY-MM-DD
  };
  title: string;
  text: string;
  mood: number;
  tags: string[];
  conscious: boolean;
  nightmare: boolean;
}