const icons = {
  level: '\u{1F396}',
  attack: '\u{2694}',
  defence: '\u{1F6E1}',
  health: '\u{2764}',
};

export function getInfo(character) {
  const characterInfo = `${icons.level}${character.level}${icons.attack}${character.attack}${icons.defence}${character.defence}${icons.health}${character.health}`;
  return characterInfo;
}

export function getAllowedPositions(position, distance, boardSize) {
  const positionsArray = [];
  const row = Math.floor(position / boardSize);
  const column = position % boardSize;

  for (let i = 1; i <= distance; i += 1) {
    if ((column + i) < 8) {
      positionsArray.push((row * 8) + (column + i));
    }
    if ((column - i) >= 0) {
      positionsArray.push((row * 8) + (column - i));
    }
    if ((row + i) < 8) {
      positionsArray.push(((row + i) * 8) + column);
    }
    if ((row - i) >= 0) {
      positionsArray.push(((row - i) * 8) + column);
    }
    if ((row + i) < 8 && (column + i) < 8) {
      positionsArray.push(((row + i) * 8) + (column + i));
    }
    if ((row - i) >= 0 && (column - i) >= 0) {
      positionsArray.push(((row - i) * 8) + (column - i));
    }
    if ((row + i) < 8 && (column - i) >= 0) {
      positionsArray.push(((row + i) * 8) + (column - i));
    }
    if ((row - i) >= 0 && (column + i) < 8) {
      positionsArray.push(((row - i) * 8) + (column + i));
    }
  }
  return positionsArray;
}
