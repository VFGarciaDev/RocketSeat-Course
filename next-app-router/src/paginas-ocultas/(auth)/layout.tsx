import React from "react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="text-xl font-bold">Logo do App</h1>
            {children}
        </div>

    )
}