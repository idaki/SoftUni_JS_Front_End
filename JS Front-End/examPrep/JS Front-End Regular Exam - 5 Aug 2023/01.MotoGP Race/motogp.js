function solve(input) {

    let n = parseInt(input[0]);
    let riders = [];
    for (let i = 1; i <= n; i++) {
        const [name, fuel, position] = input[i].split('|');
        let rider = {
            name: name,
            fuel: parseInt(fuel),
            position: parseInt(position)
        };
        riders.push(rider);
    }

    for (let i = n + 1; i < input.length; i++) {
        const inputArr = input[i].split(' - ');
        const event = inputArr[0];

        if (event === 'StopForFuel') {
            const riderName = inputArr[1];
            const minFuel = parseInt(inputArr[2]);
            const newPosition = parseInt(inputArr[3]);
            riders.forEach(rider => {
                if (rider.name === riderName) {
                    if (rider.fuel < minFuel) {
                        console.log(`${rider.name} stopped to refuel but lost his position, now he is ${newPosition}.`);
                        rider.position = newPosition;
                    } else {
                        console.log(`${rider.name} does not need to stop for fuel!`);
                    }
                }
            });
        } else if (event === 'Overtaking') {
            const overtaker = inputArr[1];
            const overtaken = inputArr[2];
            let overtakerPosition, overtakenPosition;

            riders.forEach(rider => {
                if (rider.name === overtaker) overtakerPosition = rider.position;
                if (rider.name === overtaken) overtakenPosition = rider.position;
            });

            if (overtakerPosition < overtakenPosition) {
                riders.forEach(rider => {
                    if (rider.name === overtaker) rider.position = overtakenPosition;
                    if (rider.name === overtaken) rider.position = overtakerPosition;
                });
                console.log(`${overtaker} overtook ${overtaken}!`);
            }
        } else if (event === 'EngineFail') {
            const riderName = inputArr[1];
            const lapsLeft = parseInt(inputArr[2]);
            riders = riders.filter(rider => rider.name !== riderName);
            console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        } else{
            riders.sort((a, b) => a.position - b.position).forEach(rider => {
                console.log(`${rider.name}\n  Final position: ${rider.position}`);
            })
        }
    }
}

solve((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);