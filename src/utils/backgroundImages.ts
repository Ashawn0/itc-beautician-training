/**
 * Get intelligently selected background images for different sections
 * Updated to use the new high-quality asset collection
 */
export function getBackgroundImage(section: string): string {
    const sectionMap: Record<string, string> = {
        hero: '/images/uploads/FaceArt_MakeUp (3).jpg',
        about: '/images/uploads/GroupPhotoWithPastStudent (2).jpg',
        trainer: '/images/uploads/PHOTO-2025-12-03-19-48-52.jpg',
        courses: '/images/uploads/FaceArt_MakeUp (1).jpg',
        contact: '/images/uploads/FaceArt_MakeUp (5).jpg',
        gallery: '/images/uploads/Sarri_DressUp_Styling (1).jpg',
    }

    return sectionMap[section] || '/images/uploads/FaceArt_MakeUp (3).jpg'
}

/**
 * Get the best hero images for dramatic impact
 */
export function getHeroImages(): string[] {
    return [
        '/images/uploads/FaceArt_MakeUp (3).jpg',
        '/images/uploads/Sarri_DressUp_Styling (4).jpg',
        '/images/uploads/TraditionalNepaliCouple_Styling (1).jpg',
        '/images/uploads/FaceArt_MakeUp (7).jpg',
        '/images/uploads/Sarri_DressUp_Styling (5).jpg',
    ]
}

/**
 * Get a random hero image
 */
export function getRandomHeroImage(): string {
    const heroImages = getHeroImages()
    return heroImages[Math.floor(Math.random() * heroImages.length)]
}
