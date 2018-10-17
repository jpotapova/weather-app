function formatTemp(temp) {

  if (temp) {

    if (temp > 0) {

      temp = "+" + Math.round(temp);

    }
    return temp + " C";

  }

  return "";

}

export { formatTemp };
