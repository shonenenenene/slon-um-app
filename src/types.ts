import React, { ReactNode } from 'react'

export interface ISvgProps {
    id: string
    className?: string
}

export interface IButton {
    className: string
    content: string
}

export interface IBenefitsCard {
    src: string
    content: ReactNode
    className?: string
}
