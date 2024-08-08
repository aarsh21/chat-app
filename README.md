# Fullstack Zoomer Chat App: Next.js 13, React, LiveKit, Prisma, Tailwind, MySQL | Full Course 2023

This repository contains the source code for a full-stack Zoomer-friendly chat application built using Next.js 13, React, LiveKit, Prisma, Tailwind, and MySQL. 💻🤖

## Features 🚀

- **Real-time Messaging**: Users can send and receive messages in real-time using LiveKit. 💬
- **Attachment Uploads**: Users can send attachments (images, documents, etc.) as messages using UploadThing. 📁
- **Message Editing and Deletion**: Users can edit and delete their own messages in real-time, and the changes are reflected for all other users. ✏️🗑️
- **Text, Audio, and Video Channels**: Users can create and join text, audio, and video call channels. 🎥🎙️
- **1:1 Conversations**: Users can initiate private 1:1 conversations with other members. 👥
- **1:1 Video Calls**: Users can make 1:1 video calls with other members. 📽️
- **Member Management**: Administrators can kick members and change their roles (Guest/Moderator). 🚫👑
- **Invite System**: Users can generate unique invite links and use them to invite new members. 🔗🤝
- **Infinite Message Loading**: The app uses tanstack/query to load messages in batches of 10 for an infinite scrolling experience. 🔄
- **Server Creation and Customization**: Users can create and customize their own servers. 🏢🛠️
- **Beautiful UI**: The app uses Tailwind CSS and Shadcn UI components for a modern and responsive user interface. 🎨
- **Light/Dark Mode**: The app supports light and dark mode. 🌞🌛
- **ORM with Prisma**: The app uses Prisma as the ORM for interacting with the MySQL database. 🗃️
- **Authentication with Clerk**: The app uses Clerk for user authentication. 🔑

## Prerequisites 🔍

- **Node.js version 18.x.x**

## Cloning the Repository 📁

```shell
git clone https://github.com/AntonioErdeljac/next13-discord-clone.git
```

## Installation 🛠️

1. Install the required packages:

   ```shell
   npm i
   ```

2. Set up the `.env` file:

   ```js
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
   DATABASE_URL=
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=
   LIVEKIT_API_KEY=
   LIVEKIT_API_SECRET=
   NEXT_PUBLIC_LIVEKIT_URL=
   ```

3. Set up Prisma:

   - Add a Postgres database (I used NeonDB)
   - Run the following commands:
     ```shell
     npx prisma generate
     npx prisma db push
     ```

4. Start the app:

   ```shell
   npm run dev
   ```

## Available Commands 🤖

Running commands with `npm run [command]`:

| Command | Description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Contributions 🤝

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue. 🙏
