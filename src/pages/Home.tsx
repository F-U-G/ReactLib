import CardDisplay from "../components/CardDisplay.tsx";
import Hero from "../components/Hero.tsx";

interface Cards {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export default function Home() {
  const cards: Cards[] = [
    {
      id: 1,
      icon: "/globe.svg",
      title: "test 1",
      text: "This is a test for a card. Here is a lot of text in order to test the limits of the card.",
    },
    {
      id: 2,
      icon: "/globe.svg",
      title: "test 2",
      text: "This is a test for a card",
    },
    {
      id: 3,
      icon: "/globe.svg",
      title: "test 3",
      text: "This is a test for a card",
    },
    {
      id: 4,
      icon: "/globe.svg",
      title: "test 4",
      text: "This is a test for a card",
    },
    {
      id: 5,
      icon: "/globe.svg",
      title: "test 5",
      text: "This is a test for a card",
    },
    {
      id: 6,
      icon: "/globe.svg",
      title: "test 6",
      text: "This is a test for a card",
    },
  ]
  return (
    <div>
      <Hero />
      <CardDisplay cards={cards} />
    </div>
  )
}
