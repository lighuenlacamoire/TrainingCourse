const formatDateString = (value) => {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  return `${date.toLocaleString()} hs.`;
}

export {
  formatDateString,
}
