import React, {useState, useCallback} from 'react'



function App() {
  
  const [Nums, setNums] = useState([1,2,3,4,5,6,7,8,9])
  const [Dan, setDan] = useState(1)

  const plus = useCallback(
    () => {
      setDan(Dan+1)
    },
    [Dan],
  )

  const minus = useCallback(
    () => {
      setDan(Dan-1)
    },
    [Dan],
  )

  return (
    <div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      {Nums.map((value, index) => {
        return(
          <div>{Dan} x {value} = {Dan * value}</div>
        )
      })}
    </div>
  )


}

export default App;
