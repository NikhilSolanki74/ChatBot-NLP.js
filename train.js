const { NlpManager } = require('node-nlp');
// const { NlpManager } = require('@nlpjs/nlp');

// Create an instance of NlpManager, specifying the languages you want to support
const manager =new NlpManager({ languages: ['en'] });

// Add training data
manager.addDocument('en', 'Hi there!', 'greetings.hello');
manager.addDocument('en', 'Hello!', 'greetings.hello');
manager.addDocument('en', 'How are you?', 'greetings.howareyou');
manager.addDocument('en', 'What is the weather like today?', 'weather.today');
manager.addDocument('en', 'Tell me about your products.', 'products.inquiry');
manager.addDocument('en', 'I need help.', 'help.request');
manager.addDocument('en', 'Thank you!', 'thanks');
manager.addDocument('en', 'Goodbye!', 'farewell');

// Add responses
manager.addAnswer('en', 'greetings.hello', 'Hello! How can I assist you today?');
manager.addAnswer('en', 'greetings.howareyou', 'I\'m doing well, thank you. How about you?');
manager.addAnswer('en', 'weather.today', 'Let me check the weather for you.');
manager.addAnswer('en', 'products.inquiry', 'We offer a variety of products including electronics, clothing, and home goods.');
manager.addAnswer('en', 'help.request', 'Sure, I\'m here to help. What do you need assistance with?');
manager.addAnswer('en', 'thanks', 'You\'re welcome!');
manager.addAnswer('en', 'farewell', 'Goodbye! Have a great day!');

// Train the model
(async () => {
  await manager.train();
  manager.save('model.nlp');
  console.log('Model trained and saved');
})();
