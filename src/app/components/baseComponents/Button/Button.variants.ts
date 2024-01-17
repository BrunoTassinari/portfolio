const commonClasses = [
  "p-2",
  "mr-3",
  "border-[1px]",
  "rounded-lg",
  "text-[0.9rem]",
  "font-medium",
];

const variantClasses: any = {
  primary: [
    "border-light-tertiary",
    "dark:border-dark-tertiary",
    "text-light-primary",
    "dark:text-dark-primary",
    "bg-light-tertiary",
    "dark:bg-dark-tertiary",
  ],
  secondary: [
    "border-light-tertiary",
    "dark:border-dark-tertiary",
    "text-light-tertiary",
    "dark:text-dark-tertiary",
  ],
};

export const getVariantClasses = (variant: string) => {
  const classes = [...commonClasses, ...variantClasses[variant]]
  return classes.join(" ");
}
