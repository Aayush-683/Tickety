# Ticket Bot

A discord ticket bot with buttons & slash commands
- Made in Discord.js v13

## Installation

You need to have Node.JS 16+

``````bash
git clone https://github.com/blackknight683/tickety-v2
cd tickety-v2
npm i
``````

## Configuraton

```json
//config.json
{
  "clientId": "id of the bot",
  "token": "Discord bot's token",

  "parentOpened": "id of the category when a ticket is opened",
  "Category1": "Name of the first support category",
  "Category2": "Name of the second support category",
  "Category3": "Name of the third support category",

  "roleSupport": "id of the support team role",
  
  "logsTicket": "id of the channel for ticket logs",
  "ticketChannel": "id of the channel where the embed is sent to create a ticket"
}
```

+ You can change category emojis in `intractionCreate.js` @ line 50.
+ Make sure the `ticketChannel` is empty.

## Deployment
```bash
node commands.js # To deploy slash commands in all the servers the bot is in
node index.js # To start the ticket-bot
```

# Made with 💜 by BlackKnight683.
# Code Inspired From [@Sayrix](https://github.com/Sayrix)
