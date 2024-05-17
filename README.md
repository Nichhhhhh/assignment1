
setName manage the name of the festival.
setLocation and getLocation manage the festival's location.
removeEvent removes an event by its name.
updateEvent updates an existing event with new details.
clearEvents removes all events from the festival.

const festival = require('./festival');
const createEvent = festival.createEvent;

//Set festival name
festival.setName('Summer Music Fest');
console.log(`Festival Name: ${festival.getName()}`);

//Create festival events
const event1 = createEvent('Opening Ceremony, Pop Concert', '2024-06-01');
const event2 = createEvent('Pop-rock Concert, Kpop Concert, Indie Concert', '2024-06-02');
const event3 = createEvent('Rock Concert, Pop concert, Closing Ceremony', '2024-06-03');

//Add events to the festival
festival.addEvent(event1);
festival.addEvent(event2);
festival.addEvent(event3);

//List all events
festival.listEvents();

// Update an event
const updatedEvent = createEvent('Opening Ceremony, Grand Concert', '2024-06-01');
festival.updateEvent('Opening Ceremony, Pop Concert', updatedEvent);
