
const webhookUrl = 'https://discordapp.com/api/webhooks/1073858890250338314/4j7LNvKn8lzKzwKyQJALBkeu1u-tMB4pn70nmECRYsrLw5ze1N2gZcPMhWQOhtS9yxDR'; // Replace WEBHOOK_ID and WEBHOOK_TOKEN with your actual values

const message = {
  username: 'My Bot Name', // Optional
  avatar_url: 'https://example.com/avatar.png', // Optional
  content: 'Hello, world!' // Required
};

fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(message)
})
