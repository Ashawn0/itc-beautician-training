'use client'

import { ReactNode } from 'react'

type OverlayVariant = 'dark' | 'light' | 'gradient-bottom' | 'gradient-top' | 'gradient-radial' | 'none'
type TextColor = 'light' | 'dark' | 'auto'

interface TextOverlayProps {
    children: ReactNode
    variant?: OverlayVariant
    textColor?: TextColor
    intensity?: number // 0-1, controls overlay opacity
    className?: string
}

/**
 * TextOverlay Component
 * 
 * Enhances text readability on background images by applying:
 * - Gradient overlays
 * - Automatic text color contrast
 * - Text shadows for clarity
 * 
 * Usage:
 * <TextOverlay variant="gradient-bottom" textColor="light">
 *   <h1>Your Text Here</h1>
 * </TextOverlay>
 */
export default function TextOverlay({
    children,
    variant = 'gradient-bottom',
    textColor = 'auto',
    intensity = 0.5,
    className = ''
}: TextOverlayProps) {

    // Generate overlay styles based on variant
    const getOverlayStyle = (): React.CSSProperties => {
        const baseOpacity = Math.min(1, Math.max(0, intensity))

        switch (variant) {
            case 'dark':
                return {
                    background: `rgba(0, 0, 0, ${baseOpacity * 0.6})`
                }
            case 'light':
                return {
                    background: `rgba(255, 255, 255, ${baseOpacity * 0.7})`
                }
            case 'gradient-bottom':
                return {
                    background: `linear-gradient(to bottom, rgba(0, 0, 0, ${baseOpacity * 0.1}), rgba(0, 0, 0, ${baseOpacity * 0.7}))`
                }
            case 'gradient-top':
                return {
                    background: `linear-gradient(to top, rgba(0, 0, 0, ${baseOpacity * 0.1}), rgba(0, 0, 0, ${baseOpacity * 0.7}))`
                }
            case 'gradient-radial':
                return {
                    background: `radial-gradient(circle at center, rgba(0, 0, 0, ${baseOpacity * 0.2}), rgba(0, 0, 0, ${baseOpacity * 0.6}))`
                }
            case 'none':
            default:
                return {}
        }
    }

    // Determine text color class
    const getTextColorClass = (): string => {
        if (textColor === 'light') {
            return 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
        } else if (textColor === 'dark') {
            return 'text-neutral-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]'
        } else {
            // Auto: default to light text with shadow for most backgrounds
            return 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
        }
    }

    return (
        <div className={`relative ${className}`}>
            {/* Overlay backdrop */}
            {variant !== 'none' && (
                <div
                    className="absolute inset-0 pointer-events-none z-0 rounded-inherit"
                    style={getOverlayStyle()}
                />
            )}

            {/* Content with enhanced text visibility */}
            <div className={`relative z-10 ${getTextColorClass()}`}>
                {children}
            </div>
        </div>
    )
}
