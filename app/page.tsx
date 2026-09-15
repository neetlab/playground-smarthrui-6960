import { Metadata } from "next";
import Link from "next/link";
import { TextLink } from "smarthr-ui";

export const metadata: Metadata = {
  title: "メインページ"
}

export default function Home() {
  return (
    <div className="max-w-md p-2 mx-auto">
      <TextLink elementAs={Link} href="/subpage">
        別ページへ移動
      </TextLink>
    </div>
  );
}
