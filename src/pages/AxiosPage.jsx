import React from 'react'
import axios from 'axios'
import useAxios, { makeUseAxios } from 'axios-hooks'
import { debug } from '../utils'

//
const useAxios1 = makeUseAxios({
  axios: axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 10000,
    headers: { 'my-header': 'foo' },
  }),
})

const AxiosPage = () => {
  const [{ data, loading, error }, refetch] = useAxios('https://reqres.in/api/users?delay=2')
  const [anotherCall, anotherCallRefetch] = useAxios1('/users?delay=1')

  debug('axios - default', data, loading, error)
  debug('axios - 1', anotherCall)

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={refetch}>refetch</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div>
        {anotherCall.loading && <p>Loading1...</p>}
        {anotherCall.error && <p>{anotherCall.error}</p>}
        <button onClick={anotherCallRefetch}>refetch</button>
        <pre>{JSON.stringify(anotherCall.data, null, 2)}</pre>
      </div>
    </>
  )
}

export default AxiosPage
