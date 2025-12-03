import assetMap from '@/data/asset_map.json'
import { AssetMapItem } from '@/types'

const assets = assetMap as AssetMapItem[]

/**
 * Get intelligently selected background images for different sections
 */
export function getBackgroundImage(section: string): string {
    const sectionMap: Record<string, string[]> = {
        hero: ['makeup-faceart-10', 'makeup-faceart-17', 'makeup-general-01', 'hair-styling-04'],
        about: ['profandstudentmain', 'groupphoto_profandstudent'],
        trainer: ['photo1', 'profandstudentmain'],
        courses: ['makeup-faceart-06', 'makeup-sari-04', 'hair-styling-02'],
        contact: ['makeup-eye-01', 'makeup-faceart-15'],
        gallery: ['makeup-faceart-11', 'hair-styling-05'],
    }

    const sectionImages = sectionMap[section] || []

    // Try to find matching image
    for (const imageName of sectionImages) {
        const found = assets.find(img => img.file.includes(imageName))
        if (found) return found.file
    }

    // Fallback to images directory
    if (sectionImages.length > 0) {
        return `/images/${sectionImages[0]}.jpg`
    }

    return '/images/profandstudentmain.jpg'
}

/**
 * Get the best hero images for dramatic impact
 */
export function getHeroImages(): string[] {
    return [
        '/images/renamed/makeup-faceart-10.jpg',
        '/images/renamed/makeup-faceart-17.jpg',
        '/images/renamed/makeup-general-01.jpg',
        '/images/renamed/hair-styling-04.jpg',
        '/images/renamed/makeup-sari-04.jpg',
    ]
}

/**
 * Get images for a specific category suitable for backgrounds
 */
export function getCategoryBackgrounds(category: 'hair' | 'makeup' | 'nails'): string[] {
    return assets
        .filter(img => img.category === category)
        .map(img => img.file)
        .slice(0, 5)
}

/**
 * Get a random hero image
 */
export function getRandomHeroImage(): string {
    const heroImages = getHeroImages()
    return heroImages[Math.floor(Math.random() * heroImages.length)]
}
