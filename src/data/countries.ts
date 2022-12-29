export interface CountryInterface {
  name: string;
  phoneNumberMask: string;
}

export const COUNTRIES: Record<string, CountryInterface> = {
  LT: {
    name: "Lithuania",
    phoneNumberMask: "+370 ### ### ####",
  },
  NL: {
    name: "The Netherlands",
    phoneNumberMask: "+31 # ## ## ## ##",
  },
};
