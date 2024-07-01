import ArrowIndicator from '@/shared/ui/components/arrow-indicator';
import FallingAnimation from '@/shared/ui/components/falling-animation';
import { Card, CardBody, CardHeader, Chip, Image } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="bg-[#ACD1DC] md:m-0 p-1 overflow-hidden">
      <div className="relative flex md:flex-row flex-col bg-white flex-wrap gap-10">
        <div>
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
        <div className="md:absolute md:w-1/3 md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center px-5">
          <Card className="py-4 z-10">
            <CardHeader className="relative pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-sm uppercase font-bold">무엇이 궁금하세요?</p>
              <small className="text-default-500">You know Yoon ho?</small>
              <h4 className="font-bold text-xs ">
                아래 이미지에 태그를 넣어주세요!
              </h4>
              <div className="absolute right-5">
                <ArrowIndicator direction="down" />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                id="target-area"
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
