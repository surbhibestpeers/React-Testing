import { useCallback, useState } from "react";

export const useCounter=()=> {
  const [state, setState] = useState(0);

  const increment = useCallback(()=> setState(state => state + 1), [])

  const decrement = useCallback(()=> setState(state => state -1), [])

  return{
    state, 
    increment,
    decrement
  }
}