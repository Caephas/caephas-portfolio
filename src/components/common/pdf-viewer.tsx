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
import { httpPaperlink } from "@/lib/utils";

interface Props {
  paperLink: string;
}

export default function PDFViewerWithPagination({ paperLink }: Props) {
  // const paperUrl = `${httpPaperlink}${paperLink}`;

  return (
    <>
      <Dialog>
        <DialogTrigger className="hidden lg:flex" asChild>
          <Button className="text-sm w-fit mt-2">Read Paper</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] max-h-[95%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Read Research Paper</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <iframe
            // src={`https://docs.google.com/viewer?url=${paperUrl}&embedded=true`}
            src={paperLink}
            width="92%"
            style={{ border: "none" }}
            allowFullScreen
            className="relative z-50 mx-auto !h-[calc(100dvh-40px)]"
            loading="lazy"
          ></iframe>

          <DialogFooter className="px-4 pb-4">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
