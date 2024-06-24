export interface ICard {
  id: string;
  name: string;
  type: string;
  price: number;
  count: number;
  gram: number;
  img: string;
}

export type drugsTypes = 'All' | 'Stimulants' | 'Cannabinoids' | 'Opioids';
