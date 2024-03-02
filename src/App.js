import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://dailynailinspiration.nailsforus.com' + window.location.pathname;
  }, []);

  return null;
}
