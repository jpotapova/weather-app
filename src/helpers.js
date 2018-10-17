function formatTemp(temp) {

  if (temp) {

    if (temp > 0) {

      temp = "+" + Math.round(temp);

    }
    return temp + " C";

  }

  return "";

}

function formatURI(str) {

  return window.location.protocol + "//" + window.location.hostname + str;

}

function formatDate(date) {

  function getMonth() {

    const months = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    return months[date.getMonth()];

  }

  const d = date.getDate(),
        y = date.getFullYear(),
        h = date.getHours(),
        m = getMonth(),
        min = date.getMinutes();


  return d + " " + m + " " + y + " " + h + ":" + min;

}

function generateMarker(map, index, position, temp) {

  return new window.google.maps.Marker({
    position: position,
    map: map,
    label: formatTemp(temp),
    icon: {
      path: "M -2,-2 2,-2 2,2 -2,2 z",
      strokeColor: "#fff",
      fillColor: "#fff",
      fillOpacity: 1,
      scale: 10
    }
  });

}

export { formatTemp, formatURI, formatDate, generateMarker };
