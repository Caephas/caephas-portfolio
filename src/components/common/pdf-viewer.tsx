"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface Props {
  paperLink: string;
}

export default function PDFViewerWithPagination({ paperLink }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-sm w-fit mt-2">Read Paper</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90%]">
          <DialogHeader>
            <DialogTitle>Read Research Paper</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <iframe
            src={paperLink}
            width="100%"
            height="800px"
            style={{ border: "none" }}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
