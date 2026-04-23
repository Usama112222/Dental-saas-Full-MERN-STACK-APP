// FAQ Data for Chatbot
export const faqData = [
    {
        id: 1,
        question: "How do I book an appointment?",
        answer: "To book an appointment:\n1. Login to your account\n2. Click on 'Book Appointment'\n3. Select a doctor and treatment\n4. Choose your preferred date and time\n5. Confirm your booking\nYou'll receive a confirmation email immediately.",
        keywords: ["book", "appointment", "schedule", "reserve", "booking"]
    },
    {
        id: 2,
        question: "What are your clinic hours?",
        answer: "Our clinic hours are:\nMonday-Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\nEmergency services available 24/7.",
        keywords: ["hours", "timing", "open", "closed", "clinic hours", "operation hours"]
    },
    {
        id: 3,
        question: "How can I cancel my appointment?",
        answer: "To cancel an appointment:\n1. Go to 'My Appointments'\n2. Find the appointment you want to cancel\n3. Click 'Cancel Appointment'\n4. Provide a reason for cancellation\nNote: Cancel at least 24 hours in advance to avoid charges.",
        keywords: ["cancel", "cancellation", "cancel appointment", "reschedule"]
    },
    {
        id: 4,
        question: "What payment methods do you accept?",
        answer: "We accept:\n✅ Credit/Debit Cards (Visa, MasterCard, Amex)\n✅ Cash\n✅ Insurance\n✅ Bank Transfer\n✅ Digital Wallets (Apple Pay, Google Pay)\n✅ Payment Plans available",
        keywords: ["payment", "pay", "cost", "price", "methods", "insurance", "cash", "card"]
    },
    {
        id: 5,
        question: "How do I reset my password?",
        answer: "To reset your password:\n1. Click 'Forgot Password' on login page\n2. Enter your registered email\n3. Check your email for reset link\n4. Click the link and create new password\nContact support if you don't receive the email.",
        keywords: ["password", "reset", "forgot", "change password", "login issue"]
    },
    {
        id: 6,
        question: "What insurance do you accept?",
        answer: "We accept most major insurance providers including:\n• Delta Dental\n• MetLife\n• Cigna\n• Aetna\n• Blue Cross Blue Shield\nContact us to verify your specific insurance coverage.",
        keywords: ["insurance", "coverage", "claim", "provider", "accept insurance"]
    },
    {
        id: 7,
        question: "How much does a dental checkup cost?",
        answer: "A complete dental checkup costs $99. This includes:\n• Oral examination\n• X-rays (if needed)\n• Professional cleaning\n• Treatment plan discussion\nSpecial discounts available for new patients!",
        keywords: ["cost", "price", "checkup", "cleaning", "fee", "charge", "dental checkup"]
    },
    {
        id: 8,
        question: "How do I view my medical records?",
        answer: "To view your medical records:\n1. Login to your patient portal\n2. Go to 'My Health Records'\n3. View treatment history\n4. Download reports\n5. Share with other providers if needed",
        keywords: ["records", "medical history", "reports", "documents", "health records"]
    },
    {
        id: 9,
        question: "What if I'm late for my appointment?",
        answer: "If you're late:\n• Up to 15 minutes: We'll still accommodate you\n• 15-30 minutes: May need to reschedule\n• Over 30 minutes: Please reschedule\nCall us immediately if you're running late.",
        keywords: ["late", "delay", "missed", "time", "running late"]
    },
    {
        id: 10,
        question: "Do you offer emergency dental services?",
        answer: "Yes! We offer 24/7 emergency dental services for:\n• Severe tooth pain\n• Broken/chipped teeth\n• Knocked-out teeth\n• Abscess/infection\n• Bleeding gums\nCall our emergency hotline: (555) 123-4567",
        keywords: ["emergency", "urgent", "pain", "toothache", "immediate"]
    },
    {
        id: 11,
        question: "How do I leave a review?",
        answer: "To leave a review:\n1. Complete your appointment\n2. Go to 'My Appointments'\n3. Click 'Write Review' on completed appointments\n4. Rate your experience (1-5 stars)\n5. Write your feedback\nYour review will be published after admin approval.",
        keywords: ["review", "feedback", "rate", "rating", "testimonial"]
    },
    {
        id: 12,
        question: "Can I bring my child to appointments?",
        answer: "Yes, we're a family-friendly clinic! We have:\n• Pediatric specialists\n• Child-friendly environment\n• Toys and games in waiting area\n• Parent-accompanied treatment rooms\nPlease inform us when booking if you're bringing children.",
        keywords: ["child", "kid", "family", "pediatric", "children"]
    }
];

// Predefined responses for unknown queries
export const fallbackResponses = [
    "I'm not sure about that. Please contact our support team at support@dentalcare.com",
    "That's a great question! Our support team can help you better. Please call (555) 123-4567",
    "I'll need some help with that. Would you like me to connect you with a live agent?",
    "For detailed information, please email us at info@dentalcare.com or call our helpline."
];