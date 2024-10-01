import Image from "next/image";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { LampDemo } from "@/components/ui/lamp";
import Card, { CardInterface } from "@/components/ui/card";

import { navbarData } from "@/data/navbarData";
import { cardData } from "@/data/cardData";
import { experienceIcons } from "@/data/experienceIcon";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <FloatingNav navItems={navbarData} />
      <LampDemo>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Landing page image"
            src="/img/ImageMe3.jpg"
            height={867}
            width={1157}
            className="h-[15rem] w-[15rem] object-cover rounded-3xl"
          />
        </div>
      </LampDemo>

      <div className="w-screen min-h-screen bg-slate-950 text-white flex flex-col">
        <h1 className="font-humanist text-5xl text-center pb-8 bg-gradient-to-b from-red-500 to-blue-200 bg-clip-text text-transparent font-bold">
          Experience With
        </h1>

        <div className="flex justify-center gap-3">
          {experienceIcons.map((icon) => (
            <div key={icon.id}>{icon.svg}</div>
          ))}
        </div>


        <h1 className="font-humanist text-5xl text-center pb-8 bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text text-transparent font-bold mt-14">
          Projects
        </h1>

        <div className="flex flex-col items-center gap-6">
            {cardData.map((card: CardInterface) => (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                lastUpdated={card.lastUpdated}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
