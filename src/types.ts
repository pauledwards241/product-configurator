// Styles
export type HSLColour = { hue: number; sat: number; light: number };

export type Theme = {
  typography: {
    body1: HSLColour;
    h1: HSLColour;
  };
  colour: {
    highlight: HSLColour;
  };
};

// Products
export type ProductOptions = {
  products: {
    attributes: {
      label: string;
      type: string;
      value: string;
    }[];
    id: string;
    price: number;
  }[];
};

export type ProductSummary = {
  colour: string;
  id: string;
  pages: string;
  paper: string;
  price: number;
};

export type OptionList = {
  entities: Record<number | string, string>;
  ids: (number | string)[];
};

export type ProductConfiguration = Record<
  string,
  Record<string, ProductSummary>
>;

export type ProductsMetadata = {
  colourOptions: OptionList;
  paperOptions: OptionList;
  productConfig: ProductConfiguration;
};

// Form
export type InputFields = Partial<Pick<ProductSummary, 'colour' | 'paper'>>;
export type SummaryFields = Partial<ProductSummary>;

export type OnChange = (
  name: keyof InputFields,
  value: number | string
) => void;
