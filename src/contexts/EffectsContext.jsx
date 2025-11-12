import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const EffectsContext = createContext({
  effectsEnabled: true,
  toggleEffects: () => {},
});

export function EffectsProvider({ children }) {
  const [effectsEnabled, setEffectsEnabled] = useState(() => {
    try {
      const stored = localStorage.getItem('effects');
      if (stored === 'off') return false;
      if (stored === 'on') return true;
    } catch {
      // ignore
    }
    return true; // default: ON
  });

  useEffect(() => {
    try {
      localStorage.setItem('effects', effectsEnabled ? 'on' : 'off');
    } catch {
      // ignore
    }
  }, [effectsEnabled]);

  const value = useMemo(
    () => ({ effectsEnabled, toggleEffects: () => setEffectsEnabled((v) => !v) }),
    [effectsEnabled],
  );

  return <EffectsContext.Provider value={value}>{children}</EffectsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEffects() {
  return useContext(EffectsContext);
}
