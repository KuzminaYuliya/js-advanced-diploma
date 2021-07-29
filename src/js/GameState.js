export default class GameState {
  static from(object) {
    if (object && typeof object === 'object') {
      return object;
    }
    return null;
  }
}
