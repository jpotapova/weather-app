function formatTemp(temp) {

  if (temp) {
    if (temp > 0) {

      temp = "+" + temp;

    }
    return temp + " C";
  }

  return "";

}

export { formatTemp };
