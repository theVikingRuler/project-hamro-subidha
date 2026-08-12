import benefitsData from '../data/benefits.json';

export const benefitsDataService = {
  async getBenefitsData() {
    return benefitsData;
  }
};