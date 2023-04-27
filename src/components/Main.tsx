import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "900"],
});

interface MainProps {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: MainProps) => {
  return (
    <main className={`${font.className} bg-light-background h-screen`}>
      {children}
    </main>
  );
};

export default Main;
