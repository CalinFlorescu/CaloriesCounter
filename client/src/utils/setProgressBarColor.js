export default function setProgressBarColor(value) {
  if (value < 50) {
    return "success";
  } else if (value > 50 && value < 100) {
    return "warning";
  } else if (value >= 100) {
    return "danger";
  }
}
