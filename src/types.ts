export type HouseAPI = {
    id: string;
    name: string,
    houseColours: string,
    founder: string,
    animal: string,
    element: string,
    ghost: string,
    commonRoom: string,
    heads: Wizard[],
    traits: [
      {
        name: string;
      }
    ]
    url: string;
  };
  
  export type House = Omit<HouseAPI, "heads"> & {
    heads: Array<{
        name: string;
      }>;
  };
  
  export type WizardAPI = {
    [x: string]: any;
    elixirs: Array<{ name: string }>;
    firstName: string;
    lastName: string;
    url: string;
  };
  
  export type Wizard = Omit<WizardAPI, "elixirs"> & {
    elixirs: Array<{
      name: string;
    }>;
    firstName: string;
    lastName: string;
  };
  
  export type ElixirAPI = {
    name: string,
    effect: string,
    sideEffects: string,
    characteristics: string,
    time: string,
    difficulty: string,
    ingredients: [
      {
        name: string
      }
    ],
    inventors: Wizard[],
    manufacturer: string
    url: string
  };
  
  export type Elixir = Omit<ElixirAPI, "elixirs"> & {
    elixirs: Array<{
      name: string;
    }>;
  };
  