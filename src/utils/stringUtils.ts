export function formatDayOfWeek(day: number): string {
  if (day < 0 || day >= 7) {
    return '';
  }

  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
}

export function formatHourOfDay(hour) {
  if (hour < 0 || hour > 24) {
    return '';
  }
  if (hour === 0 || hour === 24) {
    return '12 am';
  }
  if (hour === 12) {
    return '12 pm';
  }

  return hour > 12 ? `${hour - 12} pm` : `${hour} am`;
}

export function formatTableDateTimeLabel(date: Date): string {
  return date.toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTableDurationLabel(duration: number): string {
  if (duration < 1000) {
    return `${duration} ms`;
  }

  if (duration < 60000) {
    return `${(duration / 1000).toFixed(1)} s`;
  }

  if (duration < 3600000) {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.round((duration / 1000) % 60);
    return `${minutes} min ${seconds.toString().padStart(2, '0')} s`;
  }

  const hours = Math.floor(duration / 3600000);
  const minutes = Math.round((duration / 60000) % 60);
  return `${hours} h ${minutes.toString().padStart(2, '0')} min`;
}

export function formatTooltipDateLabel(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTooltipDayOfWeekLabel(day: number): string {
  return formatDayOfWeek(day);
}

function getBucketDuration(duration: number) {
  // Round up to nearest seconds
  const durationInSecs = Math.round(duration / 1000);
  const seconds = Math.floor(durationInSecs) % 60;
  const minutes = Math.floor(durationInSecs / 60);

  let result = '';
  if (minutes > 0) {
    result += `${minutes} min`;
  }
  if (seconds > 0) {
    result += ` ${seconds} s`;
  }
  return result.trim();
}

export function formatTooltipDurationBucketLabel(
  bucketIndex: number,
  bucketSize: number,
  bucketCount: number
): string {
  const startDuration = bucketIndex * bucketSize;
  const startResult = getBucketDuration(startDuration);
  if (bucketIndex === bucketCount - 1) {
    return `Above ${startResult}`;
  }

  const endDuration = (bucketIndex + 1) * bucketSize;
  const endResult = getBucketDuration(endDuration);
  if (bucketIndex === 0) {
    return `Below ${endResult}`;
  }

  return `${startResult} ~ ${endResult}`;
}

export function formatTooltipDurationLabel(duration: number): string {
  // Round up to nearest minutes
  const durationInMins = Math.round(duration / 1000 / 60);
  const minutes = Math.floor(durationInMins) % 60;
  const hours = Math.floor(durationInMins / 60);

  let result = '';
  if (hours > 0) {
    result += `${hours} ${hours > 1 ? 'hours' : 'hour'}`;
  }
  if (minutes > 0) {
    result += ` ${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
  }
  if (result !== '') {
    return result.trim();
  }

  const durationInSecs = Math.floor(duration / 1000);
  return durationInSecs > 0
    ? `${durationInSecs} ${durationInSecs > 1 ? 'seconds' : 'second'}`
    : 'No activity';
}

export function formatTooltipHourOfWeekLabel(
  dayOfWeek: number,
  hourOfDay: number
): string {
  return `${formatDayOfWeek(dayOfWeek)}, ${formatHourOfDay(hourOfDay)}`;
}
