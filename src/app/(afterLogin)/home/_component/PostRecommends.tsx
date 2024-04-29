"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getpostRecommends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["post", "recommends"],
    queryFn: getPostRecommends,
  });
  return data?.map((post) => <Post key={post.postId} post={post} />);
}
