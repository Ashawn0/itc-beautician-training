import { Course } from '@/types'

export const courses: Course[] = [
    {
        id: 'beautician-basic',
        title: 'Beautician Basic Course',
        duration: '2 Months',
        description: 'A perfect foundation course for beginners entering the beauty industry. Students learn essential skin care, hair care, grooming, and makeup fundamentals required for salon work.',
        image: '/images/courses/Professional MakeUp Course (2).jpeg',
        whatYouWillLearn: [
            'Basic skin care & facials',
            'Everyday makeup techniques',
            'Hair washing, drying, & basic styling',
            'Threading & waxing introduction',
            'Personal grooming & hygiene'
        ],
        whyThisCourse: 'This course is the stepping stone to a career in beauty. It provides the essential skills needed to work as an assistant or junior beautician.',
        careerScope: 'Junior Beautician, Salon Assistant, Personal Grooming Consultant.',
        curriculum: [
            'Introduction to Skin Types',
            'Basic Facial Steps',
            'Threading Techniques (Eyebrow, Upper Lip)',
            'Waxing Fundamentals',
            'Basic Hair Cuts (Straight, U, V)',
            'Day & Night Makeup Basics'
        ]
    },
    {
        id: 'beautician-advance',
        title: 'Beautician Advance Course',
        duration: '4 Months',
        description: 'An in-depth professional training program designed to upgrade your skills and prepare you for working confidently in salons or running your own beauty business.',
        image: '/images/courses/Advance Course.jpeg',
        whatYouWillLearn: [
            'Advanced facial treatments',
            'Advanced hair techniques & chemical treatments',
            'Professional makeup basics',
            'Nail care & extensions',
            'Salon tools & product knowledge'
        ],
        whyThisCourse: 'To become a fully independent beautician, advanced skills are necessary. This course covers the technical and chemical aspects of beauty treatments.',
        careerScope: 'Senior Beautician, Salon Owner, Freelance Beauty Artist.',
        curriculum: [
            'Advanced Facials (Galvanic, High Frequency)',
            'Hair Spa & Treatments',
            'Hair Coloring & Highlights',
            'Rebonding & Smoothening',
            'Party & Event Makeup',
            'Manicure & Pedicure Spa'
        ]
    },
    {
        id: 'abroad-beautician',
        title: 'Abroad Beautician Course',
        duration: '1 Month',
        description: 'A fast-track course specially designed for students preparing for beauty-related work abroad. Focuses on internationally demanded skills and techniques.',
        image: '/images/uploads/GroupPhotoWithPastStudent (1).jpg',
        whatYouWillLearn: [
            'International-style makeup',
            'Hair styling and care',
            'Basic nail and lash skills',
            'Grooming & customer handling',
            'Job-ready beauty skills'
        ],
        whyThisCourse: 'International salons have specific standards. This course bridges the gap between local training and global expectations.',
        careerScope: 'Beautician in Middle East/Europe/Australia, Cruise Ship Spa Therapist.',
        curriculum: [
            'International Hygiene Standards',
            'Quick & Effective Hair Styling',
            'European Style Facials',
            'Gel Polish & Basic Nail Art',
            'Client Consultation Techniques'
        ]
    },
    {
        id: 'professional-makeup',
        title: 'Professional Makeup Course',
        duration: '1 Month',
        description: 'A complete makeup artistry program for students who want to specialize in bridal, party, photoshoot, and event makeup.',
        image: '/images/courses/Professional MakeUp Course (1).jpeg',
        whatYouWillLearn: [
            'Bridal makeup techniques',
            'Party & engagement makeup',
            'Contouring, highlighting, and skin prep',
            'Product knowledge & shade matching',
            'Live practice sessions'
        ],
        whyThisCourse: 'Makeup artistry is a high-paying niche. Mastering these skills allows you to work in fashion, weddings, and media.',
        careerScope: 'Bridal Makeup Artist, Celebrity Makeup Artist, Fashion Show Stylist.',
        curriculum: [
            'Skin Analysis & Prep',
            'Foundation Theory & Color Correction',
            'Eye Makeup (Smokey, Cut Crease, Glitter)',
            'Bridal Looks (Traditional & Modern)',
            'Airbrush Makeup Introduction'
        ]
    },
    {
        id: 'professional-nail-art',
        title: 'Professional Nail Art Course',
        duration: '1.5 Months',
        description: 'A detailed course covering modern nail artistry, extensions, and salon techniques. Perfect for students aiming to become professional nail technicians.',
        image: '/images/renamed/nailart-basic-01.jpg',
        whatYouWillLearn: [
            'Nail extensions (Acrylic & Gel)',
            'Gel polish application',
            'Nail art design & patterns',
            'Shape correction',
            'Salon hygiene & tool handling'
        ],
        whyThisCourse: 'Nail art is booming. Dedicated nail technicians are in high demand in every modern salon.',
        careerScope: 'Nail Technician, Nail Art Studio Owner, Freelance Nail Artist.',
        curriculum: [
            'Nail Anatomy & Disease',
            'Manicure & Prep',
            'Tip Application & Blending',
            'Acrylic & Gel Systems',
            '3D Nail Art & Stone Work'
        ]
    },
    {
        id: 'microblading-microshading',
        title: 'Microblading & Microshading',
        duration: '15 Days',
        description: 'A specialized semi-permanent makeup course focused on creating natural-looking eyebrows.',
        image: '/images/uploads/FaceArt_MakeUp (5).jpg',
        whatYouWillLearn: [
            'Eyebrow mapping',
            'Microblading strokes',
            'Microshading techniques',
            'Color theory',
            'Safety & aftercare'
        ],
        whyThisCourse: 'Semi-permanent makeup is a premium service. Adding this to your skill set significantly increases your earning potential.',
        careerScope: 'Microblading Artist, PMU Specialist, Brow Bar Owner.',
        curriculum: [
            'Skin Structure & Pigment Depth',
            'Brow Mapping & Symmetry',
            'Blade Selection & Angles',
            'Shading Techniques',
            'Practice on Latex & Live Models'
        ]
    },
    {
        id: 'eyelashes-extension',
        title: 'Eyelashes Extension & Lashes Lifting',
        duration: '10 Days',
        description: 'A beginner-friendly course on lash enhancement techniques used in modern salons.',
        image: '/images/uploads/FaceArt_MakeUp (6).jpg',
        whatYouWillLearn: [
            'Classic & volume lash extension',
            'Lash lifting procedure',
            'Lash tinting',
            'Product handling & safety'
        ],
        whyThisCourse: 'Lash extensions are a recurring service with loyal clients. It is a great add-on skill for any beautician.',
        careerScope: 'Lash Technician, Lash Studio Artist.',
        curriculum: [
            'Lash Growth Cycle',
            'Isolation & Application',
            'Classic vs Volume Techniques',
            'Lash Lift & Tint Process',
            'Removal & Aftercare'
        ]
    },
    {
        id: 'threading-course',
        title: 'Threading Course',
        duration: '5 to 7 Days',
        description: 'A fast, practical course teaching facial threading for salon use.',
        image: '/images/uploads/FaceArt_MakeUp (7).jpg',
        whatYouWillLearn: [
            'Eyebrow shaping',
            'Upper lip & forehead threading',
            'Full face threading',
            'Hygiene & technique control'
        ],
        whyThisCourse: 'Threading is the most fundamental and frequently requested service in any salon.',
        careerScope: 'Threading Specialist, Junior Salon Staff.',
        curriculum: [
            'Thread Holding Techniques',
            'Eyebrow Shaping Logic',
            'Pain Management',
            'Full Face Threading Practice'
        ]
    },
    {
        id: 'manicure-pedicure-waxing',
        title: 'Manicure, Pedicure & Waxing',
        duration: '10 Days',
        description: 'Focused on hand & feet care combined with professional waxing techniques.',
        image: '/images/uploads/GroupPhotoWithPastStudent (2).jpg',
        whatYouWillLearn: [
            'Manicure steps & nail shaping',
            'Pedicure steps & foot spa',
            'Hand/feet massage',
            'Waxing (arms, legs, underarms)'
        ],
        whyThisCourse: 'Essential hygiene and grooming services that every client needs regularly.',
        careerScope: 'Nail Assistant, Spa Therapist, Salon Staff.',
        curriculum: [
            'Nail Anatomy',
            'Spa Manicure & Pedicure Steps',
            'Massage Techniques',
            'Waxing Types (Hot, Cold, Rica)',
            'Post-Waxing Care'
        ]
    },
    {
        id: 'mehandi-course',
        title: 'Mehandi (Henna) Course',
        duration: '1 Month',
        description: 'A complete henna artistry course for bridal, festival, and traditional designs.',
        image: '/images/uploads/TraditionalNepaliCouple_Styling (1).jpg',
        whatYouWillLearn: [
            'Basic & advanced mehendi patterns',
            'Bridal mehendi',
            'Cone making & paste preparation',
            'Design symmetry & creativity'
        ],
        whyThisCourse: 'Mehendi is integral to culture and weddings. Skilled artists are always in demand during wedding seasons.',
        careerScope: 'Mehendi Artist, Bridal Henna Specialist.',
        curriculum: [
            'Line & Shape Practice',
            'Arabic & Indian Designs',
            'Bridal Figures & Filler Elements',
            'Cone Making Workshop',
            'Speed & Precision Training'
        ]
    },
    {
        id: 'combo-beautician',
        title: 'Combo Beautician Course',
        duration: '9 Months',
        description: 'A comprehensive all-in-one professional career course ideal for students who want to become full-fledged beauticians. Includes Basic, Advance, Makeup, Nail Art, and Lashes.',
        image: '/images/uploads/GroupPhotoWithPastStudent (3).jpg',
        whatYouWillLearn: [
            'Complete basic & advanced beautician training',
            'Professional makeup',
            'Nail art & extensions',
            'Lashes extension & lifting',
            'Hair chemical & styling basics',
            'Customer service & salon readiness'
        ],
        whyThisCourse: 'This is the ultimate career course. You graduate as a versatile expert ready to handle any client request.',
        careerScope: 'All-round Beautician, Salon Manager, Beauty Trainer.',
        curriculum: [
            'All modules from Basic & Advance',
            'Complete Makeup Module',
            'Complete Nail Art Module',
            'Lash Extensions Module',
            'Salon Management & Client Relations'
        ]
    },
    {
        id: 'combo-basic-advance',
        title: 'Combo Course (Basic + Advance)',
        duration: '3 Months',
        description: 'A shorter combination program offering both basic and advanced beautician skills in one course.',
        image: '/images/uploads/GroupPhotoWithPastStudent (4).jpg',
        whatYouWillLearn: [
            'Basic & advanced facials',
            'Basic hair care & styling',
            'Makeup fundamentals',
            'Threading, waxing, manicure/pedicure'
        ],
        whyThisCourse: 'Save time and money by combining the two most essential levels of training.',
        careerScope: 'Salon Beautician, Home Service Beautician.',
        curriculum: [
            'Combined Facial Curriculum',
            'Hair Cutting & Styling',
            'Waxing & Threading Mastery',
            'Basic Makeup Looks'
        ]
    },
    {
        id: 'special-abroad',
        title: 'Special Abroad Course (Out-Going)',
        duration: '1 Month',
        description: 'A focused training program specifically for students preparing to work overseas in salons or beauty centers.',
        image: '/images/uploads/GroupPhotoWithPastStudent (5).jpg',
        whatYouWillLearn: [
            'International beauty techniques',
            'Fast-track salon skills',
            'Grooming & professional conduct',
            'Makeup, hair, and basic nail skills'
        ],
        whyThisCourse: 'Tailored for the specific needs of the international job market.',
        careerScope: 'International Salon Staff.',
        curriculum: [
            'Speed Training',
            'Multi-tasking in Salon',
            'International Product Knowledge',
            'Cultural Etiquette'
        ]
    }
]
