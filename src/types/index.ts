export type Course = {
    id: string
    title: string
    duration: string
    description: string
    image: string
    whatYouWillLearn: string[]
    whyThisCourse: string
    careerScope: string
    curriculum: string[]
    certification?: string
}

export type Trainer = {
    name: string
    title: string
    subtitle: string
    bio: string[]
    expertise: {
        title: string
        items: string[]
    }
    philosophy: {
        title: string
        quote: string
    }
}

export type AssetMapItem = {
    file: string
    category: string
    course_match: string[]
    section_match: string[]
    alt_text: string
}
