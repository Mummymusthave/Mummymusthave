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
          heading: 'Surviving Your First Week at Home with a Newborn',
          content: 'Those first seven days at home with your newborn can feel overwhelming, exhausting, and emotional—and that\'s completely normal. You\'re learning to care for a tiny human while recovering yourself. This guide will help you navigate those early days with practical advice, realistic expectations, and reassurance that you\'re doing better than you think.',
        },
        {
          heading: 'What to Expect: The Reality of Week One',
          content: 'The first week is intense. Here\'s what\'s normal:\n\n**Emotionally:** You might feel overwhelmed, exhausted, joyful, anxious, or all of these at once. Hormonal changes, sleep deprivation, and the enormity of caring for a newborn can create a rollercoaster of emotions. This is normal.\n\n**Physically:** You\'re recovering from birth while learning to care for a baby. You\'ll be tired, sore, and probably questioning everything. Your body needs time to heal.\n\n**Baby\'s needs:** Your newborn needs feeding, changing, cuddles, and sleep. That\'s it. Everything else can wait. Focus on these basics and trust that you\'re doing enough.',
        },
        {
          heading: 'Feeding: Follow Your Baby\'s Cues',
          content: 'Newborns need to eat frequently—typically every 2-3 hours, sometimes more often. Here\'s what to know:\n\n**Feeding frequency:** Newborns have tiny stomachs and need frequent feeds. Whether breastfeeding or formula feeding, feed on demand. Your baby will show hunger cues: rooting, sucking motions, bringing hands to mouth, or crying (a late sign).\n\n**If breastfeeding:**\n• Feed on demand to establish your milk supply\n• Expect cluster feeding (frequent feeds close together)\n• Watch for proper latch and swallowing\n• Keep hydrated and eat regularly\n• Get support from a lactation consultant if needed\n\n**If formula feeding:**\n• Follow the guidelines on the formula tin for amounts\n• Sterilise bottles and equipment\n• Hold baby during feeds for bonding\n• Burp baby after feeds\n\n**Remember:** Every baby is different. Some feed quickly, others take longer. Both are normal.',
        },
        {
          heading: 'Sleep: Yours and Baby\'s',
          content: 'Sleep will be disrupted, but there are ways to manage:\n\n**Baby\'s sleep:** Newborns sleep 14-17 hours a day, but in short bursts (2-4 hours at a time). This is normal and helps with feeding and development. They don\'t yet know the difference between day and night.\n\n**Your sleep:** Sleep when baby sleeps. This advice exists for a reason. The housework, emails, and social media can wait. Your rest is essential for recovery and your ability to care for your baby.\n\n**Safe sleep practices:**\n• Always place baby on their back to sleep\n• Use a firm, flat mattress\n• No loose bedding, pillows, or toys in the cot\n• Room-share (but don\'t bed-share) for the first 6 months\n• Keep the room temperature between 16-20°C\n\n**Day vs. night:** Help baby learn day from night by keeping daytime feeds and changes in a bright room with normal noise, and nighttime activities quiet and dimly lit.',
        },
        {
          heading: 'Nappy Changes and Hygiene',
          content: 'You\'ll change a lot of nappies in the first week. Here\'s what to know:\n\n**Frequency:** Newborns typically need 6-8 nappy changes a day. Change them whenever they\'re wet or dirty to prevent nappy rash.\n\n**What\'s normal:**\n• First few days: dark, sticky meconium\n• Days 3-5: transitional stools (greenish-brown)\n• After day 5: yellow, seedy stools (breastfed) or firmer, tan-coloured (formula-fed)\n\n**Nappy rash prevention:**\n• Change nappies frequently\n• Clean gently with water or fragrance-free wipes\n• Let baby\'s bottom air dry before putting on a new nappy\n• Apply barrier cream if needed\n• If rash persists or worsens, consult your health visitor or GP',
        },
        {
          heading: 'Asking for and Accepting Help',
          content: 'You don\'t have to do this alone. Here\'s how to get the support you need:\n\n**What help looks like:**\n• Meals or meal prep\n• Holding baby while you shower or rest\n• Doing household chores (washing, cleaning, shopping)\n• Emotional support and someone to talk to\n• Taking older children out for activities\n• Running errands\n\n**How to ask:** Be specific. Instead of "Can you help?" try "Could you bring dinner on Tuesday?" or "Could you watch the baby for 30 minutes so I can shower?" People want to help but often don\'t know how.\n\n**Accept help when offered:** If someone offers to help, say yes. Even if it\'s not exactly how you\'d do it, help is help. You can refine things later.\n\n**Professional support:** Don\'t hesitate to contact your health visitor, midwife, or GP if you have concerns about yourself or your baby.',
        },
        {
          heading: 'Caring for Yourself',
          content: 'Taking care of yourself isn\'t selfish—it\'s essential. Here\'s how:\n\n**Rest:** Sleep when baby sleeps. Even 20 minutes helps. The housework can wait.\n\n**Eat and hydrate:** Keep snacks and water near your feeding spot. You need fuel to recover and produce milk if breastfeeding.\n\n**Shower:** A daily shower can make you feel human again. Ask someone to hold the baby for 10 minutes.\n\n**Get outside:** Fresh air helps. Even a short walk around the block (when you\'re ready) can boost your mood.\n\n**Connect:** Talk to other parents, join online groups, or call friends. You\'re not alone in this experience.\n\n**Be kind to yourself:** You\'re learning. It\'s okay to not know everything. You\'re doing better than you think.',
        },
        {
          heading: 'When to Seek Help',
          content: 'Trust your instincts. If something doesn\'t feel right, seek help:\n\n**For baby:**\n• Not feeding or very difficult to feed\n• Fewer than 6 wet nappies in 24 hours after day 5\n• Very sleepy or difficult to wake\n• High temperature (38°C or above)\n• Persistent crying you can\'t soothe\n• Breathing difficulties\n• Yellowing skin (jaundice)\n\n**For you:**\n• Excessive bleeding or large clots\n• Signs of infection (fever, pain, discharge)\n• Severe mood changes or feelings of hopelessness\n• Thoughts of harming yourself or your baby\n• Difficulty bonding with your baby\n\n**Remember:** It\'s always better to ask and be reassured than to worry alone. Your health visitor, midwife, or GP is there to help.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**Is it normal to feel overwhelmed?**\n\nYes, completely normal. The first week is intense. You\'re recovering, learning, and caring for a newborn all at once. It\'s okay to feel overwhelmed. It gets easier.\n\n**How do I know if baby is getting enough milk?**\n\nSigns baby is feeding well: 6+ wet nappies a day after day 5, steady weight gain, alert and content between feeds, and regular dirty nappies. If concerned, contact your health visitor.\n\n**Should I wake baby to feed?**\n\nIn the first week, yes—especially if baby hasn\'t fed in 3-4 hours or if advised by your midwife/health visitor. After the first week, most babies will wake themselves when hungry.\n\n**Is it normal for baby to lose weight?**\n\nYes, babies typically lose 5-10% of their birth weight in the first week, then regain it by day 10-14. Your health visitor will monitor this.\n\n**When will I feel normal again?**\n\nThere\'s no set timeline. Recovery takes time. Be patient with yourself. You\'re doing great, even when it doesn\'t feel like it.\n\n**Should I establish a routine?**\n\nNot yet. In the first week, focus on feeding on demand and following baby\'s cues. Routines can come later when baby is more settled.',
        },
        {
          heading: 'You\'ve Got This',
          content: 'The first week is intense, but you\'re doing better than you think. Focus on the basics: feeding, changing, cuddles, and rest. Everything else can wait. Trust your instincts, ask for help when you need it, and remember that every parent feels uncertain at first. You\'re learning, and that\'s okay.\n\nIf you need more support, check out our guide on "Preparing for Your Newborn" for preparation tips, or explore our other resources for new parents. You\'re not alone in this journey.',
        },
      ],
    },
    'sleep-training-basics': {
      sections: [
        {
          heading: 'Understanding Baby Sleep: A Realistic Guide',
          content: 'Sleep training can feel like one of the biggest challenges of early parenthood. Before diving into methods and routines, it\'s important to understand how baby sleep actually works. This guide will help you set realistic expectations and find an approach that works for your family.',
        },
        {
          heading: 'How Baby Sleep Differs from Adult Sleep',
          content: 'Understanding baby sleep patterns helps set realistic expectations:\n\n**Sleep cycles:** Babies have shorter sleep cycles (about 50 minutes) compared to adults (90 minutes). They spend more time in light sleep, which means they wake more easily—and this is actually protective.\n\n**Night wakings:** It\'s normal for babies to wake 2-6 times per night, even after the newborn stage. They wake to feed, for comfort, or because they\'re transitioning between sleep cycles.\n\n**Sleep needs by age:**\n• Newborns (0-3 months): 14-17 hours total, in short bursts\n• Infants (4-11 months): 12-15 hours total, longer stretches at night\n• Toddlers (1-2 years): 11-14 hours total, usually one nap\n• Preschoolers (3-5 years): 10-13 hours total, may drop nap\n\n**Remember:** These are averages. Every baby is different, and that\'s normal.',
        },
        {
          heading: 'When to Start Sleep Training',
          content: 'Most experts recommend waiting until baby is at least 4-6 months old before formal sleep training. Before this age, babies need frequent feeds and their sleep patterns are still developing.\n\n**Signs baby might be ready:**\n• Baby is 4-6 months old\n• Baby can go longer between feeds (4+ hours)\n• Baby shows regular sleep-wake patterns\n• You\'re ready to commit to a consistent approach\n\n**When to wait:**\n• Baby is under 4 months\n• Baby is unwell or teething\n• You\'re going through a major change (moving, new sibling)\n• You\'re not ready—sleep training requires consistency\n\n**Important:** There\'s no rush. Every family\'s timeline is different. Do what feels right for you.',
        },
        {
          heading: 'Creating a Bedtime Routine',
          content: 'A consistent bedtime routine signals to your baby that sleep time is coming. Here\'s how to create one:\n\n**Keep it simple:** A routine doesn\'t need to be elaborate. Simple is better and more sustainable.\n\n**Example routine (30-45 minutes):**\n• Bath (or just a warm washcloth)\n• Change into pyjamas and fresh nappy\n• Feed (breast or bottle)\n• Quiet activity (book, lullaby, gentle rocking)\n• Into cot while drowsy but awake\n\n**Key principles:**\n• Do activities in the same order every night\n• Keep it calm and low-stimulation\n• Start at roughly the same time each evening\n• Be consistent—this is what makes it work\n\n**Flexibility:** Routines can adapt as baby grows. What matters is consistency, not perfection.',
        },
        {
          heading: 'Safe Sleep Practices: Non-Negotiable',
          content: 'Safety always comes first. Follow these guidelines:\n\n**Sleep position:**\n• Always place baby on their back to sleep\n• This reduces the risk of SIDS\n• Once baby can roll both ways independently, you don\'t need to reposition them\n\n**Sleep environment:**\n• Firm, flat mattress that fits the cot snugly\n• No loose bedding, pillows, or soft toys\n• No cot bumpers or positioners\n• Room temperature 16-20°C (use a room thermometer)\n• No smoking in the home\n\n**Room-sharing:**\n• Share a room (but not a bed) for the first 6-12 months\n• Place cot or bassinet near your bed for easy access\n• This reduces SIDS risk and makes night feeds easier\n\n**Other safety tips:**\n• Avoid overheating—dress baby appropriately for room temperature\n• Use a sleep sack instead of blankets\n• Ensure cot meets UK safety standards\n• Check cot regularly for loose parts or damage',
        },
        {
          heading: 'Different Sleep Training Approaches',
          content: 'There\'s no one "right" way to sleep train. Choose an approach that feels right for your family:\n\n**Gentle/No-cry methods:**\n• Gradual withdrawal: Sit by cot, gradually move further away over days\n• Pick up, put down: Pick up when crying, put down when calm\n• Fading: Gradually reduce your presence and assistance\n• Pros: Less crying, feels gentler\n• Cons: Takes longer, requires more patience\n\n**Controlled crying/Checking:**\n• Put baby down awake, leave room\n• Return at increasing intervals (2, 5, 10 minutes) to comfort briefly\n• Comfort without picking up (patting, shushing)\n• Pros: Often works faster\n• Cons: Involves some crying, can be emotionally difficult\n\n**Cry it out (CIO):**\n• Put baby down awake, leave room, don\'t return until morning\n• Pros: Can work quickly\n• Cons: Involves significant crying, not suitable for all families\n\n**Remember:** What works for one family might not work for another. Trust your instincts and choose what feels right for you.',
        },
        {
          heading: 'Common Sleep Challenges and Solutions',
          content: 'Here are common issues and practical solutions:\n\n**Baby won\'t settle:**\n• Check basics: fed, changed, comfortable temperature\n• Try white noise or gentle music\n• Swaddle (if under 8 weeks and not rolling)\n• Rock or pat gently\n• Sometimes they just need time to settle\n\n**Frequent night wakings:**\n• Ensure baby is getting enough calories during the day\n• Keep night feeds/diaper changes low-key (dim light, minimal interaction)\n• Consider if baby is actually hungry or just seeking comfort\n• Gradually reduce night feeds if age-appropriate\n\n**Early morning wakings:**\n• Ensure room is dark (blackout blinds)\n• Keep early morning interactions minimal\n• Consider adjusting bedtime (sometimes earlier bedtime helps)\n• Accept that some babies are early risers\n\n**Resistance to naps:**\n• Watch for sleep cues (rubbing eyes, yawning, fussiness)\n• Create a shorter nap routine\n• Ensure sleep environment is conducive\n• Some babies are cat-nappers—this can be normal',
        },
        {
          heading: 'Managing Expectations',
          content: 'Realistic expectations make sleep training less stressful:\n\n**It takes time:** Sleep training isn\'t instant. It can take days or weeks to see consistent results. Be patient.\n\n**There will be setbacks:** Illness, teething, developmental leaps, and routine changes can disrupt sleep. This is normal. You may need to retrain after setbacks.\n\n**"Sleeping through the night" varies:** For babies, this often means 5-6 hours, not 12. A baby who sleeps 7pm-2am, feeds, then sleeps until 6am is doing well.\n\n**Every baby is different:** Some babies are naturally better sleepers. Don\'t compare your baby to others. Focus on what works for your family.\n\n**You\'re not failing:** If sleep training isn\'t working, it doesn\'t mean you\'re doing something wrong. It might mean your baby isn\'t ready, or the method isn\'t right for your family. That\'s okay.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**When will my baby sleep through the night?**\n\nThis varies greatly. Some babies sleep longer stretches by 3-4 months, others take much longer. "Sleeping through" for babies often means 5-6 hours, not 12. Be patient and realistic.\n\n**Is it okay to let my baby cry?**\n\nThis is a personal decision. Some families are comfortable with controlled crying methods, others prefer gentler approaches. There\'s no right or wrong—choose what feels right for you and your baby.\n\n**Should I wake my baby to feed?**\n\nIn the first few weeks, yes—especially if advised by your health visitor. Once baby is gaining weight well and your health visitor says it\'s okay, you can let them sleep longer stretches.\n\n**What if sleep training isn\'t working?**\n\nConsider: Is baby old enough? Are you being consistent? Is there an underlying issue (reflux, allergies, etc.)? Sometimes it\'s okay to pause and try again later. Consult your health visitor or GP if concerned.\n\n**Do I need to sleep train?**\n\nNo. Sleep training is a choice, not a requirement. Some families choose to wait, some co-sleep, some find their own rhythm. Do what works for your family.\n\n**Will sleep training harm my baby?**\n\nResearch shows that sleep training, when done appropriately, doesn\'t cause harm. However, it\'s important to ensure baby\'s basic needs are met and to choose an approach that feels right for your family.',
        },
        {
          heading: 'Be Patient with Yourself and Your Baby',
          content: 'Sleep training is a journey, not a destination. There will be good nights and challenging nights. What works one week might not work the next. Be flexible, be patient, and remember that this phase won\'t last forever.\n\nTrust your instincts. You know your baby best. If something doesn\'t feel right, it\'s okay to adjust your approach or pause. There\'s no one "right" way to do this.\n\nIf you need more support, check out our "First Week at Home" guide for early days tips, or explore our other parenting resources. You\'re doing great, even on the tough nights.',
        },
      ],
    },
    'building-your-support-network': {
      sections: [
        {
          heading: 'Building Your Support Network: You Don\'t Have to Do This Alone',
          content: 'Parenting alone is challenging, but you don\'t have to do it completely alone. Building a support network isn\'t about admitting weakness—it\'s about being smart, practical, and giving yourself and your child the support you both deserve. This guide will help you identify, build, and maintain a network of people who can help you navigate single parenthood.',
        },
        {
          heading: 'Why Support Matters',
          content: 'Having a support network makes a real difference:\n\n**Practical help:** Someone to watch your child, help with errands, or provide a listening ear when you need it.\n\n**Emotional support:** People who understand what you\'re going through and can offer encouragement and empathy.\n\n**Role models:** Other parents (single or partnered) who can share experiences and advice.\n\n**Reduced isolation:** Parenting alone can feel isolating. A network helps you feel connected and less alone.\n\n**Better outcomes:** Research shows that children with strong support networks (including their parent\'s support network) tend to do better socially and emotionally.\n\n**Remember:** Asking for help is a strength, not a weakness. Everyone needs support sometimes.',
        },
        {
          heading: 'Who Can Be in Your Network',
          content: 'Your support network can include a variety of people:\n\n**Family:**\n• Parents, siblings, extended family\n• People who understand your situation\n• Those willing to help in practical ways\n\n**Friends:**\n• Close friends who "get it"\n• Friends who are also parents\n• Friends who offer non-judgmental support\n\n**Other parents:**\n• Parents from your child\'s school or activities\n• Single parent groups\n• Playgroup or nursery connections\n• Neighbours who are parents\n\n**Professional support:**\n• Health visitors\n• School staff (teachers, support staff)\n• GP or mental health services\n• Financial advisors or support services\n\n**Community resources:**\n• Local community centres\n• Religious or spiritual communities\n• Charities supporting single parents\n• Local council services\n\n**Online communities:**\n• Single parent Facebook groups\n• Discord servers\n• Parenting forums\n• Apps connecting parents\n\n**Remember:** Quality matters more than quantity. A few reliable, supportive people are better than many unreliable ones.',
        },
        {
          heading: 'How to Build Your Network',
          content: 'Building a support network takes time and effort, but it\'s worth it:\n\n**Start where you are:**\n• Reach out to existing friends and family\n• Be honest about needing support\n• Accept help when offered\n• Don\'t wait for people to offer—ask\n\n**Join groups and activities:**\n• Parent and toddler groups\n• School PTA or parent groups\n• Local community events\n• Activities your child enjoys (sports, clubs, classes)\n• Single parent support groups\n\n**Be open and approachable:**\n• Share your experiences (when comfortable)\n• Listen to others\' experiences\n• Offer help to others when you can\n• Build reciprocal relationships\n\n**Use online resources:**\n• Join local Facebook groups for parents\n• Connect with single parent communities\n• Use apps to meet other parents\n• Participate in online forums\n\n**Be patient:** Building relationships takes time. Don\'t expect instant connections. Keep showing up and being open.',
        },
        {
          heading: 'What Kind of Support to Ask For',
          content: 'People want to help but often don\'t know how. Be specific about what you need:\n\n**Practical help:**\n• "Could you watch [child] for an hour while I go to an appointment?"\n• "Could you pick up [child] from school on Tuesday?"\n• "Would you mind bringing dinner one night this week?"\n• "Could you help me move this furniture?"\n\n**Emotional support:**\n• "Can I call you when I\'m having a tough day?"\n• "Would you be willing to listen while I vent?"\n• "Could we meet for coffee? I need to talk."\n\n**Information and advice:**\n• "Do you know any good childcare options in the area?"\n• "Have you dealt with [situation]? How did you handle it?"\n• "Can you recommend a good [service/provider]?"\n\n**Remember:** Most people are happy to help when they know what\'s needed. Be specific and don\'t be afraid to ask.',
        },
        {
          heading: 'Maintaining Your Network',
          content: 'A support network requires maintenance:\n\n**Reciprocity:** Relationships work both ways. Offer help when you can, even if it\'s small. A text checking in, bringing coffee, or watching someone else\'s child for 30 minutes builds goodwill.\n\n**Communication:** Keep in touch regularly, even if it\'s just a quick text. Don\'t only reach out when you need something.\n\n**Gratitude:** Thank people for their help. A simple "thank you" or note of appreciation goes a long way.\n\n**Boundaries:** It\'s okay to set boundaries. Not everyone in your network needs to know everything. Choose who you share what with.\n\n**Let go when needed:** Sometimes relationships don\'t work out or become unhealthy. It\'s okay to distance yourself from people who aren\'t supportive or who drain your energy.',
        },
        {
          heading: 'Online Communities: A Valuable Resource',
          content: 'Online communities can be incredibly valuable for single parents:\n\n**Benefits:**\n• Connect with people who understand your situation\n• Access support 24/7\n• Share experiences and advice\n• Find local resources and recommendations\n• Feel less isolated\n\n**Where to find communities:**\n• Facebook groups (search "single parents [your area]")\n• Discord servers for parents\n• Reddit communities (r/SingleParents, r/Parenting)\n• Parenting apps (Peanut, Mush)\n• Online forums\n\n**Tips for online communities:**\n• Find groups that feel supportive and non-judgmental\n• Participate regularly to build connections\n• Be respectful and kind\n• Remember that online advice isn\'t a substitute for professional help when needed\n• Consider meeting online friends in person (safely) if comfortable\n\n**Remember:** Online connections can be just as valuable as in-person ones, especially when you\'re feeling isolated.',
        },
        {
          heading: 'Dealing with Judgment and Stigma',
          content: 'Unfortunately, single parents sometimes face judgment. Here\'s how to handle it:\n\n**You\'re not alone:** Many single parents face judgment. It says more about the person judging than about you.\n\n**Set boundaries:** You don\'t have to engage with judgmental people. It\'s okay to distance yourself from unsupportive individuals.\n\n**Find your people:** Surround yourself with people who support and understand you. These are the relationships that matter.\n\n**Focus on your child:** Your child\'s wellbeing and happiness matter more than others\' opinions.\n\n**Remember your strength:** You\'re doing an incredible job. Don\'t let judgmental people make you forget that.\n\n**Seek support:** If judgment is affecting your mental health, consider talking to a counsellor or therapist.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**What if I don\'t have family nearby?**\n\nBuild your network from friends, neighbours, other parents, and community resources. Many single parents create "chosen family" from their support network.\n\n**How do I ask for help without feeling like a burden?**\n\nRemember that most people want to help. Be specific about what you need, and offer to help others when you can. Reciprocity makes relationships stronger.\n\n**What if people offer help but don\'t follow through?**\n\nThis happens. Don\'t take it personally. Focus on the people who do follow through, and don\'t be afraid to ask again if someone offers.\n\n**How do I know if someone is trustworthy with my child?**\n\nTrust your instincts. Start with short periods and build up. Check references if using paid childcare. Most importantly, trust your gut.\n\n**Can online friends be part of my support network?**\n\nAbsolutely. Online communities can provide valuable support, especially when in-person connections are limited.\n\n**What if I\'m introverted and find it hard to reach out?**\n\nStart small. Online communities can be easier for introverts. You don\'t need a huge network—even one or two reliable people can make a difference.',
        },
        {
          heading: 'You\'re Stronger Than You Know',
          content: 'Building a support network takes courage and effort, but it\'s one of the best things you can do for yourself and your child. Remember: asking for help is a strength, not a weakness. You don\'t have to do everything alone.\n\nStart small, be patient, and keep reaching out. The right people will be there for you. You\'re doing an incredible job, and having support makes that job easier.\n\nIf you need more resources, check out our guides on "Managing Time and Priorities" or "Financial Planning for Single Parents" for additional support strategies.',
        },
      ],
    },
    'managing-time-and-priorities': {
      sections: [
        {
          heading: 'Managing Time and Priorities as a Single Parent',
          content: 'As a single parent, you\'re juggling everything: work, childcare, household management, and your own needs. It can feel overwhelming, but with the right strategies, you can manage your time effectively while maintaining your sanity. This guide offers practical tips for prioritising, creating routines, and finding balance.',
        },
        {
          heading: 'Let Go of Perfection',
          content: 'The first step to managing time as a single parent is accepting that you can\'t do everything perfectly—and that\'s okay.\n\n**Focus on what matters:**\n• Your child\'s safety, health, and happiness\n• Your own basic needs (food, rest, mental health)\n• Essential tasks (work, bills, appointments)\n\n**Everything else can be "good enough":**\n• The house doesn\'t need to be spotless\n• Meals don\'t need to be gourmet\n• You don\'t need to be at every event\n• It\'s okay to say no\n\n**Remember:** Your child needs a happy, healthy parent more than they need a perfect home or perfect meals. Good enough is good enough.',
        },
        {
          heading: 'Create Routines That Work',
          content: 'Routines reduce decision fatigue and create predictability for both you and your child:\n\n**Morning routine:**\n• Set out clothes the night before\n• Prep breakfast items ahead\n• Keep it simple and consistent\n• Build in buffer time for unexpected delays\n\n**Evening routine:**\n• Prep for the next day (lunches, bags, clothes)\n• Set a consistent bedtime\n• Include wind-down time for both of you\n• Keep it calm and predictable\n\n**Weekly routines:**\n• Designate days for specific tasks (laundry on Sundays, shopping on Mondays)\n• Meal plan and prep when possible\n• Schedule regular "catch-up" time for tasks\n• Build in flexibility for unexpected events\n\n**Benefits:**\n• Less decision-making = less mental fatigue\n• Predictability helps children feel secure\n• Routines become automatic, saving mental energy\n• Reduces morning and evening stress',
        },
        {
          heading: 'Prioritise and Delegate',
          content: 'Not everything needs to be done right now. Learn to prioritise:\n\n**Urgent and important:** Do these first\n• Work deadlines\n• Medical appointments\n• Bills and essential paperwork\n• Child\'s immediate needs\n\n**Important but not urgent:** Schedule these\n• Regular health check-ups\n• Planning and preparation\n• Building relationships\n• Self-care\n\n**Urgent but not important:** Delegate or minimise\n• Some social obligations\n• Non-essential errands\n• Tasks others can help with\n\n**Neither urgent nor important:** Eliminate or postpone\n• Perfectionist cleaning\n• Unnecessary commitments\n• Things that drain your energy\n\n**Delegate when possible:**\n• Kids can help with age-appropriate tasks\n• Ask friends/family for specific help\n• Use services when affordable (meal delivery, cleaning)\n• Trade tasks with other parents\n\n**Remember:** Saying no to less important things means saying yes to what truly matters.',
        },
        {
          heading: 'Time-Saving Strategies',
          content: 'Small changes can save significant time:\n\n**Meal planning:**\n• Plan meals for the week\n• Prep ingredients on weekends\n• Use slow cookers or batch cooking\n• Keep simple, healthy options on hand\n• Don\'t feel guilty about convenience foods sometimes\n\n**Shopping and errands:**\n• Make lists to avoid multiple trips\n• Combine errands into one trip\n• Use online shopping when possible\n• Order groceries for delivery if it saves time\n\n**Household management:**\n• Do a little each day rather than big clean-ups\n• Use a "one-touch" rule (deal with things once)\n• Set timers for tasks to avoid getting sidetracked\n• Accept "good enough" cleaning\n\n**Technology:**\n• Use calendar apps to track everything\n• Set reminders for important tasks\n• Use apps for meal planning, budgeting\n• Automate what you can (bills, subscriptions)\n\n**Batch similar tasks:**\n• Do all phone calls at once\n• Handle all paperwork together\n• Group errands by location',
        },
        {
          heading: 'Involve Your Child',
          content: 'Age-appropriate involvement helps children learn responsibility and saves you time:\n\n**Toddlers (2-3 years):**\n• Put toys in a basket\n• Put clothes in a laundry basket\n• Help set the table (with supervision)\n• Wipe up spills\n\n**Preschoolers (4-5 years):**\n• Make their bed (with help)\n• Put away their clothes\n• Help with simple meal prep\n• Clear their place at the table\n• Feed pets (with supervision)\n\n**School age (6+ years):**\n• Pack their school bag\n• Help with meal prep\n• Load/unload dishwasher\n• Take out recycling\n• Help with younger siblings\n\n**Benefits:**\n• Teaches responsibility and life skills\n• Builds confidence\n• Reduces your workload\n• Creates family teamwork\n\n**Remember:** Start small, be patient, and celebrate their efforts. It might take longer at first, but it pays off.',
        },
        {
          heading: 'Take Care of Yourself',
          content: 'You can\'t pour from an empty cup. Self-care isn\'t selfish—it\'s essential:\n\n**Basic self-care:**\n• Eat regular meals (even if simple)\n• Stay hydrated\n• Get enough sleep (prioritise this)\n• Shower and basic hygiene\n• Take medications/vitamins\n\n**Mental health:**\n• Find time for activities you enjoy (even 15 minutes)\n• Connect with friends\n• Practice stress management (deep breathing, meditation)\n• Seek professional help if needed\n• Give yourself grace\n\n**Physical health:**\n• Move your body (walk, stretch, whatever feels good)\n• Get fresh air when possible\n• Attend medical appointments\n• Don\'t ignore health concerns\n\n**Remember:** Taking care of yourself isn\'t taking time away from your child—it\'s ensuring you can be there for them long-term.',
        },
        {
          heading: 'Set Boundaries',
          content: 'Learning to say no is crucial for time management:\n\n**Say no to:**\n• Non-essential commitments\n• Things that drain your energy\n• Requests that don\'t align with your priorities\n• Perfectionist expectations (yours or others\')\n\n**Say yes to:**\n• Things that matter to you and your child\n• Opportunities that bring joy\n• Help when offered\n• Rest and self-care\n\n**How to say no:**\n• "I\'d love to, but I can\'t commit right now."\n• "That doesn\'t work for our family, but thank you for thinking of us."\n• "I need to focus on [priority] right now."\n• Simply: "No, thank you."\n\n**Remember:** Every time you say no to something less important, you\'re saying yes to what truly matters.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**How do I find time for everything?**\n\nYou don\'t need to do everything. Prioritise what truly matters and let go of the rest. Good enough is good enough.\n\n**What if I fall behind?**\n\nThat\'s normal. Life happens. Give yourself grace, adjust your expectations, and focus on catching up on the essentials first.\n\n**How do I balance work and parenting?**\n\nSet boundaries, use your support network, and remember that you\'re doing your best. It\'s okay if work and parenting aren\'t perfectly balanced—they rarely are.\n\n**What if my child resists routines?**\n\nBe consistent but flexible. Routines take time to establish. Keep trying, and adjust as needed. Some resistance is normal.\n\n**How do I make time for myself?**\n\nStart small—even 10-15 minutes counts. Use nap times, ask for help, or wake up 15 minutes earlier. Self-care is essential, not optional.\n\n**What if I feel guilty about not doing enough?**\n\nYou\'re doing more than enough. Guilt is common but often unfounded. Focus on what you are doing, not what you\'re not. Your child needs a happy, healthy parent more than perfection.',
        },
        {
          heading: 'You\'re Doing Better Than You Think',
          content: 'Managing time and priorities as a single parent is challenging, but you\'re doing it. Every day you get through is an achievement. Remember: you don\'t have to do everything perfectly. Focus on what matters, let go of the rest, and give yourself credit for all you\'re accomplishing.\n\nIf you need more support, check out our guides on "Building Your Support Network" or "Self-Care for Parents" for additional strategies. You\'ve got this.',
        },
      ],
    },
    'financial-planning-for-single-parents': {
      sections: [
        {
          heading: 'Financial Planning for Single Parents: A Practical Guide',
          content: 'Managing finances as a single parent can feel overwhelming, but with the right strategies and resources, you can create financial stability for your family. This guide covers budgeting, accessing resources, planning for emergencies, and teaching your children about money—all with a practical, non-judgmental approach.',
        },
        {
          heading: 'Create a Realistic Budget',
          content: 'A budget is your financial roadmap. Here\'s how to create one that works:\n\n**Track your income:**\n• Wages or salary\n• Child maintenance (if applicable)\n• Benefits (Child Benefit, Universal Credit, etc.)\n• Any other regular income\n\n**Track your expenses:**\n• **Essentials first:** Housing (rent/mortgage, council tax, utilities), food, childcare, transport, insurance\n• **Necessities:** Phone/internet, clothing, school supplies, medical costs\n• **Everything else:** Entertainment, treats, savings\n\n**Create your budget:**\n• List income and expenses\n• Prioritise essentials\n• Identify areas to reduce if needed\n• Build in some flexibility for unexpected costs\n• Review and adjust regularly\n\n**Tools to help:**\n• Budgeting apps (many free options available)\n• Spreadsheets\n• Pen and paper—whatever works for you\n• Your bank\'s budgeting tools\n\n**Remember:** A budget is a tool, not a punishment. It helps you make informed decisions and feel more in control.',
        },
        {
          heading: 'Access Available Resources',
          content: 'There are resources designed to help single parents. Using them isn\'t a sign of failure—it\'s being smart:\n\n**Government support:**\n• **Child Benefit:** Available for all children under 16 (or 20 if in education)\n• **Universal Credit:** Can help with housing, childcare, and living costs\n• **Child Maintenance Service:** If applicable, can help secure maintenance\n• **Council Tax Reduction:** May be available depending on income\n• **Free School Meals:** Available for eligible children\n• **Healthy Start vouchers:** For pregnant women and children under 4\n\n**Local resources:**\n• Food banks (contact your local council or Citizens Advice)\n• Local charities supporting families\n• Community centres offering support\n• Energy assistance programs\n• Clothing banks or swap events\n\n**How to access:**\n• Contact Citizens Advice for guidance\n• Check your local council website\n• Speak to your child\'s school (they often know local resources)\n• Contact local charities directly\n\n**Remember:** These resources exist to help. There\'s no shame in using them when you need them.',
        },
        {
          heading: 'Reduce Expenses Where Possible',
          content: 'Small changes can add up to significant savings:\n\n**Food:**\n• Meal plan and shop with a list\n• Buy own-brand products\n• Cook from scratch when possible\n• Use leftovers creatively\n• Shop at discount stores\n• Look for reduced items\n\n**Utilities:**\n• Compare energy suppliers\n• Use energy-saving measures (LED bulbs, lower thermostat)\n• Switch off appliances when not in use\n• Consider a water meter if it would save money\n\n**Childcare:**\n• Check if you\'re eligible for free childcare hours\n• Consider childcare vouchers or tax-free childcare\n• Look into after-school clubs (often cheaper than full childcare)\n• Share childcare with other parents when possible\n\n**Other expenses:**\n• Review subscriptions and cancel unused ones\n• Shop around for insurance\n• Buy second-hand when possible (clothes, toys, furniture)\n• Use free activities and resources (libraries, parks, community events)\n• Pack lunches instead of buying\n\n**Remember:** Every small saving adds up. Don\'t feel you need to cut everything—find a balance that works.',
        },
        {
          heading: 'Plan for Emergencies',
          content: 'Even a small emergency fund can prevent financial stress from becoming a crisis:\n\n**Start small:**\n• Even £5-10 a week adds up\n• Set up a separate savings account\n• Automate transfers if possible\n• Treat it like a bill—non-negotiable\n\n**Build gradually:**\n• Aim for £100, then £500, then £1000\n• Every little bit helps\n• Don\'t be discouraged by small amounts\n\n**What counts as an emergency:**\n• Unexpected car repairs\n• Medical expenses\n• Essential appliance breakdown\n• Job loss or reduced hours\n• Unexpected bills\n\n**What\'s not an emergency:**\n• Sales or "good deals"\n• Non-essential purchases\n• Impulse buys\n\n**If you can\'t save right now:**\n• That\'s okay. Focus on covering essentials first\n• Start when you can, even if it\'s just £1\n• Every little bit helps when you need it\n\n**Remember:** An emergency fund is a buffer, not a requirement. Start where you can.',
        },
        {
          heading: 'Manage Debt',
          content: 'If you have debt, you\'re not alone. Here\'s how to manage it:\n\n**Prioritise debts:**\n• **Priority debts:** Council tax, rent/mortgage, energy bills, court fines\n• **Non-priority debts:** Credit cards, loans, overdrafts\n\n**Get help:**\n• Contact Citizens Advice for free debt advice\n• Speak to creditors—many will work with you\n• Consider a debt management plan\n• Don\'t ignore debt—it won\'t go away\n\n**Avoid high-cost borrowing:**\n• Payday loans and high-interest credit can trap you\n• Explore alternatives first\n• Seek advice before taking on new debt\n\n**Remember:** Debt is manageable with the right help. Don\'t struggle alone—seek free, confidential advice.',
        },
        {
          heading: 'Teach Kids About Money (Age-Appropriately)',
          content: 'Teaching children about money helps them understand family decisions and builds their financial literacy:\n\n**Young children (3-6):**\n• Use play money to teach basic concepts\n• Explain that money is used to buy things\n• Talk about needs vs. wants in simple terms\n• Let them help with simple shopping decisions\n\n**Primary school (7-11):**\n• Give small amounts of pocket money\n• Help them save for things they want\n• Talk about family budgeting in simple terms\n• Explain why you make certain choices\n• It\'s okay to say "we can\'t afford that right now"\n\n**Teenagers (12+):**\n• Discuss family finances more openly\n• Teach about saving, budgeting, and spending\n• Help them understand the value of money\n• Encourage part-time work when appropriate\n• Discuss future financial goals\n\n**Key messages:**\n• Money is a tool, not a measure of worth\n• It\'s okay to not have everything\n• Saving and planning are important\n• Family decisions are made together\n\n**Remember:** Teaching kids about money doesn\'t mean sharing all financial stress. Keep it age-appropriate and positive.',
        },
        {
          heading: 'Plan for the Future',
          content: 'Even when money is tight, thinking about the future matters:\n\n**Short-term goals:**\n• Build emergency fund\n• Pay off high-interest debt\n• Save for specific expenses (holidays, school trips)\n\n**Long-term goals:**\n• Children\'s education\n• Retirement (even small amounts help)\n• Home ownership (if desired)\n\n**How to plan:**\n• Set realistic, achievable goals\n• Break big goals into smaller steps\n• Review and adjust regularly\n• Celebrate progress, no matter how small\n\n**Remember:** Planning for the future doesn\'t mean you have to have everything figured out. Start where you are, and adjust as you go.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**What if I can\'t make ends meet?**\n\nContact Citizens Advice immediately. They can help you access benefits, negotiate with creditors, and find local support. You don\'t have to struggle alone.\n\n**Should I feel guilty about using benefits or food banks?**\n\nNo. These resources exist to help families. Using them when you need them is smart, not shameful. You\'re doing what you need to for your family.\n\n**How do I talk to my child about money worries?**\n\nKeep it age-appropriate. You don\'t need to share all details, but it\'s okay to say "we need to be careful with money right now" in simple terms. Focus on what you can do, not just what you can\'t.\n\n**What if I have debt I can\'t pay?**\n\nGet free, confidential advice from Citizens Advice or StepChange. Don\'t ignore it—there are solutions, and you don\'t have to face it alone.\n\n**How do I save when I\'m living paycheck to paycheck?**\n\nStart tiny—even £1 a week. Look for one small expense to cut. Every little bit helps. If you can\'t save right now, that\'s okay. Focus on covering essentials first.\n\n**Should I work more to earn more?**\n\nConsider childcare costs, your wellbeing, and time with your child. Sometimes working more doesn\'t mean earning more after childcare. Find the balance that works for your family.',
        },
        {
          heading: 'You\'re Managing More Than You Realise',
          content: 'Financial planning as a single parent is challenging, but you\'re doing it. Every bill paid, every meal provided, every need met is an achievement. Give yourself credit for managing what you do.\n\nRemember: financial stability is a journey, not a destination. Start where you are, use available resources, and know that asking for help is a strength, not a weakness.\n\nIf you need more support, check out our guides on "Building Your Support Network" or "Managing Time and Priorities" for additional strategies. You\'ve got this.',
        },
      ],
    },
    'developmental-milestones-by-age': {
      sections: [
        {
          heading: 'Developmental Milestones by Age: A Guide for Parents',
          content: 'Understanding developmental milestones can help you know what to expect as your child grows, but it\'s important to remember: milestones are guidelines, not deadlines. Every child develops at their own pace, and that\'s completely normal. This guide will help you understand typical development while reassuring you that variation is expected and healthy.',
        },
        {
          heading: 'Remember: Every Child is Different',
          content: 'Before diving into specific milestones, remember these key points:\n\n**Variation is normal:**\n• Some children walk early, others talk early\n• Some do things in a different order\n• Some skip certain milestones entirely\n• All of this can be normal\n\n**Milestones are guidelines:**\n• They show typical development, not requirements\n• Being slightly ahead or behind is usually fine\n• Focus on progress, not exact timing\n• Trust your instincts about your child\n\n**Your child is unique:**\n• Comparison to other children isn\'t helpful\n• Your child has their own strengths and timeline\n• Celebrate your child\'s individual progress\n• Focus on supporting their development, not rushing it\n\n**Remember:** You know your child best. If something feels off, trust that feeling, but also remember that variation is normal.',
        },
        {
          heading: '0-3 Months: The Newborn Stage',
          content: 'In the first three months, babies are adjusting to life outside the womb:\n\n**Physical development:**\n• Lifts head briefly when on tummy\n• Opens and closes hands\n• Brings hands to mouth\n• Kicks legs and moves arms\n• Can turn head from side to side\n\n**Cognitive development:**\n• Follows objects with eyes\n• Recognises familiar faces and voices\n• Responds to sounds\n• Shows interest in faces\n\n**Social and emotional:**\n• Develops social smile (around 6-8 weeks)\n• Makes eye contact\n• Calms when picked up or spoken to\n• Begins to show different cries for different needs\n\n**Communication:**\n• Makes cooing sounds\n• Responds to voices\n• Turns head toward sounds\n• Makes different facial expressions\n\n**Remember:** Newborns sleep a lot and have limited awake time. Much of their development happens during sleep and quiet alert periods.',
        },
        {
          heading: '4-6 Months: Growing Awareness',
          content: 'Babies become more interactive and aware of their surroundings:\n\n**Physical development:**\n• Rolls over (tummy to back, then back to tummy)\n• Sits with support\n• Reaches for and grasps objects\n• Brings objects to mouth\n• Supports weight on legs when held upright\n\n**Cognitive development:**\n• Shows interest in toys and objects\n• Explores objects with hands and mouth\n• Recognises familiar people\n• Responds to own name\n• Shows curiosity about surroundings\n\n**Social and emotional:**\n• Laughs and squeals\n• Enjoys social interaction\n• Shows preference for familiar people\n• May show stranger awareness\n• Expresses joy, frustration, and other emotions\n\n**Communication:**\n• Babbles and makes various sounds\n• Responds to tone of voice\n• Makes sounds to get attention\n• Imitates some sounds\n\n**Remember:** This is when many babies start showing their personalities. Enjoy this interactive stage!',
        },
        {
          heading: '7-9 Months: On the Move',
          content: 'Babies become more mobile and communicative:\n\n**Physical development:**\n• Sits independently\n• Gets into crawling position\n• May crawl, scoot, or roll to move\n• Pulls to stand with support\n• Transfers objects between hands\n• Uses pincer grasp (thumb and finger)\n\n**Cognitive development:**\n• Understands object permanence (things exist when out of sight)\n• Looks for hidden objects\n• Explores cause and effect\n• Shows interest in picture books\n• Imitates actions\n\n**Social and emotional:**\n• Shows clear attachment to primary caregivers\n• May show separation anxiety\n• Plays interactive games (peek-a-boo, pat-a-cake)\n• Shows preferences and dislikes\n• May be wary of strangers\n\n**Communication:**\n• Babbles with more variety\n• Says "mama" or "dada" (may not be specific yet)\n• Responds to "no"\n• Uses gestures (pointing, waving)\n• Understands some words\n\n**Remember:** Mobility brings new safety considerations. Baby-proof your home as your child becomes more mobile.',
        },
        {
          heading: '10-12 Months: Standing and First Steps',
          content: 'Many babies take their first steps around this time:\n\n**Physical development:**\n• Pulls to stand independently\n• Cruises along furniture\n• May take first independent steps\n• Climbs stairs (with help)\n• Uses pincer grasp effectively\n• Can feed themselves finger foods\n\n**Cognitive development:**\n• Solves simple problems\n• Follows simple instructions\n• Points to objects when named\n• Shows understanding of familiar words\n• Imitates actions and sounds\n\n**Social and emotional:**\n• Shows clear preferences\n• May show frustration when unable to communicate\n• Enjoys interactive play\n• Shows affection\n• May show independence and determination\n\n**Communication:**\n• Says first words (typically 1-3 words)\n• Understands many words\n• Uses gestures to communicate\n• Shakes head for "no"\n• Waves bye-bye\n\n**Remember:** Walking can happen anywhere from 9-18 months. Both are normal. Don\'t worry if your child isn\'t walking yet.',
        },
        {
          heading: '12-18 Months: Toddlerhood Begins',
          content: 'Your baby is now a toddler, with increased independence and communication:\n\n**Physical development:**\n• Walks independently\n• Climbs stairs (with help)\n• Runs (may be unsteady)\n• Kicks a ball\n• Stacks 2-3 blocks\n• Uses spoon (messily)\n\n**Cognitive development:**\n• Follows simple two-step instructions\n• Points to body parts\n• Shows interest in cause and effect\n• Imitates adult activities\n• Solves simple problems\n\n**Social and emotional:**\n• Shows independence\n• May have tantrums when frustrated\n• Shows empathy (may comfort others)\n• Plays alongside other children (parallel play)\n• Shows preferences and opinions\n\n**Communication:**\n• Vocabulary expands (typically 5-20 words)\n• Uses single words to communicate\n• Follows simple commands\n• Points to show interest\n• Understands much more than they can say\n\n**Remember:** This is a stage of big emotions and growing independence. Tantrums are normal as toddlers learn to communicate and assert themselves.',
        },
        {
          heading: '18-24 Months: Language Explosion',
          content: 'Many children experience a language explosion during this period:\n\n**Physical development:**\n• Runs more confidently\n• Kicks and throws balls\n• Climbs furniture\n• Walks up and down stairs (with help)\n• Builds towers with blocks\n• Uses utensils more effectively\n\n**Cognitive development:**\n• Follows two-step instructions\n• Sorts objects by shape or colour\n• Shows pretend play\n• Understands "mine" and "yours"\n• Shows problem-solving skills\n\n**Social and emotional:**\n• Shows more complex emotions\n• May show possessiveness\n• Begins parallel play with other children\n• Shows empathy and concern for others\n• May resist help (wants to do things independently)\n\n**Communication:**\n• Vocabulary expands rapidly (50-200+ words)\n• Begins combining words ("more milk", "daddy go")\n• Asks questions\n• Follows simple conversations\n• Uses words to express needs and wants\n\n**Remember:** The "terrible twos" often begin around 18 months. This is normal development as children assert independence.',
        },
        {
          heading: 'When to Seek Help',
          content: 'While variation is normal, there are times to seek professional advice:\n\n**Red flags to watch for:**\n• No social smile by 3 months\n• Not reaching for objects by 6 months\n• Not sitting independently by 9 months\n• No babbling by 12 months\n• Not walking by 18 months\n• No words by 18 months\n• Loss of previously acquired skills\n• Extreme sensitivity to sounds, textures, or lights\n• Lack of eye contact or social interaction\n\n**Who to contact:**\n• Your health visitor (for children under 5)\n• Your GP\n• Your child\'s nursery or school\n• Local children\'s services\n\n**Early intervention:**\n• Early intervention can make a significant difference\n• Don\'t wait if you\'re concerned\n• Trust your instincts—you know your child best\n• It\'s better to ask and be reassured than to worry\n\n**Remember:** Seeking help doesn\'t mean something is wrong. It means you\'re being proactive about your child\'s development.',
        },
        {
          heading: 'Frequently Asked Questions',
          content: '**My child isn\'t walking yet, but they\'re 15 months. Should I worry?**\n\nWalking typically happens between 9-18 months. If your child is showing other signs of development (pulling to stand, cruising), they\'re likely fine. However, if you\'re concerned, speak to your health visitor.\n\n**My child isn\'t talking much. When should I be concerned?**\n\nChildren typically say their first words around 12 months and have 5-20 words by 18 months. However, understanding usually comes before speaking. If your child understands words and gestures but isn\'t speaking much, they may just be a late talker. If concerned, speak to your health visitor.\n\n**Is it normal for my child to hit milestones in a different order?**\n\nYes, completely normal. Some children focus on physical skills first, others on communication. As long as your child is making progress overall, the order doesn\'t matter.\n\n**What if my child was premature?**\n\nUse their adjusted age (age from due date, not birth date) when considering milestones, especially in the first two years.\n\n**Should I be doing activities to help my child reach milestones?**\n\nPlay and interaction are the best ways to support development. You don\'t need special programs—reading, talking, playing, and responding to your child are what matter most.\n\n**How do I know if my child is just developing at their own pace vs. needing help?**\n\nTrust your instincts. If something feels off, speak to your health visitor. They can assess whether your child is developing typically or if support would be helpful. It\'s always better to ask.',
        },
        {
          heading: 'Celebrate Your Child\'s Individual Journey',
          content: 'Every child develops at their own pace and in their own way. Milestones are helpful guidelines, but they\'re not requirements. Focus on supporting your child\'s development through play, interaction, and love—not on comparing them to others or rushing them to meet specific timelines.\n\nTrust your instincts. You know your child best. If you have concerns, seek professional advice. But also remember: variation is normal, and your child\'s individual journey is what matters.\n\nIf you need more support, check out our guides on "Supporting Your Child\'s Learning" or "Social and Emotional Development" for additional strategies. You\'re doing great.',
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

