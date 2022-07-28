import React, { ReactNode } from 'react'

export interface ISvgProps {
    id: string
    className?: string
}

export interface IButton {
    className: string
    content: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IBenefitsCard {
    src: string
    content: ReactNode
    className?: string
}

export interface IInput {
    className?: string
    type?: string
    placeholder: string
}

export interface ICheckbox {
    className: string
}

export interface IAccordion {
    className?: string
    title: string
    content: string
}

export interface ITimer {
    className?: string
}
