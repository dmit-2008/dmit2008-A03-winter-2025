// we want 3rd party imports before our own.
import { Geist, Geist_Mono } from "next/font/google";
// import our title component
import Title from '@/components/Title'
import ConceptList from "@/components/ConceptList";
import ConceptItem from "@/components/ConceptItem";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Title text={"Our first component"} />
        <ConceptList>
          <ConceptItem idea={"Object destructuring"} />
          {/*
          how to add this concept in blue.
          props and children and style and className
          */}
        </ConceptList>
      </main>
    </div>
  );
}
