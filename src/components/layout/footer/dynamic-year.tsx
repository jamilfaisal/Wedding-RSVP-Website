'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '../../../lib/i18n/i18n-provider';
import { formatYear } from '../utils';

export function DynamicYear() {
  const { locale } = useI18n();
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    return <>{formatYear(2025, locale)}</>;
  }

  return <>{formatYear(year, locale)}</>;
}
