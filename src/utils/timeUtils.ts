export interface ClinicStatus {
  isOpen: boolean;
  message: string;
  subtext: string;
  nextOpeningText: string;
  currentDayName: string;
}

/**
 * Calculates current clinic opening status in Indian Standard Time (IST, UTC+5:30)
 * Clinic hours:
 * Monday–Saturday: 9:00 AM–7:00 PM (09:00 to 19:00)
 * Sunday: Closed
 */
export function getClinicStatusIST(): ClinicStatus {
  // Get current UTC time and add 5.5 hours for IST
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 3600000 * 5.5);

  const day = istTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = dayNames[day];

  const openMinutes = 9 * 60; // 9:00 AM = 540
  const closeMinutes = 19 * 60; // 7:00 PM = 1140

  if (day === 0) {
    // Sunday - Closed
    return {
      isOpen: false,
      message: 'Closed Today (Sunday)',
      subtext: 'Opens Monday at 9:00 AM',
      nextOpeningText: 'Opens Monday, 9:00 AM',
      currentDayName,
    };
  }

  // Monday to Saturday
  if (currentMinutes < openMinutes) {
    // Before 9 AM
    return {
      isOpen: false,
      message: 'Closed Now',
      subtext: 'Opens Today at 9:00 AM',
      nextOpeningText: 'Opens Today at 9:00 AM',
      currentDayName,
    };
  } else if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    // Within 9 AM to 7 PM
    const remainingMinutes = closeMinutes - currentMinutes;
    const closingSoon = remainingMinutes <= 45;

    return {
      isOpen: true,
      message: closingSoon ? 'Closing Soon' : 'Open Now',
      subtext: `Today until 7:00 PM (${Math.floor(remainingMinutes / 60)}h ${remainingMinutes % 60}m left)`,
      nextOpeningText: 'Open Today until 7:00 PM',
      currentDayName,
    };
  } else {
    // After 7 PM
    const isSaturday = day === 6;
    return {
      isOpen: false,
      message: 'Closed for the Day',
      subtext: isSaturday ? 'Opens Monday at 9:00 AM' : 'Opens Tomorrow at 9:00 AM',
      nextOpeningText: isSaturday ? 'Opens Monday at 9:00 AM' : 'Opens Tomorrow at 9:00 AM',
      currentDayName,
    };
  }
}
