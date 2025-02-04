// const { NlpManager } = require('node-nlp');
// // Create an instance of NlpManager
// const manager = new NlpManager({ languages: ['en'] });

// const trainingData = [


//     {
//         intent : "greetings.hello.1",
//          utterances : [
//             "Hello!", "hello", "Hi", "hi", "Hey", "hey", "Greetings", "greetings", "Howdy", "howdy"
//         ],
//          responses : [
//             "Hello! How can I help you today?"
//         ]
//     },
//     {
//         intent : "greetings.hello.2",
//          utterances : [
//             "Good morning!", "good morning", "Good Morning", "good Morning"
//         ],
//          responses : [
//             "Good morning! How can I assist you?"
//         ]
//     },
//     {
//         intent : "greetings.hello.3",
//          utterances : [
//             "Good afternoon!", "good afternoon", "Good Afternoon", "good Afternoon"
//         ],
//          responses : [
//             "Good afternoon! How may I help you today?"
//         ]
//     },
//     {
//         intent: "greetings.hello.4",
//         utterances: [
//             "Good evening!", "good evening", "Good Evening", "good Evening"
//         ],
//         responses: [
//             "Good evening! What can I do for you?"
//         ]
//     }
// ,


//     {
//         intent: "information.weather.1",
//         utterances: [
//             "What's the weather like today?", "How's the weather?", "Is it going to rain today?", 
//             "Do I need an umbrella?", "What's the forecast for tomorrow?", "Tell me the weather forecast.", 
//             "Will it be sunny today?", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "Let me check for you. It's sunny with a high of 75°F."
//         ]
//     },
//     {
//         intent: "information.weather.2",
//         utterances: [
//             "How's the weather?", "What's the weather like today?", "Is it going to rain today?", 
//             "Do I need an umbrella?", "What's the forecast for tomorrow?", "Tell me the weather forecast.", 
//             "Will it be sunny today?", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "The weather is clear and sunny."
//         ]
//     },
//     {
//         intent: "information.weather.3",
//         utterances: [
//             "Is it going to rain today?", "How's the weather?", "What's the weather like today?", 
//             "Do I need an umbrella?", "What's the forecast for tomorrow?", "Tell me the weather forecast.", 
//             "Will it be sunny today?", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "There is no rain expected today."
//         ]
//     },
//     {
//         intent: "information.weather.4",
//         utterances: [
//             "Do I need an umbrella?", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "What's the forecast for tomorrow?", "Tell me the weather forecast.", 
//             "Will it be sunny today?", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "You won't need an umbrella today."
//         ]
//     },
//     {
//         intent: "information.weather.5",
//         utterances: [
//             "What's the forecast for tomorrow?", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "Do I need an umbrella?", "Tell me the weather forecast.", 
//             "Will it be sunny today?", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "Tomorrow's forecast is partly cloudy with a chance of rain."
//         ]
//     },
//     {
//         intent: "information.weather.6",
//         utterances: [
//             "Tell me the weather forecast.", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "Do I need an umbrella?", "What's the forecast for tomorrow?", 
//             "Will it be sunny today?", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "It's going to be sunny and warm today."
//         ]
//     },
//     {
//         intent: "information.weather.7",
//         utterances: [
//             "Will it be sunny today?", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "Do I need an umbrella?", "What's the forecast for tomorrow?", 
//             "Tell me the weather forecast.", "What's the weather report?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "The weather report says it will be clear."
//         ]
//     },
//     {
//         intent: "information.weather.8",
//         utterances: [
//             "What's the weather report?", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "Do I need an umbrella?", "What's the forecast for tomorrow?", 
//             "Tell me the weather forecast.", "Will it be sunny today?", "Is it hot outside?", "What's the temperature?"
//         ],
//         responses: [
//             "Expect sunny skies with mild temperatures."
//         ]
//     },
//     {
//         intent: "information.weather.9",
//         utterances: [
//             "Is it hot outside?", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "Do I need an umbrella?", "What's the forecast for tomorrow?", 
//             "Tell me the weather forecast.", "Will it be sunny today?", "What's the weather report?", "What's the temperature?"
//         ],
//         responses: [
//             "It's quite warm outside, around 75°F."
//         ]
//     },
//     {
//         intent: "information.weather.10",
//         utterances: [
//             "What's the temperature?", "How's the weather?", "What's the weather like today?", 
//             "Is it going to rain today?", "Do I need an umbrella?", "What's the forecast for tomorrow?", 
//             "Tell me the weather forecast.", "Will it be sunny today?", "What's the weather report?", "Is it hot outside?"
//         ],
//         responses: [
//             "The current temperature is 75°F."
//         ]
//     }
// ,

// {
//     intent: "information.time.1",
//     utterances: [
//         "What's the time?", "What time is it?", "Can you tell me the time?", 
//         "What's the current time?", "Do you know the time?", "Tell me the time, please.", 
//         "What's the time now?", "Can you give me the time?", "What's the exact time?", "Is it time for lunch?"
//     ],
//     responses: [
//         "The current time is 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.2",
//     utterances: [
//         "What time is it now?", "Could you please tell me the time?", "Do you know what time it is?", 
//         "Please inform me about the current time.", "Tell me the exact time now.", "Time, please."
//     ],
//     responses: [
//         "It's 3:00 PM right now."
//     ]
// },
// {
//     intent: "information.time.3",
//     utterances: [
//         "Could you tell me what the time is?", "Time now, please.", "Inform me about the current time.", 
//         "What's the current time exactly?", "Can you please tell me the exact time now?", "Is it lunchtime?"
//     ],
//     responses: [
//         "It is now 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.4",
//     utterances: [
//         "What's the time currently?", "Can you tell me the current time?", "Tell me the time now.", 
//         "Do you know what time it is now?", "What's the exact time?", "Is it time for lunch now?"
//     ],
//     responses: [
//         "The time is 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.5",
//     utterances: [
//         "What time do you have?", "Please tell me the exact time.", "Do you know the time now?", 
//         "Can you give me the current time?", "Inform me about the time now.", "Is it lunchtime now?"
//     ],
//     responses: [
//         "Right now, it's 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.6",
//     utterances: [
//         "Time, please.", "What's the time?", "Can you tell me the current time?", 
//         "Tell me the exact time now.", "What time is it?", "Is it lunchtime now?"
//     ],
//     responses: [
//         "Currently, it's 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.7",
//     utterances: [
//         "Can you tell me the exact time?", "What's the time right now?", "Please inform me about the current time.", 
//         "What's the time now?", "Do you know what time it is?", "Is it lunchtime?"
//     ],
//     responses: [
//         "The exact time is 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.8",
//     utterances: [
//         "Tell me the time, please.", "Could you tell me what time it is?", "What's the current time?", 
//         "Can you tell me the time now?", "Is it lunchtime?", "Do you know the exact time?"
//     ],
//     responses: [
//         "It's exactly 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.9",
//     utterances: [
//         "What's the exact time now?", "What's the current time?", "Tell me the time now.", 
//         "Do you know the time?", "Is it time for lunch?", "What time do you have?"
//     ],
//     responses: [
//         "The clock says it's 3:00 PM."
//     ]
// },
// {
//     intent: "information.time.10",
//     utterances: [
//         "Is it time for lunch?", "What time is it now?", "Can you tell me the time now?", 
//         "Please tell me the exact time now.", "What's the current time?", "Do you know what time it is?"
//     ],
//     responses: [
//         "It's lunchtime at 3:00 PM."
//     ]
// },



// {
//     intent : "information.date.1",
//      utterances : [
//         "What's the date today?", "what's the date today", "what is the date today", 
//         "What day is it today", "Tell me the date, please", "tell me the date please"
//     ],
//      responses : [
//         "Today is July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.2",
//      utterances : [
//         "What's today's date?", "what's today's date", "what is today's date", 
//         "What's the date now", "Tell me the date now", "tell me the date now"
//     ],
//      responses : [
//         "It's July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.3",
//      utterances : [
//         "Can you tell me the date?", "can you tell me the date", "tell me the date"
//     ],
//      responses : [
//         "The date today is July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.4",
//      utterances : [
//         "What's the current date?", "what's the current date", "what is the current date", 
//         "What's the exact date", "What's the exact date", "tell me the exact date"
//     ],
//      responses : [
//         "Today's date is July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.5",
//      utterances : [
//         "What day is it today?", "what day is it today", "what day is today"
//     ],
//      responses : [
//         "Today is the 4th of July, 2024."
//     ]
// },
// {
//     intent : "information.date.6",
//      utterances : [
//         "Tell me the date now", "tell me the date now", "can you tell me the date now"
//     ],
//      responses : [
//         "It's the 4th of July, 2024."
//     ]
// },
// {
//     intent : "information.date.7",
//      utterances : [
//         "What's the date now?", "what's the date now", "what is the date now"
//     ],
//      responses : [
//         "The exact date today is July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.8",
//      utterances : [
//         "Can you give me the date?", "can you give me the date", "give me the date"
//     ],
//      responses : [
//         "Currently, it's July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.9",
//      utterances : [
//         "What's the exact date?", "what's the exact date", "what is the exact date"
//     ],
//      responses : [
//         "The date right now is July 4, 2024."
//     ]
// },
// {
//     intent : "information.date.10",
//      utterances : [
//         "Is today a holiday?", "is today a holiday", "Is today a holiday"
//     ],
//      responses : [
//         "Yes, today is Independence Day!"
//     ]
// },


// {
//     intent : "information.news.1",
//      utterances : [
//         "What's the news today?", "what's the news today", "tell me the news today", 
//         "What's happening in the world", "Any news updates", "give me today's headlines"
//     ],
//      responses : [
//         "Here are the latest headlines: Incredible discovery in science today!"
//     ]
// },
// {
//     intent : "information.news.2",
//      utterances : [
//         "Tell me the latest news", "tell me the latest news", "latest news please", 
//         "What's in the news", "Can you tell me the latest news", "What's the top story today"
//     ],
//      responses : [
//         "Today's top news: Major breakthrough in technology reported!"
//     ]
// },
// {
//     intent : "information.news.3",
//      utterances : [
//         "What's happening in the world", "what is happening in the world", "current world news", 
//         "Any breaking news", "breaking news today", "What's new in the news"
//     ],
//      responses : [
//         "The latest news updates: Global event shakes world markets!"
//     ]
// },
// {
//     intent : "information.news.4",
//      utterances : [
//         "Give me today's headlines", "give me today's headlines", "latest headlines please", 
//         "What's the news update", "Can you give me the latest news update", "What's the top story today"
//     ],
//      responses : [
//         "Here are some recent news updates: Unexpected development in politics!"
//     ]
// },
// {
//     intent : "information.news.5",
//      utterances : [
//         "What's in the news", "what is in the news", "current news", 
//         "What's happening today", "What's the latest news", "What's the top news"
//     ],
//      responses : [
//         "Breaking news: New breakthrough in medical research!"
//     ]
// },
// {
//     intent : "information.news.6",
//      utterances : [
//         "Can you tell me the latest news", "tell me the latest news please", "latest news update", 
//         "Any updates on news", "What's the latest update", "Tell me the news"
//     ],
//      responses : [
//         "Top story today: Unprecedented discovery in space exploration!"
//     ]
// },
// {
//     intent : "information.news.7",
//      utterances : [
//         "What's the top story today", "what is the top story today", "top story please", 
//         "latest news headline", "What's the headline news", "headline today"
//     ],
//      responses : [
//         "Latest headlines: Exciting development in environmental science!"
//     ]
// },
// {
//     intent : "information.news.8",
//      utterances : [
//         "Any breaking news", "is there any breaking news", "latest breaking news", 
//         "breaking news update", "tell me about breaking news", "What's breaking today"
//     ],
//      responses : [
//         "News update: Remarkable achievement in educational innovation!"
//     ]
// },
// {
//     intent : "information.news.9",
//      utterances : [
//         "What's new in the news", "what is new in the news", "new news today", 
//         "latest news today", "news update today", "new headlines today"
//     ],
//      responses : [
//         "Today's news: Revolutionary advancement in renewable energy!"
//     ]
// },
// {
//     intent : "information.news.10",
//      utterances : [
//         "What's the current news", "current news update", "tell me the news update", 
//         "What's happening now", "today's news update", "latest update on news"
//     ],
//      responses : [
//         "Current news: Historic achievement in cultural preservation!"
//     ]
// },


//     {
//         intent : "assistance.account.1",
//          utterances : [
//             "I need help with my account", "I need help with my account", "account help needed", 
//             "Can you assist with my account issues", "assist with account", "Help with my account"
//         ],
//          responses : [
//             "Sure, I can help with that. What seems to be the problem?"
//         ]
//     },
//     {
//         intent : "assistance.account.2",
//          utterances : [
//             "How do I reset my password", "how do I reset my password", "reset password please", 
//             "Can you help me reset my password", "I forgot my password", "forgot password"
//         ],
//          responses : [
//             "To reset your password, go to the settings page and click on 'Forgot Password'."
//         ]
//     },
//     {
//         intent : "assistance.account.3",
//          utterances : [
//             "Can you help me with my account issues", "help with my account issues", "account problem help", 
//             "I need assistance with my account", "account assistance needed", "assist with account issues"
//         ],
//          responses : [
//             "Please describe the issue you're facing with your account."
//         ]
//     },
//     {
//         intent : "assistance.account.4",
//          utterances : [
//             "I can't access my account", "I can't access my account", "access problem with account", 
//             "I'm locked out of my account", "locked out of account", "can't log in"
//         ],
//          responses : [
//             "I'm here to help with your account issues. What do you need assistance with?"
//         ]
//     },
//     {
//         intent : "assistance.account.5",
//          utterances : [
//             "I forgot my password", "forgot my password", "password forgotten", 
//             "How do I recover my account", "recover account help", "account recovery"
//         ],
//          responses : [
//             "You can recover your account by clicking on 'Forgot Password' and following the instructions."
//         ]
//     },
//     {
//         intent : "assistance.account.6",
//          utterances : [
//             "How do I recover my account", "recover account process", "account recovery steps", 
//             "I'm locked out of my account", "locked out of account", "can't log in"
//         ],
//          responses : [
//             "If you forgot your password, you can reset it by going to the 'Forgot Password' link."
//         ]
//     },
//     {
//         intent : "assistance.account.7",
//          utterances : [
//             "I need to change my account details", "change account details", "update account information", 
//             "Can you help me log in", "help with account login", "account login assistance"
//         ],
//          responses : [
//             "To change your account details, go to the settings page and update your information."
//         ]
//     },
//     {
//         intent : "assistance.account.8",
//          utterances : [
//             "Can you help me log in", "help me log in", "login help needed", 
//             "I'm locked out of my account", "can't access my account", "login issue"
//         ],
//          responses : [
//             "If you're locked out of your account, try resetting your password."
//         ]
//     },
//     {
//         intent : "assistance.account.9",
//          utterances : [
//             "Please provide more details about the issue", "more details about the issue", "explain the issue further", 
//             "I can't log in", "login problem", "problem logging in"
//         ],
//          responses : [
//             "Please provide more details about the issue you're having with your account."
//         ]
//     },
//     {
//         intent : "assistance.account.10",
//          utterances : [
//             "I need assistance with my account", "account help needed", "help with account problem", 
//             "How do I reset my password", "help with password reset", "forgot my password"
//         ],
//          responses : [
//             "I can help you log in. What seems to be the problem?"
//         ]
//     }


// ,
// {
//     intent : "assistance.technical.1",
//     utterances : [
//         "I need technical support.", "I need technical support", "technical support required.", 
//         "Can you help me with a technical issue", "technical help needed", "help with technical issue"
//     ],
//     responses : [
//         "I'm here to help. Please describe the issue you're facing."
//     ]
// },
// {
//     intent : "assistance.technical.2",
//     utterances : [
//         "I'm having trouble with my device", "device trouble", "trouble with device", 
//         "I need help with a technical problem", "technical problem assistance", "help with technical problem"
//     ],
//     responses : [
//         "What technical problem are you experiencing?"
//     ]
// },
// {
//     intent : "assistance.technical.3",
//     utterances : [
//         "My computer is not working", "computer issue", "computer not working", 
//         "I can't connect to the internet", "internet connection issue", "connectivity problem"
//     ],
//     responses : [
//         "Tell me more about the trouble you're having with your device."
//     ]
// },
// {
//     intent : "assistance.technical.4",
//     utterances : [
//         "My phone is acting up", "phone issue", "phone not working", 
//         "I need help with my software", "software issue", "help with software"
//     ],
//     responses : [
//         "For phone issues, try restarting your device or checking for updates."
//     ]
// },
// {
//     intent : "assistance.technical.5",
//     utterances : [
//         "Can you fix this technical issue", "fix technical issue", "technical problem fix", 
//         "I need tech support", "tech support needed", "support required"
//     ],
//     responses : [
//         "Technical support is here. What seems to be the problem?"
//     ]
// },
// {
//     intent : "assistance.technical.6",
//     utterances : [
//         "I'm having trouble with my device", "device issue", "device not working", 
//         "I need help with a technical problem", "technical issue help", "help needed with technical issue"
//     ],
//     responses : [
//         "I can assist you with your technical issue. What seems to be the problem?"
//     ]
// },
// {
//     intent : "assistance.technical.7",
//     utterances : [
//         "My computer is not working", "computer issue", "computer problem", 
//         "I can't connect to the internet", "internet issue", "internet problem"
//     ],
//     responses : [
//         "For computer issues, try restarting your device first."
//     ]
// },
// {
//     intent : "assistance.technical.8",
//     utterances : [
//         "My phone is acting up", "phone trouble", "phone issue", 
//         "I need help with my software", "software assistance", "help with software issue"
//     ],
//     responses : [
//         "If you need help with software, please specify the software and the issue."
//     ]
// },
// {
//     intent : "assistance.technical.9",
//     utterances : [
//         "Can you fix this technical issue", "fix my issue", "fix technical problem", 
//         "I need tech support", "support for technical issue", "technical issue assistance"
//     ],
//     responses : [
//         "I'll do my best to fix the technical issue you're experiencing. Please provide more details."
//     ]
// },
// {
//     intent : "assistance.technical.10",
//     utterances : [
//         "I need assistance with my device", "device help needed", "help with device problem", 
//         "I need tech support", "support for technical problem", "technical problem assistance"
//     ],
//     responses : [
//         "Technical support is here. What seems to be the problem?"
//     ]
// },
// {
//     intent: "product.inquiry.1",
//     utterances: [
//         "Tell me about your products", "products information", "products details", 
//         "What products do you offer", "products available", "product variety"
//     ],
//     responses: [
//         "We offer a variety of products including electronics, clothing, and home goods."
//     ]
// },
// {
//     intent: "product.inquiry.2",
//     utterances: [
//         "Do you have any discounts", "discount offers", "discounts available", 
//         "What are your best-selling items", "top-selling products", "popular items"
//     ],
//     responses: [
//         "Yes, we have ongoing discounts on selected items. Check our website for more details."
//     ]
// },
// {
//     intent: "product.inquiry.3",
//     utterances: [
//         "What products do you offer", "show me products", "product catalog", 
//         "What's on sale", "sale items", "sale products"
//     ],
//     responses: [
//         "Our best-selling items include the latest smartphones, laptops, and smartwatches."
//     ]
// },
// {
//     intent: "product.inquiry.4",
//     utterances: [
//         "Do you have any new products", "new arrivals", "latest products", 
//         "What are your top-rated products", "top-rated items", "highly rated products"
//     ],
//     responses: [
//         "We have a wide range of products including electronics, clothing, and more."
//     ]
// },
// {
//     intent: "product.inquiry.5",
//     utterances: [
//         "Can you recommend a product", "product recommendations", "recommendation needed", 
//         "product suggestion", "suggest a product", "recommend me something"
//     ],
//     responses: [
//         "You can view all our products on our website."
//     ]
// },
// {
//     intent: "product.inquiry.6",
//     utterances: [
//         "What products do you offer", "product catalog", "show me your products", 
//         "What's on sale", "any discounts", "new arrivals"
//     ],
//     responses: [
//         "Our product catalog is available online. Feel free to browse through it."
//     ]
// },
// {
//     intent: "product.inquiry.7",
//     utterances: [
//         "Do you have any discounts", "discount offers", "special offers available", 
//         "sale section", "discounted items", "any deals"
//     ],
//     responses: [
//         "We have several items on sale. Check our sale section for discounts."
//     ]
// },
// {
//     intent: "product.inquiry.8",
//     utterances: [
//         "Do you have any new products", "latest arrivals", "new additions", 
//         "What's new", "new items", "recently added"
//     ],
//     responses: [
//         "Yes, we have new products coming in regularly. Check our website for updates."
//     ]
// },
// {
//     intent: "product.inquiry.9",
//     utterances: [
//         "What are your top-rated products", "highest rated items", "customer favorites", 
//         "best products", "top picks", "best sellers"
//     ],
//     responses: [
//         "Our top-rated products include high-quality electronics and trendy clothing."
//     ]
// },
// {
//     intent: "product.inquiry.10",
//     utterances: [
//         "Can you recommend a product", "product suggestions", "recommendation needed", 
//         "suggest something", "recommend me a product", "product advice"
//     ],
//     responses: [
//         "I can recommend products based on your preferences. What are you looking for?"
//     ]
// },
// {
//     intent: "order.transaction.1",
//     utterances: [
//         "How do I track my order", "order tracking", "track my order", 
//         "Where's my order", "order status", "order tracking number"
//     ],
//     responses: [
//         "You can track your order by entering your tracking number on our tracking page."
//     ]
// },
// {
//     intent: "order.transaction.2",
//     utterances: [
//         "I want to cancel my order", "cancel order", "order cancellation", 
//         "cancel my order", "canceling order", "how to cancel an order"
//     ],
//     responses: [
//         "Please provide your order number, and I’ll assist you with the cancellation."
//     ]
// },
// {
//     intent: "order.transaction.3",
//     utterances: [
//         "How can I return a product", "product return process", "returning a product", 
//         "return process", "how to return an item", "initiate a return"
//     ],
//     responses: [
//         "To return a product, visit our returns page and follow the instructions."
//     ]
// },
// {
//     intent: "order.transaction.4",
//     utterances: [
//         "Can I get a refund", "refund process", "getting a refund", 
//         "refund request", "how to get a refund", "requesting a refund"
//     ],
//     responses: [
//         "Refunds can be requested through our customer service. Please provide your order details."
//     ]
// },
// {
//     intent: "order.transaction.5",
//     utterances: [
//         "What is the status of my order", "order status check", "check my order status", 
//         "order status update", "order status inquiry", "order status query"
//     ],
//     responses: [
//         "Your order status can be checked using your tracking number on our website."
//     ]
// },
// {
//     intent: "order.transaction.6",
//     utterances: [
//         "I need to cancel my order", "order cancellation needed", "canceling my order", 
//         "cancel order request", "order cancelation", "need to cancel order"
//     ],
//     responses: [
//         "If you need to cancel your order, please provide your order number."
//     ]
// },
// {
//     intent: "order.transaction.7",
//     utterances: [
//         "How do I initiate a return", "initiate return process", "starting a return", 
//         "begin return process", "how to start a return", "return initiation"
//     ],
//     responses: [
//         "To initiate a return, visit our returns page and follow the instructions."
//     ]
// },
// {
//     intent: "order.transaction.8",
//     utterances: [
//         "Can you check my order status", "check order status", "order status check", 
//         "verify my order status", "order tracking inquiry", "status of my order"
//     ],
//     responses: [
//         "I can check your order status. Please provide your order number."
//     ]
// },
// {
//     intent: "order.transaction.9",
//     utterances: [
//         "How do I get a refund", "getting refund process", "requesting refund", 
//         "refund process inquiry", "how to request a refund", "getting money back"
//     ],
//     responses: [
//         "To get a refund, contact our customer service with your order details."
//     ]
// },
// {
//     intent: "order.transaction.10",
//     utterances: [
//         "How can I return a product", "returning item process", "return request", 
//         "product return", "return query", "how to send back a product"
//     ],
//     responses: [
//         "To return a product, visit our returns page and follow the instructions."
//     ]
// }
// ,
// {
//     intent : "farewell.goodbye.1",
//     utterances : [
//         "Thanks for your help!", "thanks!", "thank you!", 
//         "thank you for your help!", "thanks for the assistance!", "thanks for helping!"
//     ],
//    responses : [
//         "You're welcome! If you have any more questions, feel free to ask."
//     ]
// },
// {
//     intent : "farewell.goodbye.2",
//     utterances : [
//         "Goodbye!", "bye!", "bye bye!", 
//         "see you!", "see you later!", "bye for now!"
//     ],
//    responses : [
//         "Goodbye! Have a great day!"
//     ]
// },
// {
//     intent : "farewell.goodbye.3",
//     utterances : [
//         "See you later!", "later!", "talk to you later!", 
//         "catch you later!", "until next time!", "goodnight!"
//     ],
//    responses : [
//         "See you! Take care!"
//     ]
// },
// {
//     intent : "farewell.goodbye.4",
//     utterances : [
//         "Thank you!", "thanks a lot!", "thanks so much!", 
//         "thank you very much!", "much appreciated!", "thanks again!"
//     ],
//    responses : [
//         "You're welcome! Have a great day!"
//     ]
// },
// {
//     intent : "farewell.goodbye.5",
//     utterances : [
//         "Bye!", "bye for now!", "farewell!", 
//         "take care!", "goodbye and take care!", "see you soon!"
//     ],
//    responses : [
//         "Bye! Take care!"
//     ]
// },
// {
//     intent : "farewell.goodbye.6",
//     utterances : [
//         "Thanks!", "thanks for everything!", "thank you very much!", 
//         "thanks for your assistance!", "thank you for helping!", "thanks a bunch!"
//     ],
//    responses : [
//         "Glad I could help! Bye!"
//     ]
// },
// {
//     intent : "farewell.goodbye.7",
//     utterances : [
//         "Take care!", "have a nice day!", "have a great day!", 
//         "take good care!", "stay safe!", "farewell and take care!"
//     ],
//    responses : [
//         "Take care! Have a nice day!"
//     ]
// },
// {
//     intent : "farewell.goodbye.8",
//     utterances : [
//         "Talk to you later!", "until next time!", "see you soon!", 
//         "talk soon!", "see you later alligator!", "bye bye and talk to you later!"
//     ],
//    responses : [
//         "Talk to you later! Have a good one!"
//     ]
// },
// {
//     intent : "farewell.goodbye.9",
//     utterances : [
//         "Have a nice day!", "good day!", "enjoy your day!", 
//         "wishing you a great day!", "have a fantastic day!", "have a wonderful day!"
//     ],
//    responses : [
//         "Have a nice day! See you!"
//     ]
// },
// {
//     intent : "farewell.goodbye.10",
//     utterances : [
//         "Catch you later!", "see you soon!", "until we meet again!", 
//         "see you next time!", "bye for now and see you later!", "bye bye and catch you later!"
//     ],
//    responses : [
//         "Catch you later! Take care!"
//     ]
// }
// ,
// {
//     intent : "smalltalk.howareyou.1",
//     utterances : [
//         "How are you?", "how are you doing?", "how\'s everything?", 
//         "how are you feeling?", "how\'s it going with you?", "how are you today?"
//     ],
//    responses : [
//         "I'm doing well, thank you. How about you?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.2",
//     utterances : [
//         "What's your name?", "who are you?", "what\'s your identity?", 
//         "what do I call you?", "how should I address you?", "what\'s your name?"
//     ],
//    responses : [
//         "I’m your friendly chatbot assistant. How can I help you?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.3",
//     utterances : [
//         "Do you like music?", "are you a fan of music?", "do you enjoy music?", 
//         "what do you think about music?", "how do you feel about music?", "music lover?"
//     ],
//    responses : [
//         "I love music! What’s your favorite song?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.4",
//     utterances : [
//         "How is your day?", "how\'s your day going?", "how\'s your day been?", 
//         "how\'s your day so far?", "how have you been today?", "how\'s your day treating you?"
//     ],
//    responses : [
//         "My day is going great! How about yours?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.5",
//     utterances : [
//         "What do you do?", "what\'s your job?", "what are your responsibilities?", 
//         "what are you here for?", "what can you do?", "what\'s your purpose?"
//     ],
//    responses : [
//         "I'm here to assist you with any questions or issues you have."
//     ]
// },
// {
//     intent : "smalltalk.howareyou.6",
//     utterances : [
//         "How have you been?", "how have you been feeling?", "how have you been doing?", 
//         "how\'s everything been?", "what have you been up to?", "how have things been?"
//     ],
//    responses : [
//         "I've been good, thank you! How have you been?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.7",
//     utterances : [
//         "What's up?", "what\'s happening?", "what\'s going on?", 
//         "what\'s new?", "what\'s the news?", "what\'s going down?"
//     ],
//    responses : [
//         "Not much, just here to help! How can I assist?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.8",
//     utterances : [
//         "How's it going?", "how\'s life?", "how\'s everything?", 
//         "how are things?", "how\'s everything going?", "how are you feeling today?"
//     ],
//    responses : [
//         "It's going well! How about you?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.9",
//     utterances : [
//         "How do you feel?", "how are you feeling today?", "are you feeling alright?", 
//         "how do you feel about that?", "how do you feel right now?", "how are you doing emotionally?"
//     ],
//    responses : [
//         "I feel great! Thanks for asking. How about you?"
//     ]
// },
// {
//     intent : "smalltalk.howareyou.10",
//     utterances : [
//         "Are you having a good day?", "how's your day so far?", "how\'s your day been?", 
//         "are you having a nice day?", "how\'s your day going so far?", "is today a good day for you?"
//     ],
//    responses : [
//         "I'm having a good day! How about you?"
//     ]
// }
// ,
// {
//     intent : "custom.fact.1",
//     utterances : [
//         "Tell me a fun fact.", "tell me a fact", "fun fact please", 
//         "give me an interesting fact", "do you have any fun facts?", "share a fact"
//     ],
//    responses : [
//         "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible."
//     ]
// },
// {
//     intent : "custom.fact.2",
//     utterances : [
//         "What is AI?", "explain AI", "AI definition", 
//         "what do you know about AI", "what's artificial intelligence?", "AI information"
//     ],
//    responses : [
//         "AI stands for Artificial Intelligence. It's a field of computer science that aims to create intelligent machines that can mimic human behavior and thinking."
//     ]
// },
// {
//     intent : "custom.fact.3",
//     utterances : [
//         "Can you recommend a book?", "book recommendation", "suggest a book", 
//         "what book should I read?", "recommend me a good book", "book suggestion"
//     ],
//    responses : [
//         "Sure! I recommend \"To Kill a Mockingbird\" by Harper Lee. It's a classic!"
//     ]
// },
// {
//     intent : "custom.fact.4",
//     utterances : [
//         "Tell me something interesting.", "something interesting please", "interesting fact", 
//         "share an interesting fact", "tell me an interesting thing", "interesting information"
//     ],
//    responses : [
//         "Here's something interesting: The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes."
//     ]
// },
// {
//     intent : "custom.fact.5",
//     utterances : [
//         "Do you know any trivia?", "share trivia", "trivia please", 
//         "give me some trivia", "tell me a trivia", "trivia fact"
//     ],
//    responses : [
//         "Here's a trivia for you: The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat."
//     ]
// },
// {
//     intent : "custom.fact.6",
//     utterances : [
//         "What's a fun fact?", "fun fact", "tell me a fun fact", 
//         "give me a fun fact", "something fun", "interesting fun fact"
//     ],
//    responses : [
//         "Did you know that bananas are berries, but strawberries are not?"
//     ]
// },
// {
//     intent : "custom.fact.7",
//     utterances : [
//         "Tell me a random fact.", "random fact", "give me a random fact", 
//         "tell me something random", "share a random fact", "random information"
//     ],
//    responses : [
//         "Random fact: A day on Venus is longer than a year on Venus."
//     ]
// },
// {
//     intent : "custom.fact.8",
//     utterances : [
//         "Can you share some trivia?", "share trivia please", "tell me trivia", 
//         "give me trivia", "share some trivia", "trivia information"
//     ],
//    responses : [
//         "Trivia: The inventor of the frisbee was turned into a frisbee after he died."
//     ]
// },
// {
//     intent: "custom.fact.1",
//     utterances: [
//         "Tell me something interesting.",
//         "Share an interesting fact.",
//         "Give me an interesting piece of information.",
//         "What's an intriguing fact.",
//         "Tell me a fascinating fact.",
//         "Interesting fact, please."
//     ],
//     responses: [
//         "Here's an interesting fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!"
//     ]
// },
// {
//     intent: "custom.fact.2",
//     utterances: [
//         "Do you have any cool facts?",
//         "Share a cool fact with me.",
//         "Tell me something cool.",
//         "Give me a cool fact.",
//         "Cool information, please.",
//         "What's a cool fact?"
//     ],
//     responses: [
//         "Sure! Here's a cool fact: The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat."
//     ]
// },
// {
//     intent: "custom.fact.3",
//     utterances: [
//         "Tell me an amazing fact.",
//         "Share an amazing fact with me.",
//         "Give me an amazing piece of information.",
//         "What's an astonishing fact.",
//         "Tell me something amazing.",
//         "Amazing fact, please."
//     ],
//     responses: [
//         "Here's an amazing fact: A day on Venus (its rotation period) is longer than a year on Venus (its orbital period around the Sun)."
//     ]
// },
// {
//     intent: "custom.fact.4",
//     utterances: [
//         "Give me a mind-blowing fact.",
//         "Tell me something mind-blowing.",
//         "Share a mind-blowing fact with me.",
//         "Mind-blowing information, please.",
//         "What's a mind-blowing fact?",
//         "Tell me a fact that will blow my mind."
//     ],
//     responses: [
//         "Here's a mind-blowing fact: A single cloud can weigh more than 1 million pounds (450,000 kg)."
//     ]
// },
// {
//     intent: "custom.fact.5",
//     utterances: [
//         "Tell me an unusual fact.",
//         "Share an unusual fact with me.",
//         "Give me an unusual piece of information.",
//         "What's an odd fact.",
//         "Tell me something unusual.",
//         "Unusual fact, please."
//     ],
//     responses: [
//         "Here's an unusual fact: There are more possible iterations of a game of chess than there are atoms in the known universe."
//     ]
// },
// {
//     intent: "custom.fact.6",
//     utterances: [
//         "Give me a random fact.",
//         "Tell me something random.",
//         "Share a random piece of information.",
//         "What's a surprising fact?",
//         "Random fact, please.",
//         "Tell me a fact I might not know."
//     ],
//     responses: [
//         "Sure! Here's a random fact: The world's oldest piece of chewing gum is over 9,000 years old."
//     ]
// },
// {
//     intent: "custom.fact.7",
//     utterances: [
//         "Tell me a historical fact.",
//         "Share a historical fact with me.",
//         "Give me a fact from history.",
//         "What's a fact about history?",
//         "Tell me something historical.",
//         "Historical fact, please."
//     ],
//     responses: [
//         "Here's a historical fact: The Great Wall of China is not a single continuous wall but a series of walls and fortifications built by different Chinese dynasties over centuries."
//     ]
// },
// {
//     intent: "custom.fact.8",
//     utterances: [
//         "Give me an animal fact.",
//         "Tell me something about animals.",
//         "Share an animal fact with me.",
//         "What's a fact about an animal?",
//         "Animal fact, please.",
//         "Tell me an interesting fact about an animal."
//     ],
//     responses: [
//         "Here's an animal fact: Dolphins have names for each other. They use unique whistles to identify each member of their pod."
//     ]
// },
// {
//     intent : "personalization.reminder.1",
//     utterances : [
//         "What's my name?", "Remind me to call John tomorrow.", "What's my schedule for today?",
//         "Can you set a reminder for me?", "Do I have any appointments?", "What reminders do I have?",
//         "Can you remind me to buy groceries?", "What's on my calendar?", "Do I have any plans for today?",
//         "Can you set a reminder for my meeting?"
//     ],
//     responses : [
//         "Your name is stored in my memory, but I need you to tell me your name first."
//     ]
// },
// {
//     intent : "personalization.reminder.2",
//     utterances : [
//         "Remind me to call John tomorrow.", "Reminder for John", "Set reminder for John",
//         "Call John reminder", "Remind about John", "John reminder"
//     ],
//     responses : [
//         "I've set a reminder to call John tomorrow."
//     ]
// },
// {
//     intent : "personalization.reminder.3",
//     utterances : [
//         "What's my schedule for today?", "Today's schedule", "Schedule for today",
//         "My plans today", "Today's plans", "What's on my schedule"
//     ],
//     responses : [
//         "Here is your schedule for today: Meeting at 10 AM, Lunch at 12:30 PM, Project review at 3 PM."
//     ]
// },
// {
//     intent : "personalization.reminder.4",
//     utterances : [
//         "Can you set a reminder for me?", "Set reminder", "Reminder please",
//         "Remind me", "Create reminder", "Reminder request"
//     ],
//     responses : [
//         "I can set a reminder for you. What would you like to be reminded of?"
//     ]
// },
// {
//     intent : "personalization.reminder.5",
//     utterances : [
//         "Do I have any appointments?", "Appointments today", "My appointments",
//         "Appointment reminder", "Do I have any plans?", "Any appointments"
//     ],
//     responses : [
//         "Let me check your appointments: You have a doctor's appointment at 2 PM and a client meeting at 4 PM."
//     ]
// },
// {
//     intent : "personalization.reminder.6",
//     utterances : [
//         "What reminders do I have?", "My reminders", "Reminders list",
//         "List of reminders", "Show my reminders", "View reminders"
//     ],
//     responses : [
//         "You have the following reminders: Buy groceries, Submit report by EOD."
//     ]
// },
// {
//     intent : "personalization.reminder.7",
//     utterances : [
//         "Can you remind me to buy groceries?", "Grocery reminder", "Remind about groceries",
//         "Buy groceries reminder", "Set grocery reminder", "Grocery shopping reminder"
//     ],
//     responses : [
//         "I've set a reminder for you to buy groceries."
//     ]
// },
// {
//     intent : "personalization.reminder.8",
//     utterances : [
//         "What's on my calendar?", "Calendar reminder", "Calendar details",
//         "Show my calendar", "View calendar", "Check calendar"
//     ],
//     responses : [
//         "Your calendar shows: Meetings throughout the day, Lunch with team at 1 PM."
//     ]
// },
// {
//     intent : "personalization.reminder.9",
//     utterances : [
//         "Do I have any plans for today?", "Plans today", "Today's plans",
//         "My plans", "Any plans", "Plan reminder"
//     ],
//     responses : [
//         "You have the following plans for today: Gym in the morning, Dinner with friends at 7 PM."
//     ]
// },
// {
//     intent : "personavhsthtlization.reminder.10",
//     utterances : [
//         "Can you set a reminder for my meeting?", "Meeting reminder", "Remind about meeting",
//         "Set meeting reminder", "Meeting alert", "Meeting schedule"
//     ],
//     responses : [
//         "Reminder set for your meeting."
//     ]
// },
// {
//     intent : "info.hevshtwlp",
//     utterances : [
//         "How do I contact support?",
//         "What's the best way to reach support?",
//         "Could you tell me how to get in touch with support?",
//         "I'm having trouble finding the support contact information, can you help?",
//         "Where can I contact support for assistance?"
//     ],
//     responses : [
//         "You can contact support by emailing [support email]."
//     ]
// },
// {
//     intent : "info.hefdasgdhlp",
//     utterances : [
//         "Where can I find more information?",
//         "How can I get additional details?",
//         "Is there a place where I can get further information?",
//         "Could you direct me to where I can find more details?",
//         "I need more information, where should I look?"
//     ],
//     responses : [
//         "For more information, visit our website."
//     ]
// },
// {
//     intent : "infdasfdasfo.help",
//     utterances : [
//         "What should I do if I have an issue?",
//         "If I encounter a problem, what steps should I take?",
//         "What's the protocol for reporting an issue?",
//         "If there's an issue, how should I proceed?",
//         "Could you guide me on what to do if something goes wrong?"
//     ],
//     responses : [
//         "If you have an issue, please describe it to me, and I will do my best to help."
//     ]
// },
// {
//     intent : "info.fdasdfelp",
//     utterances : [
//         "I need help.",
//         "Can you assist me with something?",
//         "I'm seeking assistance, can you help?",
//         "Help required, could you assist?",
//         "Could you lend me a hand?"
//     ],
//     responses : [
//         "I'm here to help. What do you need assistance with?"
//     ]
// },
// {
//     intent : "info.hdsfafdaelp",
//     utterances : [
//         "Can you assist me?",
//         "Could you aid me in this matter?",
//         "I require your assistance, can you help?",
//         "Need assistance, are you available?",
//         "Can you provide support?"
//     ],
//     responses : [
//         "Sure, I'm here to assist you. What seems to be the problem?"
//     ]
// },
// {
//     intent : "infoafsdf.help",
//     utterances : [
//         "How can I get support?",
//         "Where do I go for support?",
//         "What's the process for seeking support?",
//         "How do I access support?",
//         "I'm looking for support, what should I do?"
//     ],
//     responses : [
//         "Support is available via email at [support email]."
//     ]
// },
// {
//     intent : "infasddffo.help",
//     utterances : [
//         "Where can I get help?",
//         "I need assistance, where should I go?",
//         "Can you direct me to where I can find help?",
//         "How can I find help?",
//         "Where do I go if I need help?"
//     ],
//     responses : [
//         "Help is available on our website."
//     ]
// },
// {
//     intent : "info.hfadsfelp",
//     utterances : [
//         "I have a problem.",
//         "There's an issue I need to address.",
//         "Could you help me with a problem?",
//         "I'm facing a challenge, can you assist?",
//         "Something's wrong, can you help?"
//     ],
//     responses : [
//         "Please tell me more about the problem you're facing."
//     ]
// },
// {
//     intent : "inffdasdo.help",
//     utterances : [
//         "Can you help me solve this issue?",
//         "I need assistance resolving this problem.",
//         "Could you assist in resolving this issue?",
//         "Can you help fix this problem?",
//         "Is there a way to resolve this issue with your help?"
//     ],
//     responses : [
//         "I'll do my best to help you solve the issue. Please provide more details."
//     ]
// },
// {
//     intent : "inffasdfdo.help",
//     utterances : [
//         "I need assistance.",
//         "Assistance required, can you help?",
//         "Can you provide assistance?",
//         "Help needed, can you assist?",
//         "Could you lend a hand with something?"
//     ],
//     responses : [
//         "Assistance is here. What do you need help with?"
//     ]
// },

