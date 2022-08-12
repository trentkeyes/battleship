export const target = (enemy) => {
  const damagedShips = enemy.gameboard.ships.filter(
    (ship) => !ship.sunk && ship.hits.length > 0
  );
  const smartTarget = () => {
    const successfulHits = damagedShips[0].hits.sort((a, b) => a - b);
    let targetOptions;
    // 'edge' cases only have three target options
    if (successfulHits.length === 1) {
      switch (true) {
        case successfulHits[0] <= 9:
          targetOptions = [
            successfulHits[0] + 1,
            successfulHits[0] - 1,
            successfulHits[0] + 10,
          ];
          break;
        case successfulHits[0] >= 90:
          targetOptions = [
            successfulHits[0] + 1,
            successfulHits[0] - 1,
            successfulHits[0] - 10,
          ];
          break;
        case String(successfulHits[0]).charAt(
          String(successfulHits[0]).length - 1
        ) == '0':
          targetOptions = [
            successfulHits[0] + 1,
            successfulHits[0] + 10,
            successfulHits[0] - 10,
          ];
          break;
        case String(successfulHits[0]).charAt(
          String(successfulHits[0]).length - 1
        ) == '9':
          targetOptions = [
            successfulHits[0] - 1,
            successfulHits[0] + 10,
            successfulHits[0] - 10,
          ];
          break;
        default:
          targetOptions = [
            successfulHits[0] + 1,
            successfulHits[0] - 1,
            successfulHits[0] + 10,
            successfulHits[0] - 10,
          ];
      }
      const target =
        targetOptions[Math.floor(Math.random() * targetOptions.length)];
      return target;
    }
    if (successfulHits.length > 1) {
      const firstHit = successfulHits[0];
      const lastHit = successfulHits[successfulHits.length - 1];
      let targetOptions;
      if (firstHit <= 9) {
        targetOptions = lastHit + 10;
      }

      if (lastHit - firstHit < 10) {
        // ship is horizontal
        if (String(firstHit).charAt(String(firstHit).length - 1) == '0') {
          targetOptions = [lastHit + 1];
        } else if (String(lastHit).charAt(String(lastHit).length - 1) == '9') {
          targetOptions = [firstHit - 1];
        } else {
          targetOptions = [firstHit - 1, lastHit + 1];
        }
      } else if (lastHit - firstHit >= 10) {
        // ship is vertical
        if (firstHit <= 9) {
          targetOptions = [lastHit + 10];
        } else if (lastHit >= 90) {
          targetOptions = [firstHit - 10];
        } else {
          targetOptions = [firstHit - 10, lastHit + 10];
        }
      }
      const target =
        targetOptions[Math.floor(Math.random() * targetOptions.length)];
      return target;
    }
  };
  const tryAttack = () => {
    let target;
    if (damagedShips.length > 0) {
      target = smartTarget();
    } else {
      const getRandomTarget = () => Math.floor(Math.random() * 100);
      target = getRandomTarget();
    }
    if (enemy.gameboard.validAttack(1, target)) {
      enemy.gameboard.receiveAttack(target);
      return true;
    } else {
      tryAttack();
    }
  };
  return tryAttack();
};

export const placeShipsRandomly = (board) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  const buildShip = (size) => {
    const generateZones = (size) => {
      let zones = [];
      const orientation = getRandomInt(0, 2);
      let startingVal = getRandomInt(100, 200);
      zones.push(startingVal);
      let i = 1;
      while (i < size) {
        if (orientation === 0) {
          startingVal = startingVal + 10;
          // build vertically
          zones.push(startingVal);
        }
        if (orientation === 1) {
          startingVal = startingVal + 1;
          //  build horizontally
          zones.push(startingVal);
        }
        i++;
      }
      return zones;
    };
    let shipZones = [];
    // check if generated ship doesnt intersect with other ships or go outside border
    while (true) {
      let zones = generateZones(size);
      console.log(zones);
      if (
        zones.every((zone) => !shipZones.includes(zone)) &&
        zones.every((zone) => zone <= 200) &&
        // ships don't wrap from the right edge to the left
        !zones.includes(109 && 110) &&
        !zones.includes(119 && 120) &&
        !zones.includes(129 && 130) &&
        !zones.includes(139 && 140) &&
        !zones.includes(149 && 150) &&
        !zones.includes(159 && 160) &&
        !zones.includes(169 && 170) &&
        !zones.includes(179 && 180) &&
        !zones.includes(189 && 190)
      ) {
        shipZones = shipZones.concat(zones);
        return zones;
      } else {
        continue;
      }

      // if (zones.every(zone=> shipZones.includes(zone != (shipZones.some(zone => ))))
      // if (
      //   zones.every((zone) => !shipZones.includes(zone)) &&
      //   zones.every((zone) => zone <= 200)
      //   // !zones.includes(109 && 110) &&
      //   // !zones.includes(119 && 120)
      // ) {
      //   shipZones = shipZones.concat(zones);
      //   return zones;
      // } else {
      //   //   continue;
      //   console.log('badship');
      // }
      // for (let i = 0; i < zones.length; i++) {
      //   console.log(zones[i]);
      //   if (
      //     // if every element of zones does not equal some element of shipzones
      //     shipZones.some((element) => element === zones[i]) ||
      //     zones[i] >= 200
      //   ) {
      //     // try again with different coordinates
      //     break;
      //   } else {
      //     shipZones = shipZones.concat(zones);
      //     return zones;
      //   }
      // }
    }
  };
  const carrier = buildShip(5);
  const battleship = buildShip(4);
  const cruiser = buildShip(3);
  const sub = buildShip(3);
  const destroyer = buildShip(2);
  board.computerPlaceShip(5, carrier);
  board.computerPlaceShip(4, battleship);
  board.computerPlaceShip(3, cruiser);
  board.computerPlaceShip(3, sub);
  board.computerPlaceShip(2, destroyer);
};
