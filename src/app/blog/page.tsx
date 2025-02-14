import { createRandomUser, getAllUsers } from "@/repository/database/user.repository"

export const dynamic = 'force-dynamic';

export default async function BlogPage() {

    const start = performance.now();
    const newUser = await createRandomUser();
    const latency = performance.now() - start;

    return <>
<div>Blog</div>
<div>Latency: {latency} ms</div>
<div>{JSON.stringify(newUser)}</div>
</>
}


