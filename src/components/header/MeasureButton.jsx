import { useContext } from "react"
import { MeasureContext } from "../../context/MeasureContext"

const MeasureButton = () => {
    
    const { measure, setMeasure } = useContext(MeasureContext)

    const handleMeasureChange = (newMeasure) => {
        if (newMeasure !== measure) {
            setMeasure(newMeasure)
        } else if (newMeasure === measure) {
            setMeasure(newMeasure === 'C' ? 'F' : 'C')
        }
    }

    const MButton = ({ unit }) => {
        const isActive = measure === unit
        const buttonClasses = `${isActive ? 'text-white bg-blue-700' : 'text-gray bg-blue-100'}  p-1 px-2 rounded-full flex justify-center items-center`;
        return (
            <button className={buttonClasses} onClick={() => handleMeasureChange(unit)}>
                <h6>º{unit}</h6>
            </button>
        )
    }

    return (
        <div className='flex bg-blue-100 shadow-md border rounded-full justify-between items-center'>
            <MButton unit='F' />
            <MButton unit='C' />
        </div>
    )
}

export default MeasureButton
