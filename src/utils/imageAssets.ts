/**
 * Image Asset Management Utility
 * 
 * Centralizes image paths and provides helper functions to access
 * both old and new image assets throughout the application.
 */

// Old Images (from original design)
export const oldImages = {
    hero: {
        main: '/images/groupphoto_profandstudent.jpg',
        trainer: '/images/photo1.jpg',
        students: '/images/profandstudentmain.jpg',
    },
    general: [
        '/images/groupphoto_profandstudent.jpg',
        '/images/profandstudentmain.jpg',
        '/images/photo1.jpg',
    ],
    renamed: {
        hair: [
            '/images/renamed/hair-styling-01.jpg',
            '/images/renamed/hair-styling-02.jpg',
            '/images/renamed/hair-styling-03.jpg',
            '/images/renamed/hair-styling-04.jpg',
            '/images/renamed/hair-styling-05.jpg',
        ],
        makeup: [
            '/images/renamed/makeup-faceart-00.jpg',
            '/images/renamed/makeup-faceart-01.jpg',
            '/images/renamed/makeup-faceart-02.jpg',
            '/images/renamed/makeup-faceart-03.jpg',
            '/images/renamed/makeup-general-01.jpg',
            '/images/renamed/makeup-sari-01.jpg',
        ],
        nails: [
            '/images/renamed/nailart-basic-01.jpg',
        ],
    },
    gallery: {
        makeup: [
            '/images/gallery/makeup/makeup-eye.jpg',
            '/images/gallery/makeup/makeup-general.jpg',
        ],
        nails: [
            '/images/gallery/nails/nailart.jpg',
        ],
    },
    videos: [
        '/images/gallery/videos/demo-makeup-01.mp4',
        '/images/gallery/videos/demo-makeup-02.mp4',
        '/images/gallery/videos/demo-makeup-03.mp4',
        '/images/gallery/videos/demo-nails-00.mp4',
        '/images/gallery/videos/demo-nails-01.mp4',
        '/images/gallery/videos/demo-nails-02.mp4',
        '/images/gallery/videos/demo-nails-03.mp4',
    ]
}

// New Images (from recent upload)
export const newImages = {
    makeup: [
        '/images/uploads/FaceArt_MakeUp (1).jpg',
        '/images/uploads/FaceArt_MakeUp (2).jpg',
        '/images/uploads/FaceArt_MakeUp (3).jpg',
        '/images/uploads/FaceArt_MakeUp (4).jpg',
        '/images/uploads/FaceArt_MakeUp (5).jpg',
        '/images/uploads/FaceArt_MakeUp (6).jpg',
        '/images/uploads/FaceArt_MakeUp (7).jpg',
    ],
    hair: [
        '/images/uploads/Sarri_DressUp_Styling (1).jpg',
        '/images/uploads/Sarri_DressUp_Styling (2).jpg',
        '/images/uploads/Sarri_DressUp_Styling (3).jpg',
        '/images/uploads/Sarri_DressUp_Styling (4).jpg',
        '/images/uploads/Sarri_DressUp_Styling (5).jpg',
        '/images/uploads/Sarri_DressUp_Styling (6).jpg',
        '/images/uploads/Sarri_DressUp_Styling (7).jpg',
        '/images/uploads/Sarri_DressUp_Styling (8).jpg',
    ],
    group: [
        '/images/uploads/GroupPhotoWithPastStudent (1).jpg',
        '/images/uploads/GroupPhotoWithPastStudent (2).jpg',
        '/images/uploads/GroupPhotoWithPastStudent (3).jpg',
        '/images/uploads/GroupPhotoWithPastStudent (4).jpg',
        '/images/uploads/GroupPhotoWithPastStudent (5).jpg',
        '/images/uploads/GroupPhotoWithPastStudent (6).jpg',
    ],
    traditional: [
        '/images/uploads/TraditionalNepaliCouple_Styling (1).jpg',
        '/images/uploads/TraditionalNepaliCouple_Styling (2).jpg',
        '/images/uploads/TraditionalNepaliCouple_Styling (3).jpg',
    ],
    trainer: '/images/uploads/PHOTO-2025-12-03-19-48-52.jpg',
}

/**
 * Get a random image from a category
 */
export function getRandomImage(category: 'makeup' | 'hair' | 'group' | 'general'): string {
    let pool: string[] = []

    switch (category) {
        case 'makeup':
            pool = [...oldImages.renamed.makeup, ...newImages.makeup]
            break
        case 'hair':
            pool = [...oldImages.renamed.hair, ...newImages.hair]
            break
        case 'group':
            pool = [...oldImages.general, ...newImages.group]
            break
        case 'general':
            pool = [
                ...oldImages.general,
                ...oldImages.renamed.makeup,
                ...newImages.makeup,
                ...newImages.group
            ]
            break
    }

    return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * Get all images for gallery
 */
export function getAllGalleryImages() {
    return {
        makeup: [...oldImages.renamed.makeup, ...oldImages.gallery.makeup, ...newImages.makeup],
        hair: [...oldImages.renamed.hair, ...newImages.hair],
        general: [...oldImages.general, ...newImages.group],
        traditional: newImages.traditional,
    }
}

/**
 * Get all videos
 */
export function getAllVideos() {
    return oldImages.videos
}
