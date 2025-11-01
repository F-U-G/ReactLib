interface CardProps {
  cards: {
    id: number;
    title: string;
    text: string;
    icon: string;
  }[];
}

export default function CardDisplay({ cards }: CardProps) {
  return (
    <section className="bg-fourth">
      <div className="w-full md:w-2xl lg:w-4xl mx-auto">
        <h3 className="text-3xl text-center pt-14">
          Card Title Here
        </h3>
        <div className="py-14 px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(card => {
            return (
              <div className="bg-secondary min-h-70 w-full rounded-xl mx-auto shadow-xl" key={card.id}>
                <div className="w-13 h-13 rounded-lg mx-auto mt-5">
                  <img src={card.icon} alt="Card Icon"></img>
                </div>
                <h3 className="text-2xl text-light font-bold text-center mt-3">
                  {card.title}
                </h3>
                <p className="text-lg text-light mx-2 pt-5">
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
