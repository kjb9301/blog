export const convertToDate = (secondsObj: any) => {
  const date = new Date(secondsObj.seconds * 1000);
  const formattedDate = formatDate(date);

  return formattedDate;
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const formatDay = day < 10 ? `0${day}` : `${day}`;

  const result = `${formatDay} ${month} ${year}`;

  return result;
};