// {
//     intent : "directions.lasfdaocation",
//     utterances : [
//         "How do I get to the nearest gas station?",
//         "Where's the closest gas station?",
//         "Could you help me find the nearest gas station?",
//         "I'm looking for directions to the nearest gas station.",
//         "Can you guide me to the gas station nearby?"
//     ],
//     responses : [
//         "The nearest gas station is at 123 Main St. Head north on Elm St and turn right at Main St."
//     ]
// },
// {
//     intent : "directions.lfadsdfocation",
//     utterances : [
//         "Where is the closest restaurant?",
//         "How can I find the nearest restaurant?",
//         "I need directions to the closest restaurant.",
//         "Can you tell me how to get to the restaurant nearby?",
//         "What's the best way to reach the restaurant?"
//     ],
//     responses : [
//         "The closest restaurant is 2 blocks away at 456 Oak St."
//     ]
// },
// {
//     intent : "directionfdassfds.location",
//     utterances : [
//         "Can you give me directions to the mall?",
//         "How do I get to the mall?",
//         "Guide me to the nearest mall, please.",
//         "I'm heading to the mall, can you provide directions?",
//         "Where can I find directions to the mall?"
//     ],
//     responses : [
//         "To get to the mall, head south on Pine St for 3 miles and turn left on Maple Ave."
//     ]
// },
// {
//     intent : "directioasfdfasns.location",
//     utterances : [
//         "I need directions to the airport.",
//         "Can you guide me to the airport?",
//         "How do I get to the nearest airport?",
//         "Where's the airport?",
//         "What's the best route to the airport?"
//     ],
//     responses : [
//         "For the airport, take the highway west for 10 miles and take exit 15."
//     ]
// },
// {
//     intent : "asdfasd.location",
//     utterances : [
//         "Where is the nearest hospital?",
//         "How can I find the nearest hospital?",
//         "I need directions to the hospital nearby.",
//         "Can you tell me how to get to the hospital?",
//         "What's the best way to reach the hospital?"
//     ],
//     responses : [
//         "The nearest hospital is 5 miles away at 789 Birch Rd."
//     ]
// },
// {
//     intent : "asdadfas.location",
//     utterances : [
//         "How do I get to the train station?",
//         "Where's the nearest train station?",
//         "Can you give me directions to the train station?",
//         "I need directions to the train station.",
//         "Guide me to the train station nearby."
//     ],
//     responses : [
//         "The train station is 1 mile away on Maple Ave."
//     ]
// },
// {
//     intent : "directiofadsdsns.location",
//     utterances : [
//         "What's the best way to the museum?",
//         "How can I find the museum?",
//         "Can you guide me to the museum?",
//         "How do I get to the museum?",
//         "I need directions to the museum."
//     ],
//     responses : [
//         "To reach the museum, go straight on Elm St and turn left on Museum Rd."
//     ]
// },
// {
//     intent : "directifdasdfons.location",
//     utterances : [
//         "Can you guide me to the park?",
//         "How do I get to the park?",
//         "Where's the nearest park?",
//         "I need directions to the park.",
//         "What's the best route to the park?"
//     ],
//     responses : [
//         "The park is a 10-minute walk north on Park St."
//     ]
// },
// {
//     intent : "directiofadssdns.location",
//     utterances : [
//         "Where's the nearest ATM?",
//         "How do I get to the ATM?",
//         "Can you guide me to the ATM?",
//         "I need directions to the nearest ATM.",
//         "What's the best way to reach the ATM?"
//     ],
//     responses : [
//         "The nearest ATM is at 234 Oak St, right next to the convenience store."
//     ]
// },
// {
//     intent : "directionfdadsfs.location",
//     utterances : [
//         "How do I get to the nearest pharmacy?",
//         "Where is the closest pharmacy?",
//         "Can you give me directions to the pharmacy?",
//         "I need directions to the pharmacy nearby.",
//         "Guide me to the pharmacy nearby."
//     ],
//     responses : [
//         "The nearest pharmacy is 3 blocks away at 567 Pine St."
//     ]
// },
// {
//     intent : "informatifdsaon.about",
//     utterances : [
//         "Tell me about your company.",
//         "What do you do at your company?",
//         "Could you provide information about your company?",
//         "I'd like to learn more about your company.",
//         "Can you describe your company?"
//     ],
//     responses : [
//         "Our company specializes in providing high-quality tech solutions to businesses."
//     ]
// },
// {
//     intent : "informatfdasion.about",
//     utterances : [
//         "What services do you offer?",
//         "Can you list your services?",
//         "Tell me about the services you provide.",
//         "What kind of services does your company offer?",
//         "Could you outline your services?"
//     ],
//     responses : [
//         "We offer a variety of services including software development, IT consulting, and tech support."
//     ]
// },
// {
//     intent : "inffdasdsormation.about",
//     utterances : [
//         "What are your business hours?",
//         "When are you open?",
//         "Can you tell me your office hours?",
//         "What time are you open?",
//         "What are your operating hours?"
//     ],
//     responses : [
//         "Our business hours are from 9 AM to 6 PM, Monday to Friday."
//     ]
// },
// {
//     intent : "infofdsadfrmation.about",
//     utterances : [
//         "Can you tell me about your mission?",
//         "What is your mission statement?",
//         "What is your company's mission?",
//         "Could you share your mission with me?",
//         "What are your goals?"
//     ],
//     responses : [
//         "Our mission is to deliver innovative and efficient solutions to help businesses thrive."
//     ]
// },
// {
//     intent : "informafdasfdstion.about",
//     utterances : [
//         "What is your company's goal?",
//         "What goals does your company have?",
//         "What are you striving to achieve?",
//         "Can you share your company's goals?",
//         "What are your objectives?"
//     ],
//     responses : [
//         "Our goal is to be a leading provider of tech solutions, known for our expertise and customer satisfaction."
//     ]
// },
// {
//     intent : "informatiofadsfdsan.about",
//     utterances : [
//         "What is your company history?",
//         "Tell me about the history of your company.",
//         "Can you share your company's background?",
//         "How long has your company been around?",
//         "What is the story behind your company?"
//     ],
//     responses : [
//         "We have a rich history of innovation and customer satisfaction."
//     ]
// },
// {
//     intent : "informatiofdsafsdn.about",
//     utterances : [
//         "Who are the founders of the company?",
//         "Who founded your company?",
//         "Can you tell me about the founders?",
//         "Who started your company?",
//         "What is the background of your founders?"
//     ],
//     responses : [
//         "Our founders are industry experts with decades of experience."
//     ]
// },
// {
//     intent : "informatifdafdson.about",
//     utterances : [
//         "Do you have any awards?",
//         "Have you received any awards?",
//         "What awards has your company won?",
//         "Can you list your achievements?",
//         "Are there any accolades your company has received?"
//     ],
//     responses : [
//         "We have received several awards for our exceptional service and innovation."
//     ]
// },
// {
//     intent : "infofdsadfrmation.about",
//     utterances : [
//         "Where is your company located?",
//         "What is your company's location?",
//         "Where can I find your office?",
//         "Can you tell me your address?",
//         "What is the address of your company?"
//     ],
//     responses : [
//         "We are located at 123 Tech Lane, Tech City."
//     ]
// },
// {
//     intent : "informfadsfdation.about",
//     utterances : [
//         "Can you provide an overview of your services?",
//         "What can you tell me about your services?",
//         "Give me an overview of what you offer.",
//         "Tell me more about the services you provide.",
//         "I'd like to know more about your services."
//     ],
//     responses : [
//         "We provide an array of services including software development, IT consulting, and tech support."
//     ]
// },
// {
//     intent: 'meal.suggesfadsation',
//     utterances: [
//         'What should I eat for breakfast?',
//         'Can you suggest a breakfast idea?',
//         'Any recommendations for breakfast?',
//         'I need ideas for breakfast.',
//         'What\'s a good breakfast option?',
//         'Can you recommend something for breakfast?',
//         'What\'s a quick breakfast idea?',
//         'What are some breakfast suggestions?',
//         'I\'m looking for breakfast options.',
//         'Do you have any breakfast ideas?'
//     ],
//     responses: [
//         'How about some scrambled eggs and toast for breakfast?'
//     ]
// },
// {
//     intent: 'meal.suggestiondfasfdsa',
//     utterances: [
//         'Can you suggest a dinner recipe?',
//         'What\'s a good recipe for dinner?',
//         'Any recommendations for dinner?',
//         'I need ideas for dinner.',
//         'What should I cook for dinner?',
//         'What\'s a delicious dinner option?',
//         'Can you recommend something for dinner?',
//         'What are some dinner suggestions?',
//         'I\'m looking for dinner options.',
//         'Do you have any dinner ideas?'
//     ],
//     responses: [
//         'I recommend a spaghetti carbonara for dinner.'
//     ]
// },
// {
//     intent: 'meal.suggestionfdsafa',
//     utterances: [
//         'What are some lunch ideas?',
//         'Can you suggest a lunch recipe?',
//         'Any recommendations for lunch?',
//         'I need ideas for lunch.',
//         'What should I cook for lunch?',
//         'What\'s a good lunch option?',
//         'Can you recommend something for lunch?',
//         'What are some lunch suggestions?',
//         'I\'m looking for lunch options.',
//         'Do you have any lunch ideas?'
//     ],
//     responses: [
//         'A nice chicken salad would be great for lunch.'
//     ]
// },
// {
//     intent: 'meal.suggestionasdfda',
//     utterances: [
//         'What\'s a good snack?',
//         'Can you suggest a snack?',
//         'Any recommendations for a snack?',
//         'I need ideas for a snack.',
//         'What should I have as a snack?',
//         'What\'s a delicious snack option?',
//         'Can you recommend something for a snack?',
//         'What are some snack suggestions?',
//         'I\'m looking for snack options.',
//         'Do you have any snack ideas?'
//     ],
//     responses: [
//         'You could have some apple slices and peanut butter as a snack.'
//     ]
// },
// {
//     intent: 'meal.suggesfadsdfation',
//     utterances: [
//         'Any suggestions for dinner?',
//         'What should I make for dinner?',
//         'Can you suggest something for dinner?',
//         'I\'m not sure what to cook for dinner.',
//         'What\'s a good dinner idea?',
//         'What\'s a tasty dinner option?',
//         'Can you recommend dinner?',
//         'What are some dinner recommendations?',
//         'I need dinner ideas.',
//         'Do you have any dinner suggestions?'
//     ],
//     responses: [
//         'How about trying a grilled salmon for dinner?'
//     ]
// },
// {
//     intent: 'meal.suggestioafsddfsan',
//     utterances: [
//         'What should I cook for lunch?',
//         'Can you suggest a lunch dish?',
//         'Any recommendations for lunch food?',
//         'I need ideas for lunch dishes.',
//         'What\'s a good lunch recipe?',
//         'What\'s a delicious lunch option?',
//         'Can you recommend something for lunch?',
//         'What are some lunch recommendations?',
//         'I\'m looking for lunch dishes.',
//         'Do you have any lunch suggestions?'
//     ],
//     responses: [
//         'You can make a quick sandwich for lunch.'
//     ]
// },
// {
//     intent: 'meal.sugfasdfdsagestion',
//     utterances: [
//         'What\'s a quick breakfast idea?',
//         'Can you suggest a quick breakfast?',
//         'Any recommendations for a quick breakfast?',
//         'I need ideas for a quick breakfast.',
//         'What should I have for a quick breakfast?',
//         'What\'s a delicious quick breakfast option?',
//         'Can you recommend something quick for breakfast?',
//         'What are some quick breakfast suggestions?',
//         'I\'m looking for quick breakfast options.',
//         'Do you have any quick breakfast ideas?'
//     ],
//     responses: [
//         'Oatmeal with fruits is a quick and healthy breakfast idea.'
//     ]
// },
// {
//     intent: 'meal.suggefadsfdstion',
//     utterances: [
//         'Can you recommend a dessert?',
//         'What\'s a good dessert?',
//         'Any suggestions for dessert?',
//         'I need ideas for dessert.',
//         'What should I have for dessert?',
//         'What\'s a delicious dessert option?',
//         'Can you suggest something for dessert?',
//         'What are some dessert suggestions?',
//         'I\'m looking for dessert options.',
//         'Do you have any dessert ideas?'
//     ],
//     responses: [
//         'How about a chocolate mousse for dessert?'
//     ]
// },
// {
//     intent: 'meal.suggestfdsafdaion',
//     utterances: [
//         'What should I eat for a healthy lunch?',
//         'Can you suggest a healthy lunch?',
//         'Any recommendations for a healthy lunch?',
//         'I need ideas for a healthy lunch.',
//         'What\'s a good healthy lunch option?',
//         'What\'s a delicious and healthy lunch idea?',
//         'Can you recommend something healthy for lunch?',
//         'What are some healthy lunch suggestions?',
//         'I\'m looking for healthy lunch options.',
//         'Do you have any healthy lunch ideas?'
//     ],
//     responses: [
//         'A quinoa salad would be a healthy lunch option.'
//     ]
// },
// {
//     intent: 'meal.sugfdasfdsagestion',
//     utterances: [
//         'What\'s a good dinner option?',
//         'Can you suggest a dinner option?',
//         'Any recommendations for dinner?',
//         'I need ideas for dinner.',
//         'What should I have for dinner?',
//         'What\'s a delicious dinner option?',
//         'Can you recommend something for dinner?',
//         'What are some dinner suggestions?',
//         'I\'m looking for dinner options.',
//         'Do you have any dinner ideas?'
//     ],
//     responses: [
//         'A stir-fry with vegetables and tofu is a good dinner option.'
//     ]
// },
// {
//     intent : "exercise.suggfdasdfsestion",
//     utterances : [
//         "What exercise should I do today?",
//         "Can you suggest a workout?",
//         "What are some good stretches?",
//         "Any ideas for a quick workout?",
//         "What's a good morning exercise?",
//         "Can you recommend a yoga routine?",
//         "What's a good cardio workout?",
//         "What should I do to relax my muscles?",
//         "Any suggestions for strength training?",
//         "What's a good evening exercise?"
//     ],
//     responses : [
//         "How about a 30-minute jog for today's exercise?"
//     ]
// },
// {
//     intent : "exfasddsaercise.suggestion",
//     utterances : [
//         "Can you suggest a workout routine?",
//         "What exercises do you recommend?",
//         "I need ideas for exercising.",
//         "What's a good workout plan?",
//         "What's a good workout regimen?",
//         "Can you recommend some exercises?",
//         "Any suggestions for a workout?",
//         "What's a good workout for beginners?",
//         "Any ideas for exercising at home?",
//         "What's a good exercise routine?"
//     ],
//     responses : [
//         "I suggest a high-intensity interval training (HIIT) workout."
//     ]
// },
// {
//     intent : "exercise.suggfadsdsastion",
//     utterances : [
//         "What are some effective stretching exercises?",
//         "Can you recommend stretches?",
//         "I need some stretching ideas.",
//         "What's a good stretching routine?",
//         "Any suggestions for stretching?",
//         "What stretches should I do?",
//         "Can you suggest some stretches?",
//         "What's a good way to stretch?",
//         "Any ideas for stretching before workout?",
//         "What are good warm-up stretches?"
//     ],
//     responses : [
//         "Try doing some hamstring and quad stretches."
//     ]
// },
// {
//     intent : "exercise.sugfafdagestion",
//     utterances : [
//         "What's a quick and effective workout?",
//         "Can you recommend a fast workout?",
//         "I'm short on time. Any quick workouts?",
//         "What's a good 20-minute workout?",
//         "Any suggestions for a short workout?",
//         "What's a quick exercise routine?",
//         "Can you suggest a brief workout?",
//         "What's a fast way to exercise?",
//         "Any ideas for a quick fitness session?",
//         "What's a good quick exercise plan?"
//     ],
//     responses : [
//         "A quick workout could be a 20-minute bodyweight circuit."
//     ]
// },
// {
//     intent : "exercise.suggfasdfaestion",
//     utterances : [
//         "What's a good morning exercise routine?",
//         "Can you recommend morning exercises?",
//         "Any suggestions for morning workouts?",
//         "What should I do in the morning for exercise?",
//         "What's a good way to start the day with exercise?",
//         "Morning exercise ideas?",
//         "Can you suggest exercises for the morning?",
//         "What's a good early workout?",
//         "Morning fitness recommendations?",
//         "What exercises are good in the morning?"
//     ],
//     responses : [
//         "A good morning exercise is a set of jumping jacks and push-ups."
//     ]
// },
// {
//     intent : "exercfasdfadsise.suggestion",
//     utterances : [
//         "Can you recommend a yoga routine?",
//         "What's a good yoga sequence?",
//         "I need yoga suggestions.",
//         "Any ideas for yoga practice?",
//         "What yoga routine should I follow?",
//         "Yoga recommendations?",
//         "Can you suggest a yoga flow?",
//         "What's a good yoga session?",
//         "Any yoga routines you recommend?",
//         "What's a beneficial yoga routine?"
//     ],
//     responses : [
//         "I recommend the sun salutation yoga routine."
//     ]
// },
// {
//     intent : "exercise.suggefasdstion",
//     utterances : [
//         "What's a good cardio workout?",
//         "Can you suggest a cardio routine?",
//         "Any recommendations for cardio exercises?",
//         "What should I do for cardio?",
//         "What's a good way to do cardio?",
//         "Cardio suggestions?",
//         "Can you recommend a cardio workout?",
//         "What's a good way to get cardio?",
//         "Any ideas for cardiovascular exercise?",
//         "What's a beneficial cardio session?"
//     ],
//     responses : [
//         "A good cardio workout is a 30-minute cycling session."
//     ]
// },
// {
//     intent : "exercifasdse.suggestion",
//     utterances : [
//         "What should I do to relax my muscles?",
//         "Can you suggest muscle relaxation techniques?",
//         "I need to relax my muscles. Any ideas?",
//         "What's a good way to relieve muscle tension?",
//         "Muscle relaxation suggestions?",
//         "Can you recommend muscle recovery methods?",
//         "What's a good muscle relaxation exercise?",
//         "How can I relax my muscles after exercise?",
//         "Any ideas for muscle recovery?",
//         "What's a beneficial muscle relaxation routine?"
//     ],
//     responses : [
//         "To relax your muscles, try foam rolling."
//     ]
// },
// {
//     intent : "exercise.sugfdasgestion",
//     utterances : [
//         "Any suggestions for strength training?",
//         "What's a good strength workout?",
//         "Can you recommend exercises for strength?",
//         "I need strength training ideas.",
//         "What should I do for strength exercises?",
//         "Strength training recommendations?",
//         "Can you suggest a strength routine?",
//         "What's a good way to build strength?",
//         "Any ideas for strength workouts?",
//         "What's a beneficial strength training session?"
//     ],
//     responses : [
//         "For strength training, try lifting weights or doing resistance band exercises."
//     ]
// },
// {
//     intent : "exercise.sfadsuggestion",
//     utterances : [
//         "What's a good evening exercise?",
//         "Can you suggest an evening workout?",
//         "Any recommendations for exercising in the evening?",
//         "What should I do for evening exercise?",
//         "Evening workout ideas?",
//         "Can you recommend exercises for the evening?",
//         "What's a good exercise routine for the evening?",
//         "How should I exercise in the evening?",
//         "Any ideas for evening fitness?",
//         "What's a beneficial evening exercise session?"
//     ],
//     responses : [
//         "An evening walk or light yoga would be good."
//     ]
// },
// {
//     intent : "personfasdal.care",
//     utterances : [
//         "What's a good skincare routine?",
//         "Can you recommend a skincare routine?",
//         "Any tips for skincare?",
//         "How should I care for my skin?",
//         "Skincare advice?",
//         "What's a good daily skincare regimen?",
//         "Can you suggest skincare products?",
//         "How do I maintain healthy skin?",
//         "Skincare routine suggestions?",
//         "What's the best way to take care of my skin?"
//     ],
//     responses : [
//         "A good skincare routine includes cleansing, toning, and moisturizing twice a day."
//     ]
// },
// {
//     intent : "personfasdal.care",
//     utterances : [
//         "How do I take care of my hair?",
//         "Can you suggest hair care tips?",
//         "Any advice for hair maintenance?",
//         "What's a good hair care routine?",
//         "Hair care suggestions?",
//         "How should I care for my hair?",
//         "Hair care recommendations?",
//         "What products should I use for hair care?",
//         "Hair care tips?",
//         "What's the best way to maintain healthy hair?"
//     ],
//     responses : [
//         "To take care of your hair, use a gentle shampoo and conditioner, and avoid excessive heat styling."
//     ]
// },
// {
//     intent : "personal.cfsadre",
//     utterances : [
//         "Any tips for better sleep?",
//         "How can I improve my sleep quality?",
//         "What should I do to sleep better?",
//         "Sleep improvement suggestions?",
//         "How to get better sleep?",
//         "What's a good sleep routine?",
//         "Can you recommend ways to sleep better?",
//         "Tips for improving sleep?",
//         "What's the best way to enhance sleep?",
//         "How do I get a good night's sleep?"
//     ],
//     responses : [
//         "For better sleep, try to maintain a regular sleep schedule and avoid screens before bedtime."
//     ]
// },
// {
//     intent : "personal.cfdasare",
//     utterances : [
//         "What should I do for relaxation?",
//         "Can you suggest relaxation techniques?",
//         "Any ideas for relaxation?",
//         "How do I relax?",
//         "Relaxation tips?",
//         "What's a good way to unwind?",
//         "Ways to relax?",
//         "Relaxation suggestions?",
//         "How should I destress?",
//         "What's the best way to relax?"
//     ],
//     responses : [
//         "For relaxation, try meditation or a warm bath."
//     ]
// },
// {
//     intent : "personal.cafsdare",
//     utterances : [
//         "Can you suggest a daily routine for health?",
//         "What's a healthy daily routine?",
//         "Any tips for a daily health routine?",
//         "Daily health habits?",
//         "What should I do daily for my health?",
//         "Healthy daily habits?",
//         "How do I maintain daily health?",
//         "Daily health routine suggestions?",
//         "What's a good daily health regimen?",
//         "How should I plan my daily health activities?"
//     ],
//     responses : [
//         "A daily routine for health includes balanced meals, regular exercise, and staying hydrated."
//     ]
// },
// {
//     intent : "personal.cafadsre",
//     utterances : [
//         "How do I improve my diet?",
//         "Can you recommend diet improvements?",
//         "Any tips for a healthier diet?",
//         "Diet improvement suggestions?",
//         "What should I eat to improve my diet?",
//         "Healthy eating tips?",
//         "How to eat healthier?",
//         "Diet advice?",
//         "What's a good diet plan?",
//         "How can I make my diet better?"
//     ],
//     responses : [
//         "To improve your diet, include more fruits, vegetables, and whole grains."
//     ]
// },
// {
//     intent : "personal.fsdafcare",
//     utterances : [
//         "What's a good way to reduce stress?",
//         "Can you suggest stress reduction techniques?",
//         "Any tips for stress relief?",
//         "Stress reduction methods?",
//         "How to lower stress levels?",
//         "What's a good stress management strategy?",
//         "Ways to reduce stress?",
//         "Stress relief suggestions?",
//         "How should I manage stress?",
//         "What's the best way to handle stress?"
//     ],
//     responses : [
//         "To reduce stress, try deep breathing exercises or yoga."
//     ]
// },
// {
//     intent : "personal.fdascare",
//     utterances : [
//         "Any advice for mental health?",
//         "Can you suggest mental health tips?",
//         "Tips for better mental health?",
//         "Mental health advice?",
//         "How to improve mental health?",
//         "What's a good mental health routine?",
//         "Mental wellness tips?",
//         "Mental health suggestions?",
//         "How should I take care of my mental health?",
//         "What's the best way to maintain mental well-being?"
//     ],
//     responses : [
//         "For mental health, make time for hobbies and connect with loved ones."
//     ]
// },
// {
//     intent : "personal.cfdsaare",
//     utterances : [
//         "What are some good habits for a healthy lifestyle?",
//         "Can you suggest healthy lifestyle habits?",
//         "Any tips for a healthier lifestyle?",
//         "Healthy lifestyle suggestions?",
//         "How to adopt healthy habits?",
//         "What's a good healthy lifestyle routine?",
//         "Healthy living tips?",
//         "Healthy habits suggestions?",
//         "How should I start a healthy lifestyle?",
//         "What's the best way to live a healthy life?"
//     ],
//     responses : [
//         "Good habits for a healthy lifestyle include regular exercise, balanced diet, and adequate sleep."
//     ]
// },
// {
//     intent : "personal.cfasdare",
//     utterances : [
//         "How can I stay hydrated?",
//         "Can you recommend ways to stay hydrated?",
//         "Tips for staying hydrated?",
//         "Hydration advice?",
//         "How to drink more water?",
//         "What's a good way to stay hydrated?",
//         "Ways to stay hydrated?",
//         "Stay hydrated suggestions?",
//         "How should I maintain hydration?",
//         "What's the best way to hydrate?"
//     ],
//     responses : [
//         "To stay hydrated, drink at least 8 glasses of water a day."
//     ]
// },
// {
//     intent : "technologfdsafay.usage",
//     utterances : [
//         "How do I set up my new phone?",
//         "Can you guide me through setting up my new phone?",
//         "What's the process for setting up a new phone?",
//         "Help with new phone setup?",
//         "New phone setup instructions?",
//         "How to get started with my new phone?",
//         "Setting up a new smartphone?",
//         "What should I do to set up my phone?",
//         "Steps to set up a new mobile device?",
//         "How do I activate my new phone?"
//     ],
//     responses : [
//         "To set up your new phone, follow the on-screen instructions to connect to Wi-Fi and sign in to your account."
//     ]
// },
// {
//     intent : "technologfadsfsdy.usage",
//     utterances : [
//         "Can you help me with my laptop?",
//         "I need assistance with my laptop.",
//         "My laptop is having issues, can you help?",
//         "Laptop support needed.",
//         "Having problems with my laptop.",
//         "Laptop troubleshooting help.",
//         "Troubleshooting my laptop.",
//         "Help with laptop issues.",
//         "Can you assist with laptop problems?",
//         "My laptop isn't working properly, what should I do?"
//     ],
//     responses : [
//         "What issue are you facing with your laptop? I can help."
//     ]
// },
// {
//     intent : "technologyfads.usage",
//     utterances : [
//         "What are some good apps for productivity?",
//         "Can you recommend productivity apps?",
//         "Any suggestions for productivity tools?",
//         "Best apps for getting work done?",
//         "Productivity apps that you recommend?",
//         "What apps can help me be more productive?",
//         "Top productivity apps?",
//         "Apps to increase productivity?",
//         "Which apps are good for productivity?",
//         "Any good productivity applications?"
//     ],
//     responses : [
//         "Some good productivity apps are Trello, Evernote, and Todoist."
//     ]
// },
// {
//     intent : "technolfadsogy.usage",
//     utterances : [
//         "How do I fix my internet connection?",
//         "Internet connection troubleshooting steps?",
//         "My internet isn't working, what should I do?",
//         "Help with internet connection issues.",
//         "Internet troubleshooting help needed.",
//         "Fixing internet problems.",
//         "Troubleshoot internet connection.",
//         "Internet not working, how to fix?",
//         "Help me with my Wi-Fi connection.",
//         "What should I do if my internet is slow?"
//     ],
//     responses : [
//         "To fix your internet connection, try restarting your router."
//     ]
// },
// {
//     intent : "fadsfads.usage",
//     utterances : [
//         "What's a good way to manage passwords?",
//         "Can you suggest a password management solution?",
//         "Best password manager recommendations?",
//         "Password management tips?",
//         "How should I store and manage passwords?",
//         "Password organization suggestions?",
//         "Managing passwords securely?",
//         "Password security best practices?",
//         "What's the safest way to handle passwords?",
//         "How to keep passwords safe?"
//     ],
//     responses : [
//         "A good way to manage passwords is to use a password manager like LastPass or 1Password."
//     ]
// },
// {
//     intent : "technology.ufdsafsage",
//     utterances : [
//         "Can you suggest a good video editing software?",
//         "What's the best video editing software?",
//         "Recommended video editing tools?",
//         "Any suggestions for video editing programs?",
//         "Top video editing software recommendations?",
//         "Good software for editing videos?",
//         "Which video editing software should I use?",
//         "Best software for video editing?",
//         "Video editing software advice?",
//         "What's a good program for editing videos?"
//     ],
//     responses : [
//         "For video editing, I recommend Adobe Premiere Pro or DaVinci Resolve."
//     ]
// },
// {
//     intent : "technolfasdfogy.usage",
//     utterances : [
//         "How do I back up my data?",
//         "Data backup procedures?",
//         "Backing up my files, what should I do?",
//         "Help with data backup.",
//         "Backing up data safely.",
//         "Data protection and backup advice.",
//         "Best practices for backing up data?",
//         "How to secure data backup?",
//         "Backing up files securely?",
//         "What's the best way to back up data?"
//     ],
//     responses : [
//         "To back up your data, use an external hard drive or a cloud service like Google Drive."
//     ]
// },
// {
//     intent : "technology.ufdsasage",
//     utterances : [
//         "What's a good way to organize files?",
//         "File organization tips?",
//         "How should I manage my files?",
//         "Organizing digital files, any advice?",
//         "Best practices for file management?",
//         "File organization methods?",
//         "Tips for organizing documents?",
//         "How to keep files organized?",
//         "Organizing files and folders, what's best?",
//         "What's the best way to arrange digital files?"
//     ],
//     responses : [
//         "Organize files by creating folders for different categories and regularly cleaning up your desktop."
//     ]
// },
// {
//     intent : "technolfadsogy.usage",
//     utterances : [
//         "Any tips for improving computer speed?",
//         "How do I make my computer faster?",
//         "Speeding up my PC, what should I do?",
//         "Help with improving computer performance.",
//         "Computer optimization advice?",
//         "Speeding up a slow computer?",
//         "Tips for faster PC performance?",
//         "How to enhance computer speed?",
//         "Improving laptop speed, any suggestions?",
//         "What can I do to speed up my computer?"
//     ],
//     responses : [
//         "To improve computer speed, try cleaning up your disk space and uninstalling unnecessary programs."
//     ]
// },
// {
//     intent : "technology.ufsadsage",
//     utterances : [
//         "How do I connect my phone to the TV?",
//         "Phone to TV connection steps?",
//         "Help with phone to TV setup.",
//         "Connecting smartphone to television, how?",
//         "Phone screen mirroring to TV, how?",
//         "Steps to link phone to TV?",
//         "Phone casting to TV, what's the process?",
//         "How to mirror phone to TV?",
//         "Connecting mobile to TV wirelessly, how?",
//         "What should I do to display my phone on TV?"
//     ],
//     responses : [
//         "To connect your phone to the TV, use a cable or a wireless method like Chromecast."
//     ]
// },
// {
//     intent : "entertainment.refadscommendation",
//     utterances : [
//         "Can you recommend a movie?",
//         "What's a good movie to watch?",
//         "Any suggestions for films?",
//         "What movie should I watch?",
//         "Recommend me a great film.",
//         "I need a good movie recommendation.",
//         "What's a popular movie right now?",
//         "Any new movies worth watching?",
//         "Can you suggest a must-watch movie?",
//         "What's a classic movie to see?"
//     ],
//     responses : [
//         "I recommend watching 'Inception' if you like mind-bending thrillers."
//     ]
// },
// {
//     intent : "entertainmefdasfant.recommendation",
//     utterances : [
//         "What's a good TV show to watch?",
//         "Any recommendations for TV series?",
//         "Can you suggest a great show?",
//         "What TV series should I watch?",
//         "Recommend a TV show for me.",
//         "I'm looking for a new TV series.",
//         "Any popular TV shows right now?",
//         "What's a trending TV series?",
//         "Can you recommend a binge-worthy show?",
//         "What's a classic TV show to binge?"
//     ],
//     responses : [
//         "A good TV show to watch is 'Stranger Things'."
//     ]
// },
// {
//     intent : "entertainmefadsnt.recommendation",
//     utterances : [
//         "Any suggestions for books?",
//         "Can you recommend a good book?",
//         "What book should I read?",
//         "I need a book recommendation.",
//         "Recommend me a novel.",
//         "What's a popular book right now?",
//         "Any new books worth reading?",
//         "What's a classic novel to read?",
//         "Can you suggest a must-read book?",
//         "What's a bestseller in books?"
//     ],
//     responses : [
//         "For books, try reading 'The Alchemist' by Paulo Coelho."
//     ]
// },
// {
//     intent : "entertainmefdasnt.recommendation",
//     utterances : [
//         "What's a popular song right now?",
//         "Can you suggest a trending song?",
//         "Any recommendations for music?",
//         "What song should I listen to?",
//         "Recommend me a good song.",
//         "I'm looking for new music.",
//         "Any hit songs at the moment?",
//         "What's on the top charts?",
//         "Can you suggest a popular track?",
//         "What's a classic song to enjoy?"
//     ],
//     responses : [
//         "A popular song right now is 'Blinding Lights' by The Weeknd."
//     ]
// },
// {
//     intent : "entertainmefadsnt.recommendation",
//     utterances : [
//         "Can you suggest a podcast?",
//         "What podcast should I listen to?",
//         "Any recommendations for podcasts?",
//         "What's a good podcast to follow?",
//         "Recommend me a podcast.",
//         "I need a new podcast.",
//         "Any popular podcasts right now?",
//         "What's a trending podcast?",
//         "Can you suggest a must-listen podcast?",
//         "What's a classic podcast to hear?"
//     ],
//     responses : [
//         "I suggest listening to 'The Daily' podcast for news and stories."
//     ]
// },
// {
//     intent : "entertafdsainment.recommendation",
//     utterances : [
//         "What's a good game to play?",
//         "Can you recommend a fun game?",
//         "Any suggestions for gaming?",
//         "What game should I try?",
//         "Recommend me a great game.",
//         "I'm looking for a new game.",
//         "Any popular games right now?",
//         "What's a trending game?",
//         "Can you suggest a must-play game?",
//         "What's a classic game to play?"
//     ],
//     responses : [
//         "A fun game to play is 'Among Us'."
//     ]
// },
// {
//     intent : "entertainmefsdnt.recommendation",
//     utterances : [
//         "Any recommendations for documentaries?",
//         "Can you suggest a good documentary?",
//         "What documentary should I watch?",
//         "I need a documentary recommendation.",
//         "Recommend me a great documentary.",
//         "What's a popular documentary right now?",
//         "Any new documentaries worth watching?",
//         "What's a classic documentary to see?",
//         "Can you suggest a must-watch documentary?",
//         "What's an award-winning documentary?"
//     ],
//     responses : [
//         "A great documentary to watch is 'The Social Dilemma'."
//     ]
// },
// {
//     intent : "entertafdsainment.recommendation",
//     utterances : [
//         "What's a good YouTube channel to follow?",
//         "Can you recommend a YouTube channel?",
//         "Any suggestions for YouTube?",
//         "What channel should I subscribe to?",
//         "Recommend me a great YouTube channel.",
//         "I'm looking for new YouTube content.",
//         "Any popular YouTube channels right now?",
//         "What's a trending YouTube channel?",
//         "Can you suggest a must-watch YouTube channel?",
//         "What's a classic YouTube channel to follow?"
//     ],
//     responses : [
//         "A good YouTube channel to follow is 'Kurzgesagt – In a Nutshell'."
//     ]
// },
// {
//     intent : "entertfadsainment.recommendation",
//     utterances : [
//         "Can you suggest a fun activity?",
//         "What activity should I do for fun?",
//         "Any recommendations for fun things to do?",
//         "What's a good leisure activity?",
//         "Recommend me a fun pastime.",
//         "I'm looking for a new hobby.",
//         "Any popular activities for fun?",
//         "What's a trending leisure activity?",
//         "Can you suggest a must-try activity?",
//         "What's a classic fun activity?"
//     ],
//     responses : [
//         "A fun activity could be going for a hike or trying a new recipe."
//     ]
// },
// {
//     intent : "entertafdainment.recommendation",
//     utterances : [
//         "What's a good concert to attend?",
//         "Can you recommend a concert?",
//         "Any suggestions for live music?",
//         "What concert should I go to?",
//         "Recommend me a great concert.",
//         "I'm looking for a concert to attend.",
//         "Any popular concerts right now?",
//         "What's a trending concert?",
//         "Can you suggest a must-see concert?",
//         "What's a classic concert to attend?"
//     ],
//     responses : [
//         "Check out a concert by your favorite artist or band."
//     ]
// },
// {
//     intent : "household.chfdasfores",
//     utterances : [
//         "How do I clean my house?",
//         "What's the best way to tidy up my home?",
//         "Any tips for house cleaning?",
//         "How should I maintain cleanliness at home?",
//         "Can you suggest a cleaning routine?",
//         "I need advice on keeping my house clean.",
//         "What's the proper way to clean my living space?",
//         "How do I maintain a clean environment?",
//         "What's a good housekeeping strategy?",
//         "Can you help me with home cleaning?"
//     ],
//     responses : [
//         "To clean your house, start with dusting, vacuuming, and mopping the floors."
//     ]
// },
// {
//     intent : "housefsdfshold.chores",
//     utterances : [
//         "What's the best way to do laundry?",
//         "Any tips for washing clothes?",
//         "How do I wash my clothes properly?",
//         "Can you guide me on laundry techniques?",
//         "What's a good laundry routine?",
//         "How should I handle laundry efficiently?",
//         "I need advice on doing laundry.",
//         "What's the proper method for laundry?",
//         "How do I keep my clothes clean?",
//         "Can you help me with washing?"
//     ],
//     responses : [
//         "For laundry, separate clothes by color and fabric type, and use the appropriate detergent."
//     ]
// },
// {
//     intent : "household.cfsadhores",
//     utterances : [
//         "Any tips for organizing my closet?",
//         "How do I arrange my wardrobe?",
//         "Can you suggest closet organization ideas?",
//         "What's the best way to organize clothes?",
//         "How should I sort my closet?",
//         "I need advice on closet organization.",
//         "What's a good method for closet management?",
//         "How do I keep my closet tidy?",
//         "What's an effective closet organizing strategy?",
//         "Can you help me with organizing clothes?"
//     ],
//     responses : [
//         "Organize your closet by sorting clothes into categories and using storage bins."
//     ]
// },
// {
//     intent : "householdsad.chores",
//     utterances : [
//         "How do I fix a leaky faucet?",
//         "Can you guide me on faucet repair?",
//         "Any tips for repairing a faucet?",
//         "What's the best way to stop a faucet leak?",
//         "How should I handle a leaking faucet?",
//         "I need advice on fixing my faucet.",
//         "What's the proper method for faucet maintenance?",
//         "How do I repair a dripping faucet?",
//         "What's an effective faucet repair strategy?",
//         "Can you help me with faucet maintenance?"
//     ],
//     responses : [
//         "To fix a leaky faucet, you might need to replace the washer or cartridge."
//     ]
// },
// {
//     intent : "householfdsad.chores",
//     utterances : [
//         "What's a good way to clean windows?",
//         "Can you suggest window cleaning methods?",
//         "Any tips for washing windows?",
//         "How do I get streak-free windows?",
//         "What's the best window cleaning solution?",
//         "I need advice on cleaning my windows.",
//         "What's the proper way to clean windows?",
//         "How do I maintain clean windows?",
//         "What's an effective window cleaning strategy?",
//         "Can you help me with window cleaning?"
//     ],
//     responses : [
//         "Clean windows with a mixture of vinegar and water, and use a microfiber cloth for streak-free results."
//     ]
// },
// {
//     intent : "househofdasld.chores",
//     utterances : [
//         "Can you suggest a cleaning schedule?",
//         "What's a good house cleaning routine?",
//         "Any recommendations for cleaning schedules?",
//         "How should I plan my cleaning tasks?",
//         "What's an efficient cleaning timetable?",
//         "I need advice on creating a cleaning plan.",
//         "What's the proper cleaning schedule?",
//         "How do I maintain a cleaning schedule?",
//         "What's an effective cleaning routine?",
//         "Can you help me with planning cleaning?"
//     ],
//     responses : [
//         "A good cleaning schedule includes daily tidying, weekly deep cleaning, and monthly maintenance tasks."
//     ]
// },
// {
//     intent : "household.chadffdasores",
//     utterances : [
//         "How do I get rid of stains?",
//         "Can you suggest stain removal techniques?",
//         "Any tips for removing stains?",
//         "What's the best way to remove tough stains?",
//         "How should I handle stubborn stains?",
//         "I need advice on removing stains.",
//         "What's the proper method for stain removal?",
//         "How do I keep my fabrics stain-free?",
//         "What's an effective stain removal strategy?",
//         "Can you help me with stain cleaning?"
//     ],
//     responses : [
//         "To get rid of stains, pre-treat with a stain remover before washing."
//     ]
// },
// {
//     intent : "household.chfdsores",
//     utterances : [
//         "What's the best way to vacuum?",
//         "Can you suggest vacuuming techniques?",
//         "Any tips for effective vacuuming?",
//         "How do I vacuum properly?",
//         "What's the proper vacuuming method?",
//         "I need advice on vacuuming my floors.",
//         "How should I handle vacuum cleaning?",
//         "What's an efficient way to vacuum?",
//         "How do I maintain clean floors?",
//         "Can you help me with vacuuming?"
//     ],
//     responses : [
//         "For vacuuming, move furniture out of the way and vacuum in different directions to pick up all dirt."
//     ]
// },
// {
//     intent : "household.cfasdhores",
//     utterances : [
//         "Any tips for keeping my kitchen tidy?",
//         "How do I maintain a clean kitchen?",
//         "Can you suggest kitchen cleaning tips?",
//         "What's the best way to keep my kitchen clean?",
//         "How should I organize my kitchen cleaning?",
//         "I need advice on kitchen cleanliness.",
//         "What's a good kitchen cleaning strategy?",
//         "How do I handle kitchen hygiene?",
//         "What's an effective kitchen cleaning routine?",
//         "Can you help me with kitchen cleaning?"
//     ],
//     responses : [
//         "Keep your kitchen tidy by cleaning as you go and wiping down surfaces after cooking."
//     ]
// },
// {
//     intent : "household.cfdasfasdhores",
//     utterances : [
//         "How do I clean my bathroom?",
//         "Can you suggest bathroom cleaning methods?",
//         "Any tips for cleaning bathrooms?",
//         "What's the best way to clean my bathroom?",
//         "How should I handle bathroom cleaning?",
//         "I need advice on bathroom cleanliness.",
//         "What's a proper bathroom cleaning routine?",
//         "How do I maintain a clean bathroom?",
//         "What's an effective bathroom cleaning strategy?",
//         "Can you help me with bathroom cleaning?"
//     ],
//     responses : [
//         "To clean your bathroom, use a disinfectant cleaner for surfaces, and scrub the toilet and shower regularly."
//     ]
// },
// {
//     intent : "travel.advfasdfice",
//     utterances : [
//         "What's the best way to pack for a trip?",
//         "Can you suggest packing tips?",
//         "How should I prepare for packing?",
//         "Any advice for packing efficiently?",
//         "What's the proper way to pack for travel?",
//         "I need tips on packing for a trip.",
//         "What's a good packing strategy?",
//         "How do I organize my packing?",
//         "What's an effective packing method?",
//         "Can you help me with packing?"
//     ],
//     responses : [
//         "To pack for a trip, roll your clothes to save space and use packing cubes for organization."
//     ]
// },
// {
//     intent : "travel.advfdsafice",
//     utterances : [
//         "Can you suggest travel destinations?",
//         "Any recommendations for travel spots?",
//         "How do I choose a travel destination?",
//         "What are popular travel destinations?",
//         "I need suggestions for travel places.",
//         "What's a good travel location?",
//         "Can you recommend vacation destinations?",
//         "How should I plan my next travel destination?",
//         "What's a good place to travel?",
//         "Can you help me with travel ideas?"
//     ],
//     responses : [
//         "Some popular travel destinations include Paris, Tokyo, and New York City."
//     ]
// },
// {
//     intent : "travel.advifdasce",
//     utterances : [
//         "How do I find cheap flights?",
//         "Can you suggest ways to get affordable flights?",
//         "Any tips for booking inexpensive flights?",
//         "What's the best way to get cheap airline tickets?",
//         "How should I search for budget flights?",
//         "I need advice on flight booking.",
//         "What's a good flight deal strategy?",
//         "How do I save money on flights?",
//         "What's an effective flight booking method?",
//         "Can you help me with finding cheap flights?"
//     ],
//     responses : [
//         "To find cheap flights, use comparison websites like Skyscanner and set up fare alerts."
//     ]
// },
// {
//     intent : "travel.advfsdaice",
//     utterances : [
//         "What's a good way to plan a road trip?",
//         "Can you suggest road trip planning tips?",
//         "Any advice for planning a road adventure?",
//         "How should I prepare for a road journey?",
//         "What's the best road trip planning method?",
//         "I need tips on road trip organization.",
//         "What's a good road trip route strategy?",
//         "How do I plan a successful road trip?",
//         "What's an effective road trip itinerary?",
//         "Can you help me with road trip planning?"
//     ],
//     responses : [
//         "For a road trip, plan your route ahead of time and make a list of must-see stops."
//     ]
// },
// {
//     intent : "travel.advdsfasdice",
//     utterances : [
//         "Any tips for traveling with kids?",
//         "How do I travel with children?",
//         "Can you suggest family travel tips?",
//         "What's a good way to travel with kids?",
//         "How should I prepare for family travel?",
//         "I need advice on traveling with children.",
//         "What's a family-friendly travel strategy?",
//         "How do I handle travel with kids?",
//         "What's an effective family travel method?",
//         "Can you help me with traveling with kids?"
//     ],
//     responses : [
//         "When traveling with kids, bring snacks, entertainment, and make frequent stops."
//     ]
// },
// {
//     intent : "travel.adfasdfvice",
//     utterances : [
//         "What should I do if I lose my passport?",
//         "Can you guide me on passport loss?",
//         "Any tips for handling lost passport?",
//         "How should I manage a lost passport situation?",
//         "What's the best way to deal with passport loss?",
//         "I need advice on lost passport.",
//         "What's a proper procedure for lost passport?",
//         "How do I handle a lost passport issue?",
//         "What's an effective passport recovery strategy?",
//         "Can you help me with lost passport?"
//     ],
//     responses : [
//         "If you lose your passport, contact the nearest embassy or consulate immediately."
//     ]
// },
// {
//     intent : "travel.advdsafsice",
//     utterances : [
//         "How do I stay safe while traveling?",
//         "Can you suggest travel safety tips?",
//         "Any advice for safe travel?",
//         "What's a good way to ensure travel safety?",
//         "How should I prepare for travel safety?",
//         "I need tips on staying safe during travel.",
//         "What's a travel safety strategy?",
//         "How do I ensure safe travels?",
//         "What's an effective travel safety method?",
//         "Can you help me with travel safety?"
//     ],
//     responses : [
//         "Stay safe while traveling by keeping your belongings secure and being aware of your surroundings."
//     ]
// },
// {
//     intent : "travel.advfdsice",
//     utterances : [
//         "What are some essential travel items?",
//         "Can you suggest necessary travel gear?",
//         "Any tips for essential travel items?",
//         "What's the must-have travel equipment?",
//         "How should I pack essential travel items?",
//         "I need advice on essential travel packing.",
//         "What's a good travel essentials strategy?",
//         "How do I prepare essential travel items?",
//         "What's an effective travel gear method?",
//         "Can you help me with essential travel items?"
//     ],
//     responses : [
//         "Essential travel items include a passport, travel-sized toiletries, and a first-aid kit."
//     ]
// },
// {
//     intent : "travel.dfaadvice",
//     utterances : [
//         "Can you recommend a good travel app?",
//         "Any suggestions for travel apps?",
//         "How do I choose a travel application?",
//         "What's a useful travel app?",
//         "Which travel app is recommended?",
//         "I need advice on travel app selection.",
//         "What's a good travel app strategy?",
//         "How do I find a suitable travel app?",
//         "What's an effective travel app method?",
//         "Can you help me with choosing a travel app?"
//     ],
//     responses : [
//         "A good travel app is TripIt, which helps organize your itinerary."
//     ]
// },
// {
//     intent : "travfdsafasdel.advice",
//     utterances : [
//         "How do I avoid jet lag?",
//         "Can you suggest jet lag prevention tips?",
//         "Any advice for preventing jet lag?",
//         "What's a good way to handle jet lag?",
//         "How should I prepare for avoiding jet lag?",
//         "I need tips on managing jet lag.",
//         "What's a jet lag prevention strategy?",
//         "How do I deal with jet lag?",
//         "What's an effective jet lag prevention method?",
//         "Can you help me with jet lag prevention?"
//     ],
//     responses : [
//         "To avoid jet lag, stay hydrated and try to adjust to the local time as soon as possible."
//     ]
// },
// {
//     intent : "persfdason.info",
//     utterances : [
//         "Tell me about Mahatma Gandhi.",
//         "Who is Mahatma Gandhi?",
//         "Give me information about Mahatma Gandhi."
//     ],
//     responses : [
//         "Mahatma Gandhi was a leader of the Indian independence movement against British rule, employing nonviolent civil disobedience."
//     ]
// },
// {
//     intent : "persofdasn.info",
//     utterances : [
//         "Tell me about Jawaharlal Nehru.",
//         "Who is Jawaharlal Nehru?",
//         "Give me information about Jawaharlal Nehru."
//     ],
//     responses : [
//         "Jawaharlal Nehru was the first Prime Minister of India and a central figure in Indian politics before and after independence."
//     ]
// },
// {
//     intent : "perfsadson.info",
//     utterances : [
//         "Tell me about Sardar Vallabhbhai Patel.",
//         "Who is Sardar Vallabhbhai Patel?",
//         "Give me information about Sardar Vallabhbhai Patel."
//     ],
//     responses : [
//         "Sardar Vallabhbhai Patel was a key leader in the Indian independence movement and the first Deputy Prime Minister of India."
//     ]
// },
// {
//     intent : "pefdsfrson.info",
//     utterances : [
//         "Tell me about Indira Gandhi.",
//         "Who is Indira Gandhi?",
//         "Give me information about Indira Gandhi."
//     ],
//     responses : [
//         "Indira Gandhi was the first and, to date, the only female Prime Minister of India, serving from 1966 to 1977 and then from 1980 until her assassination in 1984."
//     ]
// },
// {
//     intent : "pefsdafsadfrson.info",
//     utterances : [
//         "Tell me about Rajiv Gandhi.",
//         "Who is Rajiv Gandhi?",
//         "Give me information about Rajiv Gandhi."
//     ],
//     responses : [
//         "Rajiv Gandhi was the sixth Prime Minister of India, serving from 1984 to 1989 following the assassination of his mother, Indira Gandhi."
//     ]
// },
// {
//     intent : "pefadsrson.info",
//     utterances : [
//         "Tell me about Atal Bihari Vajpayee.",
//         "Who is Atal Bihari Vajpayee?",
//         "Give me information about Atal Bihari Vajpayee."
//     ],
//     responses : [
//         "Atal Bihari Vajpayee was an Indian statesman who served as the Prime Minister of India for three terms."
//     ]
// },
// {
//     intent : "pefdsarson.info",
//     utterances : [
//         "Tell me about Manmohan Singh.",
//         "Who is Manmohan Singh?",
//         "Give me information about Manmohan Singh."
//     ],
//     responses : [
//         "Manmohan Singh is an Indian economist, academic, and politician who served as the Prime Minister of India from 2004 to 2014."
//     ]
// },
// {
//     intent : "persgsdfgdfon.info",
//     utterances : [
//         "Tell me about Narendra Modi.",
//         "Who is Narendra Modi?",
//         "Give me information about Narendra Modi."
//     ],
//     responses : [
//         "Narendra Modi is an Indian politician serving as the 14th and current Prime Minister of India since 2014."
//     ]
// },
// {
//     intent : "persgshgson.info",
//     utterances : [
//         "Tell me about Ratan Tata.",
//         "Who is Ratan Tata?",
//         "Give me information about Ratan Tata."
//     ],
//     responses : [
//         "Ratan Tata is an Indian industrialist, philanthropist, and former chairman of Tata Sons."
//     ]
// },
// {
//     intent : "persgsdfon.info",
//     utterances : [
//         "Tell me about Mukesh Ambani.",
//         "Who is Mukesh Ambani?",
//         "Give me information about Mukesh Ambani."
//     ],
//     responses : [
//         "Mukesh Ambani is an Indian billionaire businessman, chairman, managing director, and largest shareholder of Reliance Industries Ltd."
//     ]
// },
// {
//     intent : "pegsfdrson.info",
//     utterances : [
//         "Tell me about Dhirubhai Ambani.",
//         "Who is Dhirubhai Ambani?",
//         "Give me information about Dhirubhai Ambani."
//     ],
//     responses : [
//         "Dhirubhai Ambani was an Indian business tycoon who founded Reliance Industries, a multinational conglomerate company in India."
//     ]
// },
// {
//     intent : "persgfdson.info",
//     utterances : [
//         "Tell me about J.R.D. Tata.",
//         "Who is J.R.D. Tata?",
//         "Give me information about J.R.D. Tata."
//     ],
//     responses : [
//         "J.R.D. Tata was an Indian aviator, entrepreneur, and chairman of Tata Group."
//     ]
// },
// {
//     intent : "persogfdsn.info",
//     utterances : [
//         "Tell me about Lakshmi Mittal.",
//         "Who is Lakshmi Mittal?",
//         "Give me information about Lakshmi Mittal."
//     ],
//     responses : [
//         "Lakshmi Mittal is an Indian steel magnate, based in the United Kingdom, and chairman and CEO of ArcelorMittal."
//     ]
// },
// {
//     intent : "persogfn.info",
//     utterances : [
//         "Tell me about Azim Premji.",
//         "Who is Azim Premji?",
//         "Give me information about Azim Premji."
//     ],
//     responses : [
//         "Azim Premji is an Indian business tycoon, investor, engineer, and philanthropist, who is the chairman of Wipro Limited."
//     ]
// },
// {
//     intent : "persongfd.info",
//     utterances : [
//         "Tell me about Sachin Tendulkar.",
//         "Who is Sachin Tendulkar?",
//         "Give me information about Sachin Tendulkar."
//     ],
//     responses : [
//         "Sachin Tendulkar is a former international cricketer from India and a former captain of the Indian national team."
//     ]
// },
// {
//     intent : "persongfds.info",
//     utterances : [
//         "Tell me about Virat Kohli.",
//         "Who is Virat Kohli?",
//         "Give me information about Virat Kohli."
//     ],
//     responses : [
//         "Virat Kohli is an Indian cricketer and the former captain of the India national team in all formats."
//     ]
// },
// {
//     intent : "person.infogfd",
//     utterances : [
//         "Tell me about Sunil Gavaskar.",
//         "Who is Sunil Gavaskar?",
//         "Give me information about Sunil Gavaskar."
//     ],
//     responses : [
//         "Sunil Gavaskar is a former Indian cricketer who played during the 1970s and 1980s for the Indian national team."
//     ]
// },
// {
//     intent : "person.infofsdgs",
//     utterances : [
//         "Tell me about M.S. Dhoni.",
//         "Who is M.S. Dhoni?",
//         "Give me information about M.S. Dhoni."
//     ],
//     responses : [
//         "M.S. Dhoni is an Indian cricketer who was the captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014."
//     ]
// },
// {
//     intent : "person.infoff",
//     utterances : [
//         "Tell me about Lata Mangeshkar.",
//         "Who is Lata Mangeshkar?",
//         "Give me information about Lata Mangeshkar."
//     ],
//     responses : [
//         "Lata Mangeshkar is an Indian playback singer and occasional music composer, known for her versatility and for being one of the greatest and most respected playback singers in India."
//     ]
// },
// {
//     intent : "person.infogf",
//     utterances : [
//         "Tell me about A.R. Rahman.",
//         "Who is A.R. Rahman?",
//         "Give me information about A.R. Rahman."
//     ],
//     responses : [
//         "A.R. Rahman is an Indian composer, singer, and music producer who works predominantly in Tamil and Hindi cinema."
//     ]
// },
// {
//     intent : "person.infogfd",
//     utterances : [
//         "Tell me about Amitabh Bachchan.",
//         "Who is Amitabh Bachchan?",
//         "Give me information about Amitabh Bachchan."
//     ],
//     responses : [
//         "Amitabh Bachchan is an Indian film actor, film producer, television host, and former politician known for his work in Hindi cinema."
//     ]
// },
// {
//     intent : "person.infogh",
//     utterances : [
//         "Tell me about Rajinikanth.",
//         "Who is Rajinikanth?",
//         "Give me information about Rajinikanth."
//     ],
//     responses : [
//         "Rajinikanth is an Indian actor and former politician who works primarily in Tamil cinema."
//     ]
// },
// {
//     intent : "person.infofgd",
//     utterances : [
//         "Tell me about Deepika Padukone.",
//         "Who is Deepika Padukone?",
//         "Give me information about Deepika Padukone."
//     ],
//     responses : [
//         "Deepika Padukone is an Indian actress who works in Hindi films and has established herself as one of the most popular and highest-paid actresses in India."
//     ]
// },
// {
//     intent : "person.infodfgfd",
//     utterances : [
//         "Tell me about Priyanka Chopra.",
//         "Who is Priyanka Chopra?",
//         "Give me information about Priyanka Chopra."
//     ],
//     responses : [
//         "Priyanka Chopra is an Indian actress, singer, and film producer who works in Hindi films and Hollywood productions."
//     ]
// },
// {
//     intent : "person.infodf",
//     utterances : [
//         "Tell me about Shah Rukh Khan.",
//         "Who is Shah Rukh Khan?",
//         "Give me information about Shah Rukh Khan."
//     ],
//     responses : [
//         "Shah Rukh Khan, also known by the initialism SRK, is an Indian actor, film producer, and television personality who works in Hindi films."
//     ]
// }
//   ,
//   {
//     intent : "object.ifdasnfo",
//     utterances : [
//         "Tell me about a refrigerator.",
//         "What is a refrigerator?",
//         "Give me information about refrigerators."
//     ],
//     responses : [
//         "A refrigerator is an appliance used for preserving food by cooling it to a lower temperature than the ambient room temperature."
//     ]
// },
// {
//     intent : "objfdsaect.info",
//     utterances : [
//         "Tell me about a smartphone.",
//         "What is a smartphone?",
//         "Give me information about smartphones."
//     ],
//     responses : [
//         "A smartphone is a mobile device that combines the functionalities of a mobile phone with those of a handheld computer."
//     ]
// },
// {
//     intent : "object.isdfasnfo",
//     utterances : [
//         "Tell me about a bicycle.",
//         "What is a bicycle?",
//         "Give me information about bicycles."
//     ],
//     responses : [
//         "A bicycle is a human-powered vehicle with two wheels, usually used for transportation or recreation."
//     ]
// },
// {
//     intent : "objfasdect.info",
//     utterances : [
//         "Tell me about a microwave oven.",
//         "What is a microwave oven?",
//         "Give me information about microwave ovens."
//     ],
//     responses : [
//         "A microwave oven is an electric appliance that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range."
//     ]
// },
// {
//     intent : "objectadsfa.info",
//     utterances : [
//         "Tell me about a television.",
//         "What is a television?",
//         "Give me information about televisions."
//     ],
//     responses : [
//         "A television is an electronic device used for viewing broadcast images and sound, typically in the form of movies, news, or entertainment shows."
//     ]
// },
// {
//     intent : "obfadsject.info",
//     utterances : [
//         "Tell me about a laptop.",
//         "What is a laptop?",
//         "Give me information about laptops."
//     ],
//     responses : [
//         "A laptop is a portable computer that is small and lightweight, designed for use while traveling or away from a desk."
//     ]
// },
// {
//     intent : "objectdfas.info",
//     utterances : [
//         "Tell me about a chair.",
//         "What is a chair?",
//         "Give me information about chairs."
//     ],
//     responses : [
//         "A chair is a piece of furniture designed for sitting, typically with a back and four legs."
//     ]
// },
// {
//     intent : "obfdasject.info",
//     utterances : [
//         "Tell me about a table.",
//         "What is a table?",
//         "Give me information about tables."
//     ],
//     responses : [
//         "A table is a piece of furniture with a flat top and one or more legs, used for eating, writing, or other activities."
//     ]
// },
// {
//     intent : "objfadsect.info",
//     utterances : [
//         "Tell me about a bed.",
//         "What is a bed?",
//         "Give me information about beds."
//     ],
//     responses : [
//         "A bed is a piece of furniture used for sleeping or resting, typically consisting of a mattress supported by a frame."
//     ]
// },
// {
//     intent : "objecdfsat.info",
//     utterances : [
//         "Tell me about a desk.",
//         "What is a desk?",
//         "Give me information about desks."
//     ],
//     responses : [
//         "A desk is a piece of furniture with a flat or sloped surface, typically used for writing, reading, or working on a computer."
//     ]
// },
// {
//     intent : "objecfasdt.info",
//     utterances : [
//         "Tell me about a bookshelf.",
//         "What is a bookshelf?",
//         "Give me information about bookshelves."
//     ],
//     responses : [
//         "A bookshelf is a piece of furniture with horizontal shelves, used for storing books or other items."
//     ]
// },
// {
//     intent : "objsdafect.info",
//     utterances : [
//         "Tell me about a clock.",
//         "What is a clock?",
//         "Give me information about clocks."
//     ],
//     responses : [
//         "A clock is a device used for measuring and displaying time, typically in hours, minutes, and seconds."
//     ]
// },
// {
//     intent : "obfasdject.info",
//     utterances : [
//         "Tell me about a refrigerator.",
//         "What is a refrigerator?",
//         "Give me information about refrigerators."
//     ],
//     responses : [
//         "A refrigerator is an appliance used for preserving food by cooling it to a lower temperature than the ambient room temperature."
//     ]
// },
// {
//     intent : "ofasbject.info",
//     utterances : [
//         "Tell me about a smartphone.",
//         "What is a smartphone?",
//         "Give me information about smartphones."
//     ],
//     responses : [
//         "A smartphone is a mobile device that combines the functionalities of a mobile phone with those of a handheld computer."
//     ]
// },
// {
//     intent : "objfadsect.info",
//     utterances : [
//         "Tell me about a bicycle.",
//         "What is a bicycle?",
//         "Give me information about bicycles."
//     ],
//     responses : [
//         "A bicycle is a human-powered vehicle with two wheels, usually used for transportation or recreation."
//     ]
// },
// {
//     intent : "object.infasdfo",
//     utterances : [
//         "Tell me about a microwave oven.",
//         "What is a microwave oven?",
//         "Give me information about microwave ovens."
//     ],
//     responses : [
//         "A microwave oven is an electric appliance that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range."
//     ]
// },
// {
//     intent : "objefdsact.info",
//     utterances : [
//         "Tell me about a television.",
//         "What is a television?",
//         "Give me information about televisions."
//     ],
//     responses : [
//         "A television is an electronic device used for viewing broadcast images and sound, typically in the form of movies, news, or entertainment shows."
//     ]
// },
// {
//     intent : "object.infadsfo",
//     utterances : [
//         "Tell me about a laptop.",
//         "What is a laptop?",
//         "Give me information about laptops."
//     ],
//     responses : [
//         "A laptop is a portable computer that is small and lightweight, designed for use while traveling or away from a desk."
//     ]
// },
// {
//     intent : "object.infasfo",
//     utterances : [
//         "Tell me about a chair.",
//         "What is a chair?",
//         "Give me information about chairs."
//     ],
//     responses : [
//         "A chair is a piece of furniture designed for sitting, typically with a back and four legs."
//     ]
// },
// {
//     intent : "object.ifdasfnfo",
//     utterances : [
//         "Tell me about a table.",
//         "What is a table?",
//         "Give me information about tables."
//     ],
//     responses : [
//         "A table is a piece of furniture with a flat top and one or more legs, used for eating, writing, or other activities."
//     ]
// },
// {
//     intent : "objefdasct.info",
//     utterances : [
//         "Tell me about a bed.",
//         "What is a bed?",
//         "Give me information about beds."
//     ],
//     responses : [
//         "A bed is a piece of furniture used for sleeping or resting, typically consisting of a mattress supported by a frame."
//     ]
// },
// {
//     intent : "object.ifdasfdnfo",
//     utterances : [
//         "Tell me about a desk.",
//         "What is a desk?",
//         "Give me information about desks."
//     ],
//     responses : [
//         "A desk is a piece of furniture with a flat or sloped surface, typically used for writing, reading, or working on a computer."
//     ]
// },
// {
//     intent : "objfdsadsect.info",
//     utterances : [
//         "Tell me about a bookshelf.",
//         "What is a bookshelf?",
//         "Give me information about bookshelves."
//     ],
//     responses : [
//         "A bookshelf is a piece of furniture with horizontal shelves, used for storing books or other items."
//     ]
// },
// {
//     intent : "object.ifdsafnfo",
//     utterances : [
//         "Tell me about a clock.",
//         "What is a clock?",
//         "Give me information about clocks."
//     ],
//     responses : [
//         "A clock is a device used for measuring and displaying time, typically in hours, minutes, and seconds."
//     ]
// },
// {
//     intent : "ofasdbject.info",
//     utterances : [
//         "Tell me about a lamp.",
//         "What is a lamp?",
//         "Give me information about lamps."
//     ],
//     responses : [
//         "A lamp is a device that produces light by the flow of electrical current or by burning oil, gas, or a candle."
//     ]
// },
// {
//     intent : "object.infdsafasfo",
//     utterances : [
//         "Tell me about a washing machine.",
//         "What is a washing machine?",
//         "Give me information about washing machines."
//     ],
//     responses : [
//         "A washing machine is an appliance used for washing clothes automatically, typically with water and detergent."
//     ]
// },
// {
//     intent : "objdsafect.info",
//     utterances : [
//         "Tell me about a vacuum cleaner.",
//         "What is a vacuum cleaner?",
//         "Give me information about vacuum cleaners."
//     ],
//     responses : [
//         "A vacuum cleaner is a device used for cleaning floors and surfaces by sucking up dust and dirt into a container or bag."
//     ]
// },
// {
//     intent : "object.ifdsanfo",
//     utterances : [
//         "Tell me about a mirror.",
//         "What is a mirror?",
//         "Give me information about mirrors."
//     ],
//     responses : [
//         "A mirror is a reflective surface that reflects a clear image of objects placed in front of it."
//     ]
// },
// {
//     intent : "objfasdect.info",
//     utterances : [
//         "Tell me about a toaster.",
//         "What is a toaster?",
//         "Give me information about toasters."
//     ],
//     responses : [
//         "A toaster is a small kitchen appliance used for toasting bread by exposing it to radiant heat."
//     ]
// },
// {
//     intent : "object.infdsafo",
//     utterances : [
//         "Tell me about a blender.",
//         "What is a blender?",
//         "Give me information about blenders."
//     ],
//     responses : [
//         "A blender is a kitchen appliance used for mixing, pureeing, or emulsifying food and other substances."
//     ]
// },
// {
//     intent : "obfsdaject.info",
//     utterances : [
//         "Tell me about a coffee maker.",
//         "What is a coffee maker?",
//         "Give me information about coffee makers."
//     ],
//     responses : [
//         "A coffee maker is a kitchen appliance used for brewing coffee by hot water dripping or pressing through ground coffee beans."
//     ]
// },
// {
//     intent : "object.ifsdanfo",
//     utterances : [
//         "Tell me about a fan.",
//         "What is a fan?",
//         "Give me information about fans."
//     ],
//     responses : [
//         "A fan is a device used to create airflow for the purpose of ventilation, cooling, or drying."
//     ]
// },
// {
//     intent : "objafsect.info",
//     utterances : [
//         "Tell me about a refrigerator.",
//         "What is a refrigerator?",
//         "Give me information about refrigerators."
//     ],
//     responses : [
//         "A refrigerator is an appliance used for preserving food by cooling it to a lower temperature than the ambient room temperature."
//     ]
// },
// {
//     intent : "objefdsact.info",
//     utterances : [
//         "Tell me about a smartphone.",
//         "What is a smartphone?",
//         "Give me information about smartphones."
//     ],
//     responses : [
//         "A smartphone is a mobile device that combines the functionalities of a mobile phone with those of a handheld computer."
//     ]
// },
// {
//     intent : "object.indsaffo",
//     utterances : [
//         "Tell me about a bicycle.",
//         "What is a bicycle?",
//         "Give me information about bicycles."
//     ],
//     responses : [
//         "A bicycle is a human-powered vehicle with two wheels, usually used for transportation or recreation."
//     ]
// },
// {
//     intent : "object.isdfafanfo",
//     utterances : [
//         "Tell me about a microwave oven.",
//         "What is a microwave oven?",
//         "Give me information about microwave ovens."
//     ],
//     responses : [
//         "A microwave oven is an electric appliance that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range."
//     ]
// },
// {
//     intent : "object.idsafnfo",
//     utterances : [
//         "Tell me about a television.",
//         "What is a television?",
//         "Give me information about televisions."
//     ],
//     responses : [
//         "A television is an electronic device used for viewing broadcast images and sound, typically in the form of movies, news, or entertainment shows."
//     ]
// },
// {
//     intent : "objecsfdafst.info",
//     utterances : [
//         "Tell me about a laptop.",
//         "What is a laptop?",
//         "Give me information about laptops."
//     ],
//     responses : [
//         "A laptop is a portable computer that is small and lightweight, designed for use while traveling or away from a desk."
//     ]
// },
// {
//     intent : "objectfasd.info",
//     utterances : [
//         "Tell me about a chair.",
//         "What is a chair?",
//         "Give me information about chairs."
//     ],
//     responses : [
//         "A chair is a piece of furniture designed for sitting, typically with a back and four legs."
//     ]
// },
// {
//     intent : "object.ifdafnfo",
//     utterances : [
//         "Tell me about a table.",
//         "What is a table?",
//         "Give me information about tables."
//     ],
//     responses : [
//         "A table is a piece of furniture with a flat top and one or more legs, used for eating, writing, or other activities."
//     ]
// },
// {
//     intent : "objfsadfdsaect.info",
//     utterances : [
//         "Tell me about a bed.",
//         "What is a bed?",
//         "Give me information about beds."
//     ],
//     responses : [
//         "A bed is a piece of furniture used for sleeping or resting, typically consisting of a mattress supported by a frame."
//     ]
// },
// {
//     intent : "object.ifsaddnfo",
//     utterances : [
//         "Tell me about a desk.",
//         "What is a desk?",
//         "Give me information about desks."
//     ],
//     responses : [
//         "A desk is a piece of furniture with a flat or sloped surface, typically used for writing, reading, or working on a computer."
//     ]
// },
// {
//     intent : "objefasdfdsct.info",
//     utterances : [
//         "Tell me about a bookshelf.",
//         "What is a bookshelf?",
//         "Give me information about bookshelves."
//     ],
//     responses : [
//         "A bookshelf is a piece of furniture with horizontal shelves, used for storing books or other items."
//     ]
// },
// {
//     intent : "object.ifdsadnfo",
//     utterances : [
//         "Tell me about a clock.",
//         "What is a clock?",
//         "Give me information about clocks."
//     ],
//     responses : [
//         "A clock is a device used for measuring and displaying time, typically in hours, minutes, and seconds."
//     ]
// },
// {
//     intent : "objefdasdsct.info",
//     utterances : [
//         "Tell me about a lamp.",
//         "What is a lamp?",
//         "Give me information about lamps."
//     ],
//     responses : [
//         "A lamp is a device that produces light by the flow of electrical current or by burning oil, gas, or a candle."
//     ]
// },
// {
//     intent : "objectfdas.info",
//     utterances : [
//         "Tell me about a washing machine.",
//         "What is a washing machine?",
//         "Give me information about washing machines."
//     ],
//     responses : [
//         "A washing machine is an appliance used for washing clothes automatically, typically with water and detergent."
//     ]
// },
// {
//     intent : "object.ifdasnfo",
//     utterances : [
//         "Tell me about a vacuum cleaner.",
//         "What is a vacuum cleaner?",
//         "Give me information about vacuum cleaners."
//     ],
//     responses : [
//         "A vacuum cleaner is a device used for cleaning floors and surfaces by sucking up dust and dirt into a container or bag."
//     ]
// },
// {
//     intent : "object.idsfasdnfo",
//     utterances : [
//         "Tell me about a mirror.",
//         "What is a mirror?",
//         "Give me information about mirrors."
//     ],
//     responses : [
//         "A mirror is a reflective surface that reflects a clear image of objects placed in front of it."
//     ]
// },
// {
//     intent : "obfsadject.info",
//     utterances : [
//         "Tell me about a toaster.",
//         "What is a toaster?",
//         "Give me information about toasters."
//     ],
//     responses : [
//         "A toaster is a small kitchen appliance used for toasting bread by exposing it to radiant heat."
//     ]
// },
// {
//     intent : "object.inffdsafdsao",
//     utterances : [
//         "Tell me about a blender.",
//         "What is a blender?",
//         "Give me information about blenders."
//     ],
//     responses : [
//         "A blender is a kitchen appliance used for mixing, pureeing, or emulsifying food and other substances."
//     ]
// },
// {
//     intent : "objfsaddfect.info",
//     utterances : [
//         "Tell me about a coffee maker.",
//         "What is a coffee maker?",
//         "Give me information about coffee makers."
//     ],
//     responses : [
//         "A coffee maker is a kitchen appliance used for brewing coffee by hot water dripping or pressing through ground coffee beans."
//     ]
// },
// {
//     intent : "object.infodafs",
//     utterances : [
//         "Tell me about a fan.",
//         "What is a fan?",
//         "Give me information about fans."
//     ],
//     responses : [
//         "A fan is a device used to create airflow for the purpose of ventilation, cooling, or drying."
//     ]
// },
// {
//     intent : "obsdafdject.info",
//     utterances : [
//         "Tell me about a refrigerator.",
//         "What is a refrigerator?",
//         "Give me information about refrigerators."
//     ],
//     responses : [
//         "A refrigerator is an appliance used for preserving food by cooling it to a lower temperature than the ambient room temperature."
//     ]
// },
// {
//     intent : "object.inffdsfaso",
//     utterances : [
//         "Tell me about a smartphone.",
//         "What is a smartphone?",
//         "Give me information about smartphones."
//     ],
//     responses : [
//         "A smartphone is a mobile device that combines the functionalities of a mobile phone with those of a handheld computer."
//     ]
// },
// {
//     intent : "objfdafect.info",
//     utterances : [
//         "Tell me about a bicycle.",
//         "What is a bicycle?",
//         "Give me information about bicycles."
//     ],
//     responses : [
//         "A bicycle is a human-powered vehicle with two wheels, usually used for transportation or recreation."
//     ]
// },
// {
//     intent : "object.infdadfo",
//     utterances : [
//         "Tell me about a microwave oven.",
//         "What is a microwave oven?",
//         "Give me information about microwave ovens."
//     ],
//     responses : [
//         "A microwave oven is an electric appliance that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range."
//     ]
// },
// {
//     intent : "obdafsdject.info",
//     utterances : [
//         "Tell me about a television.",
//         "What is a television?",
//         "Give me information about televisions."
//     ],
//     responses : [
//         "A television is an electronic device used for viewing broadcast images and sound, typically in the form of movies, news, or entertainment shows."
//     ]
// },
// {
//     intent : "object.infdasfdfo",
//     utterances : [
//         "Tell me about a laptop.",
//         "What is a laptop?",
//         "Give me information about laptops."
//     ],
//     responses : [
//         "A laptop is a portable computer that is small and lightweight, designed for use while traveling or away from a desk."
//     ]
// },
// {
//     intent : "obdsfadsject.info",
//     utterances : [
//         "Tell me about a chair.",
//         "What is a chair?",
//         "Give me information about chairs."
//     ],
//     responses : [
//         "A chair is a piece of furniture designed for sitting, typically with a back and four legs."
//     ]
// },
// {
//     intent : "object.infdfafdo",
//     utterances : [
//         "Tell me about a table.",
//         "What is a table?",
//         "Give me information about tables."
//     ],
//     responses : [
//         "A table is a piece of furniture with a flat top and one or more legs, used for eating, writing, or other activities."
//     ]
// },
// {
//     intent : "obfdsaject.info",
//     utterances : [
//         "Tell me about a bed.",
//         "What is a bed?",
//         "Give me information about beds."
//     ],
//     responses : [
//         "A bed is a piece of furniture used for sleeping or resting, typically consisting of a mattress supported by a frame."
//     ]
// },
// {
//     intent : "object.infadsfasfo",
//     utterances : [
//         "Tell me about a desk.",
//         "What is a desk?",
//         "Give me information about desks."
//     ],
//     responses : [
//         "A desk is a piece of furniture with a flat or sloped surface, typically used for writing, reading, or working on a computer."
//     ]
// },
// {
//     intent : "object.inuberdsaffo",
//     utterances : [
//         "Tell me about a bookshelf.",
//         "What is a bookshelf?",
//         "Give me information about bookshelves."
//     ],
//     responses : [
//         "A bookshelf is a piece of furniture with horizontal shelves, used for storing books or other items."
//     ]
// },
// {
//     intent : "object.fdber6sainfo",
//     utterances : [
//         "Tell me about a clock.",
//         "What is a clock?",
//         "Give me information about clocks."
//     ],
//     responses : [
//         "A clock is a device used for measuring and displaying time, typically in hours, minutes, and seconds."
//     ]
// },
// {
//     intent : "objfdsaect.beu6rinfo",
//     utterances : [
//         "Tell me about a lamp.",
//         "What is a lamp?",
//         "Give me information about lamps."
//     ],
//     responses : [
//         "A lamp is a device that produces light by the flow of electrical current or by burning oil, gas, or a candle."
//     ]
// },
// {
//     intent : "object.indbreufsfo",
//     utterances : [
//         "Tell me about a washing machine.",
//         "What is a washing machine?",
//         "Give me information about washing machines."
//     ],
//     responses : [
//         "A washing machine is an appliance used for washing clothes automatically, typically with water and detergent."
//     ]
// },
// {
//     intent : "oadsbject.ibryenfo",
//     utterances : [
//         "Tell me about a vacuum cleaner.",
//         "What is a vacuum cleaner?",
//         "Give me information about vacuum cleaners."
//     ],
//     responses : [
//         "A vacuum cleaner is a device used for cleaning floors and surfaces by sucking up dust and dirt into a container or bag."
//     ]
// },
// {
//     intent : "object.infbredsfo",
//     utterances : [
//         "Tell me about a mirror.",
//         "What is a mirror?",
//         "Give me information about mirrors."
//     ],
//     responses : [
//         "A mirror is a reflective surface that reflects a clear image of objects placed in front of it."
//     ]
// },
// {
//     intent : "objefdsactbre.info",
//     utterances : [
//         "Tell me about a toaster.",
//         "What is a toaster?",
//         "Give me information about toasters."
//     ],
//     responses : [
//         "A toaster is a small kitchen appliance used for toasting bread by exposing it to radiant heat."
//     ]
// },
// {
//     intent : "object.ineurfdasfo",
//     utterances : [
//         "Tell me about a blender.",
//         "What is a blender?",
//         "Give me information about blenders."
//     ],
//     responses : [
//         "A blender is a kitchen appliance used for mixing, pureeing, or emulsifying food and other substances."
//     ]
// },
// {
//     intent : "objecfsdanu6ert.info",
//     utterances : [
//         "Tell me about a coffee maker.",
//         "What is a coffee maker?",
//         "Give me information about coffee makers."
//     ],
//     responses : [
//         "A coffee maker is a kitchen appliance used for brewing coffee by hot water dripping or pressing through ground coffee beans."
//     ]
// },
// {
//     intent : "object.inn6erfofdsa",
//     utterances : [
//         "Tell me about a fan.",
//         "What is a fan?",
//         "Give me information about fans."
//     ],
//     responses : [
//         "A fan is a device used to create airflow for the purpose of ventilation, cooling, or drying."
//     ]
// },

