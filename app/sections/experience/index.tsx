import ExperienceCardOne from "@/components/animata/card/github-card-skew";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-4 mt-40" id="experience">
      <h1 className="text-4xl font-mono font-semibold">Experience</h1>
      <ExperienceCardOne className="mt-6 mb-6" />
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-6 text-md">
            <div className="flex flex-col gap-1 font-medium">
              <div>Languages:</div>
              <div>Frameworks:</div>
              <div>Database:</div>
              <div>Cloud &amp; Deployment:</div>
              <div>Tools &amp; Platforms:</div>
            </div>
            <div className="flex flex-col gap-1">
              <div>TypeScript, Python, HTML, CSS</div>
              <div>
                Next.js, React.js, Refine, React Native, Expo, Tauri, Electron,
                NestJS, Express.js, Hono
              </div>
              <div>
                MySQL, PostgreSQL, MongoDB, Firestore, Redis, Keyv, Prisma
                (ORM), Kysely (Query Builder)
              </div>
              <div>AWS, GCP, Nginx + PM2, Docker, Vercel, Expo</div>
              <div>Git, GitHub, Linear, Postman, Bruno, VSCode, Zed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
