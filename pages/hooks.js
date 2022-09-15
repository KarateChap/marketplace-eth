import { useEffect, useState } from "react"

const useCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
  }, [])

  return count
}

const SimpleComponent = () => {
  return <h1>Simple Component</h1>
}

export default function HooksPage() {
  const count = useCounter()

  return (
    <>
      <h1>Hello World - {count}</h1>
      <SimpleComponent />
    </>
  )
}
