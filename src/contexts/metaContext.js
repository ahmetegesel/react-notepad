import React, { createContext, useEffect, useMemo, useState } from 'react';
import useMountedState from '../hooks/useMountedState';
import { complement, isNil } from 'ramda';

const isNotNil = complement(isNil);

const defaultMeta = {
  title: 'React Notepad'
}

const MetaContext = createContext({});

export const MetaProvider = ({ children }) => {
  const [appName, setAppName] = useState(defaultMeta.title);
  const [pageName, setPageName] = useState();
  const [title, setTitle] = useState();

  const isMounted = useMountedState();

  const completeTitle = useMemo(() => {
    return [title, pageName, appName].filter(isNotNil).join(' | ');
  }, [title, pageName, appName])

  useEffect(() => {
    if (isMounted()) {
      document.title = completeTitle;
    }
  }, [isMounted, completeTitle]);

  const actions = {
    title: {
      setAppName,
      setPageName,
      setTitle,
    },
  };

  return (
    <MetaContext.Provider value={{ title: completeTitle, actions }}>
      {children}
    </MetaContext.Provider>
  )
};

export default MetaContext;
