import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Hannah Yao | ${title}` : 'Hannah Yao';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 