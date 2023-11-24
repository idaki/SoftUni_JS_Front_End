function createDictionary(arrInput){
    let dictionary =[]; 
    arrInput.forEach(element => {
        let word = JSON.parse(element);
        let term = Object.keys(word)[0];
        let existingEntry = dictionary.find(entry => Object.keys(entry)[0] === term);
        if (existingEntry) {
            Object.values(existingEntry)[0] = Object.values(word)[0];
        } else {
    
            dictionary.push(word);
        }
    
     });

     dictionary.sort((a,b)=>{
        let keyA = Object.keys(a)[0];
        let keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
     })

     dictionary.forEach(entry=>
        {
            let term = Object.keys(entry); 
            let definition = Object.values(entry); 
            console.log(`Term: ${term} => Definition: ${definition}`);
        }
        
        );
}

createDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );