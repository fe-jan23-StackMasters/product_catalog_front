export const sliceName = (name: string) => {
  const splitedNameLower = name.toLocaleLowerCase().split(' ');
  const splitedName = name.split(' ');

  switch (splitedNameLower[1]) {
    case 'iphone':
      if (splitedNameLower.includes('mini')) {
        return splitedName.slice(0, 4).join(' ');
      }

      if (splitedNameLower.includes('max')) {
        return splitedName.slice(0, 5).join(' ');
      }

      if (!splitedNameLower.includes('max')
      && splitedNameLower.includes('pro')) {
        return splitedName.slice(0, 4).join(' ');
      }

      return splitedName.slice(0, 3).join(' ');

    case 'watch':
      if (splitedNameLower.includes('se')) {
        return splitedName.slice(0, 3).join(' ');
      }

      return splitedName.slice(0, 4).join(' ');

    case 'ipad':
      if (splitedNameLower.includes('mini')
      || splitedNameLower.includes('air')) {
        return splitedName.slice(0, 3).join(' ');
      }

      return splitedName.slice(0, 4).join(' ');
  }
};
