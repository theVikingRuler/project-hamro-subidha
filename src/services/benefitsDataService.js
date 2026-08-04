export const benefitsDataService = {
  async loadLocalData() {
    const response = await fetch('https://data.cityofnewyork.us/api/v3/views/kvhd-5fmu/query.json');
    if (!response.ok) {
      throw new Error('Failed to load local data file');
    }
    return response.json();
  }
};
