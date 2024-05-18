import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();

  return (
    <>
      <div>게시글 아이디: {router.query.boardId}</div>
      <div>안녕하세요. 게시판상세 동적페이지입니다.</div>;
    </>
  );
}
