const getTimeString = (timePassed) => {
  const timePassedInSeconds = timePassed / 1000;
  const timePassedInMinutes = timePassedInSeconds / 60;
  const timePassedInHours = timePassedInMinutes / 60;
  const timePassedInDays = timePassedInHours / 24;
  if (timePassedInDays > 1) {
    return `${Math.floor(timePassedInDays)} days`;
  }
  if (timePassedInHours > 1) {
    return `${Math.floor(timePassedInHours)} hours`;
  }
  if (timePassedInMinutes > 1) {
    return `${Math.floor(timePassedInMinutes)} minutes`;
  }
  return `${Math.floor(timePassedInSeconds)} seconds`;
};

const getTimeDeltaFromDate = (startDate, endDate) => {
  const end = endDate ? new Date(endDate) : new Date();
  const start = new Date(startDate);
  return end - start;
};

const getTimeElapsed = (startDate) => {
  const timeDelta = getTimeDeltaFromDate(startDate);
  return getTimeString(timeDelta);
};

const getTimeCompleted = (createdAt, completedAt) => {
  const timeDelta = getTimeDeltaFromDate(createdAt, completedAt);
  return getTimeString(timeDelta);
};

export { getTimeDeltaFromDate, getTimeElapsed, getTimeCompleted };
