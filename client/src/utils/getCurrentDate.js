export default function getCurrentDate() {
  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} ${month} ${year}`;
}
