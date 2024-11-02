function showTime() {
  const select = document.getElementById("citySelect");
  const city = select.value;
  const timeDisplay = document.getElementById("timeDisplay");
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  if (city === "current") {
    // Get the user's local time and timezone
    const localDate = new Date();
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = new Intl.DateTimeFormat("en-US", {
      ...options,
      timeZone: localTimeZone,
    }).format(localDate);

    // Display the local time with timezone name
    timeDisplay.innerHTML = `It is ${localTime} in Your Current Location (${localTimeZone})`;
  } else {
    // Display the selected city's date and time
    const dateTime = new Intl.DateTimeFormat("en-US", {
      ...options,
      timeZone: city,
    }).format(new Date());
    timeDisplay.innerHTML = `It is ${dateTime} in ${city.split("/")[1]}`;
  }
}

function goToHomePage() {
  window.location.href = "https://your-home-page-url.com"; // Replace with your actual homepage URL
}
