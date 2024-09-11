export default function timeAgo(timestamp) {
  const now = new Date();
  const difference = now - new Date(timestamp);
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 30) {
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = String(date.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
  } else if (days >= 1) {
      return `há ${days} d`;
  } else if (hours >= 1) {
      return `há ${hours} h`;
  } else {
      return `há ${minutes} min`;
  }
}