

// function superbowlWin(recordArray) {
//     if (recordArray.result === 'W') {
//         return recordArray.year;
//     }
// }

const superbowlWin = (record) => {
    // iterate over record array
    const firstWin = record.find(season => {
        // for reaach object (element) return the first instance where record equals 'W'
        return season.result === 'W';
    });

    return !!firstWin ? firstWin.year : firstWin;
}

