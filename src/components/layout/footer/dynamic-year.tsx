'use client';

import { useEffect, useState } from 'react';

export function DynamicYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    return <>2025</>;
  }

  return <>{year}</>;
}
