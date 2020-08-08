import { useEffect, useState } from 'react';
import { isNil, complement } from 'ramda';

const isNotNull = complement(isNil);

const useDocumentTitle = () => {
  const appName = 'React Notepad';
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const newTitle = [title, appName].filter(isNotNull).join(' | ');
    console.log(newTitle);
    document.title = newTitle;
  }, [title]);

  return { setTitle };
}

export default useDocumentTitle;
