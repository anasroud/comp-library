interface ModuleStyles {
  [key: string]: string;
}

declare module '*.scss' {
  const styles: ModuleStyles;
  export default styles;
}
