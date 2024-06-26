class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        this.isPlugged = true;
        console.log(`${this.name} is plugged in.`);
    }

    unplug() {
        this.isPlugged = false;
        console.log(`${this.name} is unplugged.`);
    }
}

class DeskLamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    changeBrightness(brightness) {
        this.brightness = brightness;
        console.log(`${this.name} brightness is now ${this.brightness}.`);
    }
}

class Computer extends Appliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    bootUp() {
        if (this.isPlugged) {
            console.log(`${this.name} is booting up.`);
        } else {
            console.log(`${this.name} is not plugged in.`);
        }
    }
}

const lamp = new DeskLamp("Desk Lamp", 40, "medium");
const computer = new Computer("Computer", 300, "Dell");

lamp.plugIn();
computer.plugIn();

lamp.changeBrightness("high");

computer.bootUp();

const totalPowerConsumption = (lamp.isPlugged ? lamp.power : 0) + (computer.isPlugged ? computer.power : 0);
console.log(`Total power consumption: ${totalPowerConsumption}W`);

lamp.unplug();
computer.unplug();

console.log(lamp);
console.log(computer);
