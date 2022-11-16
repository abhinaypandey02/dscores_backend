import axios from 'axios'
const calling = {}

async function getFromFootballAPI(url) {
  if (calling[url]) return null
  calling[url] = true
  console.log('FETCHING ->', process.env.NEXT_PUBLIC_API_KEY)
  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
      },
    })
    delete calling[url]
    console.log(response.data)
    return response.data.response
  } catch (e) {
    console.error(e)
    delete calling[url]
    return null
  }
}
export function fetchRoute(route){
  return async () => await getFromFootballAPI(route)
}
