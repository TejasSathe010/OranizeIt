# OrganizeIt

OrganizeIt is a Trello-like application built with React! It leverages the power of Next.js, GPT, drag and drop functionality, Zustand for state management, Appwrite Cloud for backend services, and TypeScript for type safety.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Task Management**: Create, update, delete, and move tasks across different lists.
- **Drag & Drop**: Seamlessly move tasks using a user-friendly drag and drop interface.
- **State Management**: Efficient state management with Zustand.
- **AI Integration**: Utilize GPT-4 for task suggestions and automation.
- **Backend Services**: Appwrite Cloud for user authentication and data storage.
- **Type Safety**: Full type safety with TypeScript.

## Tech Stack

- **Frontend**: React, Next.js
- **State Management**: Zustand
- **Backend**: Appwrite Cloud
- **AI Integration**: GPT-4
- **Language**: TypeScript

## Installation

To get started with OrganizeIt, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/organizeit.git
    cd organizeit
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Appwrite Cloud**:
    - Create an account on [Appwrite Cloud](https://appwrite.io).
    - Set up your project and get your API endpoint and project ID.
    - Create a `.env.local` file in the root of the project and add your Appwrite credentials:
      ```

      NEXT_PUBLIC_APPWRITE_PROJECT_ID=
      NEXT_PUBLIC_DATABASE_ID=
      NEXT_PUBLIC_TODOS_COLLECTION_ID=
      OPENAI_API_KEY=
      NEXT_PUBLIC_IMAGE_BUCKET_ID=
      ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Usage

- **Creating Tasks**: Click on the "Add Task" button to create a new task.
- **Updating Tasks**: Click on a task to edit its details.
- **Deleting Tasks**: Click on the delete icon on a task to remove it.
- **Moving Tasks**: Drag and drop tasks to move them between lists.