// {
//     intent : "electricanu6el.info",
//     utterances : [
//         "Tell me about a refrigerator.",
//         "What is a refrigerator?",
//         "Give me information about refrigerators."
//     ],
//     responses : [
//         "A refrigerator is a kitchen appliance used for cooling and preserving food."
//     ]
// },
// {
//     intent : "electricane6rl.info",
//     utterances : [
//         "Tell me about a television.",
//         "What is a television?",
//         "Give me information about televisions."
//     ],
//     responses : [
//         "A television, often abbreviated TV, is a device used for receiving broadcast signals and displaying moving images and sound."
//     ]
// },
// {
//     intent : "electricnu6eal.info",
//     utterances : [
//         "Tell me about a laptop.",
//         "What is a laptop?",
//         "Give me information about laptops."
//     ],
//     responses : [
//         "A laptop is a portable computer that is smaller and lighter than a desktop computer."
//     ]
// },
// {
//     intent : "electricalnu6e6.info",
//     utterances : [
//         "Tell me about a vacuum cleaner.",
//         "What is a vacuum cleaner?",
//         "Give me information about vacuum cleaners."
//     ],
//     responses : [
//         "A vacuum cleaner is a device used for cleaning floors and surfaces by sucking up dust and dirt into a container or bag."
//     ]
// },
// {
//     intent : "electricne6ral.info",
//     utterances : [
//         "Tell me about a microwave oven.",
//         "What is a microwave oven?",
//         "Give me information about microwave ovens."
//     ],
//     responses : [
//         "A microwave oven is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range."
//     ]
// },
// {
//     intent : "electricbeywal.info",
//     utterances : [
//         "Tell me about a washing machine.",
//         "What is a washing machine?",
//         "Give me information about washing machines."
//     ],
//     responses : [
//         "A washing machine is an appliance used for washing clothes automatically, typically with water and detergent."
//     ]
// },
// {
//     intent : "electricbyewal.info",
//     utterances : [
//         "Tell me about a hair dryer.",
//         "What is a hair dryer?",
//         "Give me information about hair dryers."
//     ],
//     responses : [
//         "A hair dryer is an electrical device used to dry and style hair by blowing hot or cool air over it."
//     ]
// },
// {
//     intent : "electricby5ewal.info",
//     utterances : [
//         "Tell me about an air conditioner.",
//         "What is an air conditioner?",
//         "Give me information about air conditioners."
//     ],
//     responses : [
//         "An air conditioner is a system or machine designed to cool and dehumidify air in an enclosed space."
//     ]
// },
// {
//     intent : "electricvgseal.info",
//     utterances : [
//         "Tell me about a fan.",
//         "What is a fan?",
//         "Give me information about fans."
//     ],
//     responses : [
//         "A fan is a device used to create airflow for the purpose of ventilation, cooling, or drying."
//     ]
// },
// {
//     intent : "electricavgserl.info",
//     utterances : [
//         "Tell me about a toaster.",
//         "What is a toaster?",
//         "Give me information about toasters."
//     ],
//     responses : [
//         "A toaster is a small kitchen appliance used for toasting bread by exposing it to radiant heat."
//     ]
// },
// {
//     intent : "electricavgesrl.info",
//     utterances : [
//         "Tell me about a blender.",
//         "What is a blender?",
//         "Give me information about blenders."
//     ],
//     responses : [
//         "A blender is a kitchen appliance used for mixing, pureeing, or emulsifying food and other substances."
//     ]
// },
// {
//     intent : "electrical.by534info",
//     utterances : [
//         "Tell me about a coffee maker.",
//         "What is a coffee maker?",
//         "Give me information about coffee makers."
//     ],
//     responses : [
//         "A coffee maker is a kitchen appliance used for brewing coffee by hot water dripping or pressing through ground coffee beans."
//     ]
// },
// {
//     intent : "electricabtewl.info",
//     utterances : [
//         "Tell me about an iron.",
//         "What is an iron?",
//         "Give me information about irons."
//     ],
//     responses : [
//         "An iron is a small appliance with a flat metal surface heated by electricity, used for pressing clothes."
//     ]
// },
// {
//     intent : "electricaverwl.info",
//     utterances : [
//         "Tell me about a mixer.",
//         "What is a mixer?",
//         "Give me information about mixers."
//     ],
//     responses : [
//         "A mixer is a kitchen appliance used for mixing ingredients or beating eggs, typically with rotating beaters."
//     ]
// },
// {
//     intent : "electricvterwal.info",
//     utterances : [
//         "Tell me about a juicer.",
//         "What is a juicer?",
//         "Give me information about juicers."
//     ],
//     responses : [
//         "A juicer is a kitchen appliance used to extract juice from fruits and vegetables."
//     ]
// },
// {
//     intent : "electrivtewcal.info",
//     utterances : [
//         "Tell me about a rice cooker.",
//         "What is a rice cooker?",
//         "Give me information about rice cookers."
//     ],
//     responses : [
//         "A rice cooker is an electrical appliance used for cooking rice automatically, typically with steam."
//     ]
// },
// {
//     intent : "electrivtrewcal.info",
//     utterances : [
//         "Tell me about a dishwasher.",
//         "What is a dishwasher?",
//         "Give me information about dishwashers."
//     ],
//     responses : [
//         "A dishwasher is a machine used for automatically washing dishes, typically by spraying hot water and detergent."
//     ]
// },
// {
//     intent : "eleegctrical.info",
//     utterances : [
//         "Tell me about a deep fryer.",
//         "What is a deep fryer?",
//         "Give me information about deep fryers."
//     ],
//     responses : [
//         "A deep fryer is a kitchen appliance used for frying food by immersing it in hot oil."
//     ]
// },
// {
//     intent : "electricalbyw45.info",
//     utterances : [
//         "Tell me about a microwave.",
//         "What is a microwave?",
//         "Give me information about microwaves."
//     ],
//     responses : [
//         "A microwave is an oven that uses microwave radiation to cook or heat food quickly."
//     ]
// },
// {
//     intent : "elebw45ctrical.info",
//     utterances : [
//         "Tell me about a food processor.",
//         "What is a food processor?",
//         "Give me information about food processors."
//     ],
//     responses : [
//         "A food processor is a kitchen appliance used for chopping, slicing, grating, and pureeing food."
//     ]
// },
// {
//     intent : "electricalbwy45.info",
//     utterances : [
//         "Tell me about a bread maker.",
//         "What is a bread maker?",
//         "Give me information about bread makers."
//     ],
//     responses : [
//         "A bread maker is a kitchen appliance used for baking bread automatically, typically by mixing and kneading dough."
//     ]
// },
// {
//     intent : "electribyw45cal.info",
//     utterances : [
//         "Tell me about a popcorn maker.",
//         "What is a popcorn maker?",
//         "Give me information about popcorn makers."
//     ],
//     responses : [
//         "A popcorn maker is a device used for making popcorn kernels into popcorn, typically by heating them with hot air or oil."
//     ]
// },
// {
//     intent : "electricalbyw45.info",
//     utterances : [
//         "Tell me about an electric kettle.",
//         "What is an electric kettle?",
//         "Give me information about electric kettles."
//     ],
//     responses : [
//         "An electric kettle is a kitchen appliance used for boiling water quickly, typically by electric heating."
//     ]
// },
// {
//     intent : "electbyw45rical.info",
//     utterances : [
//         "Tell me about a sewing machine.",
//         "What is a sewing machine?",
//         "Give me information about sewing machines."
//     ],
//     responses : [
//         "A sewing machine is a machine used for stitching fabric and other materials together with thread."
//     ]
// },
// {
//     intent : "electricab4y5wl.info",
//     utterances : [
//         "Tell me about a water heater.",
//         "What is a water heater?",
//         "Give me information about water heaters."
//     ],
//     responses : [
//         "A water heater is a device used for heating and storing hot water for domestic use."
//     ]
// },
// {
//     intent : "electby45rical.info",
//     utterances : [
//         "Tell me about a treadmill.",
//         "What is a treadmill?",
//         "Give me information about treadmills."
//     ],
//     responses : [
//         "A treadmill is an exercise machine used for walking or running in place, typically with a moving belt."
//     ]
// },
// {
//     intent : "electricabye54l.info",
//     utterances : [
//         "Tell me about a scale.",
//         "What is a scale?",
//         "Give me information about scales."
//     ],
//     responses : [
//         "A scale is a device used for measuring weight or mass."
//     ]
// },
// {
//     intent : "electrby4e5ical.info",
//     utterances : [
//         "Tell me about an electric blanket.",
//         "What is an electric blanket?",
//         "Give me information about electric blankets."
//     ],
//     responses : [
//         "An electric blanket is a blanket with integrated electrical heating wires, used to warm the bed."
//     ]
// },
// {
//     intent : "electricalbey45.info",
//     utterances : [
//         "Tell me about a space heater.",
//         "What is a space heater?",
//         "Give me information about space heaters."
//     ],
//     responses : [
//         "A space heater is a device used for heating an enclosed area, typically powered by electricity or gas."
//     ]
// },
// {
//     intent : "electrb4y5ical.info",
//     utterances : [
//         "Tell me about an electric shaver.",
//         "What is an electric shaver?",
//         "Give me information about electric shavers."
//     ],
//     responses : [
//         "An electric shaver is a device used for shaving facial or body hair, powered by electricity."
//     ]
// },
// {
//     intent : "electricabey5l.info",
//     utterances : [
//         "Tell me about a cordless phone.",
//         "What is a cordless phone?",
//         "Give me information about cordless phones."
//     ],
//     responses : [
//         "A cordless phone is a telephone with a wireless handset, typically connected to a base station."
//     ]
// },
// {
//     intent : "electriby45cal.info",
//     utterances : [
//         "Tell me about an electric toothbrush.",
//         "What is an electric toothbrush?",
//         "Give me information about electric toothbrushes."
//     ],
//     responses : [
//         "An electric toothbrush is a toothbrush that uses electric power to move the brush head, providing automated brushing motions."
//     ]
// },
// {
//     intent : "electrical.ibey45nfo",
//     utterances : [
//         "Tell me about a humidifier.",
//         "What is a humidifier?",
//         "Give me information about humidifiers."
//     ],
//     responses : [
//         "A humidifier is a device that increases humidity (moisture) in a single room or an entire building."
//     ]
// },
// {
//     intent : "electricabye45l.info",
//     utterances : [
//         "Tell me about a dehumidifier.",
//         "What is a dehumidifier?",
//         "Give me information about dehumidifiers."
//     ],
//     responses : [
//         "A dehumidifier is a device that reduces and maintains the level of humidity in the air, usually for health or comfort reasons."
//     ]
// },
// {
//     intent : "electricalb4y5.info",
//     utterances : [
//         "Tell me about an air purifier.",
//         "What is an air purifier?",
//         "Give me information about air purifiers."
//     ],
//     responses : [
//         "An air purifier is a device used to clean and purify indoor air by removing pollutants such as dust, pollen, and smoke."
//     ]
// },
// {
//     intent : "electricaybel.info",
//     utterances : [
//         "Tell me about a blood pressure monitor.",
//         "What is a blood pressure monitor?",
//         "Give me information about blood pressure monitors."
//     ],
//     responses : [
//         "A blood pressure monitor is a device used to measure and display the blood pressure of an individual."
//     ]
// },
// {
//     intent : "electricb45yeal.info",
//     utterances : [
//         "Tell me about a digital camera.",
//         "What is a digital camera?",
//         "Give me information about digital cameras."
//     ],
//     responses : [
//         "A digital camera is a camera that captures and stores photographs and videos in digital format."
//     ]
// },
// {
//     intent : "electrib5ecal.info",
//     utterances : [
//         "Tell me about a smartwatch.",
//         "What is a smartwatch?",
//         "Give me information about smartwatches."
//     ],
//     responses : [
//         "A smartwatch is a wearable computing device worn on the wrist that offers functionalities beyond timekeeping."
//     ]
// },
// {
//     intent : "electrib54ycal.info",
//     utterances : [
//         "Tell me about a drone.",
//         "What is a drone?",
//         "Give me information about drones."
//     ],
//     responses : [
//         "A drone is an unmanned aerial vehicle (UAV) that can be remotely controlled or fly autonomously."
//     ]
// },
// {
//     intent : "electricab54yl.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electric564al.info",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electrinu65cal.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },
// {
//     intent : "electricalnu56.info",
//     utterances : [
//         "Tell me about a portable charger.",
//         "What is a portable charger?",
//         "Give me information about portable chargers."
//     ],
//     responses : [
//         "A portable charger, also known as a power bank, is a device used to charge electronic devices on the go."
//     ]
// },
// {
//     intent : "electrbyerical.info",
//     utterances : [
//         "Tell me about an electric can opener.",
//         "What is an electric can opener?",
//         "Give me information about electric can openers."
//     ],
//     responses : [
//         "An electric can opener is a kitchen appliance used for opening cans automatically, typically with an electric mechanism."
//     ]
// },
// {
//     intent : "electricalbyer.info",
//     utterances : [
//         "Tell me about a thermostat.",
//         "What is a thermostat?",
//         "Give me information about thermostats."
//     ],
//     responses : [
//         "A thermostat is a device that regulates temperature, typically by controlling heating and cooling systems."
//     ]
// },
// {
//     intent : "electribyercal.info",
//     utterances : [
//         "Tell me about a handheld vacuum cleaner.",
//         "What is a handheld vacuum cleaner?",
//         "Give me information about handheld vacuum cleaners."
//     ],
//     responses : [
//         "A handheld vacuum cleaner is a small, portable device used for cleaning small areas or surfaces by suction."
//     ]
// },
// {
//     intent : "electribyercal.info",
//     utterances : [
//         "Tell me about a label maker.",
//         "What is a label maker?",
//         "Give me information about label makers."
//     ],
//     responses : [
//         "A label maker is a device used to create adhesive labels, typically for organizing and identification purposes."
//     ]
// },
// {
//     intent : "electribyercal.info",
//     utterances : [
//         "Tell me about a paper shredder.",
//         "What is a paper shredder?",
//         "Give me information about paper shredders."
//     ],
//     responses : [
//         "A paper shredder is a mechanical device used to cut paper into either strips or fine particles for security or recycling purposes."
//     ]
// },
// {
//     intent : "electriybetrcal.info",
//     utterances : [
//         "Tell me about a robotic vacuum cleaner.",
//         "What is a robotic vacuum cleaner?",
//         "Give me information about robotic vacuum cleaners."
//     ],
//     responses : [
//         "A robotic vacuum cleaner, often called a robovac, is an autonomous device used for cleaning floors by vacuuming."
//     ]
// },
// {
//     intent : "electribyercal.info",
//     utterances : [
//         "Tell me about an electric grill.",
//         "What is an electric grill?",
//         "Give me information about electric grills."
//     ],
//     responses : [
//         "An electric grill is a cooking appliance that uses electric heating elements to grill or cook food."
//     ]
// },
// {
//     intent : "electrbeyrcal.info",
//     utterances : [
//         "Tell me about a rechargeable flashlight.",
//         "What is a rechargeable flashlight?",
//         "Give me information about rechargeable flashlights."
//     ],
//     responses : [
//         "A rechargeable flashlight is a portable light source powered by a rechargeable battery."
//     ]
// },
// {
//     intent : "electribyercal.info",
//     utterances : [
//         "Tell me about a digital clock.",
//         "What is a digital clock?",
//         "Give me information about digital clocks."
//     ],
//     responses : [
//         "A digital clock is a timekeeping device that displays the time digitally."
//     ]
// },
// {
//     intent : "electrbyerical.info",
//     utterances : [
//         "Tell me about a laser printer.",
//         "What is a laser printer?",
//         "Give me information about laser printers."
//     ],
//     responses : [
//         "A laser printer is a printer that uses a laser beam to produce high-quality text and graphics on paper."
//     ]
// },
// {
//     intent : "electrbyerical.info",
//     utterances : [
//         "Tell me about a portable air compressor.",
//         "What is a portable air compressor?",
//         "Give me information about portable air compressors."
//     ],
//     responses : [
//         "A portable air compressor is a device used to compress air and store it in a tank for various applications."
//     ]
// },
// {
//     intent : "electbrerical.info",
//     utterances : [
//         "Tell me about a power drill.",
//         "What is a power drill?",
//         "Give me information about power drills."
//     ],
//     responses : [
//         "A power drill is a handheld motorized tool used for drilling holes in various materials."
//     ]
// },
// {
//     intent : "electrbyerical.info",
//     utterances : [
//         "Tell me about an electric heater.",
//         "What is an electric heater?",
//         "Give me information about electric heaters."
//     ],
//     responses : [
//         "An electric heater is a device used for heating an enclosed area, powered by electricity."
//     ]
// },
// {
//     intent : "electybeical.info",
//     utterances : [
//         "Tell me about a handheld blender.",
//         "What is a handheld blender?",
//         "Give me information about handheld blenders."
//     ],
//     responses : [
//         "A handheld blender, also known as an immersion blender or stick blender, is a kitchen appliance used for blending and pureeing food directly in the container."
//     ]
// },
// {
//     intent : "electbyerrical.info",
//     utterances : [
//         "Tell me about a battery charger.",
//         "What is a battery charger?",
//         "Give me information about battery chargers."
//     ],
//     responses : [
//         "A battery charger is a device used to recharge rechargeable batteries by supplying electrical current."
//     ]
// },
// {
//     intent : "electryerical.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electy5w4rical.info",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electyw54rical.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },
// {
//     intent : "eleyw45ctrical.info",
//     utterances : [
//         "Tell me about a portable charger.",
//         "What is a portable charger?",
//         "Give me information about portable chargers."
//     ],
//     responses : [
//         "A portable charger, also known as a power bank, is a device used to charge electronic devices on the go."
//     ]
// },
// {
//     intent : "electy54wrical.info",
//     utterances : [
//         "Tell me about an electric can opener.",
//         "What is an electric can opener?",
//         "Give me information about electric can openers."
//     ],
//     responses : [
//         "An electric can opener is a kitchen appliance used for opening cans automatically, typically with an electric mechanism."
//     ]
// },
// {
//     intent : "electryw5ical.info",
//     utterances : [
//         "Tell me about a thermostat.",
//         "What is a thermostat?",
//         "Give me information about thermostats."
//     ],
//     responses : [
//         "A thermostat is a device that regulates temperature, typically by controlling heating and cooling systems."
//     ]
// },
// {
//     intent : "electricay5wl.info",
//     utterances : [
//         "Tell me about a handheld vacuum cleaner.",
//         "What is a handheld vacuum cleaner?",
//         "Give me information about handheld vacuum cleaners."
//     ],
//     responses : [
//         "A handheld vacuum cleaner is a small, portable device used for cleaning small areas or surfaces by suction."
//     ]
// },
// {
//     intent : "electricayw54l.info",
//     utterances : [
//         "Tell me about a label maker.",
//         "What is a label maker?",
//         "Give me information about label makers."
//     ],
//     responses : [
//         "A label maker is a device used to create adhesive labels, typically for organizing and identification purposes."
//     ]
// },
// {
//     intent : "electricagy54l.info",
//     utterances : [
//         "Tell me about a paper shredder.",
//         "What is a paper shredder?",
//         "Give me information about paper shredders."
//     ],
//     responses : [
//         "A paper shredder is a mechanical device used to cut paper into either strips or fine particles for security or recycling purposes."
//     ]
// },
// {
//     intent : "electricvt43al.info",
//     utterances : [
//         "Tell me about a robotic vacuum cleaner.",
//         "What is a robotic vacuum cleaner?",
//         "Give me information about robotic vacuum cleaners."
//     ],
//     responses : [
//         "A robotic vacuum cleaner, often called a robovac, is an autonomous device used for cleaning floors by vacuuming."
//     ]
// },
// {
//     intent : "electricatwel.info",
//     utterances : [
//         "Tell me about an electric grill.",
//         "What is an electric grill?",
//         "Give me information about electric grills."
//     ],
//     responses : [
//         "An electric grill is a cooking appliance that uses electric heating elements to grill or cook food."
//     ]
// },
// {
//     intent : "electricavtwel.info",
//     utterances : [
//         "Tell me about a rechargeable flashlight.",
//         "What is a rechargeable flashlight?",
//         "Give me information about rechargeable flashlights."
//     ],
//     responses : [
//         "A rechargeable flashlight is a portable light source powered by a rechargeable battery."
//     ]
// },
// {
//     intent : "electricaltw.info",
//     utterances : [
//         "Tell me about a digital clock.",
//         "What is a digital clock?",
//         "Give me information about digital clocks."
//     ],
//     responses : [
//         "A digital clock is a timekeeping device that displays the time digitally."
//     ]
// },
// {
//     intent : "electricalwte.info",
//     utterances : [
//         "Tell me about a laser printer.",
//         "What is a laser printer?",
//         "Give me information about laser printers."
//     ],
//     responses : [
//         "A laser printer is a printer that uses a laser beam to produce high-quality text and graphics on paper."
//     ]
// },
// {
//     intent : "electricalftew.info",
//     utterances : [
//         "Tell me about a portable air compressor.",
//         "What is a portable air compressor?",
//         "Give me information about portable air compressors."
//     ],
//     responses : [
//         "A portable air compressor is a device used to compress air and store it in a tank for various applications."
//     ]
// },
// {
//     intent : "electrical.i5wtnfo",
//     utterances : [
//         "Tell me about a power drill.",
//         "What is a power drill?",
//         "Give me information about power drills."
//     ],
//     responses : [
//         "A power drill is a handheld motorized tool used for drilling holes in various materials."
//     ]
// },
// {
//     intent : "electricalywe5.info",
//     utterances : [
//         "Tell me about an electric heater.",
//         "What is an electric heater?",
//         "Give me information about electric heaters."
//     ],
//     responses : [
//         "An electric heater is a device used for heating an enclosed area, powered by electricity."
//     ]
// },
// {
//     intent : "electricaly54w43.info",
//     utterances : [
//         "Tell me about a handheld blender.",
//         "What is a handheld blender?",
//         "Give me information about handheld blenders."
//     ],
//     responses : [
//         "A handheld blender, also known as an immersion blender or stick blender, is a kitchen appliance used for blending and pureeing food directly in the container."
//     ]
// },
// {
//     intent : "electrical.y54winfo",
//     utterances : [
//         "Tell me about a battery charger.",
//         "What is a battery charger?",
//         "Give me information about battery chargers."
//     ],
//     responses : [
//         "A battery charger is a device used to recharge rechargeable batteries by supplying electrical current."
//     ]
// },
// {
//     intent : "electrical5wtb54.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electricalvtw.info",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electricavtwerl.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },
// {
//     intent : "electrical.vtweinfo",
//     utterances : [
//         "Tell me about a portable charger.",
//         "What is a portable charger?",
//         "Give me information about portable chargers."
//     ],
//     responses : [
//         "A portable charger, also known as a power bank, is a device used to charge electronic devices on the go."
//     ]
// },
// {
//     intent : "electricavtwel.info",
//     utterances : [
//         "Tell me about an electric can opener.",
//         "What is an electric can opener?",
//         "Give me information about electric can openers."
//     ],
//     responses : [
//         "An electric can opener is a kitchen appliance used for opening cans automatically, typically with an electric mechanism."
//     ]
// },
// {
//     intent : "electricalvterw.info",
//     utterances : [
//         "Tell me about a thermostat.",
//         "What is a thermostat?",
//         "Give me information about thermostats."
//     ],
//     responses : [
//         "A thermostat is a device that regulates temperature, typically by controlling heating and cooling systems."
//     ]
// },
// {
//     intent : "electricalbetr.info",
//     utterances : [
//         "Tell me about a handheld vacuum cleaner.",
//         "What is a handheld vacuum cleaner?",
//         "Give me information about handheld vacuum cleaners."
//     ],
//     responses : [
//         "A handheld vacuum cleaner is a small, portable device used for cleaning small areas or surfaces by suction."
//     ]
// },
// {
//     intent : "electricalbwte.info",
//     utterances : [
//         "Tell me about a label maker.",
//         "What is a label maker?",
//         "Give me information about label makers."
//     ],
//     responses : [
//         "A label maker is a device used to create adhesive labels, typically for organizing and identification purposes."
//     ]
// },
// {
//     intent : "electricalbwte.info",
//     utterances : [
//         "Tell me about a paper shredder.",
//         "What is a paper shredder?",
//         "Give me information about paper shredders."
//     ],
//     responses : [
//         "A paper shredder is a mechanical device used to cut paper into either strips or fine particles for security or recycling purposes."
//     ]
// },
// {
//     intent : "electricabwet4l.info",
//     utterances : [
//         "Tell me about a robotic vacuum cleaner.",
//         "What is a robotic vacuum cleaner?",
//         "Give me information about robotic vacuum cleaners."
//     ],
//     responses : [
//         "A robotic vacuum cleaner, often called a robovac, is an autonomous device used for cleaning floors by vacuuming."
//     ]
// },
// {
//     intent : "electricbywal.info",
//     utterances : [
//         "Tell me about an electric grill.",
//         "What is an electric grill?",
//         "Give me information about electric grills."
//     ],
//     responses : [
//         "An electric grill is a cooking appliance that uses electric heating elements to grill or cook food."
//     ]
// },
// {
//     intent : "electricbyw5eal.info",
//     utterances : [
//         "Tell me about a rechargeable flashlight.",
//         "What is a rechargeable flashlight?",
//         "Give me information about rechargeable flashlights."
//     ],
//     responses : [
//         "A rechargeable flashlight is a portable light source powered by a rechargeable battery."
//     ]
// },
// {
//     intent : "electricabewbyw54.info",
//     utterances : [
//         "Tell me about a digital clock.",
//         "What is a digital clock?",
//         "Give me information about digital clocks."
//     ],
//     responses : [
//         "A digital clock is a timekeeping device that displays the time digitally."
//     ]
// },
// {
//     intent : "electricwqcal.info",
//     utterances : [
//         "Tell me about a laser printer.",
//         "What is a laser printer?",
//         "Give me information about laser printers."
//     ],
//     responses : [
//         "A laser printer is a printer that uses a laser beam to produce high-quality text and graphics on paper."
//     ]
// },
// {
//     intent : "electricalvwer.info",
//     utterances : [
//         "Tell me about a portable air compressor.",
//         "What is a portable air compressor?",
//         "Give me information about portable air compressors."
//     ],
//     responses : [
//         "A portable air compressor is a device used to compress air and store it in a tank for various applications."
//     ]
// },
// {
//     intent : "electricavl.info",
//     utterances : [
//         "Tell me about a power drill.",
//         "What is a power drill?",
//         "Give me information about power drills."
//     ],
//     responses : [
//         "A power drill is a handheld motorized tool used for drilling holes in various materials."
//     ]
// },
// {
//     intent : "electricalvew.info",
//     utterances : [
//         "Tell me about an electric heater.",
//         "What is an electric heater?",
//         "Give me information about electric heaters."
//     ],
//     responses : [
//         "An electric heater is a device used for heating an enclosed area, powered by electricity."
//     ]
// },
// {
//     intent : "electricavwel.info",
//     utterances : [
//         "Tell me about a handheld blender.",
//         "What is a handheld blender?",
//         "Give me information about handheld blenders."
//     ],
//     responses : [
//         "A handheld blender, also known as an immersion blender or stick blender, is a kitchen appliance used for blending and pureeing food directly in the container."
//     ]
// },
// {
//     intent : "electricavewl.info",
//     utterances : [
//         "Tell me about a battery charger.",
//         "What is a battery charger?",
//         "Give me information about battery chargers."
//     ],
//     responses : [
//         "A battery charger is a device used to recharge rechargeable batteries by supplying electrical current."
//     ]
// },
// {
//     intent : "electricabherl.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electricbhtral.info",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electribhercal.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },
// {
//     intent : "brt.info",
//     utterances : [
//         "Tell me about a portable charger.",
//         "What is a portable charger?",
//         "Give me information about portable chargers."
//     ],
//     responses : [
//         "A portable charger, also known as a power bank, is a device used to charge electronic devices on the go."
//     ]
// },
// {
//     intent : "electribehrcal.info",
//     utterances : [
//         "Tell me about an electric can opener.",
//         "What is an electric can opener?",
//         "Give me information about electric can openers."
//     ],
//     responses : [
//         "An electric can opener is a kitchen appliance used for opening cans automatically, typically with an electric mechanism."
//     ]
// },
// {
//     intent : "electricalber.info",
//     utterances : [
//         "Tell me about a thermostat.",
//         "What is a thermostat?",
//         "Give me information about thermostats."
//     ],
//     responses : [
//         "A thermostat is a device that regulates temperature, typically by controlling heating and cooling systems."
//     ]
// },
// {
//     intent : "electrical.infobre",
//     utterances : [
//         "Tell me about a handheld vacuum cleaner.",
//         "What is a handheld vacuum cleaner?",
//         "Give me information about handheld vacuum cleaners."
//     ],
//     responses : [
//         "A handheld vacuum cleaner is a small, portable device used for cleaning small areas or surfaces by suction."
//     ]
// },
// {
//     intent : "electrical.inbhrefo",
//     utterances : [
//         "Tell me about a label maker.",
//         "What is a label maker?",
//         "Give me information about label makers."
//     ],
//     responses : [
//         "A label maker is a device used to create adhesive labels, typically for organizing and identification purposes."
//     ]
// },
// {
//     intent : "electrical.infbhtreo",
//     utterances : [
//         "Tell me about a paper shredder.",
//         "What is a paper shredder?",
//         "Give me information about paper shredders."
//     ],
//     responses : [
//         "A paper shredder is a mechanical device used to cut paper into either strips or fine particles for security or recycling purposes."
//     ]
// },
// {
//     intent : "electrical.ibherbhrenfo",
//     utterances : [
//         "Tell me about a robotic vacuum cleaner.",
//         "What is a robotic vacuum cleaner?",
//         "Give me information about robotic vacuum cleaners."
//     ],
//     responses : [
//         "A robotic vacuum cleaner, often called a robovac, is an autonomous device used for cleaning floors by vacuuming."
//     ]
// },
// {
//     intent : "electrical.infbehro",
//     utterances : [
//         "Tell me about an electric grill.",
//         "What is an electric grill?",
//         "Give me information about electric grills."
//     ],
//     responses : [
//         "An electric grill is a cooking appliance that uses electric heating elements to grill or cook food."
//     ]
// },
// {
//     intent : "electbetrrical.info",
//     utterances : [
//         "Tell me about a rechargeable flashlight.",
//         "What is a rechargeable flashlight?",
//         "Give me information about rechargeable flashlights."
//     ],
//     responses : [
//         "A rechargeable flashlight is a portable light source powered by a rechargeable battery."
//     ]
// },
// {
//     intent : "elecvsegtrical.info",
//     utterances : [
//         "Tell me about a digital clock.",
//         "What is a digital clock?",
//         "Give me information about digital clocks."
//     ],
//     responses : [
//         "A digital clock is a timekeeping device that displays the time digitally."
//     ]
// },
// {
//     intent : "elevserctrical.info",
//     utterances : [
//         "Tell me about a laser printer.",
//         "What is a laser printer?",
//         "Give me information about laser printers."
//     ],
//     responses : [
//         "A laser printer is a printer that uses a laser beam to produce high-quality text and graphics on paper."
//     ]
// },
// {
//     intent : "everlectrical.info",
//     utterances : [
//         "Tell me about a portable air compressor.",
//         "What is a portable air compressor?",
//         "Give me information about portable air compressors."
//     ],
//     responses : [
//         "A portable air compressor is a device used to compress air and store it in a tank for various applications."
//     ]
// },
// {
//     intent : "electvserrical.info",
//     utterances : [
//         "Tell me about a power drill.",
//         "What is a power drill?",
//         "Give me information about power drills."
//     ],
//     responses : [
//         "A power drill is a handheld motorized tool used for drilling holes in various materials."
//     ]
// },
// {
//     intent : "electrivegcal.info",
//     utterances : [
//         "Tell me about an electric heater.",
//         "What is an electric heater?",
//         "Give me information about electric heaters."
//     ],
//     responses : [
//         "An electric heater is a device used for heating an enclosed area, powered by electricity."
//     ]
// },
// {
//     intent : "electricvsgreal.info",
//     utterances : [
//         "Tell me about a handheld blender.",
//         "What is a handheld blender?",
//         "Give me information about handheld blenders."
//     ],
//     responses : [
//         "A handheld blender, also known as an immersion blender or stick blender, is a kitchen appliance used for blending and pureeing food directly in the container."
//     ]
// },
// {
//     intent : "electrbsgrical.info",
//     utterances : [
//         "Tell me about a battery charger.",
//         "What is a battery charger?",
//         "Give me information about battery chargers."
//     ],
//     responses : [
//         "A battery charger is a device used to recharge rechargeable batteries by supplying electrical current."
//     ]
// },
// {
//     intent : "electvsrerical.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electricalvsreinfo",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electvsrrical.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },
// {
//     intent : "electricalvgsre.info",
//     utterances : [
//         "Tell me about a portable charger.",
//         "What is a portable charger?",
//         "Give me information about portable chargers."
//     ],
//     responses : [
//         "A portable charger, also known as a power bank, is a device used to charge electronic devices on the go."
//     ]
// },
// {
//     intent : "electvsgrerical.info",
//     utterances : [
//         "Tell me about an electric can opener.",
//         "What is an electric can opener?",
//         "Give me information about electric can openers."
//     ],
//     responses : [
//         "An electric can opener is a kitchen appliance used for opening cans automatically, typically with an electric mechanism."
//     ]
// },
// {
//     intent : "electricavsrel.info",
//     utterances : [
//         "Tell me about a thermostat.",
//         "What is a thermostat?",
//         "Give me information about thermostats."
//     ],
//     responses : [
//         "A thermostat is a device that regulates temperature, typically by controlling heating and cooling systems."
//     ]
// },
// {
//     intent : "electrvsreical.info",
//     utterances : [
//         "Tell me about a handheld vacuum cleaner.",
//         "What is a handheld vacuum cleaner?",
//         "Give me information about handheld vacuum cleaners."
//     ],
//     responses : [
//         "A handheld vacuum cleaner is a small, portable device used for cleaning small areas or surfaces by suction."
//     ]
// },
// {
//     intent : "electricavsrl.info",
//     utterances : [
//         "Tell me about a label maker.",
//         "What is a label maker?",
//         "Give me information about label makers."
//     ],
//     responses : [
//         "A label maker is a device used to create adhesive labels, typically for organizing and identification purposes."
//     ]
// },
// {
//     intent : "electricavsgrl.info",
//     utterances : [
//         "Tell me about a paper shredder.",
//         "What is a paper shredder?",
//         "Give me information about paper shredders."
//     ],
//     responses : [
//         "A paper shredder is a mechanical device used to cut paper into either strips or fine particles for security or recycling purposes."
//     ]
// },
// {
//     intent : "electricalvgs.info",
//     utterances : [
//         "Tell me about a robotic vacuum cleaner.",
//         "What is a robotic vacuum cleaner?",
//         "Give me information about robotic vacuum cleaners."
//     ],
//     responses : [
//         "A robotic vacuum cleaner, often called a robovac, is an autonomous device used for cleaning floors by vacuuming."
//     ]
// },
// {
//     intent : "electrvgrdsical.info",
//     utterances : [
//         "Tell me about an electric grill.",
//         "What is an electric grill?",
//         "Give me information about electric grills."
//     ],
//     responses : [
//         "An electric grill is a cooking appliance that uses electric heating elements to grill or cook food."
//     ]
// },
// {
//     intent : "electrivsrcal.info",
//     utterances : [
//         "Tell me about a rechargeable flashlight.",
//         "What is a rechargeable flashlight?",
//         "Give me information about rechargeable flashlights."
//     ],
//     responses : [
//         "A rechargeable flashlight is a portable light source powered by a rechargeable battery."
//     ]
// },
// {
//     intent : "electricalsr.info",
//     utterances : [
//         "Tell me about a digital clock.",
//         "What is a digital clock?",
//         "Give me information about digital clocks."
//     ],
//     responses : [
//         "A digital clock is a timekeeping device that displays the time digitally."
//     ]
// },
// {
//     intent : "electrical.bgvinfo",
//     utterances : [
//         "Tell me about a laser printer.",
//         "What is a laser printer?",
//         "Give me information about laser printers."
//     ],
//     responses : [
//         "A laser printer is a printer that uses a laser beam to produce high-quality text and graphics on paper."
//     ]
// },
// {
//     intent : "electrical.ivgnfo",
//     utterances : [
//         "Tell me about a portable air compressor.",
//         "What is a portable air compressor?",
//         "Give me information about portable air compressors."
//     ],
//     responses : [
//         "A portable air compressor is a device used to compress air and store it in a tank for various applications."
//     ]
// },
// {
//     intent : "electrivsrecal.info",
//     utterances : [
//         "Tell me about a power drill.",
//         "What is a power drill?",
//         "Give me information about power drills."
//     ],
//     responses : [
//         "A power drill is a handheld motorized tool used for drilling holes in various materials."
//     ]
// },
// {
//     intent : "electrivsrcal.info",
//     utterances : [
//         "Tell me about an electric heater.",
//         "What is an electric heater?",
//         "Give me information about electric heaters."
//     ],
//     responses : [
//         "An electric heater is a device used for heating an enclosed area, powered by electricity."
//     ]
// },
// {
//     intent : "electricavsrel.info",
//     utterances : [
//         "Tell me about a handheld blender.",
//         "What is a handheld blender?",
//         "Give me information about handheld blenders."
//     ],
//     responses : [
//         "A handheld blender, also known as an immersion blender or stick blender, is a kitchen appliance used for blending and pureeing food directly in the container."
//     ]
// },
// {
//     intent : "electricasvsl.info",
//     utterances : [
//         "Tell me about a battery charger.",
//         "What is a battery charger?",
//         "Give me information about battery chargers."
//     ],
//     responses : [
//         "A battery charger is a device used to recharge rechargeable batteries by supplying electrical current."
//     ]
// },
// {
//     intent : "electricsvreal.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electrivsevsdrcal.info",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electricvsevsral.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },
// {
//     intent : "electricvrsevgsreal.info",
//     utterances : [
//         "Tell me about a portable charger.",
//         "What is a portable charger?",
//         "Give me information about portable chargers."
//     ],
//     responses : [
//         "A portable charger, also known as a power bank, is a device used to charge electronic devices on the go."
//     ]
// },
// {
//     intent : "electricavel.info",
//     utterances : [
//         "Tell me about an electric can opener.",
//         "What is an electric can opener?",
//         "Give me information about electric can openers."
//     ],
//     responses : [
//         "An electric can opener is a kitchen appliance used for opening cans automatically, typically with an electric mechanism."
//     ]
// },
// {
//     intent : "electricavrsl.info",
//     utterances : [
//         "Tell me about a thermostat.",
//         "What is a thermostat?",
//         "Give me information about thermostats."
//     ],
//     responses : [
//         "A thermostat is a device that regulates temperature, typically by controlling heating and cooling systems."
//     ]
// },
// {
//     intent : "electricavsl.info",
//     utterances : [
//         "Tell me about a handheld vacuum cleaner.",
//         "What is a handheld vacuum cleaner?",
//         "Give me information about handheld vacuum cleaners."
//     ],
//     responses : [
//         "A handheld vacuum cleaner is a small, portable device used for cleaning small areas or surfaces by suction."
//     ]
// },
// {
//     intent : "electricvrsal.info",
//     utterances : [
//         "Tell me about a label maker.",
//         "What is a label maker?",
//         "Give me information about label makers."
//     ],
//     responses : [
//         "A label maker is a device used to create adhesive labels, typically for organizing and identification purposes."
//     ]
// },
// {
//     intent : "electricsveal.info",
//     utterances : [
//         "Tell me about a paper shredder.",
//         "What is a paper shredder?",
//         "Give me information about paper shredders."
//     ],
//     responses : [
//         "A paper shredder is a mechanical device used to cut paper into either strips or fine particles for security or recycling purposes."
//     ]
// },
// {
//     intent : "electrivsrecal.info",
//     utterances : [
//         "Tell me about a robotic vacuum cleaner.",
//         "What is a robotic vacuum cleaner?",
//         "Give me information about robotic vacuum cleaners."
//     ],
//     responses : [
//         "A robotic vacuum cleaner, often called a robovac, is an autonomous device used for cleaning floors by vacuuming."
//     ]
// },
// {
//     intent : "electrisrecal.info",
//     utterances : [
//         "Tell me about an electric grill.",
//         "What is an electric grill?",
//         "Give me information about electric grills."
//     ],
//     responses : [
//         "An electric grill is a cooking appliance that uses electric heating elements to grill or cook food."
//     ]
// },
// {
//     intent : "electricvsreal.info",
//     utterances : [
//         "Tell me about a rechargeable flashlight.",
//         "What is a rechargeable flashlight?",
//         "Give me information about rechargeable flashlights."
//     ],
//     responses : [
//         "A rechargeable flashlight is a portable light source powered by a rechargeable battery."
//     ]
// },
// {
//     intent : "electricvseal.info",
//     utterances : [
//         "Tell me about a digital clock.",
//         "What is a digital clock?",
//         "Give me information about digital clocks."
//     ],
//     responses : [
//         "A digital clock is a timekeeping device that displays the time digitally."
//     ]
// },
// {
//     intent : "electricvgsrvsral.info",
//     utterances : [
//         "Tell me about a laser printer.",
//         "What is a laser printer?",
//         "Give me information about laser printers."
//     ],
//     responses : [
//         "A laser printer is a printer that uses a laser beam to produce high-quality text and graphics on paper."
//     ]
// },
// {
//     intent : "electricvsreal.info",
//     utterances : [
//         "Tell me about a portable air compressor.",
//         "What is a portable air compressor?",
//         "Give me information about portable air compressors."
//     ],
//     responses : [
//         "A portable air compressor is a device used to compress air and store it in a tank for various applications."
//     ]
// },
// {
//     intent : "electricvsreal.info",
//     utterances : [
//         "Tell me about a power drill.",
//         "What is a power drill?",
//         "Give me information about power drills."
//     ],
//     responses : [
//         "A power drill is a handheld motorized tool used for drilling holes in various materials."
//     ]
// },
// {
//     intent : "electricvsreal.info",
//     utterances : [
//         "Tell me about an electric heater.",
//         "What is an electric heater?",
//         "Give me information about electric heaters."
//     ],
//     responses : [
//         "An electric heater is a device used for heating an enclosed area, powered by electricity."
//     ]
// },
// {
//     intent : "electricvsreal.info",
//     utterances : [
//         "Tell me about a handheld blender.",
//         "What is a handheld blender?",
//         "Give me information about handheld blenders."
//     ],
//     responses : [
//         "A handheld blender, also known as an immersion blender or stick blender, is a kitchen appliance used for blending and pureeing food directly in the container."
//     ]
// },
// {
//     intent : "electricvseral.info",
//     utterances : [
//         "Tell me about a battery charger.",
//         "What is a battery charger?",
//         "Give me information about battery chargers."
//     ],
//     responses : [
//         "A battery charger is a device used to recharge rechargeable batteries by supplying electrical current."
//     ]
// },
// {
//     intent : "electrivsercal.info",
//     utterances : [
//         "Tell me about a digital scale.",
//         "What is a digital scale?",
//         "Give me information about digital scales."
//     ],
//     responses : [
//         "A digital scale is a device used to measure weight or mass, displaying the measurement digitally."
//     ]
// },
// {
//     intent : "electrivsacal.info",
//     utterances : [
//         "Tell me about a digital thermometer.",
//         "What is a digital thermometer?",
//         "Give me information about digital thermometers."
//     ],
//     responses : [
//         "A digital thermometer is a temperature-measuring device that displays the temperature reading digitally."
//     ]
// },
// {
//     intent : "electrivsrcal.info",
//     utterances : [
//         "Tell me about a GPS device.",
//         "What is a GPS device?",
//         "Give me information about GPS devices."
//     ],
//     responses : [
//         "A GPS device is a navigation tool that receives signals from satellites to determine its exact location on Earth."
//     ]
// },

