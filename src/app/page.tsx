
import { getBlok } from "@/repository/storyblok/home.repository";
import PageClient from "./page.client";

// export const revalidate = 60

export default async function Page() {
  const blok = await getBlok();

  return <>

  <PageClient blok={blok}/>

</>
}
