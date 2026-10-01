import "./StarBackground.css";
// import { useEffect, useState } from "react";
// function generateStars() {
//   return Array.from(
//     {
//       length: Math.min(
//         140,
//         Math.floor((window.innerWidth * window.innerHeight) / 10000),
//       ),
//     },
//     (_, id) => ({
//       id,
//       size: Math.random() * 2 + 1,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       opacity: Math.random() * 0.5 + 0.3,
//       duration: Math.random() * 4 + 2,
//     }),
//   );
// }
// export const StarBackground = () => {
//   const [stars, setStars] = useState(generateStars);
//   const [meteors] = useState(() =>
//     Array.from({ length: 5 }, (_, id) => ({
//       id,
//       x: Math.random() * 100,
//       y: Math.random() * 65,
//       // Stagger the first appearance so the background gets regular shooting stars.
//       delay: id * 1.8 + Math.random() * 1.2,
//       duration: Math.random() * 1.5 + 2.5,
//     })),
//   );
//   useEffect(() => {
//     let timer;
//     const resize = () => {
//       clearTimeout(timer);
//       timer = setTimeout(() => setStars(generateStars()), 150);
//     };
//     window.addEventListener("resize", resize);
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);
//   return (
//     <div
//       className="star-background fixed inset-0 overflow-hidden pointer-events-none z-0"
//       aria-hidden="true"
//     >
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size,
//             height: star.size,
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//             opacity: star.opacity,
//             animationDuration: `${star.duration}s`,
//           }}
//         />
//       ))}
//       {meteors.map((meteor) => (
//         <div
//           key={meteor.id}
//           className="meteor animate-meteor"
//           style={{
//             width: 120,
//             height: 2,
//             left: `${meteor.x}%`,
//             top: `${meteor.y}%`,
//             animationDelay: `${meteor.delay}s`,
//             animationDuration: `${meteor.duration}s`,

import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
