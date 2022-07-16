declare module '*.module.scss' {
  type Styles = {
    [selector: string]: string;
  };

  const styles: Styles;

  export default styles;
}