// {
//     intent : "animal.vsinfo",
//     utterances : [
//         "Tell me about a lion.",
//         "What is a lion?",
//         "Give me information about lions."
//     ],
//     responses : [
//         "A lion is a large carnivorous mammal of the cat family, native to Africa and India, characterized by a deep roar and a majestic mane in males."
//     ]
// },
// {
//     intent : "animal.ibgsdrnfo",
//     utterances : [
//         "Tell me about an elephant.",
//         "What is an elephant?",
//         "Give me information about elephants."
//     ],
//     responses : [
//         "An elephant is a large mammal with a long trunk, large ears, and tusks, typically found in Africa and Asia."
//     ]
// },
// {
//     intent : "animal.bgrsdinfo",
//     utterances : [
//         "Tell me about a giraffe.",
//         "What is a giraffe?",
//         "Give me information about giraffes."
//     ],
//     responses : [
//         "A giraffe is a tall African mammal with a long neck and legs, distinctive coat patterns, and often seen browsing treetops for leaves."
//     ]
// },
// {
//     intent : "animal.bsdrinfo",
//     utterances : [
//         "Tell me about a zebra.",
//         "What is a zebra?",
//         "Give me information about zebras."
//     ],
//     responses : [
//         "A zebra is an African wild horse with distinctive black-and-white striped coats."
//     ]
// },
// {
//     intent : "animal.bsdrinfo",
//     utterances : [
//         "Tell me about a tiger.",
//         "What is a tiger?",
//         "Give me information about tigers."
//     ],
//     responses : [
//         "A tiger is a large predatory cat with a yellowish-brown coat, black stripes, and white underparts, native to Asia."
//     ]
// },
// {
//     intent : "animal.bdsrinfo",
//     utterances : [
//         "Tell me about a bear.",
//         "What is a bear?",
//         "Give me information about bears."
//     ],
//     responses : [
//         "A bear is a large, heavy mammal with thick fur and a short tail, typically found in forests and mountains across North America, Europe, and Asia."
//     ]
// },
// {
//     intent : "animal.rsinfo",
//     utterances : [
//         "Tell me about a wolf.",
//         "What is a wolf?",
//         "Give me information about wolves."
//     ],
//     responses : [
//         "A wolf is a wild carnivorous mammal of the dog family, native to remote and forested areas of Eurasia and North America."
//     ]
// },
// {
//     intent : "animavsl.info",
//     utterances : [
//         "Tell me about a cheetah.",
//         "What is a cheetah?",
//         "Give me information about cheetahs."
//     ],
//     responses : [
//         "A cheetah is a large, slender cat with a distinctive black-spotted coat and long legs, known for its speed and agility."
//     ]
// },
// {
//     intent : "animal.irsgnfo",
//     utterances : [
//         "Tell me about a panda.",
//         "What is a panda?",
//         "Give me information about pandas."
//     ],
//     responses : [
//         "A panda is a large bear-like mammal with black and white fur, native to China. It primarily feeds on bamboo."
//     ]
// },
// {
//     intent : "animabsrl.info",
//     utterances : [
//         "Tell me about a kangaroo.",
//         "What is a kangaroo?",
//         "Give me information about kangaroos."
//     ],
//     responses : [
//         "A kangaroo is a large marsupial native to Australia, known for its powerful hind legs used for hopping and pouch for carrying young."
//     ]
// },
// {
//     intent : "animal.brinfo",
//     utterances : [
//         "Tell me about a koala.",
//         "What is a koala?",
//         "Give me information about koalas."
//     ],
//     responses : [
//         "A koala is a small arboreal marsupial native to Australia, known for its herbivorous diet of eucalyptus leaves and distinctive appearance."
//     ]
// },
// {
//     intent : "anivsrbmal.info",
//     utterances : [
//         "Tell me about a dolphin.",
//         "What is a dolphin?",
//         "Give me information about dolphins."
//     ],
//     responses : [
//         "A dolphin is a highly intelligent marine mammal with a streamlined body and dorsal fin, known for its social behavior and echolocation abilities."
//     ]
// },
// {
//     intent : "animal.ivsrdnfo",
//     utterances : [
//         "Tell me about a whale.",
//         "What is a whale?",
//         "Give me information about whales."
//     ],
//     responses : [
//         "A whale is a large marine mammal with a streamlined body, typically found in oceans worldwide. It includes species like the blue whale, the largest animal on Earth."
//     ]
// },
// {
//     intent : "anivsrdmal.info",
//     utterances : [
//         "Tell me about a penguin.",
//         "What is a penguin?",
//         "Give me information about penguins."
//     ],
//     responses : [
//         "A penguin is a flightless marine bird found in the Southern Hemisphere, known for its upright posture, black and white plumage, and adaptations to cold climates."
//     ]
// },
// {
//     intent : "animal.ivsrnfo",
//     utterances : [
//         "Tell me about a polar bear.",
//         "What is a polar bear?",
//         "Give me information about polar bears."
//     ],
//     responses : [
//         "A polar bear is a large carnivorous bear native to the Arctic region, characterized by its white fur, strong build, and adaptations to a cold environment."
//     ]
// },
// {
//     intent : "animvrsal.info",
//     utterances : [
//         "Tell me about a gorilla.",
//         "What is a gorilla?",
//         "Give me information about gorillas."
//     ],
//     responses : [
//         "A gorilla is a large, powerful ape native to the forests of Africa, known for its intelligence, social behavior, and physical strength."
//     ]
// },
// {
//     intent : "animal.srdinfo",
//     utterances : [
//         "Tell me about a rhinoceros.",
//         "What is a rhinoceros?",
//         "Give me information about rhinoceroses."
//     ],
//     responses : [
//         "A rhinoceros, or rhino, is a large herbivorous mammal with thick, protective skin and one or two horns on its snout, native to Africa and Asia."
//     ]
// },
// {
//     intent : "animavsrl.info",
//     utterances : [
//         "Tell me about a hippopotamus.",
//         "What is a hippopotamus?",
//         "Give me information about hippopotamuses."
//     ],
//     responses : [
//         "A hippopotamus, or hippo, is a large herbivorous mammal found in sub-Saharan Africa, known for its semi-aquatic lifestyle, massive size, and aggressive behavior."
//     ]
// },
// {
//     intent : "animal.vsgrdinfo",
//     utterances : [
//         "Tell me about a chimpanzee.",
//         "What is a chimpanzee?",
//         "Give me information about chimpanzees."
//     ],
//     responses : [
//         "A chimpanzee is an intelligent and social great ape native to the forests of Africa, closely related to humans and known for using tools."
//     ]
// },
// {
//     intent : "anivsgrdmal.info",
//     utterances : [
//         "Tell me about a crocodile.",
//         "What is a crocodile?",
//         "Give me information about crocodiles."
//     ],
//     responses : [
//         "A crocodile is a large aquatic reptile with a long snout, sharp teeth, and armored body, found in tropical regions around the world."
//     ]
// },
// {
//     intent : "animalvsdr.info",
//     utterances : [
//         "Tell me about a fox.",
//         "What is a fox?",
//         "Give me information about foxes."
//     ],
//     responses : [
//         "A fox is a small to medium-sized carnivorous mammal with a long bushy tail, found in various habitats across the Northern Hemisphere."
//     ]
// },
// {
//     intent : "anivsrmal.info",
//     utterances : [
//         "Tell me about an ostrich.",
//         "What is an ostrich?",
//         "Give me information about ostriches."
//     ],
//     responses : [
//         "An ostrich is a large flightless bird native to Africa, known for its long neck, powerful legs, and ability to run at high speeds."
//     ]
// },
// {
//     intent : "animal.ivsdrnfo",
//     utterances : [
//         "Tell me about a camel.",
//         "What is a camel?",
//         "Give me information about camels."
//     ],
//     responses : [
//         "A camel is a large, long-necked mammal with humped back, found in arid regions of Asia and Africa, known for its ability to survive long periods without water."
//     ]
// },
// {
//     intent : "animvsvrval.info",
//     utterances : [
//         "Tell me about a sloth.",
//         "What is a sloth?",
//         "Give me information about sloths."
//     ],
//     responses : [
//         "A sloth is a slow-moving mammal found in Central and South America, known for its deliberate movements and hanging upside down from trees."
//     ]
// },
// {
//     intent : "animal.ivsrevsrnfo",
//     utterances : [
//         "Tell me about an eagle.",
//         "What is an eagle?",
//         "Give me information about eagles."
//     ],
//     responses : [
//         "An eagle is a large predatory bird with strong beaks and talons, known for its keen eyesight and powerful flight."
//     ]
// },
// {
//     intent : "animvgsral.info",
//     utterances : [
//         "Tell me about a lionfish.",
//         "What is a lionfish?",
//         "Give me information about lionfish."
//     ],
//     responses : [
//         "A lionfish is a venomous marine fish known for its striking appearance with red, white, and black bands and long, venomous spines."
//     ]
// },
// {
//     intent : "animal.vsrgvinfo",
//     utterances : [
//         "Tell me about a jellyfish.",
//         "What is a jellyfish?",
//         "Give me information about jellyfish."
//     ],
//     responses : [
//         "A jellyfish is a gelatinous, often transparent marine animal with tentacles bearing stinging cells, found in oceans worldwide."
//     ]
// },
// {
//     intent : "animvsgral.info",
//     utterances : [
//         "Tell me about a shark.",
//         "What is a shark?",
//         "Give me information about sharks."
//     ],
//     responses : [
//         "A shark is a large predatory fish with a cartilaginous skeleton, found in oceans worldwide and known for its sharp teeth and streamlined body."
//     ]
// },
// {
//     intent : "animal.ivsrdgvnfo",
//     utterances : [
//         "Tell me about an octopus.",
//         "What is an octopus?",
//         "Give me information about octopuses."
//     ],
//     responses : [
//         "An octopus is a highly intelligent marine mollusk with a soft body, eight arms lined with suckers, and the ability to change color and texture for camouflage."
//     ]
// },
// {
//     intent : "animvsrval.info",
//     utterances : [
//         "Tell me about a squid.",
//         "What is a squid?",
//         "Give me information about squids."
//     ],
//     responses : [
//         "A squid is a marine cephalopod with a long, soft body, ten arms including two longer tentacles, and the ability to propel itself by jet propulsion."
//     ]
// },
// {
//     intent : "animal.vsrvrsinfo",
//     utterances : [
//         "Tell me about a sea turtle.",
//         "What is a sea turtle?",
//         "Give me information about sea turtles."
//     ],
//     responses : [
//         "A sea turtle is a marine reptile with a streamlined shell and flippers, found in oceans worldwide. They are known for their long migrations and nesting habits."
//     ]
// },
// {
//     intent : "animvrsgvvrdsvrgal.info",
//     utterances : [
//         "Tell me about a lobster.",
//         "What is a lobster?",
//         "Give me information about lobsters."
//     ],
//     responses : [
//         "A lobster is a large marine crustacean with a hard exoskeleton, claws, and a segmented body, found in cold and temperate waters worldwide."
//     ]
// },
// {
//     intent : "animal.vsrgvrvinfo",
//     utterances : [
//         "Tell me about a butterfly.",
//         "What is a butterfly?",
//         "Give me information about butterflies."
//     ],
//     responses : [
//         "A butterfly is a flying insect with a slender body and large, often colorful wings, known for its metamorphosis from caterpillar to adult butterfly."
//     ]
// },
// {
//     intent : "animvsreval.info",
//     utterances : [
//         "Tell me about a bee.",
//         "What is a bee?",
//         "Give me information about bees."
//     ],
//     responses : [
//         "A bee is a flying insect known for its role in pollination and producing honey. They live in colonies organized around a queen bee."
//     ]
// },
// {
//     intent : "animal.vgrsevinfo",
//     utterances : [
//         "Tell me about an ant.",
//         "What is an ant?",
//         "Give me information about ants."
//     ],
//     responses : [
//         "An ant is a small social insect that lives in colonies, known for its division of labor among workers, soldiers, and the queen."
//     ]
// },
// {
//     intent : "anivsrevgsral.info",
//     utterances : [
//         "Tell me about a dragonfly.",
//         "What is a dragonfly?",
//         "Give me information about dragonflies."
//     ],
//     responses : [
//         "A dragonfly is a flying insect with a long body and two pairs of wings, known for its agile flight and large compound eyes."
//     ]
// },
// {
//     intent : "animal.vsreinfo",
//     utterances : [
//         "Tell me about a grasshopper.",
//         "What is a grasshopper?",
//         "Give me information about grasshoppers."
//     ],
//     responses : [
//         "A grasshopper is a jumping insect with powerful hind legs, found in grasslands and fields worldwide, known for its ability to produce loud chirping sounds."
//     ]
// },
// {
//     intent : "animavsrevsrel.info",
//     utterances : [
//         "Tell me about a beetle.",
//         "What is a beetle?",
//         "Give me information about beetles."
//     ],
//     responses : [
//         "A beetle is a type of insect with a hard exoskeleton and forewings modified into hardened wing cases, found in diverse habitats worldwide."
//     ]
// },
// {
//     intent : "animal.ivsrevrsenfo",
//     utterances : [
//         "Tell me about a spider.",
//         "What is a spider?",
//         "Give me information about spiders."
//     ],
//     responses : [
//         "A spider is an eight-legged arachnid with silk-producing glands, found in nearly every habitat worldwide, known for its ability to spin webs to catch prey."
//     ]
// },
// {
//     intent : "animalsbr.info",
//     utterances : [
//         "Tell me about a cricket.",
//         "What is a cricket?",
//         "Give me information about crickets."
//     ],
//     responses : [
//         "A cricket is a hopping insect known for its chirping song produced by rubbing its wings together, found in grassy areas and forests worldwide."
//     ]
// },
// {
//     intent : "animal.vserinfo",
//     utterances : [
//         "Tell me about a snail.",
//         "What is a snail?",
//         "Give me information about snails."
//     ],
//     responses : [
//         "A snail is a mollusk with a spiral shell and a soft body, typically found in moist habitats worldwide, known for its slow movement."
//     ]
// },
// {
//     intent : "animalvser.info",
//     utterances : [
//         "Tell me about a slug.",
//         "What is a slug?",
//         "Give me information about slugs."
//     ],
//     responses : [
//         "A slug is a shell-less terrestrial mollusk with a soft, slimy body, found in gardens and damp habitats worldwide."
//     ]
// },
// {
//     intent : "animvsreal.info",
//     utterances : [
//         "Tell me about a jellyfish.",
//         "What is a jellyfish?",
//         "Give me information about jellyfish."
//     ],
//     responses : [
//         "A jellyfish is a gelatinous, often transparent marine animal with tentacles bearing stinging cells, found in oceans worldwide."
//     ]
// },
// {
//     intent : "animal.vrsinfo",
//     utterances : [
//         "Tell me about a starfish.",
//         "What is a starfish?",
//         "Give me information about starfish."
//     ],
//     responses : [
//         "A starfish is a marine echinoderm with a central disc and usually five arms, found in oceans worldwide, known for its ability to regenerate lost arms."
//     ]
// },
// {
//     intent : "animal.incserfo",
//     utterances : [
//         "Tell me about a sea urchin.",
//         "What is a sea urchin?",
//         "Give me information about sea urchins."
//     ],
//     responses : [
//         "A sea urchin is a marine echinoderm with a spherical or flattened body covered in spines, found in oceans worldwide, known for its calcium carbonate shell and tube feet."
//     ]
// },
// {
//     intent : "animal.incsrefo",
//     utterances : [
//         "Tell me about a crab.",
//         "What is a crab?",
//         "Give me information about crabs."
//     ],
//     responses : [
//         "A crab is a crustacean with a broad, flattened body, a pair of claws, and a hard exoskeleton, found in coastal waters and beaches worldwide."
//     ]
// },
// {
//     intent : "animal.incesgrfo",
//     utterances : [
//         "Tell me about a barnacle.",
//         "What is a barnacle?",
//         "Give me information about barnacles."
//     ],
//     responses : [
//         "A barnacle is a marine crustacean with a hard shell, found attached to rocks, ships, and other surfaces in shallow waters worldwide."
//     ]
// },
// {
//     intent : "animal.icerscersnfo",
//     utterances : [
//         "Tell me about a whale shark.",
//         "What is a whale shark?",
//         "Give me information about whale sharks."
//     ],
//     responses : [
//         "A whale shark is a large filter-feeding shark with distinctive light markings and a flattened head, found in tropical oceans worldwide."
//     ]
// },
// {
//     intent : "animal.icsernfo",
//     utterances : [
//         "Tell me about a manta ray.",
//         "What is a manta ray?",
//         "Give me information about manta rays."
//     ],
//     responses : [
//         "A manta ray is a large ray with a flattened body, cephalic fins resembling wings, and distinctive color patterns, found in tropical and subtropical waters worldwide."
//     ]
// },
// {
//     intent : "animal.icernfo",
//     utterances : [
//         "Tell me about a sea lion.",
//         "What is a sea lion?",
//         "Give me information about sea lions."
//     ],
//     responses : [
//         "A sea lion is a large marine mammal with external ear flaps and powerful forelimbs for swimming, found along coastlines of the Pacific and Southern Hemisphere."
//     ]
// },
// {
//     intent : "anicsremal.info",
//     utterances : [
//         "Tell me about a walrus.",
//         "What is a walrus?",
//         "Give me information about walruses."
//     ],
//     responses : [
//         "A walrus is a large marine mammal with tusks, found in Arctic seas, known for its blubbery body, long tusks, and ability to haul out onto ice."
//     ]
// },
// {
//     intent : "animal.incserfo",
//     utterances : [
//         "Tell me about a seal.",
//         "What is a seal?",
//         "Give me information about seals."
//     ],
//     responses : [
//         "A seal is a marine mammal with a streamlined body and flippers, found in coastal waters and polar regions worldwide, known for its ability to dive deep and stay underwater for extended periods."
//     ]
// },
// {
//     intent : "animcseal.info",
//     utterances : [
//         "Tell me about a killer whale.",
//         "What is a killer whale?",
//         "Give me information about killer whales."
//     ],
//     responses : [
//         "A killer whale, or orca, is a large marine mammal with distinctive black and white markings, found in oceans worldwide. They are apex predators known for their intelligence and social behavior."
//     ]
// },
// {
//     intent : "animvsal.info",
//     utterances : [
//         "Tell me about a stingray.",
//         "What is a stingray?",
//         "Give me information about stingrays."
//     ],
//     responses : [
//         "A stingray is a flattened marine fish with a whip-like tail bearing venomous spines, found in tropical and subtropical coastal waters."
//     ]
// },
// {
//     intent : "animal.sbrinfo",
//     utterances : [
//         "Tell me about a hummingbird.",
//         "What is a hummingbird?",
//         "Give me information about hummingbirds."
//     ],
//     responses : [
//         "A hummingbird is a small, colorful bird with rapid wing beats, found in the Americas. They are known for their ability to hover in mid-air and drink nectar from flowers."
//     ]
// },
// {
//     intent : "anivrstsbrmal.info",
//     utterances : [
//         "Tell me about a parrot.",
//         "What is a parrot?",
//         "Give me information about parrots."
//     ],
//     responses : [
//         "A parrot is a brightly colored bird with a strong curved beak and zygodactyl feet, found in tropical and subtropical regions worldwide. They are known for their ability to mimic human speech."
//     ]
// },
// {
//     intent : "animal.inbtrfo",
//     utterances : [
//         "Tell me about a toucan.",
//         "What is a toucan?",
//         "Give me information about toucans."
//     ],
//     responses : [
//         "A toucan is a brightly colored bird with a large beak, found in tropical forests of Central and South America. They are known for their vibrant plumage and large, colorful bills."
//     ]
// },
// {
//     intent : "animval.info",
//     utterances : [
//         "Tell me about a pelican.",
//         "What is a pelican?",
//         "Give me information about pelicans."
//     ],
//     responses : [
//         "A pelican is a large water bird with a long bill and large throat pouch, found in coastal and inland waters worldwide. They are known for their spectacular fishing skills."
//     ]
// },
// {
//     intent : "animalbhtr.info",
//     utterances : [
//         "Tell me about a flamingo.",
//         "What is a flamingo?",
//         "Give me information about flamingos."
//     ],
//     responses : [
//         "A flamingo is a tall, pink or reddish wading bird with long legs and a distinctive downward-curving bill, found in tropical and subtropical regions. They are known for their vibrant plumage and unique feeding habits."
//     ]
// },
// {
//     intent : "ancwaeimal.info",
//     utterances : [
//         "Tell me about a swan.",
//         "What is a swan?",
//         "Give me information about swans."
//     ],
//     responses : [
//         "A swan is a large waterfowl with a long neck and often white plumage, found in lakes and ponds worldwide. They are known for their elegance and grace."
//     ]
// },
// {
//     intent : "animal.invesrfo",
//     utterances : [
//         "Tell me about a duck.",
//         "What is a duck?",
//         "Give me information about ducks."
//     ],
//     responses : [
//         "A duck is a waterfowl with a broad, flat bill and webbed feet, found in freshwater habitats worldwide. They are known for their quacking calls and ability to swim."
//     ]
// },
// {
//     intent : "animcaweal.info",
//     utterances : [
//         "Tell me about a goose.",
//         "What is a goose?",
//         "Give me information about geese."
//     ],
//     responses : [
//         "A goose is a large waterfowl with a long neck and webbed feet, found in various habitats worldwide. They are known for their honking calls and seasonal migrations."
//     ]
// },
// {
//     intent : "animvsdral.info",
//     utterances : [
//         "Tell me about an owl.",
//         "What is an owl?",
//         "Give me information about owls."
//     ],
//     responses : [
//         "An owl is a nocturnal bird of prey with large eyes, a flat face, and sharp talons, found in diverse habitats worldwide. They are known for their silent flight and excellent night vision."
//     ]
// },
// {
//     intent : "anivsremal.info",
//     utterances : [
//         "Tell me about a bald eagle.",
//         "What is a bald eagle?",
//         "Give me information about bald eagles."
//     ],
//     responses : [
//         "A bald eagle is a large bird of prey with a white head and tail, found in North America. It is the national bird and symbol of the United States."
//     ]
// },
// {
//     intent : "animalvsre.info",
//     utterances : [
//         "Tell me about a hawk.",
//         "What is a hawk?",
//         "Give me information about hawks."
//     ],
//     responses : [
//         "A hawk is a medium to large bird of prey with broad wings and a hooked beak, found in various habitats worldwide. They are known for their keen eyesight and hunting skills."
//     ]
// },
// {
//     intent : "animavsrel.info",
//     utterances : [
//         "Tell me about an eagle ray.",
//         "What is an eagle ray?",
//         "Give me information about eagle rays."
//     ],
//     responses : [
//         "An eagle ray is a large ray with a flattened body and wing-like pectoral fins, found in tropical and subtropical coastal waters worldwide."
//     ]
// },
// {
//     intent : "animalvsrg.info",
//     utterances : [
//         "Tell me about a lionfish.",
//         "What is a lionfish?",
//         "Give me information about lionfish."
//     ],
//     responses : [
//         "A lionfish is a venomous marine fish known for its striking appearance with red, white, and black bands and long, venomous spines."
//     ]
// },
// {
//     intent : "anivrgemal.info",
//     utterances : [
//         "Tell me about a seahorse.",
//         "What is a seahorse?",
//         "Give me information about seahorses."
//     ],
//     responses : [
//         "A seahorse is a small marine fish with a distinctive horse-like head and curled tail, found in shallow waters worldwide. They are known for their unique reproductive behavior where males carry eggs."
//     ]
// },
// {
//     intent : "animavsrl.info",
//     utterances : [
//         "Tell me about a clownfish.",
//         "What is a clownfish?",
//         "Give me information about clownfish."
//     ],
//     responses : [
//         "A clownfish is a small, brightly colored marine fish found in coral reefs of the Pacific and Indian Oceans, known for its symbiotic relationship with sea anemones."
//     ]
// },
// {
//     intent : "animavsdrl.info",
//     utterances : [
//         "Tell me about a starfish.",
//         "What is a starfish?",
//         "Give me information about starfish."
//     ],
//     responses : [
//         "A starfish is a marine echinoderm with a central disc and usually five arms, found in oceans worldwide, known for its ability to regenerate lost arms."
//     ]
// },
// {
//     intent : "animavrsl.info",
//     utterances : [
//         "Tell me about a sea urchin.",
//         "What is a sea urchin?",
//         "Give me information about sea urchins."
//     ],
//     responses : [
//         "A sea urchin is a marine echinoderm with a spherical or flattened body covered in spines, found in oceans worldwide, known for its calcium carbonate shell and tube feet."
//     ]
// },
// {
//     intent : "animal.ivgsrnfo",
//     utterances : [
//         "Tell me about a sea anemone.",
//         "What is a sea anemone?",
//         "Give me information about sea anemones."
//     ],
//     responses : [
//         "A sea anemone is a predatory marine animal with a cylindrical body and stinging tentacles, found in coastal waters worldwide. They are often found attached to rocks or coral reefs."
//     ]
// },
// {
//     intent : "anivgsrmal.info",
//     utterances : [
//         "Tell me about a coral.",
//         "What is a coral?",
//         "Give me information about corals."
//     ],
//     responses : [
//         "Coral is a marine invertebrate with a calcium carbonate skeleton, found in tropical oceans. Coral reefs are formed from colonies of coral polyps and are vital ecosystems."
//     ]
// },
// {
//     intent : "bird.vgrsinfo",
//     utterances : [
//         "Tell me about a sparrow.",
//         "What is a sparrow?",
//         "Give me information about sparrows."
//     ],
//     responses : [
//         "A sparrow is a small bird with brown, gray, and white plumage, found in urban and rural habitats worldwide. They are known for their chirping calls and social behavior."
//     ]
// },
// {
//     intent : "bivsdrrd.info",
//     utterances : [
//         "Tell me about a robin.",
//         "What is a robin?",
//         "Give me information about robins."
//     ],
//     responses : [
//         "A robin is a small songbird with a red or orange breast, found in gardens, woodlands, and parks throughout North America, Europe, and Asia."
//     ]
// },
// {
//     intent : "bird.vgsdrinfo",
//     utterances : [
//         "Tell me about a blue jay.",
//         "What is a blue jay?",
//         "Give me information about blue jays."
//     ],
//     responses : [
//         "A blue jay is a striking blue and white bird with a crest, found in forests, parks, and suburban areas of North America. They are known for their loud calls and intelligence."
//     ]
// },
// {
//     intent : "bivgsrrd.info",
//     utterances : [
//         "Tell me about a cardinal.",
//         "What is a cardinal?",
//         "Give me information about cardinals."
//     ],
//     responses : [
//         "A cardinal is a medium-sized songbird with bright red plumage and a distinctive crest, found in woodlands and gardens across North and South America."
//     ]
// },
// {
//     intent : "bird.grdbsinfo",
//     utterances : [
//         "Tell me about a hummingbird.",
//         "What is a hummingbird?",
//         "Give me information about hummingbirds."
//     ],
//     responses : [
//         "A hummingbird is a small, colorful bird with rapid wing beats, found in the Americas. They are known for their ability to hover in mid-air and drink nectar from flowers."
//     ]
// },
// {
//     intent : "birvgdsd.info",
//     utterances : [
//         "Tell me about an eagle.",
//         "What is an eagle?",
//         "Give me information about eagles."
//     ],
//     responses : [
//         "An eagle is a large predatory bird with strong beaks and talons, known for its keen eyesight and powerful flight."
//     ]
// },
// {
//     intent : "bivsgrd.info",
//     utterances : [
//         "Tell me about an owl.",
//         "What is an owl?",
//         "Give me information about owls."
//     ],
//     responses : [
//         "An owl is a nocturnal bird of prey with large eyes, a flat face, and sharp talons, found in diverse habitats worldwide. They are known for their silent flight and excellent night vision."
//     ]
// },
// {
//     intent : "birdvgsd.info",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "bird.vsgdinfo",
//     utterances : [
//         "Tell me about a pigeon.",
//         "What is a pigeon?",
//         "Give me information about pigeons."
//     ],
//     responses : [
//         "A pigeon is a stout-bodied bird with a small head and short legs, found in cities and towns worldwide. They are known for their homing abilities and association with urban environments."
//     ]
// },
// {
//     intent : "bird.vdgsinfo",
//     utterances : [
//         "Tell me about a seagull.",
//         "What is a seagull?",
//         "Give me information about seagulls."
//     ],
//     responses : [
//         "A seagull is a medium to large bird with white and gray plumage, found near coastlines and lakes worldwide. They are known for their scavenging behavior and loud calls."
//     ]
// },
// {
//     intent : "bird.vsdinfo",
//     utterances : [
//         "Tell me about a duck.",
//         "What is a duck?",
//         "Give me information about ducks."
//     ],
//     responses : [
//         "A duck is a waterfowl with a broad, flat bill and webbed feet, found in freshwater habitats worldwide. They are known for their quacking calls and ability to swim."
//     ]
// },
// {
//     intent : "bird.iasgnfo",
//     utterances : [
//         "Tell me about a goose.",
//         "What is a goose?",
//         "Give me information about geese."
//     ],
//     responses : [
//         "A goose is a large waterfowl with a long neck and webbed feet, found in various habitats worldwide. They are known for their honking calls and seasonal migrations."
//     ]
// },
// {
//     intent : "birvgrdsd.info",
//     utterances : [
//         "Tell me about a penguin.",
//         "What is a penguin?",
//         "Give me information about penguins."
//     ],
//     responses : [
//         "A penguin is a flightless marine bird with a streamlined body and flipper-like wings, found in the Southern Hemisphere. They are known for their adaptation to cold climates and efficient swimming."
//     ]
// },
// {
//     intent : "bibsrrd.info",
//     utterances : [
//         "Tell me about a flamingo.",
//         "What is a flamingo?",
//         "Give me information about flamingos."
//     ],
//     responses : [
//         "A flamingo is a tall, pink or reddish wading bird with long legs and a distinctive downward-curving bill, found in tropical and subtropical regions. They are known for their vibrant plumage and unique feeding habits."
//     ]
// },
// {
//     intent : "bibsgrrd.info",
//     utterances : [
//         "Tell me about a parrot.",
//         "What is a parrot?",
//         "Give me information about parrots."
//     ],
//     responses : [
//         "A parrot is a brightly colored bird with a strong curved beak and zygodactyl feet, found in tropical and subtropical regions worldwide. They are known for their ability to mimic human speech."
//     ]
// },
// {
//     intent : "bibgsdrrd.info",
//     utterances : [
//         "Tell me about a toucan.",
//         "What is a toucan?",
//         "Give me information about toucans."
//     ],
//     responses : [
//         "A toucan is a brightly colored bird with a large beak, found in tropical forests of Central and South America. They are known for their vibrant plumage and large, colorful bills."
//     ]
// },
// {
//     intent : "bird.bsrinfo",
//     utterances : [
//         "Tell me about a pelican.",
//         "What is a pelican?",
//         "Give me information about pelicans."
//     ],
//     responses : [
//         "A pelican is a large water bird with a long bill and large throat pouch, found in coastal and inland waters worldwide. They are known for their spectacular fishing skills."
//     ]
// },
// {
//     intent : "birbsdrgd.info",
//     utterances : [
//         "Tell me about a hawk.",
//         "What is a hawk?",
//         "Give me information about hawks."
//     ],
//     responses : [
//         "A hawk is a medium to large bird of prey with broad wings and a hooked beak, found in various habitats worldwide. They are known for their keen eyesight and hunting skills."
//     ]
// },
// {
//     intent : "bibsrrd.info",
//     utterances : [
//         "Tell me about an ostrich.",
//         "What is an ostrich?",
//         "Give me information about ostriches."
//     ],
//     responses : [
//         "An ostrich is a large flightless bird with long legs and a long neck, found in the savannas and deserts of Africa. They are the largest living species of bird."
//     ]
// },
// {
//     intent : "bibsrdgrd.info",
//     utterances : [
//         "Tell me about a peacock.",
//         "What is a peacock?",
//         "Give me information about peacocks."
//     ],
//     responses : [
//         "A peacock is a large and colorful bird with a fan-shaped tail of iridescent feathers, found in Asia and Africa. They are known for their extravagant courtship displays."
//     ]
// },
// {
//     intent : "bird.ibrgnfo",
//     utterances : [
//         "Tell me about a bald eagle.",
//         "What is a bald eagle?",
//         "Give me information about bald eagles."
//     ],
//     responses : [
//         "A bald eagle is a large bird of prey with a white head and tail, found in North America. It is the national bird and symbol of the United States."
//     ]
// },
// {
//     intent : "bvgrsird.info",
//     utterances : [
//         "Tell me about a vulture.",
//         "What is a vulture?",
//         "Give me information about vultures."
//     ],
//     responses : [
//         "A vulture is a large bird of prey with a bald head and a scavenging diet, found in various habitats worldwide. They play a vital role in ecosystems by cleaning up carrion."
//     ]
// },
// {
//     intent : "bird.ibsgdrnfo",
//     utterances : [
//         "Tell me about a woodpecker.",
//         "What is a woodpecker?",
//         "Give me information about woodpeckers."
//     ],
//     responses : [
//         "A woodpecker is a bird with a strong bill and specialized tongue for extracting insects from wood, found in forests and woodlands worldwide. They are known for their drumming behavior."
//     ]
// },
// {
//     intent : "birbgdsrd.info",
//     utterances : [
//         "Tell me about a magpie.",
//         "What is a magpie?",
//         "Give me information about magpies."
//     ],
//     responses : [
//         "A magpie is a black and white bird with a long tail, found in Europe, Asia, and North America. They are known for their intelligence and tendency to collect shiny objects."
//     ]
// },
// {
//     intent : "bird.inbgsdrfo",
//     utterances : [
//         "Tell me about a kingfisher.",
//         "What is a kingfisher?",
//         "Give me information about kingfishers."
//     ],
//     responses : [
//         "A kingfisher is a small to medium-sized bird with a colorful plumage and strong, dagger-like bill, found near rivers, lakes, and coastlines worldwide. They are known for their diving prowess and fishing skills."
//     ]
// },
// {
//     intent : "birdvgdrsgv.info",
//     utterances : [
//         "Tell me about a swallow.",
//         "What is a swallow?",
//         "Give me information about swallows."
//     ],
//     responses : [
//         "A swallow is a small, agile bird with long pointed wings and a forked tail, found in both hemispheres. They are known for their aerial acrobatics and migratory habits."
//     ]
// },
// {
//     intent : "bigsdvdrd.info",
//     utterances : [
//         "Tell me about a stork.",
//         "What is a stork?",
//         "Give me information about storks."
//     ],
//     responses : [
//         "A stork is a large wading bird with long legs and a long neck, found in wetlands and grasslands worldwide. They are known for their distinctive bill and role in folklore as a symbol of childbirth."
//     ]
// },
// {
//     intent : "bird.ibgsdrgvnfo",
//     utterances : [
//         "Tell me about an albatross.",
//         "What is an albatross?",
//         "Give me information about albatrosses."
//     ],
//     responses : [
//         "An albatross is a large seabird with long, narrow wings, found predominantly in the Southern Hemisphere. They are known for their incredible wingspan and ability to glide effortlessly over the ocean."
//     ]
// },
// {
//     intent : "bivgrsvrd.info",
//     utterances : [
//         "Tell me about a crane.",
//         "What is a crane?",
//         "Give me information about cranes."
//     ],
//     responses : [
//         "A crane is a large, long-legged bird with a long neck and bill, found in wetlands and grasslands worldwide. They are known for their elaborate courtship dances and distinctive bugling calls."
//     ]
// },
// {
//     intent : "bird.ibgsdrnfo",
//     utterances : [
//         "Tell me about a heron.",
//         "What is a heron?",
//         "Give me information about herons."
//     ],
//     responses : [
//         "A heron is a long-legged freshwater and coastal bird with a long, slender bill, found worldwide. They are known for their slow movements and stealthy hunting behavior."
//     ]
// },
// {
//     intent : "bvsrvrird.info",
//     utterances : [
//         "Tell me about an egret.",
//         "What is an egret?",
//         "Give me information about egrets."
//     ],
//     responses : [
//         "An egret is a slender, white heron with elegant plumage and long neck, found in wetlands and coastal regions worldwide. They are known for their graceful appearance and hunting skills."
//     ]
// },
// {
//     intent : "bird.ibsgdrgfo",
//     utterances : [
//         "Tell me about a swallow-tailed kite.",
//         "What is a swallow-tailed kite?",
//         "Give me information about swallow-tailed kites."
//     ],
//     responses : [
//         "A swallow-tailed kite is an elegant bird of prey with long, pointed wings and a deeply forked tail, found in the Americas. They are known for their graceful flight and aerial hunting skills."
//     ]
// },
// {
//     intent : "bibsgrvrd.info",
//     utterances : [
//         "Tell me about a kiwi.",
//         "What is a kiwi?",
//         "Give me information about kiwis."
//     ],
//     responses : [
//         "A kiwi is a flightless bird native to New Zealand, with small wings, a long beak, and distinctive hair-like feathers. They are nocturnal and known for their unique appearance."
//     ]
// },
// {
//     intent : "bird.bsrgbinfo",
//     utterances : [
//         "Tell me about a macaw.",
//         "What is a macaw?",
//         "Give me information about macaws."
//     ],
//     responses : [
//         "A macaw is a large, colorful parrot with a strong beak and vibrant plumage, found in Central and South America. They are known for their intelligence and ability to mimic human speech."
//     ]
// },
// {
//     intent : "bvsgrird.info",
//     utterances : [
//         "Tell me about a hornbill.",
//         "What is a hornbill?",
//         "Give me information about hornbills."
//     ],
//     responses : [
//         "A hornbill is a large bird with a long, down-curved bill and often brightly colored casque on top of the bill, found in tropical and subtropical forests of Africa and Asia."
//     ]
// },
// {
//     intent : "bird.inbsgrgbfo",
//     utterances : [
//         "Tell me about a peregrine falcon.",
//         "What is a peregrine falcon?",
//         "Give me information about peregrine falcons."
//     ],
//     responses : [
//         "A peregrine falcon is a swift bird of prey with long, pointed wings and a blue-gray back, found on every continent except Antarctica. They are known for their incredible speed and hunting prowess."
//     ]
// },
// {
//     intent : "bibgsrgrd.info",
//     utterances : [
//         "Tell me about a swift.",
//         "What is a swift?",
//         "Give me information about swifts."
//     ],
//     responses : [
//         "A swift is a fast-flying bird with long, curved wings and a short, forked tail, found in the air above forests, cities, and open landscapes worldwide. They are known for their aerial agility and ability to spend most of their lives on the wing."
//     ]
// },
// {
//     intent : "bird.ibsrgbnfo",
//     utterances : [
//         "Tell me about a nightingale.",
//         "What is a nightingale?",
//         "Give me information about nightingales."
//     ],
//     responses : [
//         "A nightingale is a small songbird known for its melodious voice, found in Europe, Asia, and Africa. They are renowned for their beautiful singing during the breeding season."
//     ]
// },
// {
//     intent : "bird.bdsbsr",
//     utterances : [
//         "Tell me about a titmouse.",
//         "What is a titmouse?",
//         "Give me information about titmice."
//     ],
//     responses : [
//         "A titmouse is a small songbird with a distinctive crest and active behavior, found in North America and Eurasia. They are known for their acrobatic feeding habits and melodious calls."
//     ]
// },
// {
//     intent : "bibrsgbsrd.info",
//     utterances : [
//         "Tell me about a warbler.",
//         "What is a warbler?",
//         "Give me information about warblers."
//     ],
//     responses : [
//         "A warbler is a small, often brightly colored songbird found in forests, woodlands, and gardens worldwide. They are known for their complex songs and migratory behavior."
//     ]
// },
// {
//     intent : "bird.inbsrefo",
//     utterances : [
//         "Tell me about a wagtail.",
//         "What is a wagtail?",
//         "Give me information about wagtails."
//     ],
//     responses : [
//         "A wagtail is a slender, long-tailed bird with distinctive black and white plumage, found near rivers, lakes, and wetlands worldwide. They are known for their wagging tail movements."
//     ]
// },
// {
//     intent : "birbrsed.info",
//     utterances : [
//         "Tell me about a cuckoo.",
//         "What is a cuckoo?",
//         "Give me information about cuckoos."
//     ],
//     responses : [
//         "A cuckoo is a bird known for its distinctive call and brood parasitism behavior, found in forests, woodlands, and grasslands worldwide. They are known for laying eggs in other birds' nests."
//     ]
// },
// {
//     intent : "bird.ivsrnfo",
//     utterances : [
//         "Tell me about a puffin.",
//         "What is a puffin?",
//         "Give me information about puffins."
//     ],
//     responses : [
//         "A puffin is a small seabird with a colorful bill, found in the North Atlantic and North Pacific Oceans. They are known for their ability to dive for fish and their distinctive appearance."
//     ]
// },
// {
//     intent : "bird.vgersinfo",
//     utterances : [
//         "Tell me about a grebe.",
//         "What is a grebe?",
//         "Give me information about grebes."
//     ],
//     responses : [
//         "A grebe is a diving water bird with a slender neck and pointed bill, found in freshwater habitats worldwide. They are known for their underwater agility and elaborate courtship displays."
//     ]
// },
// {
//     intent : "birdvewvr.info",
//     utterances : [
//         "Tell me about a wren.",
//         "What is a wren?",
//         "Give me information about wrens."
//     ],
//     responses : [
//         "A wren is a small, often secretive songbird with a distinctive cocked tail, found in forests, woodlands, and gardens worldwide. They are known for their powerful songs despite their small size."
//     ]
// },
// {
//     intent : "birvewv.info",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "birvwred.info",
//     utterances : [
//         "Tell me about an ibis.",
//         "What is an ibis?",
//         "Give me information about ibises."
//     ],
//     responses : [
//         "An ibis is a long-legged wading bird with a curved bill, found in wetlands, marshes, and coastal regions worldwide. They are known for their distinctive silhouette and probing feeding behavior."
//     ]
// },
// {
//     intent : "birvwed.info",
//     utterances : [
//         "Tell me about a raven.",
//         "What is a raven?",
//         "Give me information about ravens."
//     ],
//     responses : [
//         "A raven is a large black bird known for its intelligence and complex vocalizations, found in diverse habitats worldwide. They are often associated with mythology and symbolism."
//     ]
// },
// {
//     intent : "bivwerd.info",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "bivwed.info",
//     utterances : [
//         "Tell me about a pelican.",
//         "What is a pelican?",
//         "Give me information about pelicans."
//     ],
//     responses : [
//         "A pelican is a large water bird with a long bill and large throat pouch, found in coastal and inland waters worldwide. They are known for their spectacular fishing skills."
//     ]
// },
// {
//     intent : "birbgtd.info",
//     utterances : [
//         "Tell me about an emu.",
//         "What is an emu?",
//         "Give me information about emus."
//     ],
//     responses : [
//         "An emu is a large flightless bird native to Australia, known for its long legs and distinctive plumage. They are the second-largest living bird by height."
//     ]
// },
// {
//     intent : "birbhtrd.info",
//     utterances : [
//         "Tell me about a horned lark.",
//         "What is a horned lark?",
//         "Give me information about horned larks."
//     ],
//     responses : [
//         "A horned lark is a small songbird with distinctive black facial markings and small horn-like feather tufts on its head, found in open habitats across North America, Eurasia, and Northern Africa."
//     ]
// },
// {
//     intent : "birhnred.info",
//     utterances : [
//         "Tell me about a thrush.",
//         "What is a thrush?",
//         "Give me information about thrushes."
//     ],
//     responses : [
//         "A thrush is a small to medium-sized songbird with spotted underparts, found in forests, woodlands, and gardens worldwide. They are known for their beautiful songs."
//     ]
// },
// {
//     intent : "bird.nrtinfo",
//     utterances : [
//         "Tell me about a chickadee.",
//         "What is a chickadee?",
//         "Give me information about chickadees."
//     ],
//     responses : [
//         "A chickadee is a small, non-migratory songbird with a distinctive black cap and white cheeks, found in North America. They are known for their active behavior and cheerful songs."
//     ]
// },
// {
//     intent : "bibserrd.info",
//     utterances : [
//         "Tell me about an osprey.",
//         "What is an osprey?",
//         "Give me information about ospreys."
//     ],
//     responses : [
//         "An osprey is a large fish-eating bird of prey with a white head and distinctive dark eye stripe, found near water bodies worldwide. They are known for their exceptional fishing skills."
//     ]
// },
// {
//     intent : "birbsed.info",
//     utterances : [
//         "Tell me about a jay.",
//         "What is a jay?",
//         "Give me information about jays."
//     ],
//     responses : [
//         "A jay is a medium-sized bird with colorful plumage and a raucous call, found in forests, parks, and gardens worldwide. They are known for their intelligence and social behavior."
//     ]
// },
// {
//     intent : "bird.besrinfo",
//     utterances : [
//         "Tell me about a quail.",
//         "What is a quail?",
//         "Give me information about quails."
//     ],
//     responses : [
//         "A quail is a small ground-nesting bird with a plump body and mottled plumage, found in grasslands and agricultural areas worldwide. They are known for their whistling calls and secretive behavior."
//     ]
// },
// {
//     intent : "bird.bsgeinfo",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "bivserrd.info",
//     utterances : [
//         "Tell me about a sandpiper.",
//         "What is a sandpiper?",
//         "Give me information about sandpipers."
//     ],
//     responses : [
//         "A sandpiper is a small to medium-sized shorebird with long legs and a slender bill, found on beaches, mudflats, and shores worldwide. They are known for their probing feeding behavior."
//     ]
// },
// {
//     intent : "bird.ivsernfo",
//     utterances : [
//         "Tell me about a grosbeak.",
//         "What is a grosbeak?",
//         "Give me information about grosbeaks."
//     ],
//     responses : [
//         "A grosbeak is a medium to large songbird with a thick, conical bill, found in forests and woodlands of North and South America. They are known for their powerful songs and seed-eating habits."
//     ]
// },
// {
//     intent : "bivgerd.info",
//     utterances : [
//         "Tell me about a nuthatch.",
//         "What is a nuthatch?",
//         "Give me information about nuthatches."
//     ],
//     responses : [
//         "A nuthatch is a small songbird with a compact body and short tail, found in forests and woodlands of Europe, Asia, and North America. They are known for their ability to climb down tree trunks headfirst."
//     ]
// },
// {
//     intent : "bird.ivsernfo",
//     utterances : [
//         "Tell me about a swallowtail.",
//         "What is a swallowtail?",
//         "Give me information about swallowtails."
//     ],
//     responses : [
//         "A swallowtail is a large butterfly with elongated tails on its hindwings, found in diverse habitats worldwide. They are known for their graceful flight and vibrant colors."
//     ]
// },
// {
//     intent : "bivserrd.info",
//     utterances : [
//         "Tell me about a flycatcher.",
//         "What is a flycatcher?",
//         "Give me information about flycatchers."
//     ],
//     responses : [
//         "A flycatcher is a small to medium-sized bird known for catching insects on the wing, found in forests, woodlands, and gardens worldwide. They are known for their aerial hunting skills."
//     ]
// },
// {
//     intent : "bird.ivsernfo",
//     utterances : [
//         "Tell me about a thrasher.",
//         "What is a thrasher?",
//         "Give me information about thrashers."
//     ],
//     responses : [
//         "A thrasher is a medium-sized songbird with a long, curved bill and distinctive plumage patterns, found in deserts, scrublands, and woodlands of North and South America. They are known for their complex songs."
//     ]
// },
// {
//     intent : "bivserrd.info",
//     utterances : [
//         "Tell me about a swiftlet.",
//         "What is a swiftlet?",
//         "Give me information about swiftlets."
//     ],
//     responses : [
//         "A swiftlet is a small, swift-flying bird with a slender body and short legs, found in caves and forests of Southeast Asia and Oceania. They are known for their edible nests used in bird's nest soup."
//     ]
// },
// {
//     intent : "bivsegrrd.info",
//     utterances : [
//         "Tell me about an avocet.",
//         "What is an avocet?",
//         "Give me information about avocets."
//     ],
//     responses : [
//         "An avocet is a long-legged wading bird with an upturned bill, found in shallow lakes, marshes, and lagoons worldwide. They are known for their distinctive feeding behavior."
//     ]
// },
// {
//     intent : "birdvser.info",
//     utterances : [
//         "Tell me about a waxwing.",
//         "What is a waxwing?",
//         "Give me information about waxwings."
//     ],
//     responses : [
//         "A waxwing is a medium-sized songbird with a distinctive crest and wax-like red tips on its secondary feathers, found in forests and woodlands of the Northern Hemisphere. They are known for their sociable behavior and fondness for berries."
//     ]
// },
// {
//     intent : "bird.vesrrnfo",
//     utterances : [
//         "Tell me about a vulture.",
//         "What is a vulture?",
//         "Give me information about vultures."
//     ],
//     responses : [
//         "A vulture is a large bird of prey with a bald head and keen sense of smell, found in diverse habitats worldwide. They are known for scavenging carrion and playing a crucial role in ecosystems."
//     ]
// },
// {
//     intent : "birvervgred.info",
//     utterances : [
//         "Tell me about an owl.",
//         "What is an owl?",
//         "Give me information about owls."
//     ],
//     responses : [
//         "An owl is a nocturnal bird of prey with large eyes, silent flight, and sharp talons, found in forests, woodlands, and urban areas worldwide. They are known for their exceptional night vision and hunting skills."
//     ]
// },
// {
//     intent : "bird.invwegveverafo",
//     utterances : [
//         "Tell me about a hummingbird.",
//         "What is a hummingbird?",
//         "Give me information about hummingbirds."
//     ],
//     responses : [
//         "A hummingbird is a small, colorful bird with a long, slender bill and rapid wing beats, found in the Americas. They are known for their ability to hover in mid-air and feed on nectar."
//     ]
// },
// {
//     intent : "bivwerd.info",
//     utterances : [
//         "Tell me about an eagle.",
//         "What is an eagle?",
//         "Give me information about eagles."
//     ],
//     responses : [
//         "An eagle is a large bird of prey with a powerful beak and talons, found in various habitats worldwide. They are known for their keen eyesight, strength, and majestic flight."
//     ]
// },
// {
//     intent : "bird.inawvfo",
//     utterances : [
//         "Tell me about a parrot.",
//         "What is a parrot?",
//         "Give me information about parrots."
//     ],
//     responses : [
//         "A parrot is a colorful bird with a curved beak and strong feet, found in tropical and subtropical regions worldwide. They are known for their intelligence, social behavior, and ability to mimic human speech."
//     ]
// },
// {
//     intent : "bird.ivegevsnfo",
//     utterances : [
//         "Tell me about a toucan.",
//         "What is a toucan?",
//         "Give me information about toucans."
//     ],
//     responses : [
//         "A toucan is a brightly colored bird with a large, distinctive bill, found in tropical forests of Central and South America. They are known for their vibrant plumage and fruit-eating habits."
//     ]
// },
// {
//     intent : "bvsgeird.info",
//     utterances : [
//         "Tell me about a woodcock.",
//         "What is a woodcock?",
//         "Give me information about woodcocks."
//     ],
//     responses : [
//         "A woodcock is a plump, long-billed bird with mottled plumage, found in damp woodlands and marshes of Europe, Asia, and North America. They are known for their secretive behavior and elaborate courtship flights."
//     ]
// },
// {
//     intent : "bird.invseo",
//     utterances : [
//         "Tell me about a tit.",
//         "What is a tit?",
//         "Give me information about tits."
//     ],
//     responses : [
//         "A tit is a small songbird with colorful plumage and active behavior, found in woodlands, gardens, and parks of Europe, Asia, and Africa. They are known for their acrobatic feeding habits and cheerful calls."
//     ]
// },
// {
//     intent : "bibsed.info",
//     utterances : [
//         "Tell me about a sparrow.",
//         "What is a sparrow?",
//         "Give me information about sparrows."
//     ],
//     responses : [
//         "A sparrow is a small bird with brown, gray, and white plumage, found in urban and rural habitats worldwide. They are known for their chirping calls and social behavior."
//     ]
// },
// {
//     intent : "bird.ibsernfo",
//     utterances : [
//         "Tell me about a robin.",
//         "What is a robin?",
//         "Give me information about robins."
//     ],
//     responses : [
//         "A robin is a small songbird with a red or orange breast, found in gardens, woodlands, and parks throughout North America, Europe, and Asia."
//     ]
// },
// {
//     intent : "bibsergbrd.info",
//     utterances : [
//         "Tell me about a blue jay.",
//         "What is a blue jay?",
//         "Give me information about blue jays."
//     ],
//     responses : [
//         "A blue jay is a striking blue and white bird with a crest, found in forests, parks, and suburban areas of North America. They are known for their loud calls and intelligence."
//     ]
// },
// {
//     intent : "bird.ibgsernfo",
//     utterances : [
//         "Tell me about a cardinal.",
//         "What is a cardinal?",
//         "Give me information about cardinals."
//     ],
//     responses : [
//         "A cardinal is a medium-sized songbird with bright red plumage and a distinctive crest, found in woodlands and gardens across North and South America."
//     ]
// },
// {
//     intent : "bvawbeird.info",
//     utterances : [
//         "Tell me about a hummingbird.",
//         "What is a hummingbird?",
//         "Give me information about hummingbirds."
//     ],
//     responses : [
//         "A hummingbird is a small, colorful bird with rapid wing beats, found in the Americas. They are known for their ability to hover in mid-air and drink nectar from flowers."
//     ]
// },
// {
//     intent : "bird.ivsenfo",
//     utterances : [
//         "Tell me about an eagle.",
//         "What is an eagle?",
//         "Give me information about eagles."
//     ],
//     responses : [
//         "An eagle is a large predatory bird with strong beaks and talons, known for its keen eyesight and powerful flight."
//     ]
// },
// {
//     intent : "vawbird.info",
//     utterances : [
//         "Tell me about an owl.",
//         "What is an owl?",
//         "Give me information about owls."
//     ],
//     responses : [
//         "An owl is a nocturnal bird of prey with large eyes, a flat face, and sharp talons, found in diverse habitats worldwide. They are known for their silent flight and excellent night vision."
//     ]
// },
// {
//     intent : "bird.infbro",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "bivward.info",
//     utterances : [
//         "Tell me about a pigeon.",
//         "What is a pigeon?",
//         "Give me information about pigeons."
//     ],
//     responses : [
//         "A pigeon is a stout-bodied bird with a small head and short legs, found in cities and towns worldwide. They are known for their homing abilities and association with urban environments."
//     ]
// },
// {
//     intent : "birvserd.info",
//     utterances : [
//         "Tell me about a seagull.",
//         "What is a seagull?",
//         "Give me information about seagulls."
//     ],
//     responses : [
//         "A seagull is a medium to large bird with white and gray plumage, found near coastlines and lakes worldwide. They are known for their scavenging behavior and loud calls."
//     ]
// },
// {
//     intent : "bird.ivsenfo",
//     utterances : [
//         "Tell me about a duck.",
//         "What is a duck?",
//         "Give me information about ducks."
//     ],
//     responses : [
//         "A duck is a waterfowl with a broad, flat bill and webbed feet, found in freshwater habitats worldwide. They are known for their quacking calls and ability to swim."
//     ]
// },
// {
//     intent : "birdvser.info",
//     utterances : [
//         "Tell me about a goose.",
//         "What is a goose?",
//         "Give me information about geese."
//     ],
//     responses : [
//         "A goose is a large waterfowl with a long neck and webbed feet, found in various habitats worldwide. They are known for their honking calls and seasonal migrations."
//     ]
// },
// {
//     intent : "bird.ivsgeanfo",
//     utterances : [
//         "Tell me about a penguin.",
//         "What is a penguin?",
//         "Give me information about penguins."
//     ],
//     responses : [
//         "A penguin is a flightless marine bird with a streamlined body and flipper-like wings, found in the Southern Hemisphere. They are known for their adaptation to cold climates and efficient swimming."
//     ]
// },
// {
//     intent : "birvsgerd.info",
//     utterances : [
//         "Tell me about a flamingo.",
//         "What is a flamingo?",
//         "Give me information about flamingos."
//     ],
//     responses : [
//         "A flamingo is a tall, pink or reddish wading bird with long legs and a distinctive downward-curving bill, found in tropical and subtropical regions. They are known for their vibrant plumage and unique feeding habits."
//     ]
// },
// {
//     intent : "bird.vsegrinfo",
//     utterances : [
//         "Tell me about a parrot.",
//         "What is a parrot?",
//         "Give me information about parrots."
//     ],
//     responses : [
//         "A parrot is a brightly colored bird with a strong curved beak and zygodactyl feet, found in tropical and subtropical regions worldwide. They are known for their ability to mimic human speech."
//     ]
// },
// {
//     intent : "bvvesrrd.info",
//     utterances : [
//         "Tell me about a toucan.",
//         "What is a toucan?",
//         "Give me information about toucans."
//     ],
//     responses : [
//         "A toucan is a brightly colored bird with a large beak, found in tropical forests of Central and South America. They are known for their vibrant plumage and large, colorful bills."
//     ]
// },
// {
//     intent : "bird.ivsegrnfo",
//     utterances : [
//         "Tell me about a pelican.",
//         "What is a pelican?",
//         "Give me information about pelicans."
//     ],
//     responses : [
//         "A pelican is a large water bird with a long bill and large throat pouch, found in coastal and inland waters worldwide. They are known for their spectacular fishing skills."
//     ]
// },
// {
//     intent : "bird.ibegrsnfo",
//     utterances : [
//         "Tell me about a hawk.",
//         "What is a hawk?",
//         "Give me information about hawks."
//     ],
//     responses : [
//         "A hawk is a medium to large bird of prey with broad wings and a hooked beak, found in various habitats worldwide. They are known for their keen eyesight and hunting skills."
//     ]
// },
// {
//     intent : "birbrtsd.info",
//     utterances : [
//         "Tell me about an ostrich.",
//         "What is an ostrich?",
//         "Give me information about ostriches."
//     ],
//     responses : [
//         "An ostrich is a large flightless bird with long legs and a long neck, found in the savannas and deserts of Africa. They are the largest living species of bird."
//     ]
// },
// {
//     intent : "bird.inbtsfo",
//     utterances : [
//         "Tell me about a peacock.",
//         "What is a peacock?",
//         "Give me information about peacocks."
//     ],
//     responses : [
//         "A peacock is a large and colorful bird with a fan-shaped tail of iridescent feathers, found in Asia and Africa. They are known for their extravagant courtship displays."
//     ]
// },
// {
//     intent : "bibhtrrd.info",
//     utterances : [
//         "Tell me about a bald eagle.",
//         "What is a bald eagle?",
//         "Give me information about bald eagles."
//     ],
//     responses : [
//         "A bald eagle is a large bird of prey with a white head and tail, found in North America. It is the national bird and symbol of the United States."
//     ]
// },
// {
//     intent : "bird.ibtrnfo",
//     utterances : [
//         "Tell me about a vulture.",
//         "What is a vulture?",
//         "Give me information about vultures."
//     ],
//     responses : [
//         "A vulture is a large bird of prey with a bald head and a scavenging diet, found in various habitats worldwide. They play a vital role in ecosystems by cleaning up carrion."
//     ]
// },
// {
//     intent : "bnyttird.info",
//     utterances : [
//         "Tell me about a woodpecker.",
//         "What is a woodpecker?",
//         "Give me information about woodpeckers."
//     ],
//     responses : [
//         "A woodpecker is a bird with a strong bill and specialized tongue for extracting insects from wood, found in forests and woodlands worldwide. They are known for their drumming behavior."
//     ]
// },
// {
//     intent : "bird.injtynfo",
//     utterances : [
//         "Tell me about a magpie.",
//         "What is a magpie?",
//         "Give me information about magpies."
//     ],
//     responses : [
//         "A magpie is a black and white bird with a long tail, found in Europe, Asia, and North America. They are known for their intelligence and tendency to collect shiny objects."
//     ]
// },
// {
//     intent : "bird.inrjtnfo",
//     utterances : [
//         "Tell me about a kingfisher.",
//         "What is a kingfisher?",
//         "Give me information about kingfishers."
//     ],
//     responses : [
//         "A kingfisher is a small to medium-sized bird with a colorful plumage and strong, dagger-like bill, found near rivers, lakes, and coastlines worldwide. They are known for their diving prowess and fishing skills."
//     ]
// },
// {
//     intent : "bird.ibenfo",
//     utterances : [
//         "Tell me about a swallow.",
//         "What is a swallow?",
//         "Give me information about swallows."
//     ],
//     responses : [
//         "A swallow is a small, agile bird with long pointed wings and a forked tail, found in both hemispheres. They are known for their aerial acrobatics and migratory habits."
//     ]
// },
// {
//     intent : "bibgsrerd.info",
//     utterances : [
//         "Tell me about a stork.",
//         "What is a stork?",
//         "Give me information about storks."
//     ],
//     responses : [
//         "A stork is a large wading bird with long legs and a long neck, found in wetlands and grasslands worldwide. They are known for their distinctive bill and role in folklore as a symbol of childbirth."
//     ]
// },
// {
//     intent : "bird.ibgsenfo",
//     utterances : [
//         "Tell me about an albatross.",
//         "What is an albatross?",
//         "Give me information about albatrosses."
//     ],
//     responses : [
//         "An albatross is a large seabird with long, narrow wings, found predominantly in the Southern Hemisphere. They are known for their incredible wingspan and ability to glide effortlessly over the ocean."
//     ]
// },
// {
//     intent : "birbgsed.info",
//     utterances : [
//         "Tell me about a crane.",
//         "What is a crane?",
//         "Give me information about cranes."
//     ],
//     responses : [
//         "A crane is a large, long-legged bird with a long neck and bill, found in wetlands and grasslands worldwide. They are known for their elaborate courtship dances and distinctive bugling calls."
//     ]
// },
// {
//     intent : "bird.ivvsernfo",
//     utterances : [
//         "Tell me about a heron.",
//         "What is a heron?",
//         "Give me information about herons."
//     ],
//     responses : [
//         "A heron is a long-legged freshwater and coastal bird with a long, slender bill, found worldwide. They are known for their slow movements and stealthy hunting behavior."
//     ]
// },
// {
//     intent : "bicafwrd.info",
//     utterances : [
//         "Tell me about an egret.",
//         "What is an egret?",
//         "Give me information about egrets."
//     ],
//     responses : [
//         "An egret is a slender, white heron with elegant plumage and long neck, found in wetlands and coastal regions worldwide. They are known for their graceful appearance and hunting skills."
//     ]
// },
// {
//     intent : "bird.acefinfo",
//     utterances : [
//         "Tell me about a swallow-tailed kite.",
//         "What is a swallow-tailed kite?",
//         "Give me information about swallow-tailed kites."
//     ],
//     responses : [
//         "A swallow-tailed kite is an elegant bird of prey with long, pointed wings and a deeply forked tail, found in the Americas. They are known for their graceful flight and aerial hunting skills."
//     ]
// },
// {
//     intent : "birdvwge.info",
//     utterances : [
//         "Tell me about a kiwi.",
//         "What is a kiwi?",
//         "Give me information about kiwis."
//     ],
//     responses : [
//         "A kiwi is a flightless bird native to New Zealand, with small wings, a long beak, and distinctive hair-like feathers. They are nocturnal and known for their unique appearance."
//     ]
// },
// {
//     intent : "birbwegrd.info",
//     utterances : [
//         "Tell me about a macaw.",
//         "What is a macaw?",
//         "Give me information about macaws."
//     ],
//     responses : [
//         "A macaw is a large, colorful parrot with a strong beak and vibrant plumage, found in Central and South America. They are known for their intelligence and ability to mimic human speech."
//     ]
// },
// {
//     intent : "bird.bhtrinfo",
//     utterances : [
//         "Tell me about a hornbill.",
//         "What is a hornbill?",
//         "Give me information about hornbills."
//     ],
//     responses : [
//         "A hornbill is a large bird with a long, down-curved bill and often brightly colored casque on top of the bill, found in tropical and subtropical forests of Africa and Asia."
//     ]
// },
// {
//     intent : "bbhrtird.info",
//     utterances : [
//         "Tell me about a peregrine falcon.",
//         "What is a peregrine falcon?",
//         "Give me information about peregrine falcons."
//     ],
//     responses : [
//         "A peregrine falcon is a swift bird of prey with long, pointed wings and a blue-gray back, found on every continent except Antarctica. They are known for their incredible speed and hunting prowess."
//     ]
// },
// {
//     intent : "bird.bhetrinfo",
//     utterances : [
//         "Tell me about a swift.",
//         "What is a swift?",
//         "Give me information about swifts."
//     ],
//     responses : [
//         "A swift is a fast-flying bird with long, curved wings and a short, forked tail, found in the air above forests, cities, and open landscapes worldwide. They are known for their aerial agility and ability to spend most of their lives on the wing."
//     ]
// },
// {
//     intent : "bbrtird.info",
//     utterances : [
//         "Tell me about a nightingale.",
//         "What is a nightingale?",
//         "Give me information about nightingales."
//     ],
//     responses : [
//         "A nightingale is a small songbird known for its melodious voice, found in Europe, Asia, and Africa. They are renowned for their beautiful singing during the breeding season."
//     ]
// },
// {
//     intent : "bird.ibhernfo",
//     utterances : [
//         "Tell me about a titmouse.",
//         "What is a titmouse?",
//         "Give me information about titmice."
//     ],
//     responses : [
//         "A titmouse is a small songbird with a distinctive crest and active behavior, found in North America and Eurasia. They are known for their acrobatic feeding habits and melodious calls."
//     ]
// },
// {
//     intent : "birhtbrbd.info",
//     utterances : [
//         "Tell me about a warbler.",
//         "What is a warbler?",
//         "Give me information about warblers."
//     ],
//     responses : [
//         "A warbler is a small, often brightly colored songbird found in forests, woodlands, and gardens worldwide. They are known for their complex songs and migratory behavior."
//     ]
// },
// {
//     intent : "birbhetrd.info",
//     utterances : [
//         "Tell me about a wagtail.",
//         "What is a wagtail?",
//         "Give me information about wagtails."
//     ],
//     responses : [
//         "A wagtail is a slender, long-tailed bird with distinctive black and white plumage, found near rivers, lakes, and wetlands worldwide. They are known for their wagging tail movements."
//     ]
// },
// {
//     intent : "bird.ivsgrnfo",
//     utterances : [
//         "Tell me about a cuckoo.",
//         "What is a cuckoo?",
//         "Give me information about cuckoos."
//     ],
//     responses : [
//         "A cuckoo is a bird known for its distinctive call and brood parasitism behavior, found in forests, woodlands, and grasslands worldwide. They are known for laying eggs in other birds' nests."
//     ]
// },
// {
//     intent : "bivsgdrrd.info",
//     utterances : [
//         "Tell me about a puffin.",
//         "What is a puffin?",
//         "Give me information about puffins."
//     ],
//     responses : [
//         "A puffin is a small seabird with a colorful bill, found in the North Atlantic and North Pacific Oceans. They are known for their ability to dive for fish and their distinctive appearance."
//     ]
// },
// {
//     intent : "bird.ivsranfo",
//     utterances : [
//         "Tell me about a grebe.",
//         "What is a grebe?",
//         "Give me information about grebes."
//     ],
//     responses : [
//         "A grebe is a diving water bird with a slender neck and pointed bill, found in freshwater habitats worldwide. They are known for their underwater agility and elaborate courtship displays."
//     ]
// },
// {
//     intent : "bivgrsrd.info",
//     utterances : [
//         "Tell me about a wren.",
//         "What is a wren?",
//         "Give me information about wrens."
//     ],
//     responses : [
//         "A wren is a small, often secretive songbird with a distinctive cocked tail, found in forests, woodlands, and gardens worldwide. They are known for their powerful songs despite their small size."
//     ]
// },
// {
//     intent : "bird.vsgdinfo",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "bvsgird.info",
//     utterances : [
//         "Tell me about an ibis.",
//         "What is an ibis?",
//         "Give me information about ibises."
//     ],
//     responses : [
//         "An ibis is a long-legged wading bird with a curved bill, found in wetlands, marshes, and coastal regions worldwide. They are known for their distinctive silhouette and probing feeding behavior."
//     ]
// },
// {
//     intent : "bird.ivsgrnfo",
//     utterances : [
//         "Tell me about a raven.",
//         "What is a raven?",
//         "Give me information about ravens."
//     ],
//     responses : [
//         "A raven is a large black bird known for its intelligence and complex vocalizations, found in diverse habitats worldwide. They are often associated with mythology and symbolism."
//     ]
// },
// {
//     intent : "bivgsrrd.info",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "bird.vsgrinfo",
//     utterances : [
//         "Tell me about a pelican.",
//         "What is a pelican?",
//         "Give me information about pelicans."
//     ],
//     responses : [
//         "A pelican is a large water bird with a long bill and large throat pouch, found in coastal and inland waters worldwide. They are known for their spectacular fishing skills."
//     ]
// },
// {
//     intent : "birvgsrd.info",
//     utterances : [
//         "Tell me about an emu.",
//         "What is an emu?",
//         "Give me information about emus."
//     ],
//     responses : [
//         "An emu is a large flightless bird native to Australia, known for its long legs and distinctive plumage. They are the second-largest living bird by height."
//     ]
// },
// {
//     intent : "bird.ivsgnfo",
//     utterances : [
//         "Tell me about a horned lark.",
//         "What is a horned lark?",
//         "Give me information about horned larks."
//     ],
//     responses : [
//         "A horned lark is a small songbird with distinctive black facial markings and small horn-like feather tufts on its head, found in open habitats across North America, Eurasia, and Northern Africa."
//     ]
// },
// {
//     intent : "bird.ivsrgnfo",
//     utterances : [
//         "Tell me about a thrush.",
//         "What is a thrush?",
//         "Give me information about thrushes."
//     ],
//     responses : [
//         "A thrush is a small to medium-sized songbird with spotted underparts, found in forests, woodlands, and gardens worldwide. They are known for their beautiful songs."
//     ]
// },
// {
//     intent : "bird.vgarinfo",
//     utterances : [
//         "Tell me about a chickadee.",
//         "What is a chickadee?",
//         "Give me information about chickadees."
//     ],
//     responses : [
//         "A chickadee is a small, non-migratory songbird with a distinctive black cap and white cheeks, found in North America. They are known for their active behavior and cheerful songs."
//     ]
// },
// {
//     intent : "bigsrvrsrd.info",
//     utterances : [
//         "Tell me about an osprey.",
//         "What is an osprey?",
//         "Give me information about ospreys."
//     ],
//     responses : [
//         "An osprey is a large fish-eating bird of prey with a white head and distinctive dark eye stripe, found near water bodies worldwide. They are known for their exceptional fishing skills."
//     ]
// },
// {
//     intent : "bisgrrrd.info",
//     utterances : [
//         "Tell me about a jay.",
//         "What is a jay?",
//         "Give me information about jays."
//     ],
//     responses : [
//         "A jay is a medium-sized bird with colorful plumage and a raucous call, found in forests, parks, and gardens worldwide. They are known for their intelligence and social behavior."
//     ]
// },
// {
//     intent : "bird.inagffo",
//     utterances : [
//         "Tell me about a quail.",
//         "What is a quail?",
//         "Give me information about quails."
//     ],
//     responses : [
//         "A quail is a small ground-nesting bird with a plump body and mottled plumage, found in grasslands and agricultural areas worldwide. They are known for their whistling calls and secretive behavior."
//     ]
// },
// {
//     intent : "birvasfd.info",
//     utterances : [
//         "Tell me about a crow.",
//         "What is a crow?",
//         "Give me information about crows."
//     ],
//     responses : [
//         "A crow is a large black bird known for its intelligence and adaptability, found in urban, suburban, and rural areas worldwide. They are known for their distinctive cawing calls."
//     ]
// },
// {
//     intent : "birvgfsd.info",
//     utterances : [
//         "Tell me about a sandpiper.",
//         "What is a sandpiper?",
//         "Give me information about sandpipers."
//     ],
//     responses : [
//         "A sandpiper is a small to medium-sized shorebird with long legs and a slender bill, found on beaches, mudflats, and shores worldwide. They are known for their probing feeding behavior."
//     ]
// },
// {
//     intent : "birdvase.info",
//     utterances : [
//         "Tell me about a grosbeak.",
//         "What is a grosbeak?",
//         "Give me information about grosbeaks."
//     ],
//     responses : [
//         "A grosbeak is a medium to large songbird with a thick, conical bill, found in forests and woodlands of North and South America. They are known for their powerful songs and seed-eating habits."
//     ]
// },
// {
//     intent : "bird.ibgarsnfo",
//     utterances : [
//         "Tell me about a nuthatch.",
//         "What is a nuthatch?",
//         "Give me information about nuthatches."
//     ],
//     responses : [
//         "A nuthatch is a small songbird with a compact body and short tail, found in forests and woodlands of Europe, Asia, and North America. They are known for their ability to climb down tree trunks headfirst."
//     ]
// },
// {
//     intent : "bibgard.info",
//     utterances : [
//         "Tell me about a swallowtail.",
//         "What is a swallowtail?",
//         "Give me information about swallowtails."
//     ],
//     responses : [
//         "A swallowtail is a large butterfly with elongated tails on its hindwings, found in diverse habitats worldwide. They are known for their graceful flight and vibrant colors."
//     ]
// },
// {
//     intent : "bird.igvasnfo",
//     utterances : [
//         "Tell me about a flycatcher.",
//         "What is a flycatcher?",
//         "Give me information about flycatchers."
//     ],
//     responses : [
//         "A flycatcher is a small to medium-sized bird known for catching insects on the wing, found in forests, woodlands, and gardens worldwide. They are known for their aerial hunting skills."
//     ]
// },
// {
//     intent : "birgbsd.info",
//     utterances : [
//         "Tell me about a thrasher.",
//         "What is a thrasher?",
//         "Give me information about thrashers."
//     ],
//     responses : [
//         "A thrasher is a medium-sized songbird with a long, curved bill and distinctive plumage patterns, found in deserts, scrublands, and woodlands of North and South America. They are known for their complex songs."
//     ]
// },
// {
//     intent : "birbgdtd.info",
//     utterances : [
//         "Tell me about a swiftlet.",
//         "What is a swiftlet?",
//         "Give me information about swiftlets."
//     ],
//     responses : [
//         "A swiftlet is a small, swift-flying bird with a slender body and short legs, found in caves and forests of Southeast Asia and Oceania. They are known for their edible nests used in bird's nest soup."
//     ]
// },
// {
//     intent : "bird.vfeainfo",
//     utterances : [
//         "Tell me about an avocet.",
//         "What is an avocet?",
//         "Give me information about avocets."
//     ],
//     responses : [
//         "An avocet is a long-legged wading bird with an upturned bill, found in shallow lakes, marshes, and lagoons worldwide. They are known for their distinctive feeding behavior."
//     ]
// },
// {
//     intent : "birdfvea.info",
//     utterances : [
//         "Tell me about a waxwing.",
//         "What is a waxwing?",
//         "Give me information about waxwings."
//     ],
//     responses : [
//         "A waxwing is a medium-sized songbird with a distinctive crest and wax-like red tips on its secondary feathers, found in forests and woodlands of the Northern Hemisphere. They are known for their sociable behavior and fondness for berries."
//     ]
// },
// {
//     intent : "birdfvea.info",
//     utterances : [
//         "Tell me about a vulture.",
//         "What is a vulture?",
//         "Give me information about vultures."
//     ],
//     responses : [
//         "A vulture is a large bird of prey with a bald head and keen sense of smell, found in diverse habitats worldwide. They are known for scavenging carrion and playing a crucial role in ecosystems."
//     ]
// },
// {
//     intent : "birvfea.info",
//     utterances : [
//         "Tell me about an owl.",
//         "What is an owl?",
//         "Give me information about owls."
//     ],
//     responses : [
//         "An owl is a nocturnal bird of prey with large eyes, silent flight, and sharp talons, found in forests, woodlands, and urban areas worldwide. They are known for their exceptional night vision and hunting skills."
//     ]
// },
// {
//     intent : "birvead.info",
//     utterances : [
//         "Tell me about a hummingbird.",
//         "What is a hummingbird?",
//         "Give me information about hummingbirds."
//     ],
//     responses : [
//         "A hummingbird is a small, colorful bird with a long, slender bill and rapid wing beats, found in the Americas. They are known for their ability to hover in mid-air and feed on nectar."
//     ]
// },
// {
//     intent : "birdvase.info",
//     utterances : [
//         "Tell me about an eagle.",
//         "What is an eagle?",
//         "Give me information about eagles."
//     ],
//     responses : [
//         "An eagle is a large bird of prey with a powerful beak and talons, found in various habitats worldwide. They are known for their keen eyesight, strength, and majestic flight."
//     ]
// },
// {
//     intent : "bird.bagsinfo",
//     utterances : [
//         "Tell me about a parrot.",
//         "What is a parrot?",
//         "Give me information about parrots."
//     ],
//     responses : [
//         "A parrot is a colorful bird with a curved beak and strong feet, found in tropical and subtropical regions worldwide. They are known for their intelligence, social behavior, and ability to mimic human speech."
//     ]
// },
// {
//     intent : "bird.fainfo",
//     utterances : [
//         "Tell me about a toucan.",
//         "What is a toucan?",
//         "Give me information about toucans."
//     ],
//     responses : [
//         "A toucan is a brightly colored bird with a large, distinctive bill, found in tropical forests of Central and South America. They are known for their vibrant plumage and fruit-eating habits."
//     ]
// },
// {
//     intent : "bird.invasfo",
//     utterances : [
//         "Tell me about a woodcock.",
//         "What is a woodcock?",
//         "Give me information about woodcocks."
//     ],
//     responses : [
//         "A woodcock is a plump, long-billed bird with mottled plumage, found in damp woodlands and marshes of Europe, Asia, and North America. They are known for their secretive behavior and elaborate courtship flights."
//     ]
// },
// {
//     intent : "bird.insvadffo",
//     utterances : [
//         "Tell me about a tit.",
//         "What is a tit?",
//         "Give me information about tits."
//     ],
//     responses : [
//         "A tit is a small songbird with colorful plumage and active behavior, found in woodlands, gardens, and parks of Europe, Asia, and Africa. They are known for their acrobatic feeding habits and cheerful calls."
//     ]
// },

