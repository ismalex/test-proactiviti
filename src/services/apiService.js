import axios from 'axios'

export const apiFunctions = { get }

async function get(baseURL, params, timeout = 7000) {
  try {
    const response = await axios.get(baseURL, { params, timeout })
    return processResponse(response)
    
  } catch (error) {
    throw processError(error)
  }
}

function processResponse(response) {
  if (response.status === 200) {
    return response.data
  } else {
    throw processError('Error:')
  }
}

function processError(error) {
  return console.error('API error', error)
}
