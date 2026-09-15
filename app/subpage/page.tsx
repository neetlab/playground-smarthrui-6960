import { Metadata } from "next";
import { Content } from "./Content";

export const metadata: Metadata = {
  title: "サブページ"
}

export default function Home() {
  return (
    <div className="max-w-md p-2">
      <Content />
    </div>
  );
}
