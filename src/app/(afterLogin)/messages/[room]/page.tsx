import style from "./chatRoom.module.css";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import { MessageForm } from "./_component/MessageForm";
import { auth } from "@/auth";
import { getUserServer } from "../../[username]/_lib/getUserServer";
import { UserInfo } from "./_component/UserInfo";
import { QueryClient } from "@tanstack/react-query";
import WebSocketComponent from "./_component/WebSocketComponent";
import MessageList from "./_component/MessageList";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  params: { room: string };
};

export default async function ChatRoom({ params }: Props) {
  const session = await auth();
  const queryClient = new QueryClient();
  const ids = params.room.split("-").filter((v) => v !== session?.user?.email);
  if (!ids[0]) {
    return null;
  }
  await queryClient.prefetchQuery({
    queryKey: ["users", ids[0]],
    queryFn: getUserServer,
  });
  return (
    <main className={style.main}>
      <WebSocketComponent />
      <UserInfo id={ids[0]} />
      <MessageList id={ids[0]} />
      <MessageForm id={ids[0]} />
    </main>
  );
}
