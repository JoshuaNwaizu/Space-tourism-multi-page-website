// import dataJson from 'public/data.json';

// interface Image {
//   png: string;
//   webp: string;
// }

// interface Destination {
//   name: string;
//   images: Image;
//   description: string;
//   distance: string;
//   travel: string;
// }

// interface CrewMember {
//   name: string;
//   images: Image;
//   role: string;
//   bio: string;
// }

// interface Technology {
//   name: string;
//   images: {
//     portrait: string;
//     landscape: string;
//   };
//   description: string;
// }

// interface Data {
//   destinations: Destination[];
//   crew: CrewMember[];
//   technology: Technology[];
// }

import NavBar from '../NavBar/NavBar';

// const data: Data = dataJson;

const DestinationBody = () => {
  return (
    <main className=" bg-[url('/assets/images/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover h-screen">
      <NavBar />
      <section className="mx-7 translate-y-[8rem]"></section>
    </main>
  );
};

export default DestinationBody;
