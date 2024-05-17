module.exports = {
    name: "",
    events: [],
    location: "",

    setName(n) {
        this.name = n;
    },

    getName() {
        return this.name;
    },

    setLocation(loc) {
        this.location = loc;
    },

    getLocation() {
        return this.location;
    },

    addEvent(event) {
        this.events.push(event);
        console.log(`Event "${event.name}" added to the festival.`);
    },

    removeEvent(eventName) {
        const index = this.events.findIndex(event => event.name.toLowerCase() === eventName.toLowerCase());
        if (index !== -1) {
            this.events.splice(index, 1);
            console.log(`Event "${eventName}" removed from the festival.`);
        } else {
            console.log(`Event "${eventName}" not found.`);
        }
    },

    updateEvent(eventName, newEvent) {
        const index = this.events.findIndex(event => event.name.toLowerCase() === eventName.toLowerCase());
        if (index !== -1) {
            this.events[index] = newEvent;
            console.log(`Event "${eventName}" updated.`);
        } else {
            console.log(`Event "${eventName}" not found.`);
        }
    },

    clearEvents() {
        this.events = [];
        console.log("All events cleared from the festival.");
    },

    listEvents() {
        if (this.events.length === 0) {
            console.log("No events scheduled.");
        } else {
            console.log("Festival Schedule:");
            this.events.forEach((event, index) => {
                console.log(`${index + 1}. ${event.name} - ${event.date}`);
            });
        }
    }
};

// Example Event Object
function createEvent(name, date) {
    return { name, date };
}

// Export the createEvent function
module.exports.createEvent = createEvent;
