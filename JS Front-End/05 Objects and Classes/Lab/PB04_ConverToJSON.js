function converToJson(name, lastName, hairColor){
person={
    name,
    lastName,
    hairColor
}
    console.log(JSON.stringify(person));
}

converToJson('Peter', 'Smith',
'Blond');