import { ModeToggle } from "@/components/mode-toggle";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
