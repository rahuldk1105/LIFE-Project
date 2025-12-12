// Currency formatter
export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2).replace('.', ',')}`;
};

// Time formatter for countdown
export const formatCountdown = (days: number, hours: number, minutes: number): string => {
  return `Ends in  ${days}d ${hours}h ${minutes}m`;
};

// User level badge formatter
export const formatUserLevel = (level: number): string => {
  return level.toString();
};