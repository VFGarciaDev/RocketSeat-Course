import React from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div>Painel de Administração</div>
        </>

    )
}