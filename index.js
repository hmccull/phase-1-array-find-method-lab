function superbowlWin(recordArray) {
    for (const record of recordArray) {
        if (record.result === 'W') {
            return record.year;
        }
    }
}

  record.find(superbowlWin);