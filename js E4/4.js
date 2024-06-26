function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

Appliance.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(this.name + " is plugged in.");
};

Appliance.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(this.name + " is unplugged.");
};

function DeskLamp(name, power, brightness) {
    Appliance.call(this, name, power);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(Appliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.changeBrightness = function(brightness) {
    this.brightness = brightness;
    console.log(this.name + " brightness is now " + this.brightness + ".");
};

function Computer(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;
Computer.prototype.bootUp = function() {
    if (this.isPlugged) {
        console.log(this.name + " is booting up.");
    } else {
        console.log(this.name + " is not plugged in.");
    }
};

const lamp = new DeskLamp("Desk Lamp", 40, "med");
const computer = new Computer("Computer", 300, "Acer");

lamp.plugIn();
computer.plugIn();

lamp.changeBrightness("high");

computer.bootUp();

const totalPowerConsumption = (lamp.isPlugged ? lamp.power : 0) + (computer.isPlugged ? computer.power : 0);
console.log("Total power consumption: " + totalPowerConsumption + "W");

lamp.unplug();
computer.unplug();

console.log(lamp);
console.log(computer);
