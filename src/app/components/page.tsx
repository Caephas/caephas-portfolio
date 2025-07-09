import Navbar from "@/components/layouts/navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-10 py-20 gap-3">
      {/* navbar */}
      <Navbar />

      <h2>Theme Colors</h2>
      <section className="flex flex-col gap-4 ">
        <div className={cont}>
          <p>Background Color</p>
          <span className="w-10 h-10 bg-background rounded border"></span>
        </div>
        <div className={cont}>
          <p>Foreground Color</p>
          <span className="w-10 h-10 bg-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Card Background Color</p>
          <span className="w-10 h-10 bg-card rounded border"></span>
        </div>
        <div className={cont}>
          <p>Card Foreground Color</p>
          <span className="w-10 h-10 bg-card-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Primary Color</p>
          <span className="w-10 h-10 bg-primary rounded border"></span>
        </div>
        <div className={cont}>
          <p>Primary Foreground Color</p>
          <span className="w-10 h-10 bg-primary-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Popover Color</p>
          <span className="w-10 h-10 bg-popover rounded border"></span>
        </div>
        <div className={cont}>
          <p>Popover Foreground Color</p>
          <span className="w-10 h-10 bg-popover-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Secondary Color</p>
          <span className="w-10 h-10 bg-secondary rounded border"></span>
        </div>
        <div className={cont}>
          <p>Secondary Foreground Color</p>
          <span className="w-10 h-10 bg-secondary-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Muted Color</p>
          <span className="w-10 h-10 bg-muted rounded border"></span>
        </div>
        <div className={cont}>
          <p>Muted Foreground Color</p>
          <span className="w-10 h-10 bg-muted-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Accent Color</p>
          <span className="w-10 h-10 bg-accent rounded border"></span>
        </div>
        <div className={cont}>
          <p>Accent Foreground Color</p>
          <span className="w-10 h-10 bg-accent-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Destructive Color</p>
          <span className="w-10 h-10 bg-destructive rounded border"></span>
        </div>
        <div className={cont}>
          <p>Destructive Foreground Color</p>
          <span className="w-10 h-10 bg-destructive-foreground rounded border"></span>
        </div>

        <div className={cont}>
          <p>Border Color</p>
          <span className="w-10 h-10 bg-border rounded border"></span>
        </div>
        <div className={cont}>
          <p>Input Color</p>
          <span className="w-10 h-10 bg-input rounded border"></span>
        </div>
        <div className={cont}>
          <p>Ring Color</p>
          <span className="w-10 h-10 bg-ring rounded border"></span>
        </div>
      </section>

      <h3>Buttons</h3>
      <Button>Primary Button</Button>
    </div>
  );
};

export default page;

const cont = "flex items-center gap-3";
