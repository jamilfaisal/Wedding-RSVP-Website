import { Clock, Users, Music, Utensils, Sparkles, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface timelineEvent {
  time: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

const timelineEvents: timelineEvent[] = [
  {
    time: '6:00 PM',
    title: 'Ceremony Begins',
    description: 'Join us as we exchange vows in a beautiful Roman setting',
    icon: Users,
    bgColor: 'from-sage-100 to-sage-200',
    borderColor: 'border-sage-200',
    iconColor: 'text-sage-700',
  },
  {
    time: 'TBA',
    title: 'Cocktail Reception',
    description: 'Details to be announced - celebration continues',
    icon: Sparkles,
    bgColor: 'from-orange-100 to-orange-200',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-700',
  },
  {
    time: 'TBA',
    title: 'Wedding Dinner',
    description: 'Details to be announced - feast and celebration',
    icon: Utensils,
    bgColor: 'from-brown-100 to-brown-200',
    borderColor: 'border-brown-200',
    iconColor: 'text-brown-700',
  },
  {
    time: 'TBA',
    title: 'Dancing & Celebration',
    description: 'Details to be announced - dance the night away',
    icon: Music,
    bgColor: 'from-ivory-200 to-ivory-300',
    borderColor: 'border-ivory-300',
    iconColor: 'text-brown-700',
  },
];

function EventTimeline() {
  return (
    <section id="timeline" className="pt-35 pb-20 bg-gradient-to-b from-orange-50/10 to-white">
      <div className="max-w-5xl mx-auto px-8">
        {renderSectionHeader()}
        {/* Timeline */}
        <div className="relative">
          {renderVerticalLine()}

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              return renderTimelineEvent(event, index);
            })}
          </div>
        </div>
        {renderBottomMessage()}
      </div>
    </section>
  );
}

function renderBottomMessage() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-sage-50/90 to-orange-50/90 backdrop-blur-sm rounded-lg p-8 shadow-md border-2 border-sage-100 max-w-2xl mx-auto">
        <div className="mb-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-brown-300"></div>
            <div className="w-4 h-4 border-2 border-brown-300 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
            </div>
            <div className="w-8 h-px bg-brown-300"></div>
          </div>
        </div>
        <p className="text-lg text-brown-700 leading-relaxed font-serif italic mb-4">
          &ldquo;We can&apos;t wait to celebrate this magical evening with all our cherished family
          and friends. Thank you for being such an important part of our journey together!&rdquo;
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-1 h-1 bg-sage-300 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="w-1 h-1 bg-brown-300 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function renderTimelineEvent(event: timelineEvent, index: number) {
  const Icon = event.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      key={index}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {renderTimelineIcon(event, Icon)}
      {renderContent(isEven, event)}
      {renderSpacer()}
    </div>
  );
}

function renderSpacer() {
  return <div className="hidden md:block flex-1"></div>;
}

function renderContent(isEven: boolean, event: timelineEvent) {
  return (
    <div className={`flex-1 ${isEven ? 'md:pe-24 ps-20' : 'md:ps-24 ps-20'} md:ps-0`}>
      <div className={`${isEven ? 'md:text-end' : 'md:text-start'} text-start`}>
        <div className="bg-white rounded-lg p-8 shadow-md border-2 border-sage-100 hover:shadow-lg transition-shadow duration-300">
          <div
            className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}
          >
            <div
              className={`w-3 h-3 bg-gradient-to-br ${event.bgColor} ${event.borderColor} border rounded-full`}
            ></div>
            <span className="text-lg font-serif font-medium text-brown-800">{event.time}</span>
          </div>
          <h3 className="text-2xl font-serif text-brown-800 mb-3">{event.title}</h3>
          <p className="text-brown-600 leading-relaxed font-light">{event.description}</p>
        </div>
      </div>
    </div>
  );
}

function renderTimelineIcon(
  event: timelineEvent,
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
) {
  return (
    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 z-10">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${event.bgColor} ${event.borderColor} border-2 rounded-full flex items-center justify-center shadow-md`}
      >
        <Icon className={`w-8 h-8 ${event.iconColor}`} />
      </div>
    </div>
  );
}

function renderVerticalLine() {
  return (
    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage-200 via-orange-200 to-brown-200 transform md:-translate-x-1/2"></div>
  );
}

function renderSectionHeader() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-8">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-brown-300 to-transparent"></div>
        <div className="mx-6">
          <div className="w-12 h-12 bg-gradient-to-br from-brown-100 to-brown-200 rounded-full flex items-center justify-center border-2 border-brown-200">
            <Clock className="w-6 h-6 text-brown-700" />
          </div>
        </div>
        <div className="w-12 h-px bg-gradient-to-l from-transparent via-brown-300 to-transparent"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-brown-800 mb-4">Order of Celebrations</h2>
      <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed font-light">
        Here&apos;s how our special day will unfold
      </p>
    </div>
  );
}

export default EventTimeline;
