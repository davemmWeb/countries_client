export const validationName = (name) => {
  if (name.length <= 0) return "Insert activity";
  if (name.length > 20) return "Activity not more 20 characters";
};

export const validationDifficulty = (difficulty) => {
  if (difficulty.length === 0) return "Select level difficulty";
};
export const validationDuration = (duration) => {
  if (duration.length === 0) return "Select duration";
};
export const validationSeason = (season) => {
  if (season.length === 0) return "Select season";
};
