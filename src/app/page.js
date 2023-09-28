
import useSWR from "swr"

// const fetcher = async ()=>{
//   const response = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
//   const data = response.json()
//   return data
// }


const fetcher = (url) => fetch(url).then(res=>res.json())

export default function Home() {

  const {data, isLoading, error} = useSWR('http://jsonplaceholder.typicode.com/posts?_limit=4', fetcher)
  if(error) return <>Error</>
  if(isLoading) return <>Chargement...</>

  return <>
    <h1>Home</h1>
  </>
}
