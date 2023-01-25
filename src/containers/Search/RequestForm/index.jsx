import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

export default function RequestForm() {
  const navigate = useNavigate()
  const { getAPIResults } = useContext(GlobalContext)
  const accountNumberRef = useRef()
  const firstNameRef = useRef()
  const conditionRef = useRef()
  const newFieldRef = useRef()
  const newFieldValueRef = useRef()

  const handleSearch = (event) => {
    event.preventDefault();

    let searchQueryObject =  { 
      account: accountNumberRef.current.value,
      firstName: firstNameRef.current.value,
      condition: conditionRef.current.value,
      newFieldKey: newFieldRef.current.value,
      newFieldValue: newFieldValueRef.current.value
    }

    getAPIResults(searchQueryObject)
    navigate('results')
  }

  return (
    <form onSubmit={handleSearch}>
      <h3 className=" text-lg font-semibold mb-4"> Begin your search here</h3>
      <label for="AccountNumber" className="pr-[20px]">
        Account #
      </label>
      <input
        ref={accountNumberRef}
        type="number"
        /* type="text" */
        autoFocus
        autoComplete="off"
        placeholder="Your text here..."
        className="input"
        id="fname"
        name="AccountNumber"
      />
      <div className="pl-[95px] mb-3">and</div>
      <label for="fname" className="pr-[15px]">
        First Name
      </label>
      <input
        ref={firstNameRef}
        type="text"
        autoComplete="off"
        className="input"
        name="fname"
        placeholder="Your text here..."
      />
      <br></br>
      <div className="ml-[93px]">
        <select name="condition" id="condition" className="input" ref={conditionRef}>
          <option value="">Choose Match Criteria</option>
          <option value="and">and</option>
          <option value="or">or</option>
        </select>
      </div>
      <div className="ml-[93px]" >
        <select name="newFieldKey" id="newFieldKey" className="input" ref={newFieldRef}>
          <option value="">Choose Search Field</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
      <label for="newField" className="pr-[20px]">
        New Field
      </label>
      <input
        ref={newFieldValueRef}
        type="text"
        autoFocus
        autoComplete="off"
        placeholder="Your text here..."
        className="input"
        id="fname"
        name="AccountNumber"
      />

      <input
        type="submit"
        value="Go!"
        className="bg-[#0176d2] text-white h-[40px] px-12 rounded-md ml-4 cursor-pointer"
      />
    </form>
  )
}
