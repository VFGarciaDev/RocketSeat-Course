import { Suspense } from 'react'
import { GitHubProfile } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur repellendus nobis nemo incidunt soluta, laborum velit. Neque amet perspiciatis facere quibusdam asperiores. Nam repellendus nobis consequatur, omnis et vero ut?</p>


      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando GithubProfileComponent</p>}>
        <GitHubProfile />
      </Suspense>
    </div>
  )
}