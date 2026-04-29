export type PostColor = "accent" | "success" | "warning" | "danger";

export const POST_COLOR: Record<
  PostColor,
  {
    background: string;
    backgroundSoft: string;
    textColor: string;
  }
> = {
  accent: {
    background: "bg-accent",
    backgroundSoft: "bg-accent-soft",
    textColor: "text-accent",
  },
  success: {
    background: "bg-success",
    backgroundSoft: "bg-success-soft",
    textColor: "text-success",
  },
  warning: {
    background: "bg-warning",
    backgroundSoft: "bg-warning-soft",
    textColor: "text-warning",
  },
  danger: {
    background: "bg-danger",
    backgroundSoft: "bg-danger-soft",
    textColor: "text-danger",
  },
};
