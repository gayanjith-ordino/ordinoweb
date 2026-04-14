import { redirect } from "next/navigation";
import { getDocNav, findFirstLeaf } from "@/lib/docs";

export default function DocsPage() {
  const nav = getDocNav();
  const first = findFirstLeaf(nav);
  redirect(first?.href ?? "/");
}
