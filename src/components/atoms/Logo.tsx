import Image from "next/image";

type LogoProps = {
  size?: "sm" | "lg";
};

const dimensions: Record<NonNullable<LogoProps["size"]>, { width: number; height: number }> = {
  sm: { width: 160, height: 48 },
  lg: { width: 220, height: 66 },
};

export function Logo({ size = "lg" }: LogoProps) {
  const { width, height } = dimensions[size];

  return <Image src="/img/logo.svg" alt="Elifoot logo" width={width} height={height} priority />;
}
