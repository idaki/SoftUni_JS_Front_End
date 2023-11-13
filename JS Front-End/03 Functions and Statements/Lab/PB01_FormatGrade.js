function formatGrade(grade){

    let result = '';
    if (grade>=2 && grade<3){
        result = `Fail (${grade})`;
    } else if(grade<3.5){
        grade=  grade.toFixed(2);
        result = `Poor (${grade})`;
    }else if(grade<4.5){
        grade=  grade.toFixed(2);
        result = `Good (${grade})`;
    }else if(grade<5.5){
        grade=  grade.toFixed(2);
        result = `Very good (${grade})`;
    }else if(grade<=6){
        grade=  grade.toFixed(2);
        result = `Excellent (${grade})`;
    }
    console.log(result);
}

formatGrade(2.99);