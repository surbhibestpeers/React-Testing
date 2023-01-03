import { renderHook, act } from "@testing-library/react";

import { useCounter } from "../Counter";

const makeSut=()=> {
  return renderHook(()=> useCounter())
}

describe("useCounter()", ()=> {

  test("should return 0 at initial state",()=> {
    
    const {result} = makeSut();

    expect(result.current.state).toBe(0)
  });

  test("should increment 1",()=> {
    const {result} = makeSut();

    act(()=> {
      result.current.increment();
    })
    expect(result.current.state).toBe(1)
  })

  test("should decrement 1", ()=> {
    const {result} = makeSut();

    act(()=> {
      result.current.decrement();
    })
    expect(result.current.state).toBe(-1)
  })
})
