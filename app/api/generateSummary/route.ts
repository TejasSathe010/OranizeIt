import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { todos } = await request.json();
    console.log(todos);

    // Communicate with OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `When responding, welcome the user always as Mr.Tejas Sathe and welcome to OrganizeIt! Limit the response to 200 characters.`,
        },
        {
          role: "user",
          content: `Hi there, provide a summary of the todos in the board. Count how many todos are in each category such as to do, in progress, and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
            todos
          )}`,
        },
      ],
    });

    const { choices } = response;

    console.log("Response data: ", choices);

    return NextResponse.json({ message: choices[0].message.content });
  } catch (error) {
    console.error("Error processing request: ", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
