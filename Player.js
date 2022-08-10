class Player {
  constructor(name) {
    this.name = name;
    this.enemy;
    this.gameboard;
    this.turn = false;
  }
  switchTurn() {
    this.turn = false;
    this.enemy.turn = true;
  }
}

export class HumanPlayer extends Player {
  attack(zone) {
    zone = Number(zone);
    if (this.turn) {
      if (this.enemy.gameboard.validAttack(2, zone)) {
        this.enemy.gameboard.receiveAttack(zone);
        this.switchTurn();
        return true;
      }
      return false;
    }
    return false;
  }
}

export class ComputerPlayer extends Player {
  attack() {
    const damagedShips = this.enemy.gameboard.ships.filter(
      (ship) => !ship.sunk && ship.hits.length > 0
    );
    const smartTarget = () => {
      // if last digit is 0, 9, 0-9, 90-99, 100-109, 190-199
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
          } else if (
            String(lastHit).charAt(String(lastHit).length - 1) == '9'
          ) {
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
    if (this.turn) {
      const tryAttack = () => {
        let target;
        if (damagedShips.length > 0) {
          target = smartTarget();
        } else {
          const getRandomTarget = () => Math.floor(Math.random() * 100);
          target = getRandomTarget();
        }
        if (this.enemy.gameboard.validAttack(1, target)) {
          this.enemy.gameboard.receiveAttack(target);
          this.switchTurn();
          return true;
        } else {
          tryAttack();
        }
      };
      return tryAttack();
    } else {
      return false;
    }
  }
  randomShips(board) {
    const shipZones = [];
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
      // check if generated ship doesnt intersect with other ships or goes outside border
      let goodShip = false;
      while (!goodShip) {
        let zones = generateZones(size);
        for (const zone of zones) {
          if (shipZones.some((element) => element === zone) || zone >= 200) {
            // try again with different coordinates
            continue;
          } else {
            shipZones.concat(zones);
            return zones;
          }
        }
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
  }
}
