// File: app/page.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
interface Repository {
  name: string;
  language: string;
  size: string;
  visibility: "Public" | "Private";
  updated: string;
}

const repositories: Repository[] = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    visibility: "Public",
    updated: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5871 KB",
    visibility: "Private",
    updated: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    visibility: "Private",
    updated: "5 days ago",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    visibility: "Public",
    updated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    visibility: "Private",
    updated: "6 days ago",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    visibility: "Public",
    updated: "4 days ago",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    visibility: "Private",
    updated: "7 days ago",
  },
];

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4  w-[90vw] max-w-screen-lg">
      <div className="flex flex-col justify-between items-start sm:flex-row sm:items-start gap-2">
        <div className="flex flex-col">
        <div><h2 className="text-xl font-bold">Repositories</h2></div>
        <div><p className="text-sm text-gray-600 pl-2">33 total repositories</p></div>
        </div>
        <div>
        <Button className="ml-2 text-gray-500" variant="outline">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
          Refresh All</Button>
        <Button className="ml-4 bg-[#1570EF]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add Repository</Button>
        </div>
      </div>

      <div className="relative w-full max-w-sm" style={{zIndex:1}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <Input
    placeholder="Search Repositories"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full pl-10"
  />
</div>

      <div className="grid grid-cols-1 gap-4">
        {filteredRepositories.map((repo) => (
          <Card key={repo.name} className="p-4 flex flex-col text-left gap-1">
            <div className="flex flex-row gap-4">
              <h2 className="font text-lg">
                {repo.name} <Badge variant="outline" className="bg-blue-50 text-[#1570EF]">({repo.visibility})</Badge>
              </h2>
            </div><div className="flex flex-row text-sm text-gray-500 text-right gap-3 sm:gap-8">

              <div className="flex flex-row"><p>{repo.language}</p> 
              <svg xmlns="http://www.w3.org/2000/svg" color="#1570EF" width="30" height="30" viewBox="5 2 24 26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
              </div>
              <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="2 -4 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              <p>{repo.size}</p>
              </div>
              <p>Updated {repo.updated}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
