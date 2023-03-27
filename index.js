function superbowlWin(record) {
    var win = record.find(function(element) {
      return element.result === "W";
    });
  
    return win ? win.year : undefined;
  }