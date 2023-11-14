function visualizeLoadingBar(number) {
    const completedSegments = number / 10;
    const remainingSegments = 10 - completedSegments;
    
    const progressBar = '[' + '%'.repeat(completedSegments) + '.'.repeat(remainingSegments) + ']';
    
    console.log(`${number}% ${progressBar}\nStill loading...`);
}

visualizeLoadingBar(30);