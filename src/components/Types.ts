export type SuperHeroeType = {
  id: string;
  name: string;
  image?: {
    url: string;
  };
  appearance?: {
    gender?: string;
    race?: string;
    height?: string[];
    weight?: string[];
    "eye-color"?: string;
  };
  biography?: {
    "full-name"?: string;
    "alter-egos"?: string;
    aliases?: string[];
    "place-of-birth"?: string;
    "first-appearance"?: string;
    alignment?: string;
  };
  work?: {
    occupation: string;
    base: string;
  };
  powerstats?: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  connections?: {
    "group-affiliation": string;
    relatives: string;
  };
};
