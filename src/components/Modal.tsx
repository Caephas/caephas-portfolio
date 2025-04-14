import VideoPlayer from './VideoPlayer';
import { X } from 'lucide-react';

const Modal = ({ isOpen, setIsopen }: { isOpen: boolean; setIsopen: any }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-md`}>
      <div className="h-[420px] w-4/5 max-w-[800px] pt-6 bg-accentDark relative">
        <X
          className="cursor-pointer absolute top-0 right-2"
          onClick={() => setIsopen(false)}
        />
        <VideoPlayer url="https://www.youtube.com/watch?v=3tFZzheqb2M" />
      </div>
    </div>
  );
};

export default Modal;
