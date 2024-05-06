"use client";

import { useSession } from "next-auth/react";
import style from "./followRecommend.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User } from "@/model/User";

type Props = {
  user: User;
};

export default function FollowRecommend({ user }: Props) {
  const { data } = useSession();
  const router = useRouter();
  const onFollow = () => {
    if (data?.user) {
      return;
    }
    router.replace("/login");
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image src={user.image} alt={user.id} width={24} height={24} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
