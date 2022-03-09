
import { useReducer } from "react";



function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 }
    case "incD":
      return { count: state.count - 1 }
    default:
      return state
  }
}
function Counter() {


  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>

      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "incD" })}>-</button>
    </div>
  )
}



export const App = () => {
  console.log("we are in app")
  return <Counter />
}
