import { useCallback, useEffect, useState } from "react"

export default function useAsync<T>({ callback, dependencies = [], callOnMount = true }: {
  callback: () => Promise<T>,
  callOnMount?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies?: any[]
}) {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>()
  const [value, setValue] = useState<T>()

  const recall = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    if(callOnMount) recall()
  }, [recall, callOnMount])

  return { loading, error, value, recall, setValue }
}