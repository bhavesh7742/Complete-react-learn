import React from "react";
import Card from "./components/card";
const App = () => {
  const data = [
    [
      {
        id: 1,
        name: "Jay Reese",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        projects: 2,
        prototypes: 6,
      },
      {
        id: 2,
        name: "Carlos Ramos",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        projects: 3,
        prototypes: 4,
      },
      {
        id: 3,
        name: "Eugenia Grant",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        projects: 7,
        prototypes: 13,
      },
      {
        id: 4,
        name: "Lelia Marshall",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        projects: 6,
        prototypes: 24,
      },
      {
        id: 5,
        name: "Olivia Campbell",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        projects: 2,
        prototypes: 16,
      },
      {
        id: 6,
        name: "Bernice Alvarado",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        projects: 2,
        prototypes: 5,
      },
      {
        id: 7,
        name: "Daniel Foster",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        projects: 4,
        prototypes: 9,
      },
      {
        id: 8,
        name: "Sophia Turner",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        projects: 5,
        prototypes: 11,
      },
      {
        id: 9,
        name: "Ethan Brooks",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        projects: 3,
        prototypes: 7,
      },
      {
        id: 10,
        name: "Ava Richardson",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        projects: 8,
        prototypes: 15,
      },
    ],
  ];
  console.log(data);
  return (
    <div className="parent">
      {data[0].map(function (elem, idx) {
        return <div key={idx}>
          <Card
            key={elem.id}
            img={elem.image}
            name={elem.name}
            projects={elem.projects}
            prototypes={elem.prototypes}
          />
        </div>
      })}
    </div>
  );
}; 

export default App;
