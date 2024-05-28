'use client'

import { ReactNode, createContext, useContext, useState } from "react"

interface IContextType{
    categoryFilter: string[]
    setCategoryFilter: React.Dispatch<React.SetStateAction<string[]>>
    sort: string
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
    categoryFilter: [],
    setCategoryFilter: () => [],
    sort: '',
    setSort: () => '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [categoryFilter, setCategoryFilter] = useState<string[]>([])
    const [sort, setSort] = useState('-createdAt')
    return (
        <FilterContext.Provider value={{
            categoryFilter,
            setCategoryFilter,
            sort,
            setSort
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)