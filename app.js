const festival = require("./Nichelle_FestivalFlow.js");
const createEvent = festival.createEvent;

//Set festival name
festival.setName('Summer Music Fest');
console.log("Festival Name: ${festival.getName()}");

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

//List all events
festival.listEvents();

// Remove an event
festival.removeEvent('Opening Ceremony, Grand Concert');

// List all events again to see the removal
festival.listEvents();

// Clear all events
festival.clearEvents();

// List all events to confirm they are cleared
festival.listEvents();