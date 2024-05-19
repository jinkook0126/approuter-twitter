import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import { Suspense } from "react";
import TabDeciderSuspense from "./_component/TabDeciderSuspense";
import Loading from "./loading";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "홈 / Z",
  description: "홈",
};
export default async function Home() {
  const session = await auth();
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
