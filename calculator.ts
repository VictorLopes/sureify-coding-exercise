export type Category = "size" | "creamer";
export type Option = "small" | "medium" | "large" | "none" | "dairy" | "non-dairy";
export type Price = number;

export interface Pricer {
  /**
    * Invoked each time the user makes a selection.
    * No need to validate arguments, the caller validates the
    arguments before this function is invoked.
    * @returns the _total_ price of the coffee so far given all the
    selections made
    */
  (category: Category, option: Option): Price;
}

const PRICES: Readonly<Record<Option, number>> = {
  small: 1.0,
  medium: 1.5,
  large: 2.0,
  none: 0.0,
  dairy: 0.25,
  "non-dairy": 0.5,
};

/**
 * A new pricer is created for each coffee being purchased.
 */
export const createPricer = (): Pricer => {
  let selections: Readonly<Record<Category, Option>> = {
    size: "none",
    creamer: "none",
  };

  return (category: Category, option: Option): Price => {
    selections = { ...selections, [category]: option };
    return PRICES[selections.size] + PRICES[selections.creamer];
  };
};
