'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToSlug({ targetUrl }: { targetUrl: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(targetUrl);
  }, [targetUrl, router]);
  return null;
}
