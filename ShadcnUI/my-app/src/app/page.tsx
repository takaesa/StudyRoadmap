import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/SearchInput";
export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <form action="" role="search"><SearchInput ></SearchInput></form>
      <div>
      <Button>Default</Button>
      </div>
    </main>
    
  );
}
