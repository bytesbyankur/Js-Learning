class Device {
    powerOn() {
        throw new Error('powerOn() must be implemented by a subclass');
    }
}

class Laptop extends Device {
    powerOn() {
        console.log('Laptop is powering on.');
    }
}

class Smartphone extends Device {
    powerOn() {
        console.log('Smartphone is powering on.');
    }
}

const devices = [new Laptop(), new Smartphone()];
devices.forEach((device) => device.powerOn());
