// Set caching for the whole page:

import { getMessages } from "@/lib/messages";

// export const revalidate = 5; // seconds to revalidate (time data is cached)
// 
// export const dynamic = "force-dynamic"; // force dynamic rendering => always refresh data

export default async function MessagesLayout({ children }) {
  // const response = await fetch("http://localhost:8080/messages");
  // const messages = await response.json();

  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
