export default class HappyHour {
  constructor(location_id, details) {
    const {
      day,
      startingHour,
      endingHour,
      drinkSpecials, 
      foodSpecials
    } = details;

    this.location_id = location_id;
    this.drink_specials = drinkSpecials;
    this.food_specials = foodSpecials;
    this.timeslot = `${day}:${startingHour}-${endingHour}`
  }
}
