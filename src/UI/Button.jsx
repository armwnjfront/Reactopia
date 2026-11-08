import { useState } from "react"

const Button = () => {
    const [showToast, setShowToast] = useState(false)
    const handlClick = () => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 3000)
    }
    return (
        <>
        <button onClick={handlClick} className="bg-blue-700 p-2 rounded-[8px] text-[17px] hover:bg-blue-500 transition">
            order registration
        </button>

        {showToast && (
            <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-2 rounded shadow z-50 animate-fade-in-down">
                DONE
            </div>
        )}
        </>
    )
}

export default Button