function printMatrix(n){
    let row = [];
    for (let i= 0; i<n;i++){
        row.push(n);
    }

    for (let j = 0; j<n;j++){
  console.log(row.join(' '));
    }

}

printMatrix(3);