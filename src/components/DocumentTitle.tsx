
import { useEffect } from 'react';

interface DocumentTitleProps {
  title?: string;
}

const DocumentTitle = ({ title = 'Olwin Zula House - Premium Zula Swings in Hyderabad' }: DocumentTitleProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default DocumentTitle;
