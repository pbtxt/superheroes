export type SuperHeroeType = {
  id: string;
  name: string;
  image?: {
    url: string;
  };
  appearance?: Appearance;
  biography?: Biography;
  work?: Work;
  powerstats?: Powerstats;
  connections?: Connections;
};

export type Appearance = {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  "eye-color"?: string;
};

export type Powerstats = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

export type Biography = {
  "full-name"?: string;
  "alter-egos"?: string;
  aliases?: string[];
  "place-of-birth"?: string;
  "first-appearance"?: string;
  alignment?: string;
};

export type Work = {
  occupation: string;
  base: string;
};

export type Connections = {
  "group-affiliation": string;
  relatives: string;
};
