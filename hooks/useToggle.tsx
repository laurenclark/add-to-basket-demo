import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean = false): [boolean, any] => {
    const [isToggled, setIsToggled] = useState<boolean>(initialState);
    const toggle = useCallback((): void => setIsToggled((state) => !state), []);
    return [isToggled, toggle];
};
