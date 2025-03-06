export const convertDateTime = (dateTimeString?: string) => {
    if (!dateTimeString) {
      return "";
    }

    const dateTime = new Date(dateTimeString);
    return new Intl.DateTimeFormat(navigator.language, {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(dateTime);
  };