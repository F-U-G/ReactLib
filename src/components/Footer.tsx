interface FooterProps {
  socials: {
    name: string;
    icon: string;
    link: string;
  }[]
}

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="bg-gray-300 w-full">
      <div className="w-full md:w-2xl lg:w-4xl mx-auto px-8 md:px-0">
        <div className="container flex justify-between mx-auto py-8">
          <ul className="flex">
            {socials.map(item => {
              return (
                <li className="mr-4">
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          <div>
            @ 2025 Copyright. All rights reserved.
          </div>
        </div>
      </div>
    </footer >
  )
}
