import { Display } from "./Display";
import { Keyboard } from ".//Keyboard";
import { Button } from "./Button";

export const Calculator = () => {
  return (
    <div className="calculator-shadow flex h-full max-h-[566px] w-full max-w-[356px] flex-col rounded-[48px] bg-[#2d2a37] px-[32px] pb-[32px] pt-[54px]">
      <Display />
      <Keyboard>
        <>
          <Button ce>CE</Button>
          <Button>C</Button>
          <Button>%</Button>
          <Button operator>/</Button>
        </>
        <>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button operator>*</Button>
        </>
        <>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button operator>-</Button>
        </>
        <>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button operator>+</Button>
        </>
        <>
          <Button>+/-</Button>
          <Button>0</Button>
          <Button>,</Button>
          <Button equal>=</Button>
        </>
      </Keyboard>
    </div>
  );
};
