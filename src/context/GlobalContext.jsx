import React, { createContext, useReducer } from 'react'
import { searchResults } from '../services/resultsService'
import AppReducer from './AppReducer'

const initialState = {
  searchResults: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getAPIResults = async (searchQuery) => {
    dispatch({ type: 'ADD_SEARCH_RESULTS', payload: [] })
    const resultList = await searchResults(searchQuery)

    const initialResult = resultList.filter(
      (result) =>
        result.cell.includes(searchQuery.account) &&
        result.name.first.includes(searchQuery.firstName),
    )

    if (searchQuery.condition !== '') {
      let updatedResult=[]
      searchQuery.condition === 'and'
        ? (updatedResult = initialResult.filter((result) =>
            result[searchQuery.newFieldKey].includes(searchQuery.newFieldValue),
          ))
        : (updatedResult = initialResult.filter(
            (result) =>
              !result[searchQuery.newFieldKey].includes(
                searchQuery.newFieldValue,
              ),
          ))
          console.log('updated', updatedResult)
      dispatch({ type: 'ADD_SEARCH_RESULTS', payload: updatedResult })
    } else {
      dispatch({ type: 'ADD_SEARCH_RESULTS', payload: initialResult })
    }

  }

  return (
    <GlobalContext.Provider value={{ ...state, getAPIResults }}>
      {children}
    </GlobalContext.Provider>
  )
}
