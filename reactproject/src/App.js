import React from 'react';
import { useRef } from "react"
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
// import useToggle from "./useToggle"
// import useTimeout from "./useTimeout"
import useArray from "./useArray"
import useHover from "./useHover"
// import useFetch from "./useFetch"

 
function App() {
  const [name, setName] = useLocalStorage('name', '')
  // const [value, toggleValue] = useToggle(false)
  // const [count, setCount] = useState(10)
  // const { clear, reset } = useTimeout(() => setCount(0), 1000)
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])
  useUpdateLogger(name)
  const elementRef = useRef()
  const hovered = useHover(elementRef)
  // const [id, setId] = useState(1)
  // const { loading, error, value } = useFetch(
  //   `https://jsonplaceholder.typicode.com/todos/${id}`,
  //   {},
  //   [id]
  // )

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      {/* Toggle hook */}
      {/* <div>
        <div>{value.toString()}</div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button>
      </div>   */}

      {/* Timeout hook */}
      {/* <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
      </div> */}

      {/* useArray */}
      <div>
        <div>{array.join(", ")}</div>
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
        <button onClick={() => remove(1)}>Remove Second Element</button>
        <button onClick={() => filter(n => n < 3)}>
          Keep Numbers Less Than 4
        </button>
        <button onClick={() => set([1, 2])}>Set To 1, 2</button>
        <button onClick={clear}>Clear</button>
      </div>

      {/* useHover */}
      <div
        ref={elementRef}
        style={{
          backgroundColor: hovered ? "blue" : "red",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      />

      {/* useFetch */}
      {/* <div>
        <div>{id}</div>
        <button onClick={() => setId(currentId => currentId + 1)}>
          Increment ID
        </button>
        <div>Loading: {loading.toString()}</div>
        <div>{JSON.stringify(error, null, 2)}</div>
        <div>{JSON.stringify(value, null, 2)}</div>
      </div> */}

    </>
  )
}

export default App;
