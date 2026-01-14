'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

const AboutError = ({ error, reset }:{ error: Error , reset: () => void }) => {
    useEffect(() => {
        console.log(error)
    }, [])
    return (
        <div>
            <h1>Something went wrong</h1>
            <Button onClick={() => reset()}>Try Again</Button>
        </div>
    )
}

export default AboutError