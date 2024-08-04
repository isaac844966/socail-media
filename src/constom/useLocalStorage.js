import { useEffect, useState } from "react";

export const useLocalStorage = function (initialState, key) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(key);
    if (storedTheme) {
      setValue(storedTheme === "true");
    } else return initialState;
  }, [key, initialState]);

  return [value, setValue];
};
