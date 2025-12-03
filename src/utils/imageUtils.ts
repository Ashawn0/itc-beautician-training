import { Course, AssetMapItem } from '@/types'
import assetMap from '@/data/asset_map.json'

// Cast assetMap to the correct type
const assets = assetMap as AssetMapItem[]

export function getCourseImage(course: Course): string {
    const title = course.title

    // Find images that match this course
    const matchedImages = assets.filter(img =>
        img.course_match.some(match => title.includes(match) || match.includes(title))
    )

    if (matchedImages.length > 0) {
        // Use a deterministic index based on course ID or title length to pick an image
        const index = ((course.id?.length || title.length) % matchedImages.length)
        return matchedImages[index].file
    }

    // Fallback logic if no specific match found in asset map
    const titleLower = title.toLowerCase()

    // Try to find by category
    const categoryImages = assets.filter(img => {
        if (titleLower.includes('nail')) return img.category === 'nails'
        if (titleLower.includes('hair')) return img.category === 'hair'
        if (titleLower.includes('makeup')) return img.category === 'makeup'
        return false
    })

    if (categoryImages.length > 0) {
        const index = ((course.id?.length || title.length) % categoryImages.length)
        return categoryImages[index].file
    }

    // Ultimate fallback
    return '/images/profandstudentmain.jpg'
}

export function getGalleryImages(category: string, count?: number) {
    const images = assets
        .filter(img => img.category === category && img.section_match.includes('gallery'))
        .map(img => ({
            src: img.file,
            alt: img.alt_text || `${category} image`
        }))

    return count ? images.slice(0, count) : images
}
