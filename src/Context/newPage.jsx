import React , {createContext, useState} from 'react'
export const nextPageContext = createContext({
  nextPage : null,
  setNextPage: () => null
})
export default function NewPage({children}) {
    const [nextPage, setNextPage] = useState(false)
    const value = {nextPage, setNextPage}
  return (
    <nextPageContext.Provider value = {value}>
        {children}
    </nextPageContext.Provider>
  )
}


