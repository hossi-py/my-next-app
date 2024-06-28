import FallingAnimation from '@/shared/ui/falling-animation';
import { Chip } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[90%] md:w-[70%] h-[600px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <div className="relative w-[50%] h-full flex items-center justify-center">
          <FallingAnimation>
            <Chip color="default" size="lg">
              Default
            </Chip>
            <Chip
              variant="shadow"
              classNames={{
                base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                content: 'drop-shadow shadow-black text-white',
              }}
            >
              Primary
            </Chip>
            <Chip color="secondary" size="lg">
              Secondary
            </Chip>
            <Chip color="success" size="lg">
              Success
            </Chip>
            <Chip color="warning" size="lg">
              Warning
            </Chip>
            <Chip color="danger" size="lg">
              Danger
            </Chip>
          </FallingAnimation>
        </div>

        {/* Card */}
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-full max-w-md h-full max-h-96 space-y-5 p-4 bg-white rounded-lg shadow-lg">
            {/* Chip이 놓이는 위치 */}
            <div
              className="rounded-lg bg-default-300 h-24"
              id="target-area"
            ></div>
            <div className="space-y-3">
              <div className="w-3/5 rounded-lg bg-default-200 h-10"></div>
              <div className="w-4/5 rounded-lg bg-default-200 h-10"></div>
              <div className="w-2/5 rounded-lg bg-default-300 h-10"></div>
            </div>
            <div className="flex">
              <div>Drop Here!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
