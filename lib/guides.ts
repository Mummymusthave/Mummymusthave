// Guide data and URL helpers

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export interface Guide {
  title: string
  category: string
  slug: string
  excerpt: string
}

export const guides: Guide[] = [
  // New Parent Guide
  {
    title: 'Preparing for Your Newborn',
    category: 'New Parent Guide',
    slug: 'preparing-for-your-newborn',
    excerpt: 'A practical guide to preparing for your newborn baby. Essential checklists, what to expect, and how to feel confident as a first-time parent.',
  },
  {
    title: 'First Week at Home',
    category: 'New Parent Guide',
    slug: 'first-week-at-home',
    excerpt: 'Tips for surviving and thriving during those first days...',
  },
  {
    title: 'Sleep Training Basics',
    category: 'New Parent Guide',
    slug: 'sleep-training-basics',
    excerpt: 'Understanding sleep patterns and establishing routines...',
  },
  // Single Parent Support
  {
    title: 'Building Your Support Network',
    category: 'Single Parent Support',
    slug: 'building-your-support-network',
    excerpt: 'How to create a strong support system as a single parent...',
  },
  {
    title: 'Managing Time and Priorities',
    category: 'Single Parent Support',
    slug: 'managing-time-and-priorities',
    excerpt: 'Practical tips for balancing everything on your own...',
  },
  {
    title: 'Financial Planning for Single Parents',
    category: 'Single Parent Support',
    slug: 'financial-planning-for-single-parents',
    excerpt: 'Budgeting and financial strategies that work...',
  },
  // Child Development
  {
    title: 'Developmental Milestones by Age',
    category: 'Child Development',
    slug: 'developmental-milestones-by-age',
    excerpt: 'What to expect at each stage of development...',
  },
  {
    title: 'Supporting Your Child\'s Learning',
    category: 'Child Development',
    slug: 'supporting-your-childs-learning',
    excerpt: 'Ways to encourage learning and curiosity...',
  },
  {
    title: 'Social and Emotional Development',
    category: 'Child Development',
    slug: 'social-and-emotional-development',
    excerpt: 'Helping your child develop healthy relationships...',
  },
  {
    title: 'Encouraging Independence and Self-Help Skills',
    category: 'Child Development',
    slug: 'encouraging-independence-and-self-help-skills',
    excerpt: 'Teaching your child to do things for themselves builds confidence and life skills...',
  },
  // Parenting Tips
  {
    title: 'Effective Communication with Kids',
    category: 'Parenting Tips',
    slug: 'effective-communication-with-kids',
    excerpt: 'How to talk so kids will listen...',
  },
  {
    title: 'Setting Boundaries and Rules',
    category: 'Parenting Tips',
    slug: 'setting-boundaries-and-rules',
    excerpt: 'Creating structure while maintaining flexibility...',
  },
  {
    title: 'Self-Care for Parents',
    category: 'Parenting Tips',
    slug: 'self-care-for-parents',
    excerpt: 'Why taking care of yourself matters for your family...',
  },
  {
    title: 'Dealing with Picky Eaters',
    category: 'Parenting Tips',
    slug: 'dealing-with-picky-eaters',
    excerpt: 'Practical strategies for encouraging healthy eating habits...',
  },
  {
    title: 'Handling Tantrums and Meltdowns',
    category: 'Parenting Tips',
    slug: 'handling-tantrums-and-meltdowns',
    excerpt: 'Understanding and managing challenging behaviors with empathy...',
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug)
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(guide => guide.category === category)
}

