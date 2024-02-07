const commonClasses = [
  'p-2',
  'mr-3',
  'border-[1px]',
  'rounded-lg',
  'text-[0.9rem]',
  'font-medium',
];

const variantClasses: any = {
  primary: [
    'border-strokeBlue',
    'dark:border-lightBlue',
    'text-white',
    'dark:text-gray',
    'bg-strokeBlue',
    'dark:bg-lightBlue',
  ],
  secondary: [
    'border-strokeBlue',
    'dark:border-lightBlue',
    'text-strokeBlue',
    'dark:text-lightBlue',
  ],
};

const getVariantClasses = (variant: string) => {
  const classes = [...commonClasses, ...variantClasses[variant]];
  return classes.join(' ');
};

export default getVariantClasses;
