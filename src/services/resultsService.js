import { apiFunctions } from './apiService'
const baseURL = 'https://randomuser.me/api/?results=50'

export async function searchResults(searchQuery) {
  try {
    const response = await apiFunctions.get(baseURL)

    return response.results

  } catch (error) {
    return console.error('Service error', error)
  }
}

