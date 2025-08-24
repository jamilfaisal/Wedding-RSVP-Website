import { addToGoogleCalendar, generateCalendarEvent } from '@/lib/save-the-date';
import { Button } from '@headlessui/react';
import { Calendar, Download, Plus } from 'lucide-react';

function SaveTheDate() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        onClick={() => generateCalendarEvent()}
        className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-sage-500 flex items-center justify-center w-full sm:w-auto cursor-pointer"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
        <span className="whitespace-nowrap">Save the Date</span>
        <Download className="w-4 h-4 ml-3 flex-shrink-0" />
      </Button>

      <Button
        onClick={() => addToGoogleCalendar()}
        className="border-2 border-brown-400 text-brown-700 hover:bg-brown-50 hover:border-brown-500 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-ivory-50 flex items-center justify-center w-full sm:w-auto cursor-pointer"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <Plus className="w-4 h-4 mr-3 flex-shrink-0" />
        <span className="whitespace-nowrap">Add to Calendar</span>
      </Button>
    </div>
  );
}

export default SaveTheDate;
