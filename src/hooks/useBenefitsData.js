import { useState, useEffect, useCallback } from 'react';
import { benefitsDataService } from '../services/benefitsDataService';

export function useBenefitsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    benefitsDataService.getBenefitsData(controller.signal)
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const cleanup = fetchData();
    return cleanup;
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}