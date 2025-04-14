'use client';

import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import { X } from 'lucide-react';
import LED from './LED';
import VideoPlayer from './VideoPlayer';

export const DialogModal = ({ demoUrl }: { demoUrl: string }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md cursor-pointer">
          <p className="text-sm">View Demo</p>
          <LED delay={0} />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.DialogTitle>Demo</Dialog.DialogTitle>
        <Dialog.Content
          aria-description="video"
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] max-h-[85vh] bg-dark rounded-md p-6 focus:outline-none">
          <div className="h-[420px]">
            <VideoPlayer url={demoUrl} />
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-2 right-2 inline-flex h-3 w-3 appearance-none items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
              aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
