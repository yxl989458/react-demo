import { useState } from "react"


export default function App() {
  const [val, setVal] = useState('abcd')
  return (<div>
    <h2>{val}</h2>
    <input type='text' value={val} onChange={(e) => setVal(e.target.value)}></input>
  </div>)
}
