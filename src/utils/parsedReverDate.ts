function parsedReverDate(dateStr: string): string {
  const [month, day, year] = dateStr.split("/");

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export { parsedReverDate };
