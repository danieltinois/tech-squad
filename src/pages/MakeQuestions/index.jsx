import { useEffect } from "react";
import { PostForm } from "../../components/postForm";

export function MakeQuestions() {
  useEffect(() => {
    document.title = "Make Questions - Tech Squad";
  }, []);
  return (
    <div>
      <PostForm />
    </div>
  );
}
