import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getGuideBySlug, guides } from '@/lib/guides'

// Generate static params for all guides
export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

// Generate metadata for each guide
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)
  
  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: `${guide.title} - MummyMustHave`,
    description: guide.excerpt,
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  // Guide content - you can expand these with actual content later
  const guideContent: Record<string, { sections: Array<{ heading: string; content: string }> }> = {
    'preparing-for-your-newborn': {
      sections: [
        {
          heading: 'How to Prepare for a Newborn: A Guide for First-Time Parents',
          content: 'If you\'re expecting your first baby, you\'re probably feeling a mix of excitement and nerves. That\'s completely normal. This guide is here to help you prepare practically and emotionally for your newborn, without the overwhelm. We\'ll cover the essentials you actually need, how to set up your space, and what to expect in those first days. Remember, every parent feels uncertain at first—you\'ve got this.',
        },
        {
          heading: 'Before Baby Arrives: Start with the Basics',
          content: 'Preparing for a newborn can feel overwhelming, but breaking it down into manageable steps helps. Start by setting up the essentials: a safe sleeping space, feeding supplies, and basic baby care items. Remember, you don\'t need everything—just the basics to get started. Focus on what you\'ll need in the first week, not the first year. You can always buy more as you go. Many parents find that having too much stuff actually makes things more stressful, not easier.',
        },
        {
          heading: 'Newborn Essentials Checklist',
          content: 'Here\'s a practical checklist of what you actually need before your baby arrives. Don\'t feel pressured to get everything at once—start with the must-haves and build from there.\n\n**Sleep Essentials**\n• Crib or bassinet (meets UK safety standards)\n• Firm, flat mattress that fits snugly\n• Fitted sheets (at least 2-3 for changes)\n• Swaddles or sleep sacks (2-3)\n• Room thermometer (ideal temperature: 16-20°C)\n\n**Feeding Essentials**\n• If breastfeeding: nursing bras, breast pads, nipple cream\n• If formula feeding: bottles (4-6), formula, bottle brush, steriliser\n• Burp cloths or muslins (6-8)\n• Comfortable feeding chair or spot with good back support\n\n**Nappy & Hygiene Essentials**\n• Newborn nappies (size 0-1, start with 1-2 packs)\n• Nappy wipes or cotton wool and water\n• Nappy cream (zinc-based barrier cream)\n• Baby bath or basin\n• Soft towels (2-3)\n• Gentle baby wash (fragrance-free)\n• Cotton wool balls\n• Umbilical cord care: keep area clean and dry, avoid covering with nappy\n\n**Health & Safety**\n• Digital thermometer (for room and baby)\n• Baby monitor (if baby will sleep in separate room)\n• Basic first aid kit (plasters, antiseptic)\n• Car seat (rear-facing, properly installed)\n• Baby nail clippers or soft file',
        },
        {
          heading: 'Preparing Your Home: Practical Setup Tips',
          content: 'Create a safe, comfortable space for your baby. This doesn\'t mean a perfect nursery—a corner of your room works perfectly. Here\'s what to focus on:\n\n• Sleeping area: Set up the crib or bassinet in your room for the first 6 months (recommended for safe sleep). Make sure it\'s away from windows, radiators, and cords.\n• Changing station: Set up a dedicated spot with easy access to nappies, wipes, and cream. This could be a changing table, or just a mat on a dresser. Have everything within arm\'s reach.\n• Feeding stations: Create comfortable spots around your home for feeding. Have water, snacks, and entertainment (phone, book) nearby. You\'ll spend a lot of time here.\n• Storage: Organise baby clothes by size (newborn, 0-3 months). You don\'t need to wash everything in advance—just have a few outfits ready.\n• Safety check: Before baby arrives, do a quick safety check: secure furniture to walls, cover plug sockets, remove small objects from reach.',
        },
        {
          heading: 'First Days at Home: What to Expect',
          content: 'Those first few days at home can feel intense, but knowing what to expect helps. Here\'s what you might experience:\n\n**Emotionally**\nYou might feel overwhelmed, exhausted, and uncertain—this is completely normal. You might also feel incredible love and joy. Both are valid. It\'s okay to cry, to feel unsure, and to ask for help.\n\n**Feeding**\nNewborns typically feed every 2-3 hours, sometimes more frequently. This is normal and helps establish your milk supply if breastfeeding, or ensures baby gets enough nutrition. Feed on demand—baby will let you know when they\'re hungry.\n\n**Sleep**\nYour baby will sleep a lot (14-17 hours a day), but in short bursts. You\'ll be tired. Sleep when baby sleeps—housework can wait. Your rest is more important than a tidy house.\n\n**What baby needs**\nIn those first days, your baby really just needs feeding, changing, cuddles, and sleep. Everything else can wait. Trust your instincts, and remember: you\'re learning, and that\'s okay.',
        },
        {
          heading: 'Mental Preparation: Building Confidence',
          content: 'The most important preparation is mental. Know that it\'s okay to feel overwhelmed. It\'s okay to not know everything. Every parent learns as they go. Here\'s how to prepare mentally:\n\n• Accept uncertainty: You won\'t have all the answers, and that\'s fine. Parenting is learned through experience.\n• Trust yourself: You know your baby better than anyone. If something feels wrong, trust that feeling.\n• Build your support network: Line up people who can help—partner, family, friends. You don\'t have to do this alone.\n• Set realistic expectations: The first weeks are about survival, not perfection. Good enough is good enough.\n• Prepare for emotions: You might feel joy, fear, exhaustion, and love all at once. This is normal.\n\nRemember: you\'re doing your best, and that\'s enough. Every parent feels uncertain at first. You\'ve got this.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**How much should I prepare before the baby arrives?**\n\nFocus on the essentials: safe sleep space, feeding supplies, nappies, and a few outfits. You don\'t need everything. Many items can wait until after baby arrives when you know what you actually need.\n\n**Do I need everything straight away?**\n\nNo. Start with the basics from the checklist above. You can buy more as you go. Many parents find they over-prepared and ended up with things they never used.\n\n**What are the most commonly forgotten items?**\n\nParents often forget: burp cloths (you need more than you think), comfortable feeding clothes, snacks for yourself, water bottle, and a good phone charger near your feeding spot.\n\n**How can I feel more confident as a new parent?**\n\nConfidence comes with time and experience. Start by trusting your instincts, asking for help when needed, and remembering that every parent learns as they go. You don\'t need to know everything—just what your baby needs right now.\n\n**Should I set up a full nursery before baby arrives?**\n\nNot necessary. A safe sleep space in your room is what matters most. You can decorate and organise the nursery later when you have more energy and know what works for you.\n\n**What if I don\'t feel ready?**\n\nThat\'s completely normal. No one feels fully ready, even experienced parents. Focus on the essentials, trust yourself, and know that you\'ll learn what you need as you go.',
        },
        {
          heading: 'You\'re Ready',
          content: 'You\'ve got the essentials, you\'ve prepared your space, and you\'ve done your best to get ready. That\'s enough. The rest you\'ll learn along the way. Remember: every parent feels uncertain at first, and every baby is different. Trust yourself, ask for help when you need it, and know that you\'re doing great.\n\nIf you\'re looking for more support, check out our guide on "First Week at Home" for what to expect in those early days, or explore our other resources for new parents. You\'ve got this.',
        },
      ],
    },
    'first-week-at-home': {
      sections: [
        {
          heading: 'The First Few Days',
          content: 'The first week home with a newborn is intense. You\'ll be tired, emotional, and probably questioning everything. This is completely normal. Focus on the basics: feeding, sleeping (when you can), and keeping baby safe. Everything else can wait.',
        },
        {
          heading: 'Feeding Schedule',
          content: 'Newborns need to eat frequently—every 2-3 hours. Whether you\'re breastfeeding or formula feeding, follow your baby\'s cues. They\'ll let you know when they\'re hungry. Don\'t worry about a strict schedule in those first days.',
        },
        {
          heading: 'Sleep (Yours and Baby\'s)',
          content: 'Sleep when baby sleeps—this advice is given for a reason. The housework can wait. Your rest is more important. Baby\'s sleep patterns will be irregular at first, and that\'s normal. They\'re adjusting to life outside the womb.',
        },
        {
          heading: 'Asking for Help',
          content: 'Don\'t be afraid to ask for help. Whether it\'s a partner, family member, or friend, let people help you. They can bring meals, hold the baby while you shower, or just be there for emotional support. You don\'t have to do this alone.',
        },
      ],
    },
    'sleep-training-basics': {
      sections: [
        {
          heading: 'Understanding Baby Sleep',
          content: 'Babies have different sleep patterns than adults. They sleep in shorter cycles and wake more frequently. This is normal and actually helps protect them. Understanding this can help you have realistic expectations about sleep.',
        },
        {
          heading: 'Creating a Routine',
          content: 'A consistent bedtime routine can help signal to your baby that it\'s time to sleep. This doesn\'t have to be complicated—a bath, feeding, and some quiet time can work. The key is consistency, not perfection.',
        },
        {
          heading: 'Safe Sleep Practices',
          content: 'Always place baby on their back to sleep, in a crib or bassinet with a firm mattress and no loose bedding. Room-sharing (but not bed-sharing) is recommended for the first 6-12 months. Safety comes first, always.',
        },
        {
          heading: 'Be Patient with Yourself',
          content: 'Sleep training looks different for every family. What works for one baby might not work for another. Be patient, trust your instincts, and remember that this phase won\'t last forever. You\'re doing great.',
        },
      ],
    },
    'building-your-support-network': {
      sections: [
        {
          heading: 'Why Support Matters',
          content: 'Parenting is hard, and doing it alone is even harder. Building a support network isn\'t about admitting weakness—it\'s about being smart. Everyone needs help sometimes, and having people you can rely on makes all the difference.',
        },
        {
          heading: 'Who Can Be in Your Network',
          content: 'Your support network can include family, friends, other parents, neighbors, or community groups. Look for people who understand, who don\'t judge, and who are willing to help in practical ways.',
        },
        {
          heading: 'How to Build It',
          content: 'Start by reaching out. Join parent groups, attend community events, or connect with other parents at school or activities. Be open about needing support—you\'ll be surprised how many people want to help.',
        },
        {
          heading: 'Online Communities',
          content: 'Don\'t forget about online communities. Facebook groups, Discord servers, or apps can connect you with other single parents who understand what you\'re going through. Sometimes it\'s easier to connect online first.',
        },
      ],
    },
    'managing-time-and-priorities': {
      sections: [
        {
          heading: 'Let Go of Perfection',
          content: 'As a single parent, you can\'t do everything perfectly. That\'s okay. Focus on what truly matters: your child\'s safety, health, and happiness. Everything else can be "good enough."',
        },
        {
          heading: 'Create Routines',
          content: 'Routines help both you and your child. They create predictability and reduce decision fatigue. Simple routines for mornings, meals, and bedtime can make a huge difference in managing your time.',
        },
        {
          heading: 'Prioritize and Delegate',
          content: 'Not everything needs to be done right now. Learn to prioritize what\'s urgent vs. what can wait. And when possible, delegate. Kids can help with age-appropriate tasks, and it teaches them responsibility too.',
        },
        {
          heading: 'Take Care of Yourself',
          content: 'You can\'t pour from an empty cup. Taking time for yourself isn\'t selfish—it\'s necessary. Even 15 minutes a day can make a difference. Your well-being matters, and your child benefits when you\'re well.',
        },
      ],
    },
    'financial-planning-for-single-parents': {
      sections: [
        {
          heading: 'Create a Budget',
          content: 'Start by tracking your income and expenses. Know where your money is going. Create a realistic budget that accounts for essentials first: housing, food, childcare, and basic needs. Everything else comes after.',
        },
        {
          heading: 'Look for Resources',
          content: 'There are resources available for single parents. Look into government assistance programs, local charities, food banks, and community resources. There\'s no shame in using resources designed to help families.',
        },
        {
          heading: 'Plan for Emergencies',
          content: 'Even a small emergency fund can help. Start small—even $10 a week adds up. Having something set aside for unexpected expenses can prevent financial stress from becoming a crisis.',
        },
        {
          heading: 'Teach Kids About Money',
          content: 'Involve your kids in age-appropriate money discussions. This teaches them valuable lessons and helps them understand why certain choices are made. It\'s also okay to say "we can\'t afford that" when needed.',
        },
      ],
    },
    'developmental-milestones-by-age': {
      sections: [
        {
          heading: 'Remember: Every Child is Different',
          content: 'Developmental milestones are guidelines, not deadlines. Every child develops at their own pace. Some walk early, some talk early, some do things in a different order. That\'s all normal.',
        },
        {
          heading: '0-6 Months',
          content: 'In the first six months, babies are learning to lift their heads, roll over, sit with support, and respond to sounds and faces. They\'re also developing their social smiles and beginning to recognize familiar people.',
        },
        {
          heading: '6-12 Months',
          content: 'Babies start sitting independently, crawling, pulling up to stand, and may take first steps. They begin babbling, saying first words, and understanding simple commands. They also develop object permanence.',
        },
        {
          heading: 'When to Seek Help',
          content: 'If you\'re concerned about your child\'s development, talk to your pediatrician. Early intervention can make a big difference. Trust your instincts—you know your child best.',
        },
      ],
    },
    'supporting-your-childs-learning': {
      sections: [
        {
          heading: 'Learning Through Play',
          content: 'Children learn best through play. You don\'t need expensive toys or programs. Simple activities like reading together, playing with blocks, or exploring nature are all valuable learning experiences.',
        },
        {
          heading: 'Follow Their Interests',
          content: 'Pay attention to what your child is interested in and build on that. If they love dinosaurs, read dinosaur books, visit museums, or do dinosaur crafts. Learning is more effective when it\'s engaging.',
        },
        {
          heading: 'Create a Learning Environment',
          content: 'A learning environment doesn\'t mean a perfect classroom. It means having books available, art supplies, and time for exploration. It means asking questions and being curious together.',
        },
        {
          heading: 'Be Patient',
          content: 'Learning takes time. Don\'t push too hard or compare your child to others. Celebrate small progress and remember that every child learns differently. Your support and encouragement matter most.',
        },
      ],
    },
    'social-and-emotional-development': {
      sections: [
        {
          heading: 'Understanding Emotions',
          content: 'Children need help understanding and managing their emotions. This starts with you acknowledging their feelings, even when they\'re difficult. "I see you\'re frustrated" helps them feel understood.',
        },
        {
          heading: 'Teaching Empathy',
          content: 'Empathy is learned through example. When you show empathy to your child and others, they learn to do the same. Talk about feelings, read books about emotions, and model caring behavior.',
        },
        {
          heading: 'Building Relationships',
          content: 'Help your child build healthy relationships by modeling respect, kindness, and communication. Encourage friendships, but also teach them that it\'s okay to have boundaries and say no.',
        },
        {
          heading: 'Social Skills',
          content: 'Social skills develop over time. Some children are naturally more outgoing, others are more reserved. Both are okay. Help your child find their comfort zone while gently encouraging growth.',
        },
      ],
    },
    'encouraging-independence-and-self-help-skills': {
      sections: [
        {
          heading: 'Why Independence Matters',
          content: 'Teaching children to do things for themselves builds confidence, self-esteem, and important life skills. It also helps them feel capable and reduces their dependence on you over time. Independence is a gift that serves them throughout life.',
        },
        {
          heading: 'Start Small and Age-Appropriate',
          content: 'Begin with simple tasks that match your child\'s abilities. A toddler can put toys in a basket. A preschooler can dress themselves (with help). An older child can make their bed or pack their lunch. Start where they are, not where you wish they were.',
        },
        {
          heading: 'Let Them Try (Even When It\'s Messy)',
          content: 'It\'s often faster and easier to do things yourself, but resist the urge. Let them try, even if it takes longer or isn\'t perfect. Spilled milk can be cleaned up, but the confidence they gain from trying is invaluable.',
        },
        {
          heading: 'Break Tasks Into Steps',
          content: 'Complex tasks can feel overwhelming. Break them down into smaller, manageable steps. "First put on your shirt, then your pants" is easier than "get dressed." Celebrate each step they complete.',
        },
        {
          heading: 'Offer Choices',
          content: 'Giving children choices within limits helps them feel in control and builds decision-making skills. "Do you want to wear the red shirt or blue shirt?" gives them autonomy while you maintain boundaries.',
        },
        {
          heading: 'Be Patient and Encouraging',
          content: 'Learning new skills takes time and practice. Be patient when they struggle, and celebrate their efforts, not just their successes. "You tried so hard!" means more than "Good job!" when they\'re learning.',
        },
        {
          heading: 'Model and Teach',
          content: 'Show them how to do things, then let them practice. You might do it together at first, then gradually step back. "Watch me first, then you try" is a powerful teaching approach.',
        },
        {
          heading: 'Accept Imperfection',
          content: 'Their version of "making the bed" might not look like yours, and that\'s okay. The goal is building skills and confidence, not perfection. You can always refine techniques later, but the willingness to try is what matters most.',
        },
      ],
    },
    'effective-communication-with-kids': {
      sections: [
        {
          heading: 'Listen First',
          content: 'Good communication starts with listening. Really listen to what your child is saying, not just waiting for your turn to talk. Get down to their level, make eye contact, and show you\'re paying attention.',
        },
        {
          heading: 'Use Simple Language',
          content: 'Match your language to your child\'s age and understanding. Use simple, clear words. Explain things in ways they can understand, and check that they\'ve understood before moving on.',
        },
        {
          heading: 'Validate Their Feelings',
          content: 'Even when you need to set limits, you can validate feelings. "I know you\'re angry, but we can\'t hit" acknowledges the emotion while maintaining the boundary. This helps children feel heard.',
        },
        {
          heading: 'Be Honest (Age-Appropriately)',
          content: 'Children appreciate honesty. You don\'t have to share everything, but be honest in age-appropriate ways. If you don\'t know something, it\'s okay to say so. This models honesty and curiosity.',
        },
      ],
    },
    'setting-boundaries-and-rules': {
      sections: [
        {
          heading: 'Why Boundaries Matter',
          content: 'Boundaries help children feel safe and secure. They teach self-control and respect for others. Clear, consistent boundaries actually reduce power struggles because children know what to expect.',
        },
        {
          heading: 'Be Consistent',
          content: 'Consistency is key. If a rule exists, it needs to be enforced consistently. This doesn\'t mean being rigid, but it does mean following through. Children learn to trust boundaries when they\'re predictable.',
        },
        {
          heading: 'Age-Appropriate Rules',
          content: 'Rules should match your child\'s age and development. A two-year-old can\'t follow the same rules as a ten-year-old. Adjust expectations and consequences to be developmentally appropriate.',
        },
        {
          heading: 'Explain the Why',
          content: 'When possible, explain why rules exist. "We hold hands in parking lots to stay safe" helps children understand the reason, not just the rule. This builds internal motivation to follow rules.',
        },
      ],
    },
    'self-care-for-parents': {
      sections: [
        {
          heading: 'Why Self-Care Matters',
          content: 'You can\'t take care of others if you\'re not taking care of yourself. Self-care isn\'t selfish—it\'s necessary. When you\'re well-rested, fed, and emotionally healthy, you\'re a better parent.',
        },
        {
          heading: 'Start Small',
          content: 'Self-care doesn\'t have to be elaborate. It can be 10 minutes of quiet time, a shower, a walk, or calling a friend. Start with small, achievable self-care activities and build from there.',
        },
        {
          heading: 'Ask for Help',
          content: 'Part of self-care is asking for help when you need it. Whether it\'s childcare so you can have time alone, or emotional support from friends, asking for help is a form of self-care.',
        },
        {
          heading: 'Model Self-Care',
          content: 'When you practice self-care, you\'re modeling healthy behavior for your children. They learn that taking care of yourself is important. This is a valuable lesson that will serve them throughout life.',
        },
      ],
    },
    'dealing-with-picky-eaters': {
      sections: [
        {
          heading: 'It\'s Normal',
          content: 'Picky eating is incredibly common, especially in toddlers and young children. It\'s often a phase related to asserting independence or sensory sensitivities. Remember, you\'re not alone in this struggle.',
        },
        {
          heading: 'Offer Variety Without Pressure',
          content: 'Continue offering a variety of foods, but don\'t force or pressure your child to eat. The goal is to expose them to different foods over time. It can take 10-15 exposures before a child accepts a new food.',
        },
        {
          heading: 'Make Meals Fun',
          content: 'Get creative with presentation. Cut foods into fun shapes, arrange them in colorful patterns, or let kids help prepare meals. When children are involved in cooking, they\'re more likely to try new foods.',
        },
        {
          heading: 'Set a Good Example',
          content: 'Children learn by watching. When they see you enjoying a variety of healthy foods, they\'re more likely to try them too. Eat meals together as a family when possible.',
        },
        {
          heading: 'Don\'t Give Up',
          content: 'Keep offering rejected foods in different ways. A child who won\'t eat steamed broccoli might enjoy it roasted or in a soup. Be patient and persistent, but never turn mealtimes into a battle.',
        },
      ],
    },
    'handling-tantrums-and-meltdowns': {
      sections: [
        {
          heading: 'Understand the Difference',
          content: 'Tantrums are often about getting attention or something they want. Meltdowns are usually about being overwhelmed by emotions or sensory input. Understanding which you\'re dealing with helps you respond appropriately.',
        },
        {
          heading: 'Stay Calm',
          content: 'Your calm presence is crucial. Take deep breaths and remember that this is temporary. Children feed off your energy—if you stay calm, it helps them calm down faster.',
        },
        {
          heading: 'Validate Their Feelings',
          content: 'Acknowledge what they\'re feeling: "I can see you\'re really upset right now." This doesn\'t mean giving in to demands, but it shows you understand their emotions are real and valid.',
        },
        {
          heading: 'Provide a Safe Space',
          content: 'If possible, move to a quieter, less stimulating environment. Sometimes children need space to process their emotions. Stay nearby so they know you\'re there when they\'re ready.',
        },
        {
          heading: 'Prevent When Possible',
          content: 'Notice patterns. Are tantrums happening when they\'re hungry, tired, or overstimulated? Planning ahead—bringing snacks, ensuring rest, or avoiding overwhelming situations—can prevent many meltdowns.',
        },
        {
          heading: 'After the Storm',
          content: 'Once they\'ve calmed down, offer comfort and connection. Talk about what happened in simple terms. This is a learning opportunity, not a time for lectures or punishment.',
        },
      ],
    },
  }

  const content = guideContent[params.slug] || {
    sections: [
      {
        heading: 'Coming Soon',
        content: 'We\'re working on expanding this guide with more detailed content. Check back soon for updates!',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="warm-gradient py-12 border-b-4 border-primary-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 font-medium"
          >
            ← Back to Resources
          </Link>
          <span className="text-sm text-primary-600 font-semibold uppercase tracking-wide mb-2 block">
            {guide.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {guide.excerpt}
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> This guide is based on our experiences as parents. We are not medical professionals, 
            therapists, or certified experts. This information is for educational purposes only and should not replace 
            professional medical, legal, or financial advice. Always consult with qualified professionals for specific situations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {content.sections.map((section, index) => {
                // Simple content renderer that handles basic formatting
                const renderContent = (text: string) => {
                  if (!text) return null
                  
                  const parts = text.split(/\n\n/).filter(p => p.trim())
                  const elements: React.ReactNode[] = []
                  
                  parts.forEach((part, partIndex) => {
                    const trimmedPart = part.trim()
                    if (!trimmedPart) return
                    
                    const lines = trimmedPart.split('\n').map(l => l.trim()).filter(l => l)
                    
                    // Check if it starts with a bold heading followed by a list
                    if (lines.length > 1 && lines[0].startsWith('**') && lines[0].endsWith('**')) {
                      const heading = lines[0].replace(/\*\*/g, '')
                      const listLines = lines.slice(1).filter(l => l.startsWith('•'))
                      
                      if (listLines.length > 0) {
                        const listItems = listLines.map(l => l.replace(/^•\s*/, '').trim()).filter(i => i)
                        elements.push(
                          <div key={partIndex} className="mb-6">
                            <h3 className="text-xl font-display font-semibold text-gray-900 mt-4 mb-3">
                              {heading}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed text-lg ml-4">
                              {listItems.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )
                        return
                      }
                    }
                    
                    // Check if it's a pure list (all lines start with •)
                    if (lines.length > 0 && lines.every(l => l.startsWith('•'))) {
                      const listItems = lines.map(l => l.replace(/^•\s*/, '').trim()).filter(i => i)
                      if (listItems.length > 0) {
                        elements.push(
                          <ul key={partIndex} className="list-disc list-inside space-y-2 mb-4 text-gray-700 leading-relaxed text-lg ml-4">
                            {listItems.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )
                        return
                      }
                    }
                    
                    // Check if it's a bold heading (single line, starts and ends with **)
                    if (lines.length === 1 && trimmedPart.startsWith('**') && trimmedPart.endsWith('**')) {
                      const heading = trimmedPart.replace(/\*\*/g, '')
                      elements.push(
                        <h3 key={partIndex} className="text-xl font-display font-semibold text-gray-900 mt-6 mb-3">
                          {heading}
                        </h3>
                      )
                      return
                    }
                    
                    // Check if it's a FAQ question (starts with **question** followed by answer)
                    const questionMatch = trimmedPart.match(/^\*\*(.*?)\*\*\s*([\s\S]+)$/)
                    if (questionMatch) {
                      const question = questionMatch[1]
                      const answer = questionMatch[2].trim()
                      if (answer) {
                        elements.push(
                          <div key={partIndex} className="mb-6">
                            <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                              {question}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              {answer}
                            </p>
                          </div>
                        )
                        return
                      }
                    }
                    
                    // Regular paragraph
                    elements.push(
                      <p key={partIndex} className="text-gray-700 leading-relaxed text-lg mb-4">
                        {trimmedPart}
                      </p>
                    )
                  })
                  
                  return elements.length > 0 ? <>{elements}</> : null
                }

                return (
                  <div key={index} className="mb-8 last:mb-0">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                      {section.heading}
                    </h2>
                    {renderContent(section.content)}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Related Resources */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border-2 border-primary-200">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              More Resources
            </h3>
            <p className="text-gray-700 mb-6">
              Explore more guides and resources to support your parenting journey.
            </p>
            <Link
              href="/resources"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

