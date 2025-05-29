import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-5 px-4 text-center">
        <div className="font-bold text-3xl sm:text-4xl flex sm:flex-row justify-center items-center gap-2">
          <span className="mt-2 sm:mt-6">Buy Me A Chai</span>
          <Image className="invertImg" width={88} src="/tea.gif" alt="Tea" />
        </div>
        <p className="text-sm sm:text-base max-w-xl">
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <div className="flex sm:flex-row gap-3">
          <button className="relative inline-flex items-center cursor-pointer justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start Now
            </span>
          </button>
          <Link href={"/about"}>
            <button className="relative inline-flex items-center cursor-pointer justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15" />

      <div className="text-white container mx-auto px-4 pb-20 pt-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Your fans can buy you a Chai
        </h1>
        <div className="flex flex-col md:flex-row gap-10 justify-around items-center">
          {[
            {
              src: "/man.gif",
              title: "Get Funded Instantly",
              description: "Let your fans support you directly with a single click."
            },
            {
              src: "/coin.gif",
              title: "Earn From Your Passion",
              description: "Turn your creativity into income without middlemen."
            },
            {
              src: "/group.gif",
              title: "Grow a Loyal Community",
              description: "Build deeper connections with your supporters and fans."
            },
          ].map(({ src, title, description }, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 max-w-xs text-center">
              <Image className="bg-slate-500 rounded-full p-2" src={src} alt={title} width={180} />
              <p className="font-bold text-lg">{title}</p>
              <p className="">{description}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="bg-white h-1 opacity-15" />

      <div className="flex flex-col items-center text-white container mx-auto pb-20 pt-6 px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Learn more about us
        </h2>
        <div className="w-full max-w-[720px] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
