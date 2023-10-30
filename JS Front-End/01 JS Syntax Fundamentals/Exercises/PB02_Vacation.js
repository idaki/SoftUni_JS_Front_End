function calc(num, type, day) {
    let price = 0.0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':  
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }

            if (num >= 30) {
                price *= 0.85;  
            }

            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            if (num >= 100) {
                num -= 10; 
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }
            if (num >= 10 && num <= 20) {
                price *= 0.95;  
            }
            break;
    }

    let result = price * num;
    console.log('Total price: ' + result.toFixed(2));
}