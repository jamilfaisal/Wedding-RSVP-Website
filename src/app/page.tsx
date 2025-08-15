import HeadlessMenu from '../components/HeadlessMenu';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-blue-600">Welcome to Next.js with Tailwind!</h1>
          <div className="mt-4 flex justify-end">
            <HeadlessMenu />
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Tailwind is now working correctly.
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
