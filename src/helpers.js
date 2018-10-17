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

export { formatTemp, formatURI };
