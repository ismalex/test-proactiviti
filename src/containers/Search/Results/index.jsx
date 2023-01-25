import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'

export default function Results() {
  const { searchResults } = useContext(GlobalContext)

  if (searchResults.length === 0) return <>Loading...</>

  return (
    <div className="h-[75vh]  w-[100%] overflow-y-auto">
      <h3 className=" text-lg font-semibold mb-4">Search Results</h3>
      {searchResults.map(({ cell, name, email, gender, phone }) => (
        <div key={`result${cell}`} className="border-b-2 border-gray-300 p-4">
          <div className="">
            <span className="font-semibold">Account#</span> {cell}
          </div>
          <div className="">
            <span className="font-semibold">First Name</span> {name.first}
          </div>
          <div className="">
            <span className="font-semibold">Last Name</span> {name.last}
          </div>
          <div className="">
            <span className="font-semibold">Email</span> {email}
          </div>
          <div className="">
            <span className="font-semibold">Gender</span> {gender}
          </div>
          <div className="">
            <span className="font-semibold">Phone</span> {phone}
          </div>
        </div>
      ))}
    </div>
  )
}
