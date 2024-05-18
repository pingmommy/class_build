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

export const getServerSideProps = () => {
  // 만약 서버사이트 렌더링을 하는 페이지라면?=> out폴더로 생성 불가
  //                                       => next.config.js에서 exportPathMap으로 현재페이지 제외시키기
  // out 폴더는 완성된 html 파일을 완성된 걸 다운로드만 받아서 오는 건데, 지금 여기는 서버에서 백엔드에 요청에서 data가 올 때까지 기다린 다음, 화면을 만들어주는 곳이기 때문에 당연히 out 폴더 생성이 안되는 것이다.
  // 서버사이드렌더링이 들어가 있는 페이지들은 export path할 때 out폴더가 안 만들어지도록 next.config.js 파일에 설정을 해주어야 한다.
};
