import { createContext, useState } from "react"

export const MeasureContext = createContext()

export const MeasureProvider = ({ children }) => {
    const [measure, setMeasure] = useState('C')
    
    return (
        <MeasureContext.Provider value={{ measure, setMeasure }}>
            {children}
        </MeasureContext.Provider>
    )
}



export default MeasureProvider
