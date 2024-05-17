const festival = require("./Nichelle_FestivalFlow.js");
const createEvent = festival.createEvent;

//Set festival name
festival.setName('Summer Music Fest');
console.log("Festival Name: ${festival.getName()}");

//Create festival events
const event1 = createEvent('Opening Ceremony', '2024-06-01'); 
const event1a = createEvent('Pop Concert', '2024-06-01');
const event2 = createEvent('Pop-rock Concert', '2024-06-02');
const event2a = createEvent('Kpop Concert', '2024-06-02');
const event2b = createEvent('Indie Concert', '2024-06-02');
const event3 = createEvent('Rock Concert', '2024-06-03');
const event3a = createEvent('Pop concert', '2024-06-03');
const event3b = createEvent('Closing Ceremony', '2024-06-03');


//Add events to the festival
festival.addEvent(event1);
festival.addEvent(event1a);
festival.addEvent(event2);
festival.addEvent(event2a);
festival.addEvent(event2b);
festival.addEvent(event3);
festival.addEvent(event3a);
festival.addEvent(event3b);

//List all events
festival.listEvents();

// Update an event
const updatedEvent = createEvent('Grand Concert', '2024-06-01');
festival.updateEvent('Opening Ceremony', updatedEvent);

//List all events
festival.listEvents();

// Remove an event
festival.removeEvent('Grand Concert');

// List all events again to see the removal
festival.listEvents();

// Clear all events
festival.clearEvents();

// List all events to confirm they are cleared
festival.listEvents();