// {
//     intent : "boywredypart.info",
//     utterances : [
//         "Tell me about the heart.",
//         "What is the heart?",
//         "Give me information about the heart."
//     ],
//     responses : [
//         "The heart is a muscular organ responsible for pumping blood through the circulatory system. It beats approximately 100,000 times a day, pumping around 7,200 liters of blood."
//     ]
// },
// {
//     intent : "boytwdypart.info",
//     utterances : [
//         "Tell me about the brain.",
//         "What is the brain?",
//         "Give me information about the brain."
//     ],
//     responses : [
//         "The brain is the body's control center, responsible for processing information, controlling movements, and regulating bodily functions. It consists of billions of neurons."
//     ]
// },
// {
//     intent : "bodyfw4part.info",
//     utterances : [
//         "Tell me about the lungs.",
//         "What are the lungs?",
//         "Give me information about the lungs."
//     ],
//     responses : [
//         "The lungs are organs responsible for gas exchange, where oxygen from the air is taken in and carbon dioxide is expelled. They are essential for respiration."
//     ]
// },
// {
//     intent : "bodypawyf54rt.info",
//     utterances : [
//         "Tell me about the liver.",
//         "What is the liver?",
//         "Give me information about the liver."
//     ],
//     responses : [
//         "The liver is a vital organ involved in digestion, detoxification, and metabolism. It produces bile, which helps digest fats, and performs numerous other essential functions."
//     ]
// },
// {
//     intent : "bodypfw5y4art.info",
//     utterances : [
//         "Tell me about the kidneys.",
//         "What are the kidneys?",
//         "Give me information about the kidneys."
//     ],
//     responses : [
//         "The kidneys are organs responsible for filtering blood, removing waste products, and regulating fluid balance in the body. They also play a role in hormone production."
//     ]
// },
// {
//     intent : "bodypfwy45art.info",
//     utterances : [
//         "Tell me about the stomach.",
//         "What is the stomach?",
//         "Give me information about the stomach."
//     ],
//     responses : [
//         "The stomach is a muscular organ where food is broken down and partially digested through the action of gastric juices and acids. It plays a key role in digestion."
//     ]
// },
// {
//     intent : "bodypawy45rt.info",
//     utterances : [
//         "Tell me about the skin.",
//         "What is the skin?",
//         "Give me information about the skin."
//     ],
//     responses : [
//         "The skin is the body's largest organ, providing a protective barrier against the environment. It regulates body temperature, senses touch, and plays a role in vitamin D synthesis."
//     ]
// },
// {
//     intent : "bodypaywg45rt.info",
//     utterances : [
//         "Tell me about the eyes.",
//         "What are the eyes?",
//         "Give me information about the eyes."
//     ],
//     responses : [
//         "The eyes are organs of vision that detect light and convert it into electrochemical signals processed by the brain. They play a crucial role in sight."
//     ]
// },
// {
//     intent : "bodyparw54t.info",
//     utterances : [
//         "Tell me about the ears.",
//         "What are the ears?",
//         "Give me information about the ears."
//     ],
//     responses : [
//         "The ears are organs responsible for hearing and balance. They detect sound waves and convert them into nerve impulses sent to the brain, enabling auditory perception."
//     ]
// },
// {
//     intent : "bodypw6s45art.info",
//     utterances : [
//         "Tell me about the bones.",
//         "What are the bones?",
//         "Give me information about bones."
//     ],
//     responses : [
//         "Bones are rigid organs that make up the skeleton, providing structure, support, and protection for the body's organs. They also produce blood cells and store minerals."
//     ]
// },
// {
//     intent : "bodypasgadsrt.info",
//     utterances : [
//         "Tell me about the muscles.",
//         "What are the muscles?",
//         "Give me information about muscles."
//     ],
//     responses : [
//         "Muscles are tissues responsible for movement and locomotion in the body. They work by contracting and relaxing in response to nerve signals."
//     ]
// },
// {
//     intent : "bodyrbgpart.info",
//     utterances : [
//         "Tell me about the intestines.",
//         "What are the intestines?",
//         "Give me information about intestines."
//     ],
//     responses : [
//         "The intestines are long, coiled tubes that form part of the digestive system. They absorb nutrients and water from digested food before excretion."
//     ]
// },
// {
//     intent : "bodagvaypart.info",
//     utterances : [
//         "Tell me about the blood vessels.",
//         "What are the blood vessels?",
//         "Give me information about blood vessels."
//     ],
//     responses : [
//         "Blood vessels are tubes that transport blood throughout the body. They include arteries, veins, and capillaries, each with specific functions in circulation."
//     ]
// },
// {
//     intent : "bodybaetfpart.info",
//     utterances : [
//         "Tell me about the spinal cord.",
//         "What is the spinal cord?",
//         "Give me information about the spinal cord."
//     ],
//     responses : [
//         "The spinal cord is a long, thin, tubular bundle of nervous tissue and support cells that extends from the brainstem to the lower back. It transmits neural signals between the brain and the rest of the body."
//     ]
// },
// {
//     intent : "bodyfvspart.info",
//     utterances : [
//         "Tell me about the pancreas.",
//         "What is the pancreas?",
//         "Give me information about the pancreas."
//     ],
//     responses : [
//         "The pancreas is a glandular organ involved in digestion and hormone regulation. It produces digestive enzymes and insulin, which regulates blood sugar levels."
//     ]
// },
// {
//     intent : "bodyvfspart.info",
//     utterances : [
//         "Tell me about the bladder.",
//         "What is the bladder?",
//         "Give me information about the bladder."
//     ],
//     responses : [
//         "The bladder is a hollow organ that stores urine produced by the kidneys before it is excreted from the body. It expands as urine fills it and contracts to expel urine through the urethra."
//     ]
// },
// {
//     intent : "bodfsadypart.info",
//     utterances : [
//         "Tell me about the gallbladder.",
//         "What is the gallbladder?",
//         "Give me information about the gallbladder."
//     ],
//     responses : [
//         "The gallbladder is a small, pear-shaped organ that stores bile produced by the liver. It releases bile into the small intestine to aid in the digestion of fats."
//     ]
// },
// {
//     intent : "bodyfdsapart.info",
//     utterances : [
//         "Tell me about the spleen.",
//         "What is the spleen?",
//         "Give me information about the spleen."
//     ],
//     responses : [
//         "The spleen is an organ that filters blood and stores white blood cells that fight infection. It also helps recycle iron from old red blood cells."
//     ]
// },
// {
//     intent : "bodypdsaart.info",
//     utterances : [
//         "Tell me about the esophagus.",
//         "What is the esophagus?",
//         "Give me information about the esophagus."
//     ],
//     responses : [
//         "The esophagus is a muscular tube that connects the throat (pharynx) with the stomach. It transports swallowed food and liquids to the stomach through a series of muscular contractions."
//     ]
// },
// {
//     intent : "bodfdsaypart.info",
//     utterances : [
//         "Tell me about the tongue.",
//         "What is the tongue?",
//         "Give me information about the tongue."
//     ],
//     responses : [
//         "The tongue is a muscular organ in the mouth that is involved in tasting, swallowing, and speaking. It is covered with papillae and taste buds."
//     ]
// },
// {
//     intent : "bofdsadypart.info",
//     utterances : [
//         "Tell me about the diaphragm.",
//         "What is the diaphragm?",
//         "Give me information about the diaphragm."
//     ],
//     responses : [
//         "The diaphragm is a dome-shaped muscle beneath the lungs that separates the chest cavity from the abdominal cavity. It plays a crucial role in breathing."
//     ]
// },
// {
//     intent : "bofdsadypart.info",
//     utterances : [
//         "Tell me about the appendix.",
//         "What is the appendix?",
//         "Give me information about the appendix."
//     ],
//     responses : [
//         "The appendix is a small pouch-like organ located near the junction of the small intestine and large intestine. Its exact function in humans is not well understood."
//     ]
// },
// {
//     intent : "bodyfsdapart.info",
//     utterances : [
//         "Tell me about the adrenal glands.",
//         "What are the adrenal glands?",
//         "Give me information about the adrenal glands."
//     ],
//     responses : [
//         "The adrenal glands are small, triangular-shaped glands located on top of each kidney. They produce hormones such as adrenaline and cortisol, which regulate metabolism, immune response, and stress."
//     ]
// },
// {
//     intent : "bodyparfdsat.info",
//     utterances : [
//         "Tell me about the thymus gland.",
//         "What is the thymus gland?",
//         "Give me information about the thymus gland."
//     ],
//     responses : [
//         "The thymus gland is a specialized organ of the immune system located behind the sternum (breastbone). It plays a role in the development and maturation of T-lymphocytes (T cells)."
//     ]
// },
// {
//     intent : "bodypafdasrt.info",
//     utterances : [
//         "Tell me about the pituitary gland.",
//         "What is the pituitary gland?",
//         "Give me information about the pituitary gland."
//     ],
//     responses : [
//         "The pituitary gland is a pea-sized gland located at the base of the brain. It produces and releases hormones that regulate various bodily functions, including growth, reproduction, and metabolism."
//     ]
// },
// {
//     intent : "bodypafdsart.info",
//     utterances : [
//         "Tell me about the uvula.",
//         "What is the uvula?",
//         "Give me information about the uvula."
//     ],
//     responses : [
//         "The uvula is a small, fleshy extension at the back of the soft palate in the mouth. It plays a role in speech, swallowing, and the production of certain sounds."
//     ]
// },
// {
//     intent : "bodypart.fasdinfo",
//     utterances : [
//         "Tell me about the trachea.",
//         "What is the trachea?",
//         "Give me information about the trachea."
//     ],
//     responses : [
//         "The trachea, also known as the windpipe, is a tube-like structure that connects the larynx (voice box) to the bronchi of the lungs. It allows air to pass to and from the lungs during breathing."
//     ]
// },
// {
//     intent : "bodypart.infsadfo",
//     utterances : [
//         "Tell me about the tonsils.",
//         "What are the tonsils?",
//         "Give me information about the tonsils."
//     ],
//     responses : [
//         "The tonsils are clusters of lymphoid tissue located at the back of the throat. They play a role in immune defense by trapping bacteria and viruses entering through the mouth and nose."
//     ]
// },
// {
//     intent : "bodypart.infsdafo",
//     utterances : [
//         "Tell me about the epiglottis.",
//         "What is the epiglottis?",
//         "Give me information about the epiglottis."
//     ],
//     responses : [
//         "The epiglottis is a flap of cartilage located at the base of the tongue, behind the hyoid bone. It prevents food and liquids from entering the trachea during swallowing, directing them to the esophagus instead."
//     ]
// },
// {
//     intent : "bodypart.inffsado",
//     utterances : [
//         "Tell me about the femur.",
//         "What is the femur?",
//         "Give me information about the femur."
//     ],
//     responses : [
//         "The femur is the thigh bone, the longest and strongest bone in the human body. It supports the weight of the body and plays a crucial role in movement and locomotion."
//     ]
// },
// {
//     intent : "bodypart.inffasdo",
//     utterances : [
//         "Tell me about the patella.",
//         "What is the patella?",
//         "Give me information about the patella."
//     ],
//     responses : [
//         "The patella, also known as the kneecap, is a small, flat bone located in front of the knee joint. It protects the knee and provides leverage for leg movements."
//     ]
// },
// {
//     intent : "bodypart.ifasdnfo",
//     utterances : [
//         "Tell me about the sternum.",
//         "What is the sternum?",
//         "Give me information about the sternum."
//     ],
//     responses : [
//         "The sternum, or breastbone, is a flat bone located in the center of the chest. It connects the ribs and protects vital organs such as the heart and lungs."
//     ]
// },
// {
//     intent : "bodypart.ifsdanfo",
//     utterances : [
//         "Tell me about the coccyx.",
//         "What is the coccyx?",
//         "Give me information about the coccyx."
//     ],
//     responses : [
//         "The coccyx, or tailbone, is a small, triangular bone at the base of the vertebral column. It provides attachment for muscles and ligaments, supporting pelvic floor function."
//     ]
// },
// {
//     intent : "bodypart.infsdafo",
//     utterances : [
//         "Tell me about the pharynx.",
//         "What is the pharynx?",
//         "Give me information about the pharynx."
//     ],
//     responses : [
//         "The pharynx is a muscular tube that connects the nasal cavity and mouth to the esophagus and larynx. It plays a role in swallowing and breathing."
//     ]
// },
// {
//     intent : "disease.fasdinfo",
//     utterances : [
//         "Tell me about diabetes.",
//         "What is diabetes?",
//         "Give me information about diabetes."
//     ],
//     responses : [
//         "Diabetes is a chronic condition that affects how your body turns food into energy. It occurs when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces."
//     ]
// },
// {
//     intent : "diseafsdafsase.info",
//     utterances : [
//         "Tell me about cancer.",
//         "What is cancer?",
//         "Give me information about cancer."
//     ],
//     responses : [
//         "Cancer refers to a group of diseases characterized by abnormal cell growth that can invade or spread to other parts of the body. It is one of the leading causes of death worldwide."
//     ]
// },
// {
//     intent : "diseafsadse.info",
//     utterances : [
//         "Tell me about hypertension.",
//         "What is hypertension?",
//         "Give me information about hypertension."
//     ],
//     responses : [
//         "Hypertension, or high blood pressure, is a condition where the force of blood against the artery walls is consistently too high. It can lead to serious health problems, including heart disease and stroke."
//     ]
// },
// {
//     intent : "diseafdsase.info",
//     utterances : [
//         "Tell me about asthma.",
//         "What is asthma?",
//         "Give me information about asthma."
//     ],
//     responses : [
//         "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty breathing, wheezing, and coughing."
//     ]
// },
// {
//     intent : "disefdsafase.info",
//     utterances : [
//         "Tell me about Alzheimer's disease.",
//         "What is Alzheimer's disease?",
//         "Give me information about Alzheimer's disease."
//     ],
//     responses : [
//         "Alzheimer's disease is a progressive neurodegenerative disorder that affects memory, thinking skills, and behavior. It is the most common cause of dementia."
//     ]
// },
// {
//     intent : "disefsdaase.info",
//     utterances : [
//         "Tell me about arthritis.",
//         "What is arthritis?",
//         "Give me information about arthritis."
//     ],
//     responses : [
//         "Arthritis refers to inflammation of the joints. There are many types of arthritis, each with different causes and treatments, but common symptoms include pain, swelling, and stiffness."
//     ]
// },
// {
//     intent : "disfasdease.info",
//     utterances : [
//         "Tell me about influenza.",
//         "What is influenza?",
//         "Give me information about influenza."
//     ],
//     responses : [
//         "Influenza, or flu, is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness and sometimes lead to complications, especially in young children, older adults, and people with certain health conditions."
//     ]
// },
// {
//     intent : "diseasfsade.info",
//     utterances : [
//         "Tell me about tuberculosis.",
//         "What is tuberculosis?",
//         "Give me information about tuberculosis."
//     ],
//     responses : [
//         "Tuberculosis (TB) is a bacterial infection caused by Mycobacterium tuberculosis. It primarily affects the lungs but can also affect other parts of the body. TB can be latent (inactive) or active, with symptoms including coughing, chest pain, and fever."
//     ]
// },
// {
//     intent : "diseasfdsase.info",
//     utterances : [
//         "Tell me about HIV/AIDS.",
//         "What is HIV/AIDS?",
//         "Give me information about HIV/AIDS."
//     ],
//     responses : [
//         "HIV (human immunodeficiency virus) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help fight infections. AIDS (acquired immunodeficiency syndrome) is the most advanced stage of HIV infection, characterized by severe damage to the immune system."
//     ]
// },
// {
//     intent : "diseasgsde.info",
//     utterances : [
//         "Tell me about malaria.",
//         "What is malaria?",
//         "Give me information about malaria."
//     ],
//     responses : [
//         "Malaria is a life-threatening disease caused by parasites transmitted to people through the bites of infected female Anopheles mosquitoes. It can cause fever, chills, and flu-like symptoms, and severe cases can be fatal if not treated promptly."
//     ]
// },
// {
//     intent : "disegdsfase.info",
//     utterances : [
//         "Tell me about osteoporosis.",
//         "What is osteoporosis?",
//         "Give me information about osteoporosis."
//     ],
//     responses : [
//         "Osteoporosis is a condition characterized by weakened bones that are more likely to fracture or break. It occurs when the body loses too much bone tissue, makes too little bone, or both."
//     ]
// },
// {
//     intent : "disegsdfase.info",
//     utterances : [
//         "Tell me about pneumonia.",
//         "What is pneumonia?",
//         "Give me information about pneumonia."
//     ],
//     responses : [
//         "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing."
//     ]
// },
// {
//     intent : "dgdfsisease.info",
//     utterances : [
//         "Tell me about depression.",
//         "What is depression?",
//         "Give me information about depression."
//     ],
//     responses : [
//         "Depression is a mood disorder that causes persistent feelings of sadness, loss of interest, and hopelessness. It can affect how you feel, think, and handle daily activities."
//     ]
// },
// {
//     intent : "diseasgsfde.info",
//     utterances : [
//         "Tell me about epilepsy.",
//         "What is epilepsy?",
//         "Give me information about epilepsy."
//     ],
//     responses : [
//         "Epilepsy is a neurological disorder characterized by recurrent seizures. Seizures are sudden, uncontrolled electrical disturbances in the brain that can cause changes in behavior, movements, or feelings."
//     ]
// },
// {
//     intent : "diseasgsdfe.info",
//     utterances : [
//         "Tell me about hepatitis.",
//         "What is hepatitis?",
//         "Give me information about hepatitis."
//     ],
//     responses : [
//         "Hepatitis is inflammation of the liver, commonly caused by viral infections (hepatitis A, B, C, etc.), but it can also result from other causes such as alcohol abuse or autoimmune diseases."
//     ]
// },
// {
//     intent : "disegfsdase.info",
//     utterances : [
//         "Tell me about stroke.",
//         "What is a stroke?",
//         "Give me information about strokes."
//     ],
//     responses : [
//         "A stroke occurs when blood flow to the brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients. It can result in brain damage, disability, or death."
//     ]
// },
// {
//     intent : "diseadfhsgse.info",
//     utterances : [
//         "Tell me about asthma.",
//         "What is asthma?",
//         "Give me information about asthma."
//     ],
//     responses : [
//         "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty breathing, wheezing, and coughing."
//     ]
// },
// {
//     intent : "diseasgfdhe.info",
//     utterances : [
//         "Tell me about anemia.",
//         "What is anemia?",
//         "Give me information about anemia."
//     ],
//     responses : [
//         "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. It can cause fatigue, weakness, and other symptoms."
//     ]
// },
// {
//     intent : "dissgdfease.info",
//     utterances : [
//         "Tell me about fibromyalgia.",
//         "What is fibromyalgia?",
//         "Give me information about fibromyalgia."
//     ],
//     responses : [
//         "Fibromyalgia is a disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory, and mood issues. Its cause is unknown, but it can be triggered by physical trauma, surgery, infection, or psychological stress."
//     ]
// },
// {
//     intent : "diseahsdhdfsse.info",
//     utterances : [
//         "Tell me about cataracts.",
//         "What are cataracts?",
//         "Give me information about cataracts."
//     ],
//     responses : [
//         "Cataracts are cloudy areas in the lens of the eye that cause vision problems. They are most commonly due to aging but can also result from injury or exposure to certain medications or diseases."
//     ]
// },
// {
//     intent : "diseahsdhse.info",
//     utterances : [
//         "Tell me about osteoarthritis.",
//         "What is osteoarthritis?",
//         "Give me information about osteoarthritis."
//     ],
//     responses : [
//         "Osteoarthritis is the most common form of arthritis, characterized by the breakdown of cartilage in joints. It causes pain, stiffness, and swelling, affecting the hands, knees, hips, and spine."
//     ]
// },
// {
//     intent : "disgfsdease.info",
//     utterances : [
//         "Tell me about glaucoma.",
//         "What is glaucoma?",
//         "Give me information about glaucoma."
//     ],
//     responses : [
//         "Glaucoma is a group of eye conditions that damage the optic nerve, often due to increased pressure in the eye. It can lead to vision loss and blindness if not treated."
//     ]
// },
// {
//     intent : "diseasgsdfe.info",
//     utterances : [
//         "Tell me about bronchitis.",
//         "What is bronchitis?",
//         "Give me information about bronchitis."
//     ],
//     responses : [
//         "Bronchitis is inflammation of the lining of the bronchial tubes, which carry air to and from the lungs. It can be acute or chronic, causing cough, mucus production, and difficulty breathing."
//     ]
// },
// {
//     intent : "disegsdfase.info",
//     utterances : [
//         "Tell me about rheumatoid arthritis.",
//         "What is rheumatoid arthritis?",
//         "Give me information about rheumatoid arthritis."
//     ],
//     responses : [
//         "Rheumatoid arthritis is an autoimmune disorder that causes chronic inflammation of the joints, resulting in pain, swelling, stiffness, and loss of function. It can also affect other parts of the body."
//     ]
// },
// {
//     intent : "disegsdfase.info",
//     utterances : [
//         "Tell me about Parkinson's disease.",
//         "What is Parkinson's disease?",
//         "Give me information about Parkinson's disease."
//     ],
//     responses : [
//         "Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes with a barely noticeable tremor in just one hand. Tremors are common, but the disorder also commonly causes stiffness or slowing of movement."
//     ]
// },
// {
//     intent : "disgsfdease.info",
//     utterances : [
//         "Tell me about gastritis.",
//         "What is gastritis?",
//         "Give me information about gastritis."
//     ],
//     responses : [
//         "Gastritis is inflammation of the lining of the stomach. It may occur as a short episode or may be of a long duration. Symptoms might include nausea, vomiting, bloating, abdominal pain, and a feeling of fullness in the upper abdomen."
//     ]
// },
// {
//     intent : "dissfdease.info",
//     utterances : [
//         "Tell me about lupus.",
//         "What is lupus?",
//         "Give me information about lupus."
//     ],
//     responses : [
//         "Lupus is a chronic autoimmune disease in which the body's immune system attacks its own tissues and organs. It can affect the joints, skin, kidneys, heart, lungs, and brain."
//     ]
// },
// {
//     intent : "diseagsdfgsse.info",
//     utterances : [
//         "Tell me about chronic obstructive pulmonary disease (COPD).",
//         "What is COPD?",
//         "Give me information about COPD."
//     ],
//     responses : [
//         "Chronic obstructive pulmonary disease (COPD) is a group of progressive lung diseases that make it hard to breathe. It includes emphysema and chronic bronchitis."
//     ]
// },
// {
//     intent : "diseagsdfse.info",
//     utterances : [
//         "Tell me about multiple sclerosis (MS).",
//         "What is multiple sclerosis?",
//         "Give me information about multiple sclerosis."
//     ],
//     responses : [
//         "Multiple sclerosis (MS) is a potentially disabling disease of the brain and spinal cord (central nervous system). In MS, the immune system attacks the protective sheath (myelin) that covers nerve fibers, causing communication problems between the brain and the rest of the body."
//     ]
// },
// {
//     intent : "diseagsfdse.info",
//     utterances : [
//         "Tell me about psoriasis.",
//         "What is psoriasis?",
//         "Give me information about psoriasis."
//     ],
//     responses : [
//         "Psoriasis is a chronic autoimmune condition that causes rapid skin cell production, leading to red, dry patches of thickened skin. It is not contagious."
//     ]
// },
// {
//     intent : "gsdf.info",
//     utterances : [
//         "Tell me about Crohn's disease.",
//         "What is Crohn's disease?",
//         "Give me information about Crohn's disease."
//     ],
//     responses : [
//         "Crohn's disease is an inflammatory bowel disease (IBD) that causes inflammation of the digestive tract, leading to abdominal pain, severe diarrhea, fatigue, weight loss, and malnutrition."
//     ]
// },
// {
//     intent : "disegsdfase.info",
//     utterances : [
//         "Tell me about osteomyelitis.",
//         "What is osteomyelitis?",
//         "Give me information about osteomyelitis."
//     ],
//     responses : [
//         "Osteomyelitis is an infection of the bone, usually caused by bacteria. It can develop in any bone in the body, but it most commonly affects the long bones in the legs and arms."
//     ]
// },
// {
//     intent : "disgsdfgfdsease.info",
//     utterances : [
//         "Tell me about endometriosis.",
//         "What is endometriosis?",
//         "Give me information about endometriosis."
//     ],
//     responses : [
//         "Endometriosis is a painful disorder in which tissue similar to the tissue that normally lines the inside of the uterus (endometrium) grows outside the uterus."
//     ]
// },
// {
//     intent : "disgsdfgease.info",
//     utterances : [
//         "Tell me about gout.",
//         "What is gout?",
//         "Give me information about gout."
//     ],
//     responses : [
//         "Gout is a form of arthritis characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in the joints, often the joint at the base of the big toe."
//     ]
// },
// {
//     intent : "disgsdfease.info",
//     utterances : [
//         "Tell me about chronic kidney disease.",
//         "What is chronic kidney disease?",
//         "Give me information about chronic kidney disease."
//     ],
//     responses : [
//         "Chronic kidney disease (CKD) is a condition in which kidneys gradually lose their function over time. It can lead to kidney failure if not treated. CKD often has no symptoms until kidney function is significantly impaired."
//     ]
// },
// {
//     intent : "digdsfgsease.info",
//     utterances : [
//         "Tell me about fibroids.",
//         "What are fibroids?",
//         "Give me information about fibroids."
//     ],
//     responses : [
//         "Fibroids are noncancerous growths in the uterus that can develop during a woman's childbearing years. They are also called leiomyomas or myomas."
//     ]
// },
// {
//     intent : "diseagsdfse.info",
//     utterances : [
//         "Tell me about sleep apnea.",
//         "What is sleep apnea?",
//         "Give me information about sleep apnea."
//     ],
//     responses : [
//         "Sleep apnea is a potentially serious sleep disorder in which breathing repeatedly stops and starts. It can result in poor sleep quality and daytime sleepiness."
//     ]
// },
// {
//     intent : "diseasgsdfe.info",
//     utterances : [
//         "Tell me about shingles.",
//         "What is shingles?",
//         "Give me information about shingles."
//     ],
//     responses : [
//         "Shingles is a viral infection that causes a painful rash. It is caused by the varicella-zoster virus, the same virus that causes chickenpox."
//     ]
// },
// {
//     intent : "sciegsdnce.info",
//     utterances : [
//         "Tell me about gravity.",
//         "What is gravity?",
//         "Give me information about gravity."
//     ],
//     responses : [
//         "Gravity is a force that attracts objects with mass towards each other. It is responsible for the motion of planets, stars, galaxies, and other astronomical objects."
//     ]
// },
// {
//     intent : "gsdf.info",
//     utterances : [
//         "Tell me about photosynthesis.",
//         "What is photosynthesis?",
//         "Give me information about photosynthesis."
//     ],
//     responses : [
//         "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy stored in glucose molecules."
//     ]
// },
// {
//     intent : "sciesgdfnce.info",
//     utterances : [
//         "Tell me about atoms.",
//         "What are atoms?",
//         "Give me information about atoms."
//     ],
//     responses : [
//         "Atoms are the basic units of matter and the smallest unit of an element that retains the chemical properties of that element. They consist of a nucleus containing protons and neutrons, surrounded by electrons."
//     ]
// },
// {
//     intent : "scienchtwgse.info",
//     utterances : [
//         "Tell me about the solar system.",
//         "What is the solar system?",
//         "Give me information about the solar system."
//     ],
//     responses : [
//         "The solar system consists of the Sun and the astronomical objects bound to it by gravity, including eight planets and their moons, dwarf planets, asteroids, comets, and other small celestial bodies."
//     ]
// },
// {
//     intent : "scienwhtce.info",
//     utterances : [
//         "Tell me about DNA.",
//         "What is DNA?",
//         "Give me information about DNA."
//     ],
//     responses : [
//         "DNA (deoxyribonucleic acid) is a molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known living organisms and many viruses."
//     ]
// },
// {
//     intent : "sciencrte.info",
//     utterances : [
//         "Tell me about the periodic table.",
//         "What is the periodic table?",
//         "Give me information about the periodic table."
//     ],
//     responses : [
//         "The periodic table is a tabular arrangement of the chemical elements, ordered by their atomic number, electron configuration, and recurring chemical properties."
//     ]
// },
// {
//     intent : "scienydfthsce.info",
//     utterances : [
//         "Tell me about black holes.",
//         "What are black holes?",
//         "Give me information about black holes."
//     ],
//     responses : [
//         "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it. They are formed when massive stars collapse under their own gravity."
//     ]
// },
// {
//     intent : "scienhvtdce.info",
//     utterances : [
//         "Tell me about the Big Bang theory.",
//         "What is the Big Bang theory?",
//         "Give me information about the Big Bang theory."
//     ],
//     responses : [
//         "The Big Bang theory is the prevailing cosmological model explaining the origin and evolution of the universe. It posits that the universe began as a singularity and has been expanding ever since."
//     ]
// },
// {
//     intent : "scivehrhvhdgence.info",
//     utterances : [
//         "Tell me about evolution.",
//         "What is evolution?",
//         "Give me information about evolution."
//     ],
//     responses : [
//         "Evolution is the process by which species change over time through natural selection, genetic drift, and other mechanisms. It is the central concept in biology."
//     ]
// },
// {
//     intent : "science.ndfinfo",
//     utterances : [
//         "Tell me about the nervous system.",
//         "What is the nervous system?",
//         "Give me information about the nervous system."
//     ],
//     responses : [
//         "The nervous system is a complex network of nerves and cells that carry messages to and from the brain and spinal cord to various parts of the body. It controls sensation, movement, and bodily functions."
//     ]
// },
// {
//     intent : "scienryumtce.info",
//     utterances : [
//         "Tell me about electromagnetism.",
//         "What is electromagnetism?",
//         "Give me information about electromagnetism."
//     ],
//     responses : [
//         "Electromagnetism is a branch of physics that deals with the interactions between electrically charged particles and their magnetic fields. It underlies many everyday phenomena, including electricity, magnetism, and light."
//     ]
// },
// {
//     intent : "scienhgfgfce.info",
//     utterances : [
//         "Tell me about climate change.",
//         "What is climate change?",
//         "Give me information about climate change."
//     ],
//     responses : [
//         "Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions on Earth. It is primarily driven by human activities such as burning fossil fuels and deforestation."
//     ]
// },
// {
//     intent : "sciencejhgdfhg.info",
//     utterances : [
//         "Tell me about robotics.",
//         "What are robotics?",
//         "Give me information about robotics."
//     ],
//     responses : [
//         "Robotics is the interdisciplinary branch of engineering and science that involves the design, construction, operation, and use of robots. Robots are programmable machines that can carry out tasks autonomously or semi-autonomously."
//     ]
// },
// {
//     intent : "sciencjhe.info",
//     utterances : [
//         "Tell me about genetic engineering.",
//         "What is genetic engineering?",
//         "Give me information about genetic engineering."
//     ],
//     responses : [
//         "Genetic engineering is the manipulation of an organism's genome using biotechnology techniques. It involves inserting, deleting, or modifying genes to alter the traits of an organism."
//     ]
// },
// {
//     intent : "scienc,hjce.info",
//     utterances : [
//         "Tell me about nanotechnology.",
//         "What is nanotechnology?",
//         "Give me information about nanotechnology."
//     ],
//     responses : [
//         "Nanotechnology is the manipulation of matter on an atomic, molecular, and supramolecular scale. It has applications in various fields, including medicine, electronics, and materials science."
//     ]
// },
// {
//     intent : "scien,jhgmxce.info",
//     utterances : [
//         "Tell me about renewable energy.",
//         "What is renewable energy?",
//         "Give me information about renewable energy."
//     ],
//     responses : [
//         "Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat."
//     ]
// },
// {
//     intent : "scien,hjmce.info",
//     utterances : [
//         "Tell me about artificial intelligence.",
//         "What is artificial intelligence?",
//         "Give me information about artificial intelligence."
//     ],
//     responses : [
//         "Artificial intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses machine learning, natural language processing, and robotics."
//     ]
// },
// {
//     intent : "sciencime.info",
//     utterances : [
//         "Tell me about quantum mechanics.",
//         "What is quantum mechanics?",
//         "Give me information about quantum mechanics."
//     ],
//     responses : [
//         "Quantum mechanics is the branch of physics that describes the behavior of matter and energy at the atomic and subatomic levels. It is fundamental to understanding the behavior of particles such as electrons and photons."
//     ]
// },
// {
//     intent : "scienkuyjtdce.info",
//     utterances : [
//         "Tell me about the human genome.",
//         "What is the human genome?",
//         "Give me information about the human genome."
//     ],
//     responses : [
//         "The human genome is the complete set of genetic information (DNA) for humans. It contains all the information needed to build and maintain a human organism."
//     ]
// },
// {
//     intent : "scienacgeragcerce.info",
//     utterances : [
//         "Tell me about the Hubble Space Telescope.",
//         "What is the Hubble Space Telescope?",
//         "Give me information about the Hubble Space Telescope."
//     ],
//     responses : [
//         "The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It has provided stunning images and valuable data about the universe."
//     ]
// },
// {
//     intent : "science.iafscgenfo",
//     utterances : [
//         "Tell me about nuclear fusion.",
//         "What is nuclear fusion?",
//         "Give me information about nuclear fusion."
//     ],
//     responses : [
//         "Nuclear fusion is a process where atomic nuclei collide and merge to form a heavier nucleus, releasing a large amount of energy. It is the process that powers stars and holds promise for clean energy production on Earth."
//     ]
// },
// {
//     intent : "science.igsdnfo",
//     utterances : [
//         "Tell me about the human brain.",
//         "What is the human brain?",
//         "Give me information about the human brain."
//     ],
//     responses : [
//         "The human brain is the command center for the human nervous system. It controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger, and every process that regulates our body."
//     ]
// },
// {
//     intent : "science.gsdfinfo",
//     utterances : [
//         "Tell me about genetic mutations.",
//         "What are genetic mutations?",
//         "Give me information about genetic mutations."
//     ],
//     responses : [
//         "Genetic mutations are changes in the DNA sequence of an organism's genome. They can occur naturally or be induced by environmental factors. Some mutations can lead to genetic disorders, while others may have no effect."
//     ]
// },
// {
//     intent : "science.gsdfinfo",
//     utterances : [
//         "Tell me about dark matter.",
//         "What is dark matter?",
//         "Give me information about dark matter."
//     ],
//     responses : [
//         "Dark matter is a form of matter thought to account for approximately 85% of the matter in the universe and about a quarter of its total energy density. It does not emit, absorb, or reflect light."
//     ]
// },
// {
//     intent : "science.igdsfnfo",
//     utterances : [
//         "Tell me about gene therapy.",
//         "What is gene therapy?",
//         "Give me information about gene therapy."
//     ],
//     responses : [
//         "Gene therapy is a medical field that focuses on the use of genetic material to treat or prevent diseases. It involves inserting genes into a patient's cells and tissues to correct genetic disorders or provide therapeutic benefits."
//     ]
// },
// {
//     intent : "sciencgsdfe.info",
//     utterances : [
//         "Tell me about stem cells.",
//         "What are stem cells?",
//         "Give me information about stem cells."
//     ],
//     responses : [
//         "Stem cells are undifferentiated cells that can differentiate into specialized cell types and divide to produce more stem cells. They are found in embryos and various tissues throughout the body and hold potential for medical treatments."
//     ]
// },
// {
//     intent : "sciencgdsfe.info",
//     utterances : [
//         "Tell me about exoplanets.",
//         "What are exoplanets?",
//         "Give me information about exoplanets."
//     ],
//     responses : [
//         "Exoplanets are planets that orbit stars outside our solar system. Thousands of exoplanets have been discovered, and they vary in size, composition, and orbit."
//     ]
// },
// {
//     intent : "sciengfsdce.info",
//     utterances : [
//         "Tell me about the Doppler effect.",
//         "What is the Doppler effect?",
//         "Give me information about the Doppler effect."
//     ],
//     responses : [
//         "The Doppler effect is the change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source. It is commonly observed in sound waves and light waves."
//     ]
// },
// {
//     intent : "schgdfience.info",
//     utterances : [
//         "Tell me about antibiotic resistance.",
//         "What is antibiotic resistance?",
//         "Give me information about antibiotic resistance."
//     ],
//     responses : [
//         "Antibiotic resistance occurs when bacteria develop the ability to defeat the drugs designed to kill them. It is a major public health threat that can lead to longer hospital stays, higher medical costs, and increased mortality."
//     ]
// },
// {
//     intent : "sciencgsdfe.info",
//     utterances : [
//         "Tell me about the greenhouse effect.",
//         "What is the greenhouse effect?",
//         "Give me information about the greenhouse effect."
//     ],
//     responses : [
//         "The greenhouse effect is the process by which radiation from a planet's atmosphere warms the planet's surface to a temperature above what it would be without its atmosphere. It is essential for life on Earth but intensified by human activities."
//     ]
// },
// {
//     intent : "scifasdence.info",
//     utterances : [
//         "Tell me about biotechnology.",
//         "What is biotechnology?",
//         "Give me information about biotechnology."
//     ],
//     responses : [
//         "Biotechnology is the use of biological systems, organisms, or processes to develop products or applications to improve human health, agriculture, and the environment. It includes genetic engineering, fermentation, and tissue culture."
//     ]
// },
// {
//     intent : "scienfasdce.info",
//     utterances : [
//         "Tell me about the immune system.",
//         "What is the immune system?",
//         "Give me information about the immune system."
//     ],
//     responses : [
//         "The immune system is a complex network of cells, tissues, and organs that work together to defend the body against harmful invaders, such as bacteria, viruses, and parasites."
//     ]
// },
// {
//     intent : "sciencfsdae.info",
//     utterances : [
//         "Tell me about nuclear reactors.",
//         "What are nuclear reactors?",
//         "Give me information about nuclear reactors."
//     ],
//     responses : [
//         "Nuclear reactors are devices that initiate and control nuclear reactions to generate heat, which is converted into electricity. They are used in power plants and research facilities."
//     ]
// },
// {
//     intent : "sciefdsgdsnce.info",
//     utterances : [
//         "Tell me about the theory of relativity.",
//         "What is the theory of relativity?",
//         "Give me information about the theory of relativity."
//     ],
//     responses : [
//         "The theory of relativity, developed by Albert Einstein, encompasses two interrelated theories: special relativity and general relativity. It describes the fundamental principles of space, time, gravity, and the motion of objects."
//     ]
// },
// {
//     intent : "sciefdsance.info",
//     utterances : [
//         "Tell me about the human microbiome.",
//         "What is the human microbiome?",
//         "Give me information about the human microbiome."
//     ],
//     responses : [
//         "The human microbiome is the collection of microorganisms, including bacteria, viruses, fungi, and archaea, that live on and in the human body. They play essential roles in digestion, immunity, and overall health."
//     ]
// },
// {
//     intent : "scfsadfience.info",
//     utterances : [
//         "Tell me about the ozone layer.",
//         "What is the ozone layer?",
//         "Give me information about the ozone layer."
//     ],
//     responses : [
//         "The ozone layer is a region of Earth's stratosphere that contains a high concentration of ozone molecules. It absorbs most of the sun's ultraviolet (UV) radiation, protecting life on Earth from harmful UV rays."
//     ]
// },
// {
//     intent : "science.infadsfsafo",
//     utterances : [
//         "Tell me about neurotransmitters.",
//         "What are neurotransmitters?",
//         "Give me information about neurotransmitters."
//     ],
//     responses : [
//         "Neurotransmitters are chemical messengers that transmit signals across synapses (gaps) between neurons (nerve cells) or between neurons and other target cells, such as muscles or glands."
//     ]
// },
// {
//     intent : "science.ifadsfasdnfo",
//     utterances : [
//         "Tell me about quantum computers.",
//         "What are quantum computers?",
//         "Give me information about quantum computers."
//     ],
//     responses : [
//         "Quantum computers are devices that use the principles of quantum mechanics to perform computations. They have the potential to solve certain problems much faster than classical computers."
//     ]
// },
// {
//     intent : "science.infsdaffo",
//     utterances : [
//         "Tell me about renewable resources.",
//         "What are renewable resources?",
//         "Give me information about renewable resources."
//     ],
//     responses : [
//         "Renewable resources are natural resources that can be replenished or replaced relatively quickly by natural processes. Examples include sunlight, wind, biomass, and geothermal energy."
//     ]
// },
// {
//     intent : "science.isafdnfo",
//     utterances : [
//         "Tell me about stem cell research.",
//         "What is stem cell research?",
//         "Give me information about stem cell research."
//     ],
//     responses : [
//         "Stem cell research involves studying stem cells to understand their potential for medical applications, such as treating diseases and injuries. It holds promise for regenerative medicine and tissue engineering."
//     ]
// },
// {
//     intent : "sciencegfd.info",
//     utterances : [
//         "Tell me about the circulatory system.",
//         "What is the circulatory system?",
//         "Give me information about the circulatory system."
//     ],
//     responses : [
//         "The circulatory system, also known as the cardiovascular system, is a network of blood vessels (arteries, veins, and capillaries) and the heart that transports blood, oxygen, nutrients, hormones, and waste products throughout the body."
//     ]
// },
// {
//     intent : "sciencgdsfe.info",
//     utterances : [
//         "Tell me about genetic disorders.",
//         "What are genetic disorders?",
//         "Give me information about genetic disorders."
//     ],
//     responses : [
//         "Genetic disorders are conditions caused by abnormalities in an individual's genetic material (DNA). They can be inherited from one or both parents or arise spontaneously due to mutations."
//     ]
// },
// {
//     intent : "sciencegfds.info",
//     utterances : [
//         "Tell me about the theory of evolution.",
//         "What is the theory of evolution?",
//         "Give me information about the theory of evolution."
//     ],
//     responses : [
//         "The theory of evolution by natural selection, proposed by Charles Darwin, explains how species change over time through genetic variation, competition for resources, and adaptation to their environment."
//     ]
// },
// {
//     intent : "gfd.info",
//     utterances : [
//         "Tell me about particle physics.",
//         "What is particle physics?",
//         "Give me information about particle physics."
//     ],
//     responses : [
//         "Particle physics is the study of the fundamental particles and forces that make up the universe. It explores the properties, interactions, and behavior of particles such as quarks, leptons, and bosons."
//     ]
// },
// {
//     intent : "science.ingdsfgsdffo",
//     utterances : [
//         "Tell me about genetic engineering.",
//         "What is genetic engineering?",
//         "Give me information about genetic engineering."
//     ],
//     responses : [
//         "Genetic engineering is the manipulation of an organism's genome using biotechnology techniques. It involves inserting, deleting, or modifying genes to alter the traits of an organism."
//     ]
// },
// {
//     intent : "scgfdsience.info",
//     utterances : [
//         "Tell me about climate change.",
//         "What is climate change?",
//         "Give me information about climate change."
//     ],
//     responses : [
//         "Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions on Earth. It is primarily driven by human activities such as burning fossil fuels and deforestation."
//     ]
// },
// {
//     intent : "sciengfdsgce.info",
//     utterances : [
//         "Tell me about robotics.",
//         "What are robotics?",
//         "Give me information about robotics."
//     ],
//     responses : [
//         "Robotics is the interdisciplinary branch of engineering and science that involves the design, construction, operation, and use of robots. Robots are programmable machines that can carry out tasks autonomously or semi-autonomously."
//     ]
// },
// {
//     intent : "sciengdfsce.info",
//     utterances : [
//         "Tell me about genetic engineering.",
//         "What is genetic engineering?",
//         "Give me information about genetic engineering."
//     ],
//     responses : [
//         "Genetic engineering is the manipulation of an organism's genome using biotechnology techniques. It involves inserting, deleting, or modifying genes to alter the traits of an organism."
//     ]
// },
// {
//     intent : "sciencggfdse.info",
//     utterances : [
//         "Tell me about nanotechnology.",
//         "What is nanotechnology?",
//         "Give me information about nanotechnology."
//     ],
//     responses : [
//         "Nanotechnology is the manipulation of matter on an atomic, molecular, and supramolecular scale. It has applications in various fields, including medicine, electronics, and materials science."
//     ]
// },
// {
//     intent : "scifdaence.info",
//     utterances : [
//         "Tell me about renewable energy.",
//         "What is renewable energy?",
//         "Give me information about renewable energy."
//     ],
//     responses : [
//         "Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat."
//     ]
// }

//   ];
  

// // Add the training data to the manager
// trainingData.forEach(data => {
//   data.utterances.forEach(utterance => {
//     manager.addDocument('en', utterance, data.intent);
//   });
//   data.responses.forEach(response => {
//     manager.addAnswer('en', data.intent, response);
//   });
// });

// // Train the model
// (async () => {
//   await manager.train();
//   manager.save('model2.nlp');
//   console.log('Model trained and saved');
// })();







