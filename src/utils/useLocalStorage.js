import { useEffect, useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key)
            const initial = JSON.parse(saved)
            return initial ?? defaultValue
        } catch (error) {
            console.error("Ошибка при разборе localStorage", error)
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [ value, setValue ]
}