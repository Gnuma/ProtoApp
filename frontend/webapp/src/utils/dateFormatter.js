export default function toFormat(date) {
  try {
    return date.substring(0, date.indexOf("T"));
  } catch (error) {
    return null;
  }
}
