# Event Flow for Festivals

## Description:
This module allows the user to create a flow for their festivals. They are able to input the name of the festival, as well as add, remove, and edit the events and their dates. Below is an example of how to use the module.

## Functions created:
### setName
Sets the name of the festival.

**Parameter:**
- `n` (string): The name of the festival.

### getName
Gets the name of the festival.

**Returns:**
- (string) The name of the festival.

### setLocation
Sets the location of the festival.

**Parameter:**
- `loc` (string): The location of the festival.

### getLocation
Gets the location of the festival.

**Returns:**
- (string) The location of the festival.

### addEvent
Adds an event to the festival.

**Parameter:**
- `event` (object): The event to add. It should have the properties `name` (string) and `date` (string).

### removeEvent
Removes an event by its name.

**Parameter:**
- `eventName` (string): The name of the event to remove.

### updateEvent
Updates an existing event with new details.

**Parameters:**
- `eventName` (string): The name of the event to update.
- `newEvent` (object): The new event details. It should have the properties `name` (string) and `date` (string).

### updateEvents
Updates multiple events based on a list of updates.

**Parameter:**
- `eventUpdates` (array of objects): An array of update objects. Each object should have the following properties:
  - `oldName` (string): The name of the event to update.
  - `newName` (string): The new name for the event.
  - `newDate` (string): The new date for the event.

### clearEvents
Clears all events from the festival.

### listEvents
Lists all events in the festival.

### createEvent
Creates an event object.

**Parameters:**
- `name` (string): The name of the event.
- `date` (string): The date of the event.

**Returns:**
- (object) An event object with properties `name` and `date`.


```js
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
```
