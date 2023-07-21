export default function sortPers(persesArray) {
    return persesArray.sort((a, b) => b.health - a.health);
  }