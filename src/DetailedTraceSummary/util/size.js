export const getCriticalPathHeightFromSpan = span => {
  const height = span?.tagsObj?.ttc_criticalPathHeight;
  return height ? height : '2px';
};

export const getHeightFromSpan = span => {
  const height = span?.tagsObj?.ttc_height;
  return height ? height : '70%';
};

export const getBorderRadiusFromSpan = span => {
  const borderRadius = span?.tagsObj?.ttc_borderRadius;
  return borderRadius ? borderRadius : '4px';
};
