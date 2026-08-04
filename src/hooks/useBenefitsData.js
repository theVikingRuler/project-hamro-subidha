import { useState, useEffect } from 'react';
import { benefitsDataService } from '../services/benefitsDataService';

export function useBenefitsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    benefitsDataService.loadLocalData()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
