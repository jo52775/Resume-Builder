export const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
