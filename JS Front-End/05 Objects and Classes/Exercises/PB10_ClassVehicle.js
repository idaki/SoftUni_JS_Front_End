function createClass() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.parts[quality] = parseInt(parts['engine']) * parseInt(parts['power']);
        }
    
        drive(fuelLossQty) {
            let newFuelQty = this.fuel - fuelLossQty;
            if (newFuelQty < 0) {
                this.fuel = 0;
            } else {
                this.fuel = newFuelQty;
            }
        }
    }
}

