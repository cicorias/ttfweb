// Centralized propType definitions
import { shape, number, bool, string, oneOfType, arrayOf } from 'prop-types';

export const imageProperties = shape({
  imageUri: string,
  subjectName: string,
  fatherName: string,
  motherName: string,
  birthCountry: string,
  originCountry: string
});

export const imagePage = shape({
  subjectImage: imageProperties,
  targetImage: imageProperties,
  candidateImages: arrayOf(imageProperties)
})


// DEMO
export const fuelSavings = shape({
  newMpg: oneOfType([number,string]),
  tradeMpg: oneOfType([number,string]),
  newPpg: oneOfType([number,string]),
  tradePpg: oneOfType([number,string]),
  milesDriven: oneOfType([number,string]),
  milesDrivenTimeframe: string,
  displayResult: bool,
  dateModified: string,
  necessaryDataIsProvidedToCalculateSavings: bool,
  savings: savings
});

export const savings = shape({
  monthly: oneOfType([number,string]),
  annual: oneOfType([number,string]),
  threeYear: oneOfType([number,string]),
